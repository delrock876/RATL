import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import JobCardContext from '../../utils/JobCardContext'

const Switches = () => {

  const { checked, handleSwitch} = useContext(JobCardContext)


  return (
    <div>
    
      {/* <Switch
        checked={checked}
        onChange={handleChange('checked')}
        value="checked"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      /> */}
      <Switch onChange= {handleSwitch} value="checked" inputProps={{ 'aria-label': 'primary checkbox' }} />
   
    </div>
  )
}
export default Switches