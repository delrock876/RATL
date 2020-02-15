import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GoogleAPI from '../../utils/GoogleAPI'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    pos: {
        margin: 10,
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#5BA016',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'light-grey',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#5BA016',
            },
            '&.MuiFilledInput-underline': {
                borderColor: '#5BA016',
            },
        },
        '& .MuiInputBase-input': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#5BA016',
            },
        },
    },
    myBtn: {
        color: "#fbaa10",
        backgroundColor: "transparent"
    },
    container:{
        margin: 10
    },
    padding:{
        padding: 0

    }

}))

const { getInfo, handleInputChange, removeInfo } = GoogleAPI

const GoogleInfo = () => {

    const classes = useStyles()
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
            
            setGoogleState({...googleState, compInfo: info, company: ''})
            
        })
     }

     googleState.handleClearInfo = () => {

        removeInfo(googleState.company)
  
        setGoogleState({...googleState, compInfo: ''})
     }
   
        return (
            <div className={classes.container}>
                <Card>
                    <CardContent className={classes.padding}>

                <TextField 
                className={classes.pos}
                type='text' 
                name='company' 
                value={googleState.company} 
                onChange={googleState.handleInputChange}/>

               <Button className={classes.myBtn}onClick= {googleState.handleGrabInfo}>Search</Button> 
               <Button className={classes.myBtn}onClick= {googleState.handleClearInfo}>Clear</Button> 
                { 
                        <div>
                           <p>{googleState.compInfo[0]}</p>
                           <p>{googleState.compInfo[1]}</p>
                        <p><img alt="" src = {googleState.compInfo[2]} /></p>
                        </div>
                        
                    }
                    </CardContent>
                    </Card>
                


            </div>
        )

}
export default GoogleInfo