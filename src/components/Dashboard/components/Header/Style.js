// import {white, red500} from 'material-ui/styles/colors';

const ScreenHeight= window.innerHeight
const ScreenWidth= window.innerWidth 

const style = {
    appBar: {
      // display: 'flex',
      left: 303,
      // overflow: 'hidden',
      height: 50,
      width: ScreenWidth/1.2,
      backgroundColor: 'white',
      color:'#005464',
      justifyContent: 'center'
    },
    menuButton: {
      marginLeft: 10
    },
    iconsRightContainer: {
      position: 'absolute',
      right: 0,
      flexDirection: 'row',
      marginRight: 60,
      color:'white'
    },
    iconsLeftContainer: {
      position: 'absolute',
      left: 0,
      marginLeft: 50,
      color:'#005464',
      fontWeight: 'bold',
    }
  };

  export default style