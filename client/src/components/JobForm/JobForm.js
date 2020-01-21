import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const JobForm = () => {

  const classes = useStyles()

  return (

    <Grid container justify="flex-end">

      <form className={classes.root} noValidate autoComplete="off">
        <TextField size="small" id="outlined-basic" label="Company Name" variant="outlined" />

        <TextField
          size="small"
          id="date"
          label="Date Applied"
          type="date"
          variant= "outlined"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <TextField size="small" id="outlined-basic" label="Connection Type" variant="outlined" />
        <TextField size="small" id="outlined-basic" label="Connection Name" variant="outlined" />
        <br />
        <TextField size="small" id="outlined-basic" label="Current Status" variant="outlined" />
        <TextField size="small" id="outlined-basic" label="Next Step" variant="outlined" />
        <br />
        <TextField
          id="filled-multiline-static"
          label="Notes"
          multiline
          rows="4"
          // defaultValue="Default Value"
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Skill Requirements"
          multiline
          rows="4"
          // defaultValue="Default Value"
          variant="filled"
        />
        <br />
        <Button>Submit</Button>
      </form>
    </Grid>

  )
}
export default JobForm