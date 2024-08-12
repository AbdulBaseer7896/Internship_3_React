import React, { useEffect, useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({children}) =>{
    const [user , setUser] = useState(null)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
          setUser(storedUser);
        }
      }, []);
    return(

        <UserContext.Provider value={{user , setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;