import HomePage from "./components/pages/HomePage.vue";
import WebLogin from "./components/auth/WebLogin.vue";
import WebSignup from "./components/auth/WebSignup.vue";
import DetailPage from "./components/pages/DetailPage.vue";
import ProductPage from "./components/pages/ProductPage.vue";
import UserPage from "./components/pages/UserPage.vue";
import CartPage from "./components/pages/CartPage.vue";
import CheckoutProduct from "./components/cart/CheckoutProduct.vue";
import FavoriteItems from "./components/products/FavoriteItems.vue";
import Cookies from "js-cookie";
import { store } from "./store/index";

const checkAuth = () => {
    const jwtCookie = Cookies.get("jwt");
    const expirationDate = Cookies.get("tokenExpirationDate");
    const userId = Cookies.get("UID");

    if (jwtCookie) {
        if(new Date().getTime() < +expirationDate) {
            store.commit("auth/setToken", {
                idToken: jwtCookie,
                expiresIn: expirationDate,
            });
            store.dispatch("auth/getUser", userId);
            return true;
        } else {
            store.commit("auth/setUserLogout");
            return false;
        }
    } else {
        return false;
    }
};

export const routes = [
    {
        path: "/",
        name: "homePage",
        component: HomePage,
        beforeEnter: () => {
            checkAuth();
        }
    },
    {
        path: "/login",
        name: "webLogin",
        component: WebLogin
    },
    {
        path: "/signup",
        name: "webSignup",
        component: WebSignup
    },
    {
        path: "/product/:id", // Kasi :id nanti
        name: "productDetail",
        component: DetailPage, 
    },
    {
        path: "/products",
        name: "productPage",
        component: ProductPage, 
    },
    {
        path: "/user/:component", // ingat diisi :component
        name: "userPage",
        component: UserPage, 
        // beforeEnter: (to, from, next) => {
        //     checkAuth() ? next() : next({ name: "login" });
        // }
    },
    {
        path: "/product/cart",
        name: "cartPage",
        component: CartPage,
        // beforeEnter: (to, from, next) => {
        //     checkAuth() ? next() : next({ name: "login" });
        // }
    },
    {
        path: "/product/checkout",
        name: "checkoutPage",
        component: CheckoutProduct,
    },
    {
        path: "/favorites",
        name: "favoritesPage",
        component: FavoriteItems,
    },
]