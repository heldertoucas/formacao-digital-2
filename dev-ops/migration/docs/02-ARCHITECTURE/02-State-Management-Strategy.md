# State Management Strategy

To keep our application lean and maintainable, we will follow a simple and progressive state management strategy.

### 1. Local State
For state that is confined to a single component, we will always use React's built-in hooks:
*   **`useState`**: For simple state variables (strings, booleans, numbers).
*   **`useReducer`**: For more complex component state logic that involves multiple sub-values or state transitions.

### 2. Shared State (Between Components)
When state needs to be shared across different parts of the component tree, we will use **React Context**. This is ideal for low-frequency updates, such as:
*   User authentication status
*   Theme (e.g., light/dark mode)
*   Application-wide settings

### 3. Complex & Global State (Future)
We will avoid introducing a third-party global state management library for as long as possible.

If the application's complexity grows to a point where "prop drilling" becomes excessive or context performance is an issue, we will consider adopting a minimal, lightweight library. The preferred choice would be **Zustand**, due to its simplicity and small bundle size. The decision to add such a library will be made deliberately as a team.