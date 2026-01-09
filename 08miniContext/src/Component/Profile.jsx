import React,{useContext} from 'react'
import userContext from '../Context/UserContext'
const Profile = () => {
    const {user}=useContext(userContext)
    if(!user) return <div>please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
