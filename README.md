# useParams Hook Returns Undefined in Nested React Router v6 Routes

This repository demonstrates a common issue in React Router v6 where the `useParams` hook returns an undefined or empty object when used within deeply nested routes. The problem arises from the incorrect propagation of parameters from parent routes to their children.

The `bug.js` file showcases the problematic implementation, while `bugSolution.js` provides a corrected version that correctly handles parameter inheritance in nested routes.  The solution uses the `Outlet` component to render child routes within the parent route's context, ensuring parameter availability.

## Problem Description

When defining nested routes in React Router v6, parameters from parent routes might not be available to child components using the `useParams` hook if the route structure isn't properly set up.  This leads to unexpected behavior, especially if accessing nested parameters.

## Solution

The solution involves restructuring the route components to correctly pass the parameters along the route hierarchy. This usually involves using the `Outlet` component to render the child route within the parent route's context, ensuring parameter inheritance.  This allows child routes to access the parameters established by their parent routes.
