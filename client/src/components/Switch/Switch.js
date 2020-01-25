import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import JobCardContext from '../../utils/JobCardContext'

const Switches = () => {

  const { checkedA, checkedB, handleChange } = useContext(JobCardContext)


  return (
    <div>
      <Switch
        checked={checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        checked={checkedB}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch value="checkedC" inputProps={{ 'aria-label': 'primary checkbox' }} />
      {/* <Switch disabled value="checkedD" inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked value="checkedE" inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        defaultChecked
        value="checkedF"
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      /> */}
    </div>
  )
}
export default Switches