import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Profile = () => {
    const { colors, user } = useSelector(state => state)
    const [isStillEmail, setIsStillEmail] = useState(true)
    const [currentUsername, setCurrentUsername] = useState('')
    const [isEditUsername, setIsEditUsername] = useState(false)

    useEffect(() => {
        if (user.username === undefined) {
            setCurrentUsername(user.contactInfo.contactEmail)
        } else {
            setIsStillEmail(false)
            setCurrentUsername(user.username)
        }
    }, [user.contactInfo.email, user.username])

    return (
        <div className="profile-container">
            <p>profile</p>
        </div>
    )
}

export default Profile