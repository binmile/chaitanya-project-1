import React ,{useState} from 'react'
import { AuthUser } from '../type'

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: "bimile",
            email: "binmile@binmile.com"
        })
    }
    const handleLogout = () => {
        setUser({} as AuthUser)
    }

  return (
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
    </div>
  )
}
