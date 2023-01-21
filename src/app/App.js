import React from "react";
import Main from "./layout/main";
import Login from "./layout/login";
import Users from "./layout/users";
import CompletedPage from "./layout/completed";
import LogOut from "./layout/logOut";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/common/protectedRoute";
import AppLoader from "./components/ui/hoc/appLoader";
import BrandPage from "./layout/brand";
import Shoplayout from "./layout/shop";
import ContactPage from "./layout/contact";
import Loader from "./components/ui/loader";
import ScrollTopRoute from "./components/common/scrollTopRoute";

function App() {
    return (
        <div>
            <Loader />
            <AppLoader>
                <Header />
                <Switch>
                    <Route path="/login/:type?" component={Login} />
                    <ProtectedRoute
                        path="/users/:userId?/:options?"
                        component={Users}
                    />
                    <ScrollTopRoute
                        path="/shop/:categoryId?"
                        exact
                        component={Shoplayout}
                    />
                    <ProtectedRoute path="/shop" component={Shoplayout} />
                    <Route path="/logout" component={LogOut} />
                    <ScrollTopRoute path="/brand" component={BrandPage} />
                    <ScrollTopRoute
                        path="/completed"
                        component={CompletedPage}
                    />
                    <ScrollTopRoute path="/contact" component={ContactPage} />
                    <ScrollTopRoute path="/" exact component={Main} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
                <ToastContainer />
            </AppLoader>
        </div>
    );
}

export default App;
