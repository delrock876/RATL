import axios from 'axios'

const GoogleAPI = {

    getInfo :() => axios.get('https://kgsearch.googleapis.com/v1/entities:search?query=taylor+swift&key=AIzaSyCXCpFK0tyw35rhlBOKLmVDFdFlq916_t8&limit=1&indent=True')

}

export default GoogleAPI