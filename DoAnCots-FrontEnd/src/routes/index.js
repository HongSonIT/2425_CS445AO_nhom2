import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/product-details/:id',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]
