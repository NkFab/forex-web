import { withStyles } from 'material-ui/styles';

const ScreenHeight= window.innerHeight
const ScreenWidth= window.innerWidth

const styles = theme => ({
    bigContainer:{
        display: 'flex',
        position: 'fixed',
        width: ScreenWidth/2.8,
        height: '100vh'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: ScreenWidth/4.5,
        height: '100vh',
        backgroundColor: '#008b5c',
        color:'white',
        alignItems: 'center'
    },
    avatar: {
        justify: 'center',
        align: 'center',
        width: 60,
        height: 60,
        marginTop: 50,
        // marginLeft: 115,
      },
    wrapper:{
        // marginTop: 100
    },
    button:{
        backgroundColor: '#006442',
        width: 300,
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    }
    
  });
  
  

export default styles