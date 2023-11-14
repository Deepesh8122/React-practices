import React from 'react';

class Profile extends React.Component {
    // constructor() {
    //     super()
    // }
    
    componentDidMount(){
        console.warn("Called life cycle methods");
    }

    render(){
        return (
            <div>
                <h2>
                    Profile Component
                </h2>
                <hr />
            </div>
        )
    }
}

export default Profile;
