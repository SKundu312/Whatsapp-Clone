import React,{createContext,useState} from 'react'

export const AccountContext=createContext(null);

export default function AccountProvider() {
    return (
        <div>
            <AccountContext.Provider value={{
                
            }}/>
        </div>
    )
}
