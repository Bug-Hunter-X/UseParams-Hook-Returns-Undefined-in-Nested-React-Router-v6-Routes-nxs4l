```javascript
// Correct implementation using Outlet
import { useRoutes, Route, Outlet } from 'react-router-dom';

function Products(){
    const {productId} = useParams();
    return (
        <div>
            <h1>Product {productId}</h1>
            <Outlet/>
        </div>
    );
}

function Reviews(){
  const {reviewId} = useParams();
  return (
    <div>
      <h2>Review {reviewId}</h2>
    </div>
  );
}

const routes = [
    {
        path: '/products/:productId',
        element: <Products/>,
        children: [
            {
                path: 'reviews/:reviewId',
                element: <Reviews/>
            }
        ]
    }
]

function App() {
  let element = useRoutes(routes);
  return element;
}
export default App;

```