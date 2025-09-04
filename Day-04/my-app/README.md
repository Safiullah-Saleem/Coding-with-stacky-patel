
## 1. Basic Setup and Configuration
**Concept**: Wrapping your app with a router component
**Syntax**:
```jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

## 2. Route Declaration
**Concept**: Mapping URLs to components
**Syntax**:
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## 3. Navigation with Link
**Concept**: Client-side navigation without page reload
**Syntax**:
```jsx
<Link to="/about">About Us</Link>
```

## 4. Programmatic Navigation
**Concept**: Navigating using JavaScript code
**Syntax**:
```jsx
const navigate = useNavigate();
navigate('/profile');
```

## 5. URL Parameters
**Concept**: Dynamic segments in URLs
**Syntax**:
```jsx
<Route path="/users/:id" element={<UserProfile />} />
// Access with: const { id } = useParams();
```

## 6. Nested Routes
**Concept**: Routes within routes for hierarchical UIs
**Syntax**:
```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

## 7. Outlet Component
**Concept**: Placeholder for rendering child routes
**Syntax**:
```jsx
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Child routes appear here */}
    </div>
  );
}
```

## 8. Navigation State
**Concept**: Passing data between routes
**Syntax**:
```jsx
navigate('/user', { state: { userData } });
// Access with: const location = useLocation();
```

## 9. Query Parameters
**Concept**: URL parameters after the ? symbol
**Syntax**:
```jsx
// Reading: const [searchParams, setSearchParams] = useSearchParams();
// Getting: searchParams.get('page')
```

## 10. Active Navigation Styling
**Concept**: Highlighting the current page in navigation
**Syntax**:
```jsx
<NavLink to="/about" style={({ isActive }) => 
  ({ color: isActive ? 'red' : 'blue' })}>
  About
</NavLink>
```

## 11. Redirects
**Concept**: Programmatically redirecting users
**Syntax**:
```jsx
<Route path="/old-url" element={<Navigate to="/new-url" />} />
```

## 12. Route Protection
**Concept**: Controlling access to routes
**Syntax**:
```jsx
<Route path="/admin" element={
  isLoggedIn ? <Admin /> : <Navigate to="/login" />
} />
```

## 13. 404 Handling
**Concept**: Catch-all for undefined routes
**Syntax**:
```jsx
<Route path="*" element={<NotFound />} />
```

## 14. Lazy Loading Routes
**Concept**: Loading components only when needed
**Syntax**:
```jsx
const About = lazy(() => import('./About'));
<Suspense fallback={<div>Loading...</div>}>
  <Route path="/about" element={<About />} />
</Suspense>
```

## 15. Scroll Restoration
**Concept**: Managing scroll position on navigation
**Syntax**:
```jsx
<Router scrollRestoration="auto">
  <App />
</Router>
```

## 16. Relative Links
**Concept**: Links relative to current route
**Syntax**:
```jsx
<Link to="settings">Settings</Link> // Relative to current URL
```

## 17. Prompt for Unsaved Changes
**Concept**: Warning users before leaving a page
**Syntax**:
```jsx
<Prompt when={isDirty} message="Leave without saving?" />
```

## 18. Route Configuration Objects
**Concept**: Defining routes as JavaScript objects
**Syntax**:
```jsx
const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> }
];
```

## 19. Base URL Configuration
**Concept**: Setting application root path
**Syntax**:
```jsx
<BrowserRouter basename="/app">
  <App />
</BrowserRouter>
```

## 20. Memory Router
**Concept**: Router for testing without browser
**Syntax**:
```jsx
<MemoryRouter initialEntries={["/users"]}>
  <App />
</MemoryRouter>
```

## Key Principles to Remember:

1. **Declarative Routing**: Define what you want to see, not how to get there
2. **Component-Based**: Routes are just React components
3. **Client-Side Navigation**: No full page reloads
4. **Dynamic Matching**: Routes can match patterns, not just exact paths
5. **Composition**: Combine routes and components flexibly

