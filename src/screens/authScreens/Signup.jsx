import React from 'react'
import { useSelector } from 'react-redux'

const Signup = () => {
    const colors = useSelector(state => state.colors)
    console.log('signup: ', colors)
    return (
        <div>
            <h1>Signup</h1>
        </div>
    )
}

export default Signup