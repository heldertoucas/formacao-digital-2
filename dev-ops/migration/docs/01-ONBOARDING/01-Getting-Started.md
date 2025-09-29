# Getting Started

This guide will walk you through setting up your local development environment. You should be up and running in under 15 minutes.

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

* **Node.js** (v18 or later)
* **pnpm**
* **Git**

### Setup Instructions

Follow these steps to get the project running locally.

1.  **Clone the Repository:**
    ```bash
    git clone [URL_OF_YOUR_GIT_REPOSITORY]
    cd [NAME_OF_THE_REPOSITORY]
    ```

2.  **Install Dependencies:**
    This command installs all the necessary dependencies for the project.
    ```bash
    pnpm install
    ```

3.  **Run the Development Server:**
    This will start the Next.js development server.
    ```bash
    pnpm run dev
    ```

By default, the application will be available at **`http://localhost:3000`**.

To run the server on a specific port (for example, 8080), use the `-p` flag:
```bash
pnpm run dev -p 8080
```
