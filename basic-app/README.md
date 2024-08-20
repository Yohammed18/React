# REACT

**Component**

- components in React are the building blocks of a React application. They are reusable, self-contained pieces of UI that can have their own structure (HTML), styling (CSS), and behavior (JavaScript).

## Class components vs Functional components.

React offers two main types of components: class components and functional components. Both serve the same purpose—to render UI—but they differ in how they are written and the features they support.

#### Functional Components key features
- **Simple Syntax**: They are just functions that accept props and return JSX.
- **Hooks:** With the addition of hooks, functional components can manage state and side effects, previously only possible with class components.
- **Performance**: Functional components are often lighter and can have better performance.

#### Class Components key features
- **State Management**: Class components have built-in state management using this.state.
- **Lifecycle Methods:** Class components use lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount for managing side effects.
- **More Verbose**: Class components can be more complex and verbose compared to functional components.

## 📜 JSX Expressions 

JSX (JavaScript XML) is a syntax extension for JavaScript that is commonly used in React. It allows you to write HTML-like code within JavaScript, making it easier to visualize the UI structure of your components. JSX is fundamental to writing React applications.


## React Hooks
React Hooks are functions that let you "hook into" React state and lifecycle features in functional components. Introduced in React 16.8, Hooks allow you to use state, context, and other React features without writing a class component

***useState:*** - Manages state in functional components.

***useEffect:*** - Handles side effects like fetching data, subscriptions, and manually changing the DOM.

***useContext:*** - Simplifies accessing context values without needing Context.Consumer or passing props down multiple levels.

***useRef:*** - Accesses DOM elements or stores mutable values that persist across renders without triggering re-renders.

***useCallback:*** - Memoizes callback functions to avoid unnecessary re-creations, useful in optimizing performance.