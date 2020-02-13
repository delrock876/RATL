import { createContext } from 'react'

let GoogleContext = createContext({
    company: '',
    handleInputChange: () => { },
    getInfo: () => { }
})

export default GoogleContext