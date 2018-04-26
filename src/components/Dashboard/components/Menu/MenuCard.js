import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import SvgIcon from 'material-ui/SvgIcon';
import style from './Style'


class Menu extends React.Component {

  render() {
    const { classes, onClick } = this.props;

    return (
          <Paper
              rounded= {false}
              className={classes.container}
          >

            <Avatar className={classes.avatar} size={50}>D</Avatar>
            <div>
              <h3>Dahabshill</h3>
            </div>
            <Button className={classes.button} onClick={onClick}>
            <SvgIcon 
                style={{color: 'white', fontSize: 40, marginRight: 20}}>
              <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
            </SvgIcon>
              Add Currency
            </Button>
            <Button className={classes.button}>
            <SvgIcon 
                style={{color: 'white', fontSize: 40, marginRight: 20, marginLeft: -55}}>
              <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z" />
            </SvgIcon>
              Profil
            </Button>
          </Paper>
      );
  }
}
Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default withStyles(style) (Menu)

// export default Menu;