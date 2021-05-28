import React, { useState, useEffect } from 'react'
import app from '../firebase.jsx'
import Spinner from '../Spinner'
export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		app.auth().onAuthStateChanged((user) => {
			setUser(user);
			setLoading(false)
		})
	}, [])

	if(loading){
		return <Spinner />
	}

	return (
		<UserContext.Provider value={{ user }}>
			{children}
		</UserContext.Provider>
	)
}