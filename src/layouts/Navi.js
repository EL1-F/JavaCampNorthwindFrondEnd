import React , {useState}from "react";
import CartSummary from "./CartSummary.js";
import {  Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut.jsx";
import SignedIn from "./SignedIn.jsx";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function Navi() {

  const [isAuthenticated, setİsAuthenticated] = useState(true)

  const history= useHistory()

  const {cartItems} = useSelector(state => state.cart)

  function handleSignedOut(params) {
    setİsAuthenticated(false)
    history.push("/")
  }

  function handleSignedIn(params) {
    setİsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary />}
            {isAuthenticated?<SignedIn signOut={handleSignedOut}/>:<SignedOut signIn={handleSignedIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
