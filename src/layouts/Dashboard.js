import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import { Grid } from 'semantic-ui-react'
import Categories from "./Categories";
import ProductList from "../pages/ProductList.jsx"
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import {ToastContainer} from 'react-toastify'

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:name" component={ProductDetail}/>
            <Route path="/cart" component={CartDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
    </div>
  );
}
