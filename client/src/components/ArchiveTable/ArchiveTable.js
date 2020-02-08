import React, { useContext } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import JobCardContext from '../../utils/JobCardContext'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow)

// const rows = [
//   {name: "hi", title: "one", date: "two"},
//   {name: "gi", title: "owe", date: "two"},
//   {name: "di", title: "ofe", date: "two"}
// ]

const useStyles = makeStyles({
  table: {
    minWidth: 410,
  },
})

const ArchiveTable = () => {

  const { jobs } = useContext(JobCardContext)


  let archivedJobs = jobs.filter(job => job.archived === true)
  console.log(archivedJobs)
  const classes = useStyles()

  return (
  <div>


    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell>Job Title</StyledTableCell>
            <StyledTableCell>Date Archived</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

{  archivedJobs ? archivedJobs.map( archive =>(
          // {jobs.map(row => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {archive.companyName}
              </StyledTableCell>
              <StyledTableCell >{archive.jobTitle}</StyledTableCell>
              <StyledTableCell >{archive.date}</StyledTableCell>
              <Button>Delete</Button>
              <Button>Add</Button>
            </StyledTableRow>
)):null 
}
         
        </TableBody>
    
      </Table>
    </TableContainer>
    </div>
  );
}

export default ArchiveTable