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

const JobForm = () => {

  const classes = useStyles()
  const { compName, namee, email, phone, type, archived, dateApplied, job, skillsRequired, handleInputChange, handleAddJob } = useContext(JobCardContext)

  return (

    <Grid container justify="center" width="100%">

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          size="small"
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          name="compName"
          value={compName}
          onChange={handleInputChange}
        />

        <br />

        <TextField
          size="small"
          id="outlined-basic"
          label="Job Title"
          variant="outlined"
          name="job"
          value={job}
          onChange={handleInputChange} />

        <TextField
          size="small"
          id="date"
          label="Date Applied"
          type="date"
          variant="outlined"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          name="dateApplied"
          value={dateApplied}
          onChange={handleInputChange} />

        <br />

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
      
        <Tooltip title="Separate each skill with a comma
        Example: Javascript, Python">
          <TextField
            id="filled-multiline-static"
            label="Required Skills"
            multiline
            fullWidth
            rows="4"
            variant="filled"
            name="skillsRequired"
            value={skillsRequired}
            onChange={handleInputChange}
          />
        </Tooltip>

        <br />
        <Button onClick={handleAddJob}>Submit</Button>
      </form>
    </Grid>

  )
}
export default JobForm