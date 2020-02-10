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
}))


const ScrapeForm =()=>{

  const {query, city, level, handleScrapeLeads, handleInputChange}= useContext(ScrapeCardContext)
  const classes = useStyles()

  return (
    <div>
     

      <FormControl>
        <Input 
        name="query"
        value={query}
        onChange= {handleInputChange}/>
        <FormHelperText>Job Type (ex: software)</FormHelperText>
      </FormControl>
      <br/>

      <FormControl>
        <Input 
        name="level"
        value={level}
        onChange= {handleInputChange}/>
        <FormHelperText>Job Level(ex: entry_level)</FormHelperText>
      </FormControl>

      <Button onClick={handleScrapeLeads}>Find Jobs!</Button>
    </div>
  )
}

export default ScrapeForm
