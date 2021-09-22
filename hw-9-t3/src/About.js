import React from "react";
import { useParams, useRouteMatch } from "react-router";

 const About = () => {
const {name} = useParams();
const match = useRouteMatch('/about/The Richest Man In Babylon');
const showBuyButton = match && match.isExact;
console.log(match);

return  (
    <>
    <h1>About {name}</h1>
    {showBuyButton &&  <button>Buy now</button>}
    </>

)  
}

export default About;