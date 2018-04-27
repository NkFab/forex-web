import { withStyles } from 'material-ui/styles';

const ScreenHeight= window.innerHeight
const ScreenWidth= window.innerWidth

const styles = theme => ({
    bigContainer:{
        display: 'flex',
        width: ScreenWidth/2.8,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        // height: ScreenHeight,
        width: ScreenWidth/4.5,
        backgroundColor: '#008b5c',
        color:'white',
        justify: 'center',
        align: 'center'
    },
    avatar: {
        justify: 'center',
        align: 'center',
        width: 60,
        height: 60,
        marginTop: 50,
        marginLeft: 115,
      },
    wrapper:{
        // marginTop: 100
    },
    content:{
        // flexGrow: 1,
        marginTop: 35,
        marginLeft: 5,
    },
    button:{
        backgroundColor: '#006442',
        width: 300,
        color: 'white',
        fontWeight: 'bold',
        paddingRight: 20,
        marginTop: 20,
    }
    
  });
  
  

export default styles