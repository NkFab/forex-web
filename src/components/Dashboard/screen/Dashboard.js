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
import Slide from 'material-ui/transitions/Slide';
import Dialog from 'material-ui/Dialog';


// import SaveButton from '../../components/AddCurrencyForm/saveButton'
import Form from '../components/AddCurrencyForm/form'
import DialogBox from '../components/DialogBox/DialogBox'
import CardContainer from '../components/Card/CardContainer'
import MenuCard from '../components/Menu/MenuCard'
import Header from '../components/Header/Header'
import styles from './Style/DashStyle'

const myCurriencies = []

class AddCurrency extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      open: false,
      openUpdate: false,
      currencies: [
        {currency: 'USD'}, 
        {currency: 'GBP'},
        {currency: 'EUR'}, 
        {currency: 'RWF'},
        {currency: 'AED'}, 
      ],
      name:'RWF',
      rate: '',
      category: '',
      currencyValue: '',
      data: myCurriencies
    };
  }

  handleBuy = () => {
    this.setState({
      category: 'Buy',
    });
    // console.log(this.state.category)
  }
  handleSell = () => {
    this.setState({
      category: 'Sell',
    });
  }

  handleChange  = name => event => {
   
    this.setState({
      [name]: event.target.value,
    });
  };
  handleRate = (event) =>{
    this.setState({
      rate: event.target.value,
    });
    // console.log(this.state.rate)
  } 

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

  handleAnimation = (event) =>{
    const {category, name, rate} = this.state
    const newCurrencies = [...this.state.data, {category, name, rate}]
    this.setState({
      data: newCurrencies
    })
    console.log(this.state.data)
    this.setState({ checked: true });
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    return (

      <Grid container className={classes.container} spacing={16}>
        <Grid item className={classes.left} xs>
          <MenuCard onClick={this.handleClickOpen}/>
        </Grid>
        <Grid item className={classes.wrapper} xs>
          <Header />
          <div className={classes.formContainer}>
           <Form 
              onChangeSelect ={this.handleChange('name')}
              onValueSelect ={this.state.name}
              onChangeInput ={this.handleRate}
              onClickAdd ={this.handleAnimation}
              onClickBuy ={this.handleBuy}
              onClickSell ={this.handleSell}>
            {this.state.currencies.map(value => (
                                <MenuItem key={this.keyExtractor} value={value.currency}>
                                {value.currency}
                                </MenuItem>
                            ))}
          </Form>
          </div>
          <div className={classes.content}>
          {this.state.data.map(d =>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit> 
              <CardContainer
                  value={this.keyExtractor} 
                  category={d.category} 
                    currency={d.name}
                    rate={d.rate} 
                    buttonTxt="Update" 
                    onClick={this.handleClickOpenUpdate}/>
            
            </Slide>)}
          </div>
        </Grid>
      </Grid>  

      // <div className={classes.container}>
      //   <div className={classes.left}>
      //     <MenuCard onClick={this.handleClickOpen}/>
      //   </div>
      //   <div className={classes.wrapper}>

      //     <Header />
      //     <div className={classes.formContainer}>
      //     <Form 
      //         onChangeSelect ={this.handleChange('name')}
      //         onValueSelect ={this.state.name}
      //         onChangeInput ={this.handleRate}
      //         onClickAdd ={this.handleAnimation}
      //         onClickBuy ={this.handleBuy}
      //         onClickSell ={this.handleSell}>
      //       {this.state.currencies.map(value => (
      //                           <MenuItem key={this.keyExtractor} value={value.currency}>
      //                           {value.currency}
      //                           </MenuItem>
      //                       ))}
      //     </Form>
      //     </div>
      //     <div className={classes.content}>
      //     {/* <div style={{height: window.innerHeight}}> */}
      //     {this.state.data.map(d =>
      //     <Slide direction="up" in={checked} mountOnEnter unmountOnExit> 
      //       <CardContainer
      //           value={this.keyExtractor} 
      //           category={d.category} 
      //             currency={d.name}
      //             rate={d.rate} 
      //             buttonTxt="Update" 
      //             onClick={this.handleClickOpenUpdate}/>
          
      //     </Slide>)}
      //     {/* </div> */}
      //     </div>
      //   </div>
      //   <Dialog
      //     open={this.state.openUpdate}
      //     onClose={this.handleCloseUpdate}
      //     aria-labelledby="form-dialog-title"
      //   >
      //     <DialogBox 
      //         title="Update Currency" 
      //         description="Update the currency that selected"
      //         buttonTxt="Update"
      //         buttonTxt2="Cancel"
      //         onClick={this.handleCloseUpdate}
      //         onClickCancel={this.handleCloseUpdate}
      //     />
      //   </Dialog>
      // </div>
    );
  }
}

AddCurrency.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (AddCurrency)
// export default Dashboard