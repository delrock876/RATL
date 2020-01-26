import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import TodayIcon from '@material-ui/icons/Today'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import SearchIcon from '@material-ui/icons/Search'


class MyHeader extends React.Component {
  render() {
    const mystyle = {
      color: "DB9A0D",
      backgroundColor: "FFFFFF",
      padding: "10px",
    };
    return (
      <div>
        <h3 style={mystyle}>Your efficient job search management tool</h3>
      </div>
    );
  }
}

const LandingPage = () => {
  return (
    <>
      <div>
        <Parallax
          blur={0}
          bgImage={require('./assets/laptop-1209008_1280.jpg')}
          bgImageAlt="group"
          strength={200}
        >
          <div style={{ height: '400px' }} />
        </Parallax>
      </div>

      <h4> Manage Connections </h4> <PermContactCalendarIcon />
      <p> Have key contact information readily on-hand so communication with hiring managers can be easily maintained</p>

      <h4> Calendar View </h4>  <TodayIcon />
      <p> Stay ahead of the game - keep track of important dates like upcoming interviews,  follow-up calls and networking events </p>


      <h4> Job Leads </h4>   <LocationCityIcon />
      <p> Receive an overview of latest listings in your custom feed </p>


      <h4> Company Insights </h4> <SearchIcon />
      <p> Be in-the-know and armed with relevant information about companies & organizations  </p>

    </>
  )
}

export default LandingPage