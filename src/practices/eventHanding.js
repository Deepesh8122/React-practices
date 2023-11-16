import React from 'react';

class EventHandling extends React.Component {
    constructor(){
        super();

        this.state = {
            title: 'Event Handling | Click Event',
            Data: {

            }
        }
    }
    ClickBtn() {
        alert('Event Clicked')
    }
    render(){
        return(
            <div>
                <h2>
                    Title: {this.state.title}
                </h2>
                <p>
                    <code>
                        Sub-Title: {this.props.data.sub_title}
                    </code>
                </p>

                <button onClick={()=>this.ClickBtn()}>
                    Click Event
                </button>
                <br />
                <br />
                <hr />
            </div>
        )
    }
}

export default EventHandling;