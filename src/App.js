import Pages from "./Pages";
import Category from "./Category";
import Search from "./Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import {useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("#FFEDC0")
  useEffect (() => {
    document.body.style.backgroundColor = color
  },[color]);
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Foodie</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>

    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 4rem;
  }
`;

export default App;
