import React from 'react';

class HideshowComp extends React.Component {
    constructor() {
        super();
        this.state = {
            title : 'Hide and Show Component',
            data: {
                lableOne: 'Hide Content',
                lableTwo: 'Show Content',
            },
            show: false
        }
    }
    render (){
        return (
        <div>

            <h2>Title : {this.state.title} </h2>
            <p>
                Sub-Title : {this.props.data.sub_text}
            </p>

            {this.state.show ?
            <h4>
                {this.state.data.lableOne}
            </h4>
            :
            <h4>
                {this.state.data.lableTwo}
            </h4>
            }
            <button onClick={()=> {this.setState({show:!this.state.show})}}>
                Toggle Content
            </button>

            <hr />
        </div>
        )
    }
}

export default HideshowComp;