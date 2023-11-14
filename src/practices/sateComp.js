import React from 'react';
class StateComponent extends React.Component {
    constructor(){
        super();
        this.state = {
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
                    {this.props.date.title}
                </h2>
                <p>
                    {this.props.date.sub_text}
                </p>
            
                <h3>
                    User Date
                </h3>
                <ol>
                    <li>
                        Full Name: {this.state.userDate.fName +' '+ this.state.userDate.lName}
                    </li>
                    <li>
                        Email Address: {this.state.userDate.email}
                    </li>
                </ol>
            </div>
        )
    }
}
export default StateComponent;