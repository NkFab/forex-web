import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import SvgIcon from 'material-ui/SvgIcon';
import Typography from 'material-ui/Typography';

import DialogBox from '../components/DialogBox/DialogBox'
import CardContainer from '../components/Card/CardContainer'
import MenuCard from '../components/Menu/MenuCard'
import Header from '../components/Header/Header'
import styles from './Style'



class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spacing: '16',
      open: false,
      openUpdate: false,
      data: [
        {currency: 'USD', rate: '861'}, 
        {currency: 'GBP', rate: '1012'},
        {currency: 'EUR', rate: '978'}, 
        {currency: 'RWF', rate: '1'},
        {currency: 'AED', rate: '201'}, 
      ],
      buy: '',
      sell: '',
    };
  }

  componentWillMount() {
    // this.props.dispatch(fetchPosts());
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleClickOpenUpdate = () => {
    this.setState({ openUpdate: true });
  };
  handleCloseUpdate = () => {
    this.setState({ openUpdate: false });
  };
  keyExtractor = (item, index) => index.toString()


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    return (

      <div className={classes.container}>
        <MenuCard onClick={this.handleClickOpen}/>
        <div className={classes.wrapper}>
        <Header />
          <Typography className={classes.title} >Buy</Typography>
          {this.state.data.map(d => <CardContainer
              value={this.keyExtractor} 
              // title="Buy" 
              currency={d.currency}
              rate={d.rate} 
              buttonTxt="Update" 
              onClick={this.handleClickOpenUpdate}/>)}
          <Typography className={classes.title} >Sell</Typography>
          {this.state.data.map(d => <CardContainer
              value={this.keyExtractor} 
              // title="Buy" 
              currency={d.currency}
              rate={d.rate} 
              buttonTxt="Update" 
              onClick={this.handleClickOpenUpdate}/>)}
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogBox 
              title="Add Currency"
              description="Add Somme Currency to be displayed on that list" 
              buttonTxt="Add Currency"
              buttonTxt2="Cancel"
              onClick={this.handleClose}
              onClickCancel={this.handleClose}
            />
        </Dialog>
        <Dialog
          open={this.state.openUpdate}
          onClose={this.handleCloseUpdate}
          aria-labelledby="form-dialog-title"
        >
          <DialogBox 
              title="Update Currency" 
              description="Update the currency that selected"
              buttonTxt="Update"
              buttonTxt2="Cancel"
              onClick={this.handleCloseUpdate}
              onClickCancel={this.handleCloseUpdate}
          />
        </Dialog>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Dashboard)
// export default Dashboard