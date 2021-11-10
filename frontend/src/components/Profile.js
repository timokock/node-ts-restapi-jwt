import React, { Component } from 'react'
import axios from 'axios'

class Profile extends Component {

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/auth/profile', {'headers': {'auth-token': ''}});
        console.log(res);
        

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Profile
