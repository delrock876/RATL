import { createContext } from 'react'

let GoogleContext = createContext({
    company: '',
    handleInputChange: () => { },
    handleGrabInfo: () => { }
})

export default GoogleContext