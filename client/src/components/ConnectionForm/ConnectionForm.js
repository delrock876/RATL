import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import JobCardContext from '../../utils/JobCardContext'



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const ConnectionForm = (props) => {

  const classes = useStyles()
  const { jobs, namee, email, phone, type, handleInputChange, handleAddConnection } = useContext(JobCardContext)

  return (

    <Grid container justify="center" width="100%">

      <form className={classes.root} noValidate autoComplete="off">

        <Tooltip title="Example: Hiring Manager">
          <TextField
            size="small"
            id="outlined-basic"
            label="Connection Type"
            variant="outlined"
            name="type"
            value={type}
            onChange={handleInputChange} />
        </Tooltip>

        <TextField
          size="small"
          id="outlined-basic"
          label="Connection's Name"
          variant="outlined"
          name="namee"
          value={namee}
          onChange={handleInputChange} />

        <TextField
          size="small"
          id="outlined-basic"
          label="Connection's Phone"
          variant="outlined"
          name="phone"
          value={phone}
          onChange={handleInputChange} />

        <TextField
          size="small"
          id="outlined-basic"
          label="Connection's Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={handleInputChange} />

        <br />
        <Button onClick={() => handleAddConnection(props.id)}>Submit</Button>
      </form>
    </Grid>

  )
}
export default ConnectionForm