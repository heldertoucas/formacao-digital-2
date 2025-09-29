# Workflow: Component-Driven Development

Our development process is built around the philosophy of **Component-Driven Development (CDD)**. We build and test UI components in a semi-isolated environment before integrating them into a larger application. Our primary tool for this is our own in-project **Component Library**.

### The "Component Library" Approach

Instead of relying on a separate tool like Storybook, we use a development-only page within our Next.js application to visualize and test components.

You can find this page at: **`http://localhost:8080/dev/components`**

This provides a focused environment where you can see your component in all its states without any external interference.

### Component Organization

We organize our UI components in the `src/components/` directory, using a simplified version of Atomic Design.

  * **`common/`**: For simple, highly reusable components that can be used anywhere (e.g., `Button`, `Card`, `Avatar`).
  * **`layout/`**: For major, one-off layout components (e.g., `Header`, `Footer`, `Sidebar`).
  * **Program-Specific Folders (e.g., `passaporte/`)**: For components that are complex and only used within a single program.

### Example Workflow: Creating a New `Avatar` Component

1.  **Create the Component File:**
    Create a new file at `src/components/common/Avatar.tsx`.

    ```typescript
    // src/components/common/Avatar.tsx
    import React from 'react';
    import { Avatar as MantineAvatar } from '@mantine/core'; // Example: wrapping a Mantine component

    export interface AvatarProps {
      src: string;
      alt: string;
      size?: 'sm' | 'md' | 'lg';
    }

    export const Avatar = ({ src, alt, size = 'md' }: AvatarProps) => {
      return (
        <MantineAvatar
          src={src}
          alt={alt}
          size={size}
          radius="xl"
        />
      );
    };
    ```

2.  **Add it to the Component Library:**
    Open the component library page at `src/app/dev/components/page.tsx` and add your new component. This allows you to see it live and test its different props.

    ```typescript
    // src/app/dev/components/page.tsx
    import { Avatar } from '@/components/common/Avatar'; // Import the new component
    // ... other imports

    export default function ComponentLibraryPage() {
      return (
        <Container fluid p="xl">
          {/* ... other components */}

          <Title order={2} mt="xl" mb="md">
            Avatar
          </Title>
          <Group>
            <Avatar src="..." alt="Small Avatar" size="sm" />
            <Avatar src="..." alt="Medium Avatar" size="md" />
            <Avatar src="..." alt="Large Avatar" size="lg" />
          </Group>

        </Container>
      );
    }
    ```

3.  **Use the Component:**
    Once you are happy with your component, you can import and use it in any page or other component.

This workflow allows for rapid development and visual testing directly within the Next.js environment.
