import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardContext from '../../utils/CardContext/CardContext'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'

const SimCard = () => {

  const useStyles = makeStyles({
    card: {
      minWidth: 275,
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

  export default function SimpleCard() {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Date Applied: [insert date]
        </Typography>
          <Typography variant="h5" component="h2">
            [Fake Company Name]
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Job Title : [Front End Developer]
        </Typography>
          <Typography variant="body2" component="p">
            Current Status: [phone interview]
          <br />
            <br />
            Next Step: [onsite]
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">
            <PeopleAltIcon></PeopleAltIcon>Your Connection
        </Button>
        </CardActions>
      </Card>
    );
  }
}
export default SimCard