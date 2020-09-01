import React from "react";
import { useUser } from "./context";

const Header = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="/">Home</a>
      <div>{name}</div>
      <div>{loggedIn ? "logged in" : "anonymous"}</div>
    </header>
  );
};
export default Header;
