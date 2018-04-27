import { withStyles } from 'material-ui/styles';

const ScreenHeight= window.innerHeight
const ScreenWidth= window.innerWidth

const styles = theme => ({
    button:{
        // backgroundColor: '#005464',
        borderRadius: 5,
        // width: 300,
        color: '#005464',
        fontWeight: 'bold',
        '&:hover, &$focusVisible': {
            backgroundColor: '#005464',
            borderRadius: 5,
            // width: 300,
            color: 'white',
            fontWeight: 'bold',
        }
        // paddingRight: 20,
        // marginTop: 20,
    },
    buttonCancel:{
        // border: 'groove',
        // borderColor: '#005464',
        color: '#005464',
        fontWeight: 'bold',
        '&:hover, &$focusVisible': {
            backgroundColor: '#D8000C',
            borderRadius: 5,
            // width: 300,
            color: 'white',
            fontWeight: 'bold',
        },
    }
  });
  
  

export default styles