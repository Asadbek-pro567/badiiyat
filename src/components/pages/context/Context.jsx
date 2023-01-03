import { createContext, useState } from "react";


const Context = createContext()
function Provider({children}){
    const [order, setOrder] = useState([])
    const [son, setSon] = useState(0)
    const [number, setNumber] = useState(0)
    const [cislaaa, setCislaaa] = useState([])
    const [order1, setOrder1] = useState([])
    const [son1, setSon1] = useState(0)
    return(
        <Context.Provider value={{order, setOrder, son, setSon, number, setNumber, cislaaa, setCislaaa,order1, setOrder1,son1, setSon1}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}