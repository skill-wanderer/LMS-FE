# Keycloak Authentication Setup

This guide walks through configuring [Keycloak](https://www.keycloak.org/) for the Skill-Wanderer Dojo LMS. Authentication is **entirely optional** — when Keycloak is not configured the platform runs as a fully anonymous, open-access LMS with no login UI.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Run Keycloak](#1-run-keycloak)
4. [Create a Realm](#2-create-a-realm)
5. [Create a Client](#3-create-a-client)
6. [Enable User Registration](#4-enable-user-registration)
7. [Configure the LMS](#5-configure-the-lms)
8. [Verify the Integration](#6-verify-the-integration)
9. [Production Checklist](#production-checklist)
10. [Troubleshooting](#troubleshooting)

---

## Overview

The LMS uses the **OAuth 2.0 Authorization Code** flow (public client, no client secret) to authenticate users against a Keycloak instance. The flow is:

```
User clicks Login/Register
        ↓
Browser redirects to Keycloak hosted login/registration page
        ↓
User authenticates in Keycloak
        ↓
Keycloak redirects back to /auth/callback with an authorization code
        ↓
The callback page exchanges the code for tokens via Keycloak's token endpoint
        ↓
User info is fetched and stored in cookies → user is logged in
```

Three environment variables control whether the auth UI appears:

| Variable | Description |
|---|---|
| `NUXT_PUBLIC_KEYCLOAK_URL` | Base URL of your Keycloak instance (e.g. `https://auth.example.com`) |
| `NUXT_PUBLIC_KEYCLOAK_REALM` | Name of the Keycloak realm |
| `NUXT_PUBLIC_KEYCLOAK_CLIENT_ID` | Client ID registered in Keycloak |

When **all three** are set, Login and Register buttons appear in the navigation bar. When any are empty or missing, the LMS runs without authentication.

---

## Prerequisites

- **Keycloak 22+** (or any OpenID Connect-compatible version)
- Docker (recommended for local development) or a standalone Keycloak installation
- Node.js 18+ and the LMS project running locally

---

## 1. Run Keycloak

### Option A — Docker (recommended for local dev)

```bash
docker run -d \
  --name keycloak \
  -p 8080:8080 \
  -e KC_BOOTSTRAP_ADMIN_USERNAME=admin \
  -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest \
  start-dev
```

Keycloak admin console will be available at **http://localhost:8080**.

### Option B — Docker Compose

Create a `docker-compose.keycloak.yml`:

```yaml
services:
  keycloak:
    image: quay.io/keycloak/keycloak:latest
    command: start-dev
    ports:
      - "8080:8080"
    environment:
      KC_BOOTSTRAP_ADMIN_USERNAME: admin
      KC_BOOTSTRAP_ADMIN_PASSWORD: admin
```

```bash
docker compose -f docker-compose.keycloak.yml up -d
```

---

## 2. Create a Realm

1. Open the Keycloak Admin Console at `http://localhost:8080`
2. Log in with `admin` / `admin`
3. In the top-left dropdown (showing **master**), click **Create realm**
4. Set the **Realm name** to `skill-wanderer` (or any name you prefer)
5. Make sure **Enabled** is toggled on
6. Click **Create**

> **Tip:** Never use the `master` realm for application users — it is reserved for Keycloak administration.

---

## 3. Create a Client

1. In your new realm, go to **Clients → Create client**
2. Fill in the details:

| Field | Value |
|---|---|
| **Client type** | OpenID Connect |
| **Client ID** | `lms-frontend` |
| **Name** | Skill-Wanderer Dojo (optional, for display) |

3. Click **Next**
4. On the **Capability config** step:
   - **Client authentication** → **Off** (this makes it a public client)
   - **Authorization** → **Off**
   - **Authentication flow** → check **Standard flow** only
5. Click **Next**
6. On the **Login settings** step, configure redirect URIs:

| Field | Value |
|---|---|
| **Root URL** | `http://localhost:3000` |
| **Valid redirect URIs** | `http://localhost:3000/auth/callback` |
| **Valid post logout redirect URIs** | `http://localhost:3000` |
| **Web origins** | `http://localhost:3000` |

7. Click **Save**

> **Production:** Add your production URL (e.g. `https://dojo.skill-wanderer.com`) alongside or instead of `localhost` entries.

---

## 4. Enable User Registration

By default Keycloak disables self-registration. To enable the **Register** button:

1. Go to **Realm settings → Login**
2. Toggle **User registration** → **On**
3. Click **Save**

### Optional: Configure registration fields

1. Go to **Realm settings → User profile**
2. You can make fields like *First name* and *Last name* required or optional
3. Customize the registration form to fit your needs

---

## 5. Configure the LMS

Copy the example env file and fill in your Keycloak details:

```bash
cp .env.example .env
```

Edit `.env`:

```env
# Local development with Docker Keycloak
NUXT_PUBLIC_KEYCLOAK_URL=http://localhost:8080
NUXT_PUBLIC_KEYCLOAK_REALM=skill-wanderer
NUXT_PUBLIC_KEYCLOAK_CLIENT_ID=lms-frontend
```

Start the development server:

```bash
npm run dev
```

---

## 6. Verify the Integration

1. Open `http://localhost:3000` in your browser
2. You should now see **Login** and **Register** buttons in the navigation bar
3. Click **Register** — you should be redirected to the Keycloak registration page
4. Create a test account and submit
5. You should be redirected back to the LMS and see your username in the navigation
6. Click your name → **Sign Out** to test logout

---

## Production Checklist

| Item | Details |
|---|---|
| **Use HTTPS** | Both the LMS and Keycloak must be served over HTTPS in production |
| **Update redirect URIs** | Add your production domain to the client's Valid Redirect URIs and Web Origins |
| **Post-logout URI** | Add your production domain to Valid Post Logout Redirect URIs |
| **Database** | Use PostgreSQL or MySQL for Keycloak instead of the embedded H2 (which `start-dev` uses) |
| **Admin credentials** | Change the default admin password |
| **Token lifespans** | Review and adjust access token lifespan in Realm Settings → Tokens |
| **Branding** | Customize the Keycloak login/registration theme to match your brand under Realm Settings → Themes |
| **Email** | Configure SMTP in Realm Settings → Email so Keycloak can send verification and password-reset emails |

---

## Troubleshooting

### Login/Register buttons don't appear

- Make sure all three `NUXT_PUBLIC_KEYCLOAK_*` variables are set and non-empty in your `.env`
- Restart the dev server after editing `.env`

### "Invalid redirect URI" error on Keycloak

- Verify the **Valid redirect URIs** in the Keycloak client matches exactly: `http://localhost:3000/auth/callback`
- Check for trailing slashes — Keycloak is strict about URI matching

### CORS errors in the browser console

- Make sure **Web origins** in the Keycloak client is set to `http://localhost:3000`
- Alternatively set it to `+` (plus sign) to allow all origins derived from redirect URIs

### "Authentication failed" on the callback page

- Open the browser console for detailed error messages
- Verify Keycloak is running and reachable at the URL in your `.env`
- Ensure the Client ID matches exactly between `.env` and Keycloak

### Registration page shows "Registration not allowed"

- Go to **Realm settings → Login** and enable **User registration**

---

## Architecture Reference

```
app/
├── composables/
│   └── useKeycloak.ts      # Auth state, URL builders, logout
├── components/
│   └── TheNavigation.vue    # Login/Register/User menu UI
└── pages/
    └── auth/
        └── callback.vue     # OAuth2 code exchange
```

The `useKeycloak` composable is the single source of truth for auth state. It exposes:

- `isAuthEnabled` — `true` when all Keycloak env vars are set
- `isAuthenticated` — `true` when the user has a valid token
- `user` — the current user's name, email, and username
- `loginUrl()` / `registerUrl()` — Keycloak redirect URLs
- `logout()` — clears cookies and redirects to Keycloak logout
