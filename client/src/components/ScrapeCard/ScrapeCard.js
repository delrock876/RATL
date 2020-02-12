import React, { useContext } from 'react'
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
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'



const useStyles = makeStyles({
  card: {
    width: "700px",
    minWidth: "322.76px",
    color: "#78b746",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontFamily: 'DM Sans, sans-serif'
  },
  pos: {
    marginBottom: 12,
    fontFamily: 'DM Sans, sans-serif'
  },
  lead: {
    fontFamily: 'DM Sans, sans-serif'
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-end",
  },
  delete: {
    color: '#D5441C'
  }


})

const ScrapeCard = () => {

  const { leads, handleDeleteLeads, handleAddLeads } = useContext(ScrapeCardContext)
  const classes = useStyles()

  return (
    <List style={{ maxHeight: 700, overflow: 'auto', paddingBottom: "100px" }}>
      <div ss-container>
        {
          leads ? leads.map(lead => !lead.archived ? (

            <ListItem>
              <Card className={classes.card} variant="outlined">

                <div className={classes.btnBox}>

                  <Tooltip title="Add to jobs">
                    <Button
                      onClick={() => handleAddLeads({
                        companyName: lead.company,
                        id: lead._id,
                        jobTitle: lead.title,
                        summary: lead.summary,
                        archived: false
                      })}
                      className={classes.button}
                    ><AddBoxIcon />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Delete Lead">
                    <Button
                      onClick={() => handleDeleteLeads(lead._id)}
                      className={classes.button}
                    >
                      <DeleteIcon className={classes.delete} />
                    </Button>
                  </Tooltip>
                </div>

      <CardContent>
      <Typography variant="h5" component="h2">
          {lead.company}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Title: {lead.title}
          <br />
          Location: {lead.location}
          <br />
          Salary: {lead.salary}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {lead.summary}
        </Typography>
      
        <br/>
      
      </CardContent>
    </Card>
    </ListItem>
  ):null): null
}
    </div>

    </List>
  )
}
export default ScrapeCard