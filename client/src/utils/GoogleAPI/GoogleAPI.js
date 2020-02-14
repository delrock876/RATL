import axios from 'axios'

const GoogleAPI = {

    getInfo: (company) => axios.get(`https://kgsearch.googleapis.com/v1/entities:search?query=${company}&key=AIzaSyCXCpFK0tyw35rhlBOKLmVDFdFlq916_t8&limit=1&indent=True`),
    handleInputChange: () => { },
    handleClearInfo: () => {},
    removeInfo: () => { }
}

export default GoogleAPI