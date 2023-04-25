import React, { createContext, useContext, useState } from 'react'

interface UserContextType {
    username: string,
		setUsername: (value: string) => void
}

const UserContext = createContext<UserContextType>({
	username: "",
	setUsername: () => {}
})

interface ProviderProps {
    children: React.ReactNode
}

const UserProvider: React.FC<ProviderProps> = ({ children }) => {
  const [username, setUsername] = useState("")

  return (
    <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

export default UserProvider