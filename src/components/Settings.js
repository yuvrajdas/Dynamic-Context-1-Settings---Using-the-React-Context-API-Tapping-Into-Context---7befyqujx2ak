import React from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Settings = () => {

    // to be implemented in context
    const { greeting, setGreeting } = useContext(UserContext)

    const handleInput = (e) => {
        setGreeting(e.target.value)
    }

    return (
        <div style={{ border: '5px solid red', padding: '8px' }} id="settings">
            <h4>Settings</h4>
            <input onChange={handleInput} value={greeting} type={'text'} />
        </div>
    )
}
