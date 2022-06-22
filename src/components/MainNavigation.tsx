import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { RoutePaths } from "../utils/enum";
import PrivateRoute from "./PrivateRoute";

//component lazy loading

const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const Book = lazy(() => import("../pages/book"));
const BookList = lazy(() => import("../pages/book-listing"));
const EditBook = lazy(() => import("../pages/book/editBook"));
const Cart = lazy(() => import("../pages/cart"));
const UpdateProfile = lazy(() => import("../pages/updateProfile"));


const AppRoutes: React.FC = () => {
  return (
    <Switch>
      {/* <Route exact path={RoutePaths.Home} component={Home} /> */}
      <Route exact path={RoutePaths.Register} component={Register} />
      <Route exact path={RoutePaths.BookListing} component={BookList} />
      <PrivateRoute exact path={RoutePaths.Book} component={Book} />
      <PrivateRoute exact path={RoutePaths.AddBook} component={EditBook} />
      <PrivateRoute exact path={RoutePaths.EditBook} component={EditBook} />
      <PrivateRoute exact path={RoutePaths.Cart} component={Cart} />
      <Route exact path={RoutePaths.Login} component={Login} />
      <PrivateRoute exact path={RoutePaths.UpdateProfile} component={UpdateProfile}/>
    </Switch>
  );
};

export default AppRoutes;
