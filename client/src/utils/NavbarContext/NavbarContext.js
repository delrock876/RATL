import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const NavbarContext = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  ButtonAppBar: ()=>{}
}))

export default NavbarContext