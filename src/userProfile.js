import React from "react";

export default function UserProfile (props){
     const red =()=> {
        alert('Clicked on Text')
     }

    return <div>
        <h2>
            {props.text}
        </h2>
        <h3>
            Uer Details
        </h3>
        <ul>
            <li>
                Name: {props.UserDate.Name}
            </li>
            <li>
                Age: {props.UserDate.Age}
            </li>
            <li>
                Gender: {props.UserDate.Gender}
            </li>
        </ul>
        <button type="" onClick={red}>
            {props.button_Text}
        </button>
        <hr />
    </div>
}
