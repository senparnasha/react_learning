import React from "react"
import  ReactDOM  from "react-dom";

const heading=(
    <h2>This is react element</h2>
)



const HeadingComponent =()=>(
    <div id="conrainer">
{heading}
<h1>Namaste React</h1>
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);


