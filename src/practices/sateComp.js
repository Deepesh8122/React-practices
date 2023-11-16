import React from 'react';
class StateComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            title : 'This is page Title',
            userDate : {
                fName: 'Peter',
                lName: 'one',
                email: this.lName+'@gmail.com'
            }
        }
    }
    render (){
        return (
            <div>
                <h2>
                    {/* {this.props.date.title} */}
                    Title: {this.state.title} 
                </h2>
                <sub><code>Title cames for the state</code></sub>
                <br />
                <br />
                <br />
                <p>
                    {this.props.date.sub_text}
                </p>
            
                <h3>
                    User Date
                </h3>
                <ul>
                    <li>
                        Full Name: {this.state.userDate.fName +' '+ this.state.userDate.lName}
                    </li>
                    <li>
                        Email Address: {this.state.userDate.email}
                    </li>
                </ul>
                <hr />
            </div>
        )
    }
}
export default StateComponent;