import React from 'react';

class PropsComponent extends React.Component {
    render (){
        return (
            <div>
                <h2>
                {this.props.componentDate.Com_Name}
                </h2>
                <p>
                    Text Name: {this.props.textName.Name}
                </p>
                <hr />
            </div>
        )
    }
}

export default PropsComponent;