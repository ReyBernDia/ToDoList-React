import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return (
        <div>
            <h1>Reyna</h1>
            <p>Ultra positive aspiring legend engineer.</p>
            <p>These are my top three vacation spots:</p>
            <ul> 
                <li>Carribean</li>
                <li>Venice, Italy</li>
                <li>Bavaria, Germany</li>
            </ul>
        </div>
        )
}


ReactDOM.render(<MyInfo/>, document.getElementById("root"))