import React , { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import ScrapeCardContext from '../../utils/ScrapeCardContext'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper:{
    backgroundColor: "transparent",
    height: 70
  },
  form:{
    paddingBottom: "50px",
    paddingLeft: "16px",
    paddingTop: "0px"
  }
}))


const ScrapeForm =()=>{

  const {query, city, level, handleScrapeLeads, handleInputChange}= useContext(ScrapeCardContext)
  const classes = useStyles()

  return (
    <div className={classes.form}>
     
      <FormControl>
        <Input 
        name="query"
        value={query}
        onChange= {handleInputChange}/>
        <FormHelperText>Job Type (ex: software)</FormHelperText>
      </FormControl>

      <FormControl>
        <Input 
        name="level"
        value={level}
        onChange= {handleInputChange}/>
        <FormHelperText>Job Level (ex: entry_level)</FormHelperText>
      </FormControl>
      <FormControl>
        <Input 
        name="city"
        value={city}
        onChange= {handleInputChange}/>
        <FormHelperText>City, State (ex: Los Angeles, CA)</FormHelperText>
      </FormControl>
      <Button onClick={handleScrapeLeads}>Find Leads</Button>
      
    </div>
  )
}

export default ScrapeForm
