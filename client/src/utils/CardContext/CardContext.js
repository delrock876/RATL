import React from 'react'
import { makeStyles } from '@material-ui/core/styles'



const CardContext = makeStyles({
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
  SimpleCard: ()=>{}
})

export default CardContext