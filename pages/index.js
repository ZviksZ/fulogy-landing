import React         from "react";
import Header        from "../src/components/common/Header.jsx";
import {Navbar}      from "../src/components/Navbar/Navbar.jsx";

function index() {
  return (
    <div>
      <Header />  
      <Navbar/>
    </div>
  );
}

index.getInitialProps = ({ reduxStore }) => {
  /*reduxStore.dispatch(increment()); // action will dispatched on page load*/

  const state = reduxStore.getState(); // returns redux store
  console.log(state);

  return {};
};

export default index;
