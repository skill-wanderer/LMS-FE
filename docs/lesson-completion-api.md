# Lesson Completion API

API endpoints for tracking per-user lesson completion progress.

All endpoints require a valid Keycloak JWT access token in the `Authorization` header.

```
Authorization: Bearer <access_token>
```

---

## Endpoints

| Method   | Path                                                       | Description                    |
|----------|------------------------------------------------------------|--------------------------------|
| `POST`   | `/api/courses/{courseSlug}/lessons/{lessonSlug}/complete`   | Mark lesson as complete        |
| `DELETE`  | `/api/courses/{courseSlug}/lessons/{lessonSlug}/complete`   | Unmark lesson completion       |
| `GET`    | `/api/courses/{courseSlug}/lessons/{lessonSlug}/complete`   | Get lesson completion status   |
| `GET`    | `/api/courses/{courseSlug}/progress`                        | Get course progress            |

---

## Mark Lesson as Complete

```
POST /api/courses/{courseSlug}/lessons/{lessonSlug}/complete
```

Marks a specific lesson as completed for the authenticated user.

### Path Parameters

| Parameter    | Type   | Description            |
|-------------|--------|------------------------|
| `courseSlug` | string | URL slug of the course |
| `lessonSlug` | string | URL slug of the lesson |

### Responses

**`201 Created`** — Lesson newly marked as complete:

```json
{
  "courseSlug": "manual-software-testing-black-box-techniques",
  "lessonSlug": "what-is-software-testing",
  "completedAt": "2026-03-07T10:30:00.000Z"
}
```

**`200 OK`** — Lesson was already complete (idempotent). Returns the same body as above with the original `completedAt` timestamp.

**`401 Unauthorized`** — Missing or invalid access token.

**`404 Not Found`** — Course or lesson slug does not exist.

---

## Unmark Lesson Completion

```
DELETE /api/courses/{courseSlug}/lessons/{lessonSlug}/complete
```

Removes the completion status for a specific lesson for the authenticated user.

### Path Parameters

| Parameter    | Type   | Description            |
|-------------|--------|------------------------|
| `courseSlug` | string | URL slug of the course |
| `lessonSlug` | string | URL slug of the lesson |

### Responses

**`204 No Content`** — Completion removed, or lesson was not marked as complete (idempotent). No response body.

**`401 Unauthorized`** — Missing or invalid access token.

**`404 Not Found`** — Course or lesson slug does not exist.

---

## Get Lesson Completion Status

```
GET /api/courses/{courseSlug}/lessons/{lessonSlug}/complete
```

Returns whether a specific lesson is completed by the authenticated user.

### Path Parameters

| Parameter    | Type   | Description            |
|-------------|--------|------------------------|
| `courseSlug` | string | URL slug of the course |
| `lessonSlug` | string | URL slug of the lesson |

### Responses

**`200 OK`**

If completed:

```json
{
  "completed": true,
  "completedAt": "2026-03-07T10:30:00.000Z"
}
```

If not completed:

```json
{
  "completed": false,
  "completedAt": null
}
```

**`401 Unauthorized`** — Missing or invalid access token.

**`404 Not Found`** — Course or lesson slug does not exist.

---

## Get Course Progress

```
GET /api/courses/{courseSlug}/progress
```

Returns the completion status of all lessons in a course for the authenticated user. Used to display progress bars and completion indicators.

### Path Parameters

| Parameter    | Type   | Description            |
|-------------|--------|------------------------|
| `courseSlug` | string | URL slug of the course |

### Response

**`200 OK`**

```json
{
  "courseSlug": "manual-software-testing-black-box-techniques",
  "totalLessons": 10,
  "completedLessons": 3,
  "progressPercent": 30,
  "lessons": [
    {
      "lessonSlug": "what-is-software-testing",
      "completed": true,
      "completedAt": "2026-03-07T10:30:00.000Z"
    },
    {
      "lessonSlug": "equivalence-partitioning",
      "completed": true,
      "completedAt": "2026-03-07T11:15:00.000Z"
    },
    {
      "lessonSlug": "boundary-value-analysis",
      "completed": false,
      "completedAt": null
    }
  ]
}
```

**`401 Unauthorized`** — Missing or invalid access token.

**`404 Not Found`** — Course slug does not exist.

---

## Database Schema

### `lesson_completions` table

| Column         | Type      | Description                              |
|---------------|-----------|------------------------------------------|
| `id`           | UUID      | Primary key                              |
| `user_id`      | string    | Keycloak user `sub` claim                |
| `course_slug`  | string    | Course slug identifier                   |
| `lesson_slug`  | string    | Lesson slug identifier                   |
| `completed_at` | timestamp | When the lesson was marked complete      |

**Unique constraint:** `(user_id, course_slug, lesson_slug)`

---

## Error Response Format

All errors follow this shape:

```json
{
  "statusCode": 404,
  "message": "Lesson 'unknown-slug' not found in course 'some-course'"
}
```

---

## Implementation Notes

- The controller is at `src/progress/progress.controller.ts` under `@Controller('courses/:courseSlug')`.
- Entity: `src/progress/entities/lesson-completion.entity.ts`
- The `POST` endpoint returns `201` for new completions and `200` for idempotent duplicates.
- The `DELETE` endpoint is idempotent — returns `204` regardless of whether a record existed.
- All endpoints validate that the course and lesson slugs exist, returning `404` if not.
- Swagger documentation is auto-generated at `/api/docs`.
