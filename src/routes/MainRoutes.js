import React from "react";
import { Route, Switch } from "react-router-dom";

import AllProducts from '../pages/AllProduct';
import BuyerProfile from '../pages/BuyerProfile';
import BuyerProfileEdit from '../pages/BuyerProfileEdit';
import BuyerSignup from '../pages/BuyerSignup';
import Cart from '../pages/Cart';
import Category from '../pages/Category';
import Dashboard from '../pages/Dashboard';
import Edited from '../pages/Edited';
import EditItem from '../pages/EditItem';
import Home from '../pages/Home';
import LoggedIn from '../pages/LoggedIn';
import LoginBuyer from '../pages/LogInBuyer';
import LoginUser from '../pages/LogInUser';
import LogOrSign from '../pages/LogOrSign';
import PostItem from '../pages/PostItem';
import ProductDetail from '../pages/ProductDetail';
import SignedUp from '../pages/SignedUp';
import Transaction from '../pages/Transaction';
import TransactionDetail from '../pages/TransactionDetail';
import UserProfile from '../pages/UserProfile';
import UserProfileEdit from '../pages/UserProfileEdit';
import UserSignup from '../pages/UserSignup';
import UsersItem from '../pages/UsersItem';

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/allproducts" component={AllProducts} />
      <Route path="/buyerprofile" component={BuyerProfile} />
      <Route path="/buyerprofileedit" component={BuyerProfileEdit} />
      <Route path="/buyersignup" component={BuyerSignup} />
      <Route path="/cart" component={Cart} />
      <Route path="/category" component={Category} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/edited" component={Edited} />
      <Route path="/edititem" component={EditItem} />
      <Route path="/loggedin" component={LoggedIn} />
      <Route path="/loginbuyer" component={LoginBuyer} />
      <Route path="/loginuser" component={LoginUser} />
      <Route path="/logorsign" component={LogOrSign} />
      <Route path="/postitem" component={PostItem} />
      <Route path="/productdetail" component={ProductDetail} />
      <Route path="/signedup" component={SignedUp} />
      <Route path="/transaction" component={Transaction} />
      <Route path="/transactiondetail" component={TransactionDetail} />
      <Route path="/userprofile" component={UserProfile} />
      <Route path="/userprofileedit" component={UserProfileEdit} />
      <Route path="/usersignup" component={UserSignup} />
      <Route path="/usersitem" component={UsersItem} />
    </Switch>
  );
};

export default MainRoute;
