import React, { useContext } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete'
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import Button from '@material-ui/core/Button'
import JobCardContext from '../../utils/JobCardContext'
import Tooltip from '@material-ui/core/Tooltip'


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
    fontFamily: 'DM Sans, sans-serif',
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    }
  },

}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 375,
    backgroundColor: "#f2f2f2",
  },
  // tableCell: {
  //   backgroundColor: "gray",
  // }
})

const ArchiveTable = () => {


  const { jobs, handleDeleteJob, handleArchiveJob } = useContext(JobCardContext)

  let archivedJobs = jobs.filter(job => job.archived === true)
  console.log(archivedJobs)
  const classes = useStyles()

  return (
    <div>


      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.para2}>Company</StyledTableCell>
              <StyledTableCell className={classes.para2}> Title</StyledTableCell>
              <StyledTableCell width="50px"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {archivedJobs ? archivedJobs.map(archive => (

              <StyledTableRow>
                <StyledTableCell >
                  {archive.companyName}
                </StyledTableCell>
                <StyledTableCell >{archive.jobTitle}</StyledTableCell>

                <StyledTableCell display="inline">
                  <Tooltip title="Remove Permanently">
                    <Button
                      onClick={() => (handleDeleteJob(archive._id))}>
                      <DeleteIcon
                        style={{ color: '#D5441C' }} />
                    </Button></Tooltip>

                  <Tooltip title="Add to Jobs">
                    <Button
                      onClick={() => handleArchiveJob(archive._id)}>
                      <RestoreFromTrashIcon style={{ color: '#54a826' }} />
                    </Button>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
            )) : null
            }

          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
}

export default ArchiveTable