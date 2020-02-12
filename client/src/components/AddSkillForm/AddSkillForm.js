import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import UserContext from '../../utils/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Tooltip from '@material-ui/core/Tooltip'
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
  btn:{
    display:"flex",
    justifyContent: "flex-start"
  }
  
}))


const AddSkillForm = (props) => {
  const { handleAddSkills, newSkills, handleInputChange } = useContext(JobCardContext)

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
          avatar={<AddCircleOutlineOutlinedIcon />}
          label="Add Skill"
          onClick={handleShow}
        />

      </Typography>


      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header>
        </Modal.Header>
  
          <form className={classes.card}>
            <TextField
              id="outlined-multiline-static"
              label="Add Skills"
              multiline
              rows="3"
              fullWidth
              placeholder="Separate each skill with a comma"
              variant="outlined"
              name="newSkills"
              value= {newSkills} 
              onChange= {handleInputChange}
            />
          </form>

          <Button className= {classes.btn}  onClick={() => handleAddSkills(props.jobId)}>
            <Chip
            label="Add Skills"/>
          </Button>
      </Modal>
    </div>
  )
}

export default AddSkillForm
