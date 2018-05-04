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
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import CardComponent from './CardComponent'
import styles from './style/CardContStyle'


class CardContainer extends React.Component {
    render(){

        const { classes, title, currency, rate, buttonTxt, onClick, value, category } = this.props;

        return(
            // <Paper 
            //     elevation ={0} 
            //     className={classes.grid}>
            //     {title}
            <div className={classes.container}>
              <Grid 
                  container 
                  className={classes.content} 
                  justify="center" 
                  alignItems="center"
                  alignContent="stretch" 
                  spacing={8}
                  direction="column"
                  xs= {10}
                  // wrap="wrap"
                  >
                  
              {/* {[0, 1, 2].map(value => ( */}
                <Grid key={value} item>
                  
                  <Paper
                      elevation={5}
                      rounded= {false}
                      className={classes.currencyContent}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.currencytitle}>{category}</TableCell>
                          <TableCell className={classes.currencytitle}>{currency}</TableCell>
                          <TableCell className={classes.currencyrate}>{rate}</TableCell>
                          <TableCell>
                            <Button style={{ backgroundColor: '#005464', color: 'white', borderRadius: 5,}} onClick={onClick} variant="raised" size="small">
                              {buttonTxt}
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      </Table>
                  </Paper>
                </Grid>
              {/* ))} */}
              </Grid>
            </div>
        )
    }
}

CardContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    buttonTxt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.any
  };

export default withStyles(styles) (CardContainer)