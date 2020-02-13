import React , {useState} from 'react'
import GoogleAPI from '../../utils/GoogleAPI'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


const { getInfo, handleInputChange } = GoogleAPI



const GoogleInfo = () => {


    const [googleState, setGoogleState] = useState({
        company: '',
        compInfo: []
    })


    googleState.handleInputChange = (event) => {
        setGoogleState({ ...googleState, [event.target.name]: event.target.value })
    }

    googleState.handleGrabInfo =() => {
        let company = "Apple"
        getInfo(company)
        .then(({data: {itemListElement} })=>{

            let link = itemListElement[0].result.detailedDescription.url
            let article = itemListElement[0].result.detailedDescription.articleBody
            let wiki = itemListElement[0].result.detailedDescription.license
            let info = [link, article, wiki]

            setGoogleState({...googleState, compInfo: info})
        })
     }
      
        return (
            <div>
               <Button onClick= {googleState.handleGrabInfo}>GoogleTest</Button>

                {
                    googleState.compInfo.map(item=>
                    <li>{item}</li>
                        )

                }


            </div>
        )

}
export default GoogleInfo