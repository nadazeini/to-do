//function based component
import React from "react";
//with a functional component it's just a return
function Header() {
  return (<header style={headerStyle}>
    <h1>TODOS!!!</h1>
  </header>);
}
const headerStyle = {
  background: "#fffd8e",
  color: "#cfc800",
  textAlign: "center",
  padding: "10px"
};
export default Header;