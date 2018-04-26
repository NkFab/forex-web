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

    const { classes, title, onChangeCurrency, onChangeRate, buttonTxt, buttonTxt2, onClick, onClickCancel } = this.props;

    return (
      <div>
          <DialogTitle id="form-dialog-title">Add Currency</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {title}
            </DialogContentText>
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
            <Button onClick={onClick} color="primary">
              {buttonTxt}
            </Button>
            <Button onClick={onClickCancel} color="primary">
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
  onChangeCurrency: PropTypes.func,
  onChangeRate: PropTypes.func,
  buttonTxt: PropTypes.string.isRequired,
  buttonTxt2: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired
};

// export default withStyles(styles) (DialogBox)
export default DialogBox
