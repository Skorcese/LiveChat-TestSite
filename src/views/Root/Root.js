import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import LiveChat from "react-livechat";
import NavBar from "../../components/NavBar";
import Main from "../Main";
import Lorem from "../Lorem";
import Ipsum from "../Ipsum";
import "./Root.module.scss";

// console.log(<LiveChat license={11810832} />);

const Root = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/lorem" exact component={Lorem} />
      <Route path="/ipsum" exact component={Ipsum} />
    </Switch>
    {/* <LiveChat license={11810832} /> */}
  </BrowserRouter>
);

export default Root;
