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

import styles from './style'



class AddCurrencyForm extends React.Component {

  render() {

    const { classes, onChangeSelect, onChangeInput, onClickAdd, onValueSelect, onClickBuy, onClickSell } = this.props;

    return (

        <Paper 
            elevation={4}
            className={classes.content}>
              <Grid container spacing={16}>
              <Grid item xs={12} className={classes.category}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="rates"
                    label="Rates eg: 892"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    onChange={onChangeInput}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="fab"  className={classes.btnAdd} onClick={onClickAdd}>
                    <SvgIcon 
                        style={{color: 'white', fontSize: 30}}>
                      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </SvgIcon>
                  </Button>
                </Grid>
                </Grid>
            </Paper>
    );
  }
}

AddCurrencyForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onChangeSelect: PropTypes.string.isRequired,
  onValueSelect: PropTypes.any,
  onChangeInput: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickBuy: PropTypes.func.isRequired,
  onClickSell: PropTypes.func.isRequired,
};

export default withStyles(styles) (AddCurrencyForm)
// export default Dashboard