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
        {name: 'bob'}, 
        {name: 'chris'},
        {name: 'bob'}, 
        {name: 'chris'},
        {name: 'bob'}, 
      ],
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


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    return (

      <div className={classes.container}>
        <MenuCard onClick={this.handleClickOpen}/>
        <div className={classes.wrapper}>
        {/* <Header /> */}

          <CardContainer 
              title="Buy" 
              Currency="USD"
              rate="892" 
              buttonTxt="Update" 
              onClick={this.handleClickOpenUpdate}/>

          <CardContainer 
              title="Sell" 
              Currency="USD"
              rate="898" 
              buttonTxt="Update" 
              onClick={this.handleClickOpenUpdate}/>    
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogBox 
              title="Add Somme Currency to be displayed on that list" 
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
              title="Update your Currency to be displayed on that list" 
              buttonTxt="Update"
              buttonTxt2="Cancel"
              onClick={this.handleCloseUpdate}
              onClickCancel={this.handleCloseUpdate}
          />
        </Dialog>
      </div>
      //     </div>
      //     <div className="left">
      //       <h3>center side</h3>
      //       <ul>
      //         {this.state.data.map(d => <li key={d.name}>{d.name}</li>)}
      //       </ul>
      //     </div>
      //   </div> */}
      // </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Dashboard)
// export default Dashboard