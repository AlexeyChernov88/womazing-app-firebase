import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

const ScrollTopRoute = ({ component: Component, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                window.scrollTo(0, 0);
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
};

ScrollTopRoute.propTypes = {
    component: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    location: PropTypes.object
};

export default ScrollTopRoute;
