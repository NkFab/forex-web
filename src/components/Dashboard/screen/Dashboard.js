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

//appollo things
import { withApollo, graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
// import SaveButton from '../../components/AddCurrencyForm/saveButton'
import Form from '../components/AddCurrencyForm/form'
import DialogBox from '../components/DialogBox/DialogBox'
import CardContainer from '../components/Card/CardContainer'
import MenuCard from '../components/Menu/MenuCard'
import Header from '../components/Header/Header'
import styles from './Style'

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
      data: myCurriencies,
      userId: 'cjgowzm27hqm00191z1x0c4kv',
      userData: [],
      loading: true,
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


  //luc's backend code
  async componentDidMount() {
    this.currencySubscription = this.props.allCurrencies.subscribeToMore({
      document: gql`
        subscription{
          Currency(
            filter: {mutation_in: [CREATED, UPDATED]}
          ){
            node{
              id
              base 
              category 
              rates 
            }
          }
        }
      `,
      variables: null,
      updateQuery: (previousState, {subscriptionData}) => {
        console.log(previousState, subscriptionData)
      }
    })

  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.allCurrencies && !nextProps.allCurrencies.loading){
      const userCurrencies = nextProps.allCurrencies.allCurrencies.filter( currency => currency.user.id != this.userId)
      this.setState({
        data: userCurrencies,
        loading: nextProps.allCurrencies.loading
      })
    }
  }

  handleAnimation = (event) =>{
    const data = this.state.data
    const {category, name, rate, userId} = this.state

    this.props.createCurrencyMutation({
      variables:{
        base: name,
        category: category,
        rates: rate,
        userId: userId
      }
    }).then(response => {
      //console.log(response)
      const { base, category, id, rates, user} = response.data.createCurrency
      const newData = [{base, category, id, rates, user}, ...data]
      this.setState({
        data: newData,
        name: 'RWF',
        category: '',
        rate: '',
        currencyValue: ''
      })
    })
    // const newCurrencies = [...this.state.data, {category, name, rate}]
    // this.setState({
    //   data: newCurrencies
    // })
    // console.log(this.state.data)
    // this.setState({ checked: true });
  }
  //end of backend code
  keyExtractor = (item, index) => index.toString()

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    if (this.state.loading) {
      return(
        <div>
          <h1>loading.....</h1>
        </div>
      )
    }
    return (

      <div className={classes.container}>

        <MenuCard onClick={this.handleClickOpen}/>

        {/* <SaveButton onClick= {()=> alert('Save button Clicked')}/> */}

        <div className={classes.wrapper}>

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
          {/* <div style={{height: window.innerHeight}}> */}
          {this.state.data.map(d =>
                // <Slide direction="up" in={checked} mountOnEnter unmountOnExit> 
                  <CardContainer
                      value={d.id} 
                      category={d.category} 
                      currency={d.base}
                      rate={d.rates} 
                      buttonTxt="Update" 
                      onClick={this.handleClickOpenUpdate}/>
                // </Slide>
              )
          }
          {/* </div> */}
          </div>
        </div>
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

AddCurrency.propTypes = {
  classes: PropTypes.object.isRequired,
};

const queryAllCurrencies = gql`
  query{
    allCurrencies(orderBy: createdAt_DESC){
      id
      base
      category
      rates
      user{
        id
      }
    }
  }
`

const addCurrencyMutation = gql`
  mutation(
    $base: String!, 
    $category: String!,
    $rates: String!,
    $userId: ID!){
    createCurrency(
      base: $base, 
      category: $category, 
      rates: $rates, 
      userId: $userId){
      id
      base
      category
      rates
      user{
        id
      }
    }
  }
`

const Dashboard = withStyles(styles) (AddCurrency)
export default compose(
                  graphql(addCurrencyMutation, {name: 'createCurrencyMutation'}),
                  graphql(queryAllCurrencies, {name: 'allCurrencies'})
                )(withApollo(Dashboard))
// export default Dashboard