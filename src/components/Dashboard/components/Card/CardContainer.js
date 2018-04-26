import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import  Grid  from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SvgIcon from 'material-ui/SvgIcon';

import CardComponent from './CardComponent'
import styles from './style/CardContStyle'


class CardContainer extends React.Component {
    render(){

        const { classes, title, currency, rate, buttonTxt, onClick } = this.props;

        return(
            // <Paper 
            //     elevation ={0} 
            //     className={classes.grid}>
            //     {title}
              <Grid 
                  container 
                  className={classes.content} 
                  justify="center" 
                  alignItems="center"
                  alignContent="stretch" 
                  spacing={16}
                  direction="column"
                  xs= {10}
                  // wrap="wrap"
                  >
                  <Typography className={classes.title} >{title}</Typography>
                  
              {[0, 1, 2].map(value => (
                <Grid key={value} item >
                  
                  <Paper
                      elevation={5}
                      rounded= {false}
                      className={classes.currencyContent}>
                    <Typography className={classes.currencytitle} >{currency}</Typography>
                    <Typography className={classes.currencyrate}>{rate}</Typography>
                    <Button className={classes.button} onClick={onClick}>
                      <SvgIcon 
                          style={{color: 'white', fontSize: 40, marginRight: 20}}>
                        <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
                      </SvgIcon>
                        {buttonTxt}
                    </Button>
                  </Paper>
                </Grid>
              ))}
              </Grid>
            // </Paper>
        )
    }
}

CardContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    buttonTxt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

export default withStyles(styles) (CardContainer)