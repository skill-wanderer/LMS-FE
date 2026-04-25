import type { Course } from "~/types/course";
import { aryanSingh } from "../../authors";
import module_1 from "./module_1";
import module_2 from "./module_2";
import module_3 from "./module_3";
import module_4 from "./module_4";
import module_final from "./final_project";

const OPEN_LESSON_SLUGS = new Set([
  "assignment-module-1-component-blueprint",
  "assignment-product-card",
  "assignment-live-greeting",
  "assignment-auth-wall",
  "storefront-build-challenge"
]);

type CourseModule = Course["modules"][number];
type CourseLesson = CourseModule["lessons"][number];

const modules: CourseModule[] = [
  module_1,
  module_2,
  module_3,
  module_4,
  module_final
].map((moduleItem) => ({
  ...moduleItem,
  lessons: moduleItem.lessons.map((lesson: CourseLesson) => ({
    ...lesson,
    status: OPEN_LESSON_SLUGS.has(lesson.slug)
      ? ("published" as const)
      : ("draft" as const),
  })),
}));

const lessonCount = modules.reduce(
  (sum, moduleItem) => sum + moduleItem.lessons.length,
  0,
);

const course: Course = {
  id: "course-react-foundations-the-complete-guide",
  slug: "react-foundations-the-complete-guide",
  title: "React Foundations: The Complete Guide",
  excerpt:
    "Master the language of modern interfaces. Transform from complete beginner into a developer who thinks in components, manages data flow, and ships working UIs — one purposeful piece at a time.",
  description:
    "Master the language of modern interfaces. You don't need to know everything to build real things. This course transforms complete beginners into developers who think in components, manage data flow, and ship working UIs — one small, purposeful piece at a time.\n\n**Audience:** Beginners with HTML, CSS & JS basics\n\n**Prerequisites:** Basic knowledge of variables, functions, arrays, and objects.\n\n**The Learning Path:**\nBuild real projects from day one with a proper structure. Best for learners who want a professional setup and a portfolio on GitHub.",
  thumbnail:
    "/images/courses/react-component-blueprint-jsx-and-compositions.png",
  difficulty: "beginner",
  status: "published",
  lessonCount,
  modules,
  tags: ["react", "jsx", "frontend", "components", "beginner"],
  instructor: "Aryan Singh",
  author: aryanSingh,
  createdAt: "2026-04-24",
  updatedAt: "2026-04-24",
};

export default course;
