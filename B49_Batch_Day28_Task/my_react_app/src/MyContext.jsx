import React, { createContext, useState } from 'react'



const MyContext = createContext();

function MyContextProvider({ children }) {
    const [price, setprice] = useState(0);
    return (
        <MyContext.Provider value={{price, setprice}}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyContextProvider }