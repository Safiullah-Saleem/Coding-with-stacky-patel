
### ✅ 1. **A single JSX element**

React **requires a single root element**. You can wrap everything in one element like `<div>` or `<section>`:

```jsx
return (
  <div>
    <h1>Hello, React!</h1>
    <p>This is a paragraph.</p>
  </div>
);
```

---

### ✅ 2. **Fragments (`<>...</>` or `<React.Fragment>`)**

If you don’t want an extra div:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Paragraph</p>
  </>
);
```

---

### ✅ 3. **JSX Expressions**

You can embed **JavaScript expressions inside `{}`**:

```jsx
const name = "Safiullah";
return <h1>Hello, {name}!</h1>;
```

* Works for numbers, strings, arrays of JSX, booleans (ignored), function calls, ternary operators, etc.

```jsx
const show = true;
return <p>{show ? "Visible" : "Hidden"}</p>;
```

---

### ✅ 4. **Conditional Rendering**

```jsx
return (
  <div>
    {isLoggedIn && <p>Welcome back!</p>}
    {isLoggedIn ? <Dashboard /> : <Login />}
  </div>
);
```

---

### ✅ 5. **Lists (Arrays of JSX)**

```jsx
const items = ["Apple", "Banana", "Cherry"];
return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

---

### ✅ 6. **Nested Components**

You can render other components:

```jsx
return (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);
```

---

### ❌ Things you **cannot** put directly after `return`:

1. Multiple sibling JSX elements **without a wrapper**.
2. Statements (like `if`, `for`) outside of `{}`.
3. Expressions that don’t evaluate to JSX, string, number, array of JSX, or `null`.

---

💡 **Quick summary:**

> After `return` in React JSX, you can put **any expression that evaluates to a single React element, a fragment, a string, number, array of elements, or null**.

