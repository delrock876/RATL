import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
});

const Archived = () => {
  const classes = useStyles();
  return (
    <>
      <div className='archiveBg'>
        <Grid container spacing={3} container padding='10px'>

          <Grid item xs={8}>
            <h1> Place Archive Card Here</h1>
          </Grid>
          <Grid item xs={4}>
            <h1> Place Addtl Info Here</h1>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.title}>
              <h1> Place More Info  Here</h1>
            </div>
          </Grid>

        </Grid>
      </div >
    </>

  )
}

export default Archived