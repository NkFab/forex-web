import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuList from 'material-ui/Menu';
import Button from 'material-ui/Button';
import SvgIcon from 'material-ui/SvgIcon';

import Menu from '../DropDownContent/DropDownMenu'
import style from './Style'


class Header extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <div>
          <AppBar
              // color='primary'
              style={style.appBar}
              position= 'fixed'
              // title= "Dahabshil"
              // iconClassNameLeft= "none"
              // iconElementLeft={
              //   <div style={style.iconsRightContainer}>
              //     <span>Dashboard</span>
              //   </div>
              // }
            >
            <span style={style.iconsLeftContainer}>Forex App</span>
            <Button style={{position: 'absolute', right: 150}}>
            <SvgIcon 
                style={{color: 'white', fontSize: 30}}>
              <path d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z" />
            </SvgIcon>
            </Button>
            <div style={style.iconsRightContainer}>
            <Menu />
            </div>
            </AppBar>

        </div>
      );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Header;