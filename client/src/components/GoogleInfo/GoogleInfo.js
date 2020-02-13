import React from 'react'
import GoogleAPI from '../../utils/GoogleAPI'
import Grid from '@material-ui/core/Grid'


const { getInfo, handleInputChange } = GoogleAPI



const GoogleInfo = () => {

        let currInfo =  getInfo()

        return (
            <div>
                <Grid>
                {
                  currInfo.map(person =>{
                     return {person}
                 })
                }
                </Grid>
            </div>
        )

}
export default GoogleInfo