import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import JobCardContext from '../../utils/JobCardContext'



const useStyles = makeStyles(theme => ({
  card: {
    margin: "auto",
    width: "95%",
    paddingBottom: 0,
    color: "#fbaa10"
  },

  title: {
    fontSize: 14,
    fontFamily: 'DM Sans, sans-serif'
  },
  pos: {
    marginBottom: 12,
    fontFamily: 'DM Sans, sans-serif'
  },

  chip: {
    color: "#78b746"
  },
  chip2: {
    color: "#fbaa10"
  },
  btn: {
    display: "flex",
    justifyContent: "flex-start"
  }

}))


const AddStatusForm = (props) => {
  const { handleInputChange, handleAddStatus, status } = useContext(JobCardContext)

  const classes = useStyles()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="landing">

      <Typography variant="body2" className={classes.pos}>

        <Chip
          className={classes.chip2}
          variant="outlined"
          size="small"
          // avatar={<AddCircleOutlineOutlinedIcon />}
          label="Update Status"
          onClick={handleShow}
        />

      </Typography>


      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header>
        </Modal.Header>

        <form className={classes.card}>
          <TextField
            id="outlined-multiline-static"
            label="Where are you in the application and/or interview process?"
            rows="3"
            fullWidth
            variant="outlined"
            name="status"
            value={status}
            onChange={handleInputChange}
          />
        </form>

        <Button className={classes.btn} onClick={() => handleAddStatus(props.jobId)}>
          <Chip
            label="Add Status" />
        </Button>
      </Modal>
    </div>
  )
}

export default AddStatusForm