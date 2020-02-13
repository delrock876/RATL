import { createContext } from 'react'

const GoogleContext = createContext({
    company: '',
    handleInputChange: () => { },
    handleGrabInfo: () => { }
})

export default GoogleContext