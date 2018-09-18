import React from 'react';
import {BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import { withRouter } from 'react-router'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import muiThemeable from 'material-ui/styles/muiThemeable';

import IconButton from '@material-ui/core/IconButton';
import Hamburger from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Switch from '@material-ui/core/Switch';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import purple from '@material-ui/core/colors/purple';


//import { inspect } from 'util' // or directly

import {get_endpoint, getVersion} from './ira-utils';
const imageRoot = get_endpoint('image')


const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    flexGrow: 1,
    fontSize: 18,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TopAppBar extends React.Component {


  constructor (props) {
      super(props)



 }


  state = {
    auth: true,
    anchorEl: null,
    menuOpen:false
  };


  handleToggle = () => {
     this.setState({ menuOpen: !this.state.menuOpen });
   };


  handleAuthChange = event => {
    this.setState({ auth: event.target.checked });
  };


  handleItemClick = event => {
      //this.setState({ anchorEl: event.currentTarget });
      this.setState({ menuOpen: false });
      console.log("Event is "+event);
      this.props.history.push('/'+event)


    };


  handleMenuClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    this.setState({ menuOpen: !this.state.menuOpen });
    //console.log(event.currentTarget);


  };



  handleClose = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, menuOpen } = this.state;
  //  const open = Boolean(anchorEl);
 //        <AppBar position="static" style={{backgroundColor: '#ff0000'}} >

    return (
      <div className={classes.root}>

        <AppBar position="static" >
          <Toolbar>


          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={this.handleClose}

            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}

          >

              <MenuItem onClick={ () =>  this.handleItemClick("transactions") } >Transactions</MenuItem>
              <MenuItem onClick={ () =>  this.handleItemClick("deals") } >Deals</MenuItem>
              <MenuItem onClick={ () =>  this.handleItemClick("investors") } >Investors</MenuItem>
              <MenuItem onClick={ () =>  this.handleItemClick("newtrans") } >Add Transaction</MenuItem>
          </Menu>




            <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    aria-owns={menuOpen ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenuClick}
                    color="inherit"

            >
                  <Hamburger />
            </IconButton>


            <div>
                        <img width="70" src={imageRoot+'/static/GP_Prop_logo_1.png'}/>
            </div>



            <Typography variant="title" color="inherit" className={classes.headline}>
              &nbsp;&nbsp;&nbsp;IRA Mobile -- {getVersion()}
            </Typography>

            {auth && (
              <div>
                        <IconButton
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>

              </div>
            )}


          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};



export default withRouter(withStyles(styles)(TopAppBar));








// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';

// <FormGroup>
//   <FormControlLabel
//     control={
//       <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
//     }
//     label={auth ? 'Logout' : 'Login'}
//   />
// </FormGroup>
