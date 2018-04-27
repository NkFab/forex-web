import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import SvgIcon from 'material-ui/SvgIcon';
import Paper from 'material-ui/Paper';

import styles from './style'

const ScreenHeight= window.innerHeight
const ScreenWidth= window.innerWidth

const stylish = {

  categoryBtn:{
     // backgroundColor: '#005464',
    borderRadius: 5,
    border: 'groove',
    borderColor: '#005464',
    // marginLeft: -200,
    width: ScreenWidth/4
  },
  btnBuy:{
    // backgroundColor: '#005464',
    borderRadius: 5,
    // border: 'groove',
    borderColor: '#005464',
    color: '#005464',
    fontWeight: 'bold',
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:hover, &$focusVisible': {
      backgroundColor: '#005464',
      borderRadius: 5,
      // width: 300,
      color: 'white',
      fontWeight: 'bold',
  },
    width: ScreenWidth/8,
  },
  btnSell:{
    // backgroundColor: '#005464',
    borderRadius: 5,
    // border: 'groove',
    borderColor: '#005464',
    color: '#005464',
    fontWeight: 'bold',
    width: ScreenWidth/8
  },
}

class DialogBox extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const { 
      classes, 
      title, 
      onChangeCurrency, 
      onChangeRate, 
      buttonTxt, 
      buttonTxt2, 
      onClick, 
      onClickCancel,
      onClickBuy,
      onClickSell, 
      description } = this.props;

    return (
      <div>
          <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {description}
            </DialogContentText>
            {/* <DialogActions> */}
            <Paper 
              style={stylish.categoryBtn} 
              elevation={0}>

              <Button 
                  style={stylish.btnBuy}
                  // className={classes.btnBuy}
                  onClick={onClickBuy}
              >
                Buy
              </Button>
              <Button 
                  style={stylish.btnSell}
                  // className={classes.btnSell}
                  onClick={onClickSell}
              >
                Sell
              </Button>
            </Paper>
          {/* </DialogActions> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Currency eg: USD"
              type="text"
              fullWidth
              onChange={onChangeCurrency}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Rates eg: 892"
              type="number"
              fullWidth
              onChange={onChangeRate}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClick} color="primary" className={classes.button}>
            <SvgIcon 
                style={{color: 'white', fontSize: 40, marginRight: 20}}>
              <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
            </SvgIcon>
              {buttonTxt}
            </Button>
            <Button onClick={onClickCancel} color="primary" className={classes.buttonCancel}>
            <SvgIcon 
                style={{color: 'white', fontSize: 40, marginRight: 20}}>
              <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </SvgIcon>
              {buttonTxt2}
            </Button>
          </DialogActions>
      </div>
    );
  }
}

DialogBox.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChangeCurrency: PropTypes.func,
  onChangeRate: PropTypes.func,
  buttonTxt: PropTypes.string.isRequired,
  buttonTxt2: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  onClickBuy: PropTypes.func.isRequired,
  onClickSell: PropTypes.func.isRequired
};

export default withStyles(styles) (DialogBox)