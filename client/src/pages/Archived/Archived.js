import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontSize: "2em",
    color: "white",
    fontFamily: 'Inder, sans-serif',
    fontWeight: "bold",
  },
  para: {
    fontSize: "1.4em",
    color: "white",
    fontFamily: 'DM Sans, sans-serif'
  },
  para2: {
    fontSize: "1em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  }
});

const Archived = () => {
  const classes = useStyles();
  return (
    <>
      <div className='archiveBg'>
        <Grid container spacing={3} container padding='10px'>

          <Grid item xs={8}>
            <h1 className={classes.title}> Placeholder content area</h1>
          </Grid>

        </Grid>
      </div >
    </>

  )
}

export default Archived