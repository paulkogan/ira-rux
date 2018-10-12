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
import Divider from '@material-ui/core/Divider';


import purple from '@material-ui/core/colors/purple';


//import { inspect } from 'util' // or directly

import {get_endpoint, getVersion, getReactVersion} from './ira-utils';
const imageRoot = get_endpoint('image')


const styles = {
  root: {
    flexGrow: 1,
  },

  headline: {
    flexGrow: 1,
    fontSize: 24,
    display: 'block',
    border: '0px solid lightblue',
  },

  subHeadline: {
    flexGrow: 1,
    fontSize: 12,
    fontWeight: 100,
    color: 'lightslategrey'
  },

  show: {
    border: '0px solid lightblue',
  },


  manSplain: {
    border: '0px solid lightblue',
    width: '100%'
  },

  menuList: {
    flexGrow: 1,
    fontSize: 12,
    fontWeight: 100,
    color: 'red',
    marginBottom:0,
    textDecoration: 'none',
    height: '100%'

  },

  menuListItem: {
    marginLeft: -12,
    marginRight: 10,
    backgroundColor: '#99a6b2',
    width: '100%'
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
      console.log("Menu click Event is "+event);
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

        <AppBar position="static">

          <Toolbar className={classes.show}>


          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={this.handleClose}
            className={classes.menuList}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}

          >


              <MenuItem className={classes.menuListItem} onClick={ () =>  this.handleItemClick("") } >&gt; Home</MenuItem>
              <Divider />
              <MenuItem className={classes.menuListItem} onClick={ () =>  this.handleItemClick("investors") } >&gt; Investors</MenuItem>
              <Divider />
              <MenuItem className={classes.menuListItem} onClick={ () =>  this.handleItemClick("deals") } >&gt; Deals</MenuItem>
              <Divider />
              <MenuItem  className={classes.menuListItem} onClick={ () =>  this.handleItemClick("transactions") } > &gt; Transactions</MenuItem>
              <Divider />
              <MenuItem className={classes.menuListItem} onClick={ () =>  this.handleItemClick("newtrans") } >&gt; Add Transaction</MenuItem>
              <Divider />
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

              <div className={classes.manSplain}>
                      <Typography variant="title" color="inherit" className={classes.headline}>
                          &nbsp;IRA Investor Reporting
                     </Typography>
                     <div className={classes.subHeadline}>
                               &nbsp;&nbsp;{getVersion() + " rv: "+getReactVersion()}
                     </div>
              </div>



            {auth && (
              <div className={classes.show}>
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

// <Typography variant="title" color="inherit" className={classes.headline}>
//       &nbsp;&nbsp;&nbsp;IRA rUX
// </Typography>
// <br/><br/>
// <Typography  variant="subheading" color="inherit" className={classes.subHeadline}>
//   {getVersion()}
// </Typography>




// <Typography variant="title" color="inherit" className={classes.headline}>
//   &nbsp;&nbsp;&nbsp;IRA rUX
// </Typography>
//



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
