import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
    },
    {
        path:"/cart",
        element: <CartPage />
    },
]

export default routes;