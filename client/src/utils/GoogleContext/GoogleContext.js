import { createContext } from 'react'

const GoogleContext = createContext({
    company: '',
    handleInputChange: () => { },
    getInfo: () => { }
})

export default GoogleContext