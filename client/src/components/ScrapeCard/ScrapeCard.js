import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import DeleteIcon from '@material-ui/icons/Delete'
import AddBoxIcon from '@material-ui/icons/AddBox';
import ArchiveIcon from '@material-ui/icons/Archive';
import ScrapeCardContext from '../../utils/ScrapeCardContext'

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const ScrapeCard = () => {
  
  const { leads, handleDeleteLeads, handleArchiveLeads, handleAddLeads } = useContext(ScrapeCardContext)
  const classes = useStyles()
  
  return (
    
    <div>
    {
      leads ? leads.map(lead=> !lead.archived ? (

    <Card className={classes.card} variant="outlined">

<Button
          onClick = {()=>handleAddLeads({
            companyName: leads.company,
            id: lead._id,
            jobTitle: lead.title,
            summary: lead.summary,
            archived: false,
            checked: false,
          })}
          variant="contained"
          className={classes.button}
          startIcon={<AddBoxIcon />}
        >
          Add
      </Button>

        <Button
          onClick = {()=>handleDeleteLeads(lead._id)}
          variant="contained"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
      </Button>
     

      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {lead.company}
        </Typography>
        <Typography variant="h5" component="h2">
          {lead.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {lead.summary}
        </Typography>
      
        <br/>
      
      </CardContent>
    </Card>
  ):null): null
}
    </div>
  )
}
 export default ScrapeCard