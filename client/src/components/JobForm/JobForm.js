import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const JobForm =()=> {
  const classes = useStyles()

  return (

  <Grid container justify="flex-end">

    <form className={classes.root} noValidate autoComplete="off">
  
      <TextField size="small" id="outlined-basic" label="Company Name" variant="outlined" />
      <TextField size="small" id="outlined-basic" label="Date Applied" variant="outlined" />
      <br/>
      <TextField size="small" id="outlined-basic" label="Skills/Requirements" variant="outlined" />
      <TextField size="small" id="outlined-basic" label="Connections" variant="outlined" />
      <br/>
      <TextField size="small" id="outlined-basic" label="Next Step" variant="outlined" />
      <TextField size="small" id="outlined-basic" label="Progress" variant="outlined" />
      <br/>
      <TextField
        id="filled-multiline-static"
        label="Notes"
        multiline
        rows="4"
        // defaultValue="Default Value"
        variant="filled"
      />
      <br/>
      <Button>Submit</Button>
    </form>
    </Grid>
   
  )
}
 export default JobForm