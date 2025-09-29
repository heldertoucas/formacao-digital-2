With all foundational configuration complete, the next phase is to begin **active development**. We will now start building the actual features and components of your application.

---
### ## Our First Step: Component-Driven Development
As outlined in our developer guidebook, we will follow a Component-Driven Development approach.

This means we will start by building our core, reusable UI components in isolation using Storybook, before we even touch the main `portal` application. This ensures our UI is consistent, robust, and easy to manage.



---
### ## Proposed First Task: The `SiteHeader` and `SiteFooter`
I recommend we begin by building the two most fundamental layout components: the **`SiteHeader`** and **`SiteFooter`**.

These are the perfect components to start with because they:
* Will be used on nearly every page.
* Establish the core brand identity and navigation structure.
* Provide an excellent real-world test of our entire Storybook, Tailwind, and Daisy UI configuration.

If you approve, your next prompt can be:
**"Create a plan to build the `SiteHeader` component."**

Of course. Having a clear roadmap is essential for managing a project of this scale. After we establish the foundational `SiteHeader` and `SiteFooter`, our development will proceed in a series of logical phases, moving from the general to the specific.

Here is a bird's-eye view of the sequential development tasks ahead.

---

### ## The Development Roadmap: From Foundation to Launch



This roadmap follows our **Component-Driven Development** philosophy. We build the reusable parts first, then assemble them into increasingly complex features, ensuring a consistent and maintainable codebase.

---

#### **Phase 1: Foundational UI Kit (`packages/ui`)** 🧱

*(This is the phase we are about to complete)*

* **Task 1.1: Build `SiteHeader` & `SiteFooter`:** Create the primary layout organisms that will frame every page.
* **Task 1.2: Build Core Atoms:** Develop the most basic, indivisible components like `Button`, `Input`, and `Card` to establish our core interactive and visual language in Storybook.

---

#### **Phase 2: The Main Portal & Landing Page (`apps/portal`)** 🏛️

With the basic frame in place, we build the "front door" to our digital ecosystem.

* **Task 2.1: Implement Top-Level Routing:** Configure the main router in `apps/portal` to handle the primary paths: `/`, `/passaporte`, `/futuro`, and `/ia`.
* **Task 2.2: Build the Main Landing Page:** Create the homepage (`/`). This page will serve as a welcoming hub, briefly introducing the three programs and providing clear navigation to each section. It will be assembled using components from our UI Kit.

---

#### **Phase 3: Program Scaffolding & Content Pages (`packages/feature-*`)** 📝

Now we build the distinct "stores" within our "mall." For each of the three programs, we will:

* **Task 3.1: Build Program-Specific Layouts:** Create the main application shell for each program, which will be rendered when a user navigates to its path (e.g., the main component for `feature-ia` is shown at `/ia/*`).
* **Task 3.2: Develop Static Content Pages:** Build out the essential informational pages for each program, such as "About the Program," "Learning Objectives," and "Contact." These pages will be composed of components from our shared UI Kit, ensuring brand consistency while allowing for unique content.

---

#### **Phase 4: Interactive Mini-Apps (`packages/mini-apps`)** 🎮

This is where the magic happens. We'll develop the rich, educational experiences in isolation.

* **Task 4.1: Develop Reusable Educational Games & Puzzles:** Build the first set of mini-apps. For a project focused on digital and AI literacy, these could be:
    * `PhishingQuiz`: An interactive quiz to test users' ability to spot malicious emails.
    * `AIEthicsSimulator`: A scenario-based game exploring the ethical dilemmas of AI.
    * `AlgorithmBuilder`: A drag-and-drop puzzle that demonstrates how algorithms work.
* **Task 4.2: Build Demonstrations & Simulators:** Create visual tools to explain complex concepts, developed as self-contained modules in Storybook.

---

#### **Phase 5: Integration & Logic (`packages/lib`)** 🔗

With all the pieces built, we wire everything together.

* **Task 5.1: Integrate Mini-Apps into Program Pages:** Place the completed mini-apps from `packages/mini-apps` onto their relevant pages within the `feature-*` packages. For example, the `PhishingQuiz` would be added to a cyber security page within the "Passaporte Digital" program.
* **Task 5.2: Develop Shared Logic & API Calls:** Build out the necessary functions in `packages/lib`. This is where we'll create logic for tasks like saving a user's quiz score, fetching a list of courses from a future backend, or managing user state.

---

#### **Phase 6: Final Polish & Deployment Prep** ✨

The final stage before launch.

* **Task 6.1: End-to-End (E2E) Testing:** Conduct thorough testing of critical user flows (e.g., completing a quiz and seeing the score).
* **Task 6.2: Accessibility & Performance Audit:** Ensure the entire application is accessible (WCAG compliant) and performs well on all devices.
* **Task 6.3: Final Content Review & Deployment:** After a final review of all content, we will deploy the `portal` app to Vercel for the world to see.