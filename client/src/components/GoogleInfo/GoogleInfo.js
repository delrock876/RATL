import React , {useState} from 'react'
import GoogleAPI from '../../utils/GoogleAPI'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


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

    googleState.handleGrabInfo = () => {

        getInfo(googleState.company)
        .then(({data: {itemListElement} })=>{
            console.log(itemListElement)
            let link = itemListElement[0].result.description
            let article = itemListElement[0].result.detailedDescription.articleBody
            let img = itemListElement[0].result.image.contentUrl
            let info = [link, article, img]
            

            setGoogleState({...googleState, compInfo: info})
            
        })
     }
      
   
        return (
            <div>
                <Card>
                    <CardContent>

                <input type='text' 
                name='company' 
                value={googleState.company} 
                onChange={googleState.handleInputChange}/>

               <Button onClick= {googleState.handleGrabInfo}>Search</Button> 
                { 
                        <div>
                           <p>{googleState.compInfo[0]}</p>
                           <p>{googleState.compInfo[1]}</p>
                            <p><img src = {googleState.compInfo[2]} /></p>
                        </div>
                        
                    }
                    </CardContent>
                    </Card>
                


            </div>
        )

}
export default GoogleInfo