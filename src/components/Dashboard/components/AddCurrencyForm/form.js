import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import SvgIcon from 'material-ui/SvgIcon';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Grid from 'material-ui/Grid';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

import styles from './style'



class AddCurrencyForm extends React.Component {

  render() {

    const { classes, onChangeSelect, onChangeInput, onClickAdd, onValueSelect, onClickBuy, onClickSell } = this.props;

    return (

              <div 
              className={classes.content}>
              <div className={classes.category}>
              <Paper 
                className={classes.categoryBtn} 
                elevation={0}>
                <Button 
                    className={classes.btnBuy}
                      onClick={onClickBuy}
                >
                    Buy
                </Button>
                <Button 
                    className={classes.btnSell}
                      onClick={onClickSell}
                >
                    Sell
                </Button>
                </Paper>
                </div>
                <div className={classes.formContainer}>
                <div>
                    <TextField
                            id="select-currency"
                            select
                            // label="Currency"
                            className={classes.textFieldSelect}
                            value={onValueSelect}
                            onChange={onChangeSelect}
                            SelectProps={{
                                MenuProps: {
                                className: classes.menu,
                                },
                            }}
                            helperText="Please select your currency"
                            margin="normal"
                            >
                        {this.props.children}
                    </TextField>
                </div>
                <div>
                <TextField
                    id="rates"
                    label="Rates eg: 892"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    onChange={onChangeInput}
                  />
                </div>
                </div>
                <div className={classes.containerBtn}>
                  <Button variant="fab"  className={classes.btnAdd} onClick={onClickAdd}>
                    <SvgIcon 
                        style={{color: 'white', fontSize: 30}}>
                      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </SvgIcon>
                  </Button>
                </div>
                </div>
    );
  }
}

AddCurrencyForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  onValueSelect: PropTypes.any,
  onChangeInput: PropTypes.func.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickBuy: PropTypes.func.isRequired,
  onClickSell: PropTypes.func.isRequired,
};

export default withStyles(styles) (AddCurrencyForm)
// export default Dashboard