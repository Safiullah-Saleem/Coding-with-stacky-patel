

## ✅ Today’s Lesson Summary (React)

1. **Props in React**

   * Props are like arguments you pass to a function.
   * Example:

     ```jsx
     <Product title="Shoes" price={200} />
     ```

     Inside `Product`, you access it using `props.title` and `props.price`.

2. **Destructuring Props**

   * Instead of writing `props.title`, `props.price`, you can directly use:

     ```jsx
     const Product = ({ title, price }) => { ... }
     ```

3. **Passing Objects**

   * You passed `rating` as an object `{rate, count}`.
   * React can’t display objects directly (that’s why you got the error).
   * Fix: Show specific properties like `rating.rate` or `rating.count`.

4. **Styling with CSS**

   * You learned to assign a CSS class (`className="product"`) and write styles separately in CSS.

---

## ⚠️ Mistakes You Made

1. **Tried to render an object directly**

   ```jsx
   <p>{rating}</p> ❌
   ```

   React threw error.
   ✅ Correct way:

   ```jsx
   <p>Rating: {rating.rate} ({rating.count} reviews)</p>
   ```

2. **Commented JSX Confusion**

   * You had commented code inside `Product` with `{/* ... */}` — which is correct way in JSX.
   * But since it was commented, nothing was showing.

3. **CSS Confusion**

   * You asked where to assign CSS → always use `className="yourClass"` in JSX and then write that style in `.css` file.

---

## 🎯 Easy Example (Correct Way)

```jsx
const Product = ({ title, price, rating, img }) => {
  return (
    <div className="product">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Rating: {rating.rate} ⭐ ({rating.count} reviews)</p>
    </div>
  );
};
```

---

👉 In simple words:

* Props = values you pass to a component.
* You cannot show an object directly → always pick its property.
* Use `className` to style React elements.

