import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import MenuCard from '../components/Menu/MenuCard'
import Header from '../components/Header/Header'
import styles from './Style/UpdateStyle'

const myCurriencies = []

class UpdateInformation extends React.Component {

  render() {
    const { classes } = this.props;
    return (

      <Grid container className={classes.container} spacing={16}>
        <Grid item className={classes.left} xs>
          <MenuCard onClick={this.handleClickOpen}/>
        </Grid>
        <Grid item className={classes.wrapper} xs>
          <Header />
          <div className={classes.formContainer}>
            <span>Boom</span>
          </div>
        </Grid>
      </Grid>  
    );
  }
}

UpdateInformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (UpdateInformation)
// export default Dashboard