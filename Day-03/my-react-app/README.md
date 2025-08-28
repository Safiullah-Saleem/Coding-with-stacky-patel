
# React Fundamentals - Complete Guide

## Table of Contents
1. [React Folder Structure](#1-react-folder-structure)
2. [Export and Import](#2-export-and-import)
3. [Events in React](#3-events-in-react)
4. [Filter Method](#4-filter-method)
5. [Map Method](#5-map-method)
6. [useState Hook](#6-usestate-hook)
7. [Virtual DOM vs Real DOM](#7-virtual-dom-vs-real-dom)
8. [Diff Algorithm](#8-diff-algorithm)
9. [Reconciliation and React Fiber](#9-reconciliation-and-react-fiber)

---

## 1. React Folder Structure

### Best Practices
```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Button, Input, etc.)
│   ├── features/       # Feature-specific components
│   └── layouts/        # Layout components (Header, Footer, etc.)
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── utils/              # Helper functions and utilities
├── services/           # API calls and external services
├── contexts/           # React context providers
├── assets/             # Static assets (images, fonts, etc.)
├── styles/             # CSS and styling files
└── constants/          # Application constants
```

### Explanation
- **components/**: Contains reusable pieces of UI. Group related components together.
- **pages/**: Components that represent entire pages or views in your application.
- **hooks/**: Custom hooks for sharing stateful logic between components.
- **utils/**: Pure JavaScript functions that don't depend on React.
- **services/**: Code for communicating with APIs or external services.
- **contexts/**: React Context API providers for global state management.

## 2. Export and Import

### Named Exports (Multiple per file)
```javascript
// utils/constants.js
export const API_URL = "https://api.example.com";
export const MAX_ITEMS = 10;
export const DEFAULT_TIMEOUT = 5000;

// Importing named exports
import { API_URL, MAX_ITEMS } from './utils/constants';
```

### Default Export (One per file)
```javascript
// components/Button/Button.jsx
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
export default Button;

// Importing default export (can use any name)
import Button from './components/Button/Button';
import MyButton from './components/Button/Button'; // Also works
```

### Mixed Exports
```javascript
// utils/helpers.js
export const formatDate = (date) => { /* ... */ };
export const truncateText = (text) => { /* ... */ };
const helperFunction = () => { /* ... */ }; // Not exported

export default helperFunction; // Default export
```

## 3. Events in React

### Synthetic Events
React uses Synthetic Events that wrap native browser events for consistency across browsers.

```javascript
function Form() {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form behavior
    console.log("Form submitted!");
  };

  // Handle input change
  const handleChange = (event) => {
    console.log("Input value:", event.target.value);
  };

  // Handle button click
  const handleClick = (event) => {
    console.log("Button clicked!", event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Click me
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Event Pooling
React reuses event objects for performance. To use an event asynchronously, call `event.persist()`.

```javascript
const handleClick = (event) => {
  event.persist(); // Needed if using event in async code
  setTimeout(() => {
    console.log(event.target); // Works with event.persist()
  }, 1000);
};
```

## 4. Filter Method

### Syntax
```javascript
const newArray = originalArray.filter(callbackFunction);
```

### Parameters
- `callbackFunction`: Function to test each element
  - `currentValue`: The current element being processed
  - `index` (optional): The index of the current element
  - `array` (optional): The array being processed

### Examples
```javascript
// Filter numbers greater than 5
const numbers = [1, 3, 5, 7, 9];
const largeNumbers = numbers.filter(num => num > 5);
// Result: [7, 9]

// Filter products with price less than 100
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];
const affordableProducts = products.filter(product => product.price < 100);
// Result: [{ name: "Mouse", price: 25 }, { name: "Keyboard", price: 75 }]

// Filter with index
const letters = ['a', 'b', 'c', 'd', 'e'];
const evenIndexLetters = letters.filter((letter, index) => index % 2 === 0);
// Result: ['a', 'c', 'e']
```

## 5. Map Method

### Syntax
```javascript
const newArray = originalArray.map(callbackFunction);
```

### Parameters
- `callbackFunction`: Function to transform each element
  - `currentValue`: The current element being processed
  - `index` (optional): The index of the current element
  - `array` (optional): The array being processed

### Examples
```javascript
// Double each number
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// Result: [2, 4, 6, 8]

// Extract names from objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 }
];
const names = users.map(user => user.name);
// Result: ["Alice", "Bob"]

// Map with index
const letters = ['a', 'b', 'c'];
const indexedLetters = letters.map((letter, index) => `${index}:${letter}`);
// Result: ["0:a", "1:b", "2:c"]

// In React - rendering list
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.age} years old</li>
      ))}
    </ul>
  );
}
```

## 6. useState Hook

### Syntax
```javascript
const [state, setState] = useState(initialValue);
```

### Examples
```javascript
import { useState } from 'react';

// Simple counter
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Form with multiple fields
function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </form>
  );
}

// Using functional updates
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prevCount => prevCount + 1); // Recommended for state based on previous state
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

## 7. Virtual DOM vs Real DOM

### Real DOM
- **What it is**: The actual HTML document structure in the browser
- **Characteristics**:
  - Tree structure of nodes representing HTML elements
  - Directly manipulated by JavaScript
  - Slow to update (causes reflow and repaint)
  - Heavyweight objects with many properties

### Virtual DOM
- **What it is**: A lightweight JavaScript representation of the Real DOM
- **Characteristics**:
  - Lightweight JavaScript object
  - Faster to create and update than Real DOM
  - React creates a new Virtual DOM on each render
  - Compared with previous Virtual DOM to find differences

### How React Uses Virtual DOM
1. On state change, React creates a new Virtual DOM
2. Compares new Virtual DOM with previous one (diffing)
3. Identifies exactly what changed
4. Updates only the changed parts in the Real DOM

## 8. Diff Algorithm

### What is the Diff Algorithm?
The algorithm React uses to compare two Virtual DOM trees and identify what changed.

### Diffing Strategies
1. **Elements of Different Types**: 
   - If root elements have different types, React tears down the old tree and builds the new one

2. **DOM Elements of the Same Type**:
   - React keeps the same DOM node and only updates changed attributes

3. **Component Elements of the Same Type**:
   - React updates the component instance and re-renders with new props

4. **Recursing on Children**:
   - By default, React recursively diffs lists of children
   - Uses "keys" to optimize list diffing

### Keys in Lists
```javascript
// Without keys (poor performance)
{items.map(item => <li>{item.name}</li>)}

// With keys (optimal performance)
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

Keys help React identify which items have changed, been added, or removed, leading to more efficient updates.

## 9. Reconciliation and React Fiber

### Reconciliation
The process through which React updates the DOM to match React elements.

**Process**:
1. Render phase: Create React elements (like a blueprint)
2. Reconciliation phase: Compare with previous render
3. Commit phase: Apply changes to the DOM

### React Fiber
A complete rewrite of React's core algorithm (introduced in React 16).

**Key Features**:
1. **Incremental Rendering**: Ability to split rendering work into chunks
2. **Prioritization**: Ability to prioritize certain updates
3. **Scheduling**: Pause, resume, or abort work
4. **Error Boundaries**: Better error handling

### How Fiber Works
1. Creates a "fiber" for each component
2. Fibers are linked together in a tree structure
3. React can process fibers incrementally
4. Enables features like concurrent mode and suspense

### Benefits of Fiber Architecture
- Smoother animations and gestures
- Better responsiveness for complex applications
- Ability to work on multiple tasks simultaneously
- More predictable rendering performance

---

## Additional Resources
- [React Official Documentation](https://reactjs.org/docs)
- [React GitHub Repository](https://github.com/facebook/react)
- [React Patterns](https://reactpatterns.com)

## Practice Tips
1. Build small projects to practice each concept
2. Use the React DevTools browser extension
3. Read code from popular React libraries
4. Join React communities for help and inspiration

