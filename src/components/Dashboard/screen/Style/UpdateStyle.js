const ScreenHeight= window.outerHeight
const ScreenWidth= window.outerWidth
const styles = theme => ({
    container: {
        // display: 'flex',
        // position: 'relative',
        // flexDirection: 'row wrap',
        // alignItems: 'center',
        // width: '100%',
        minHeight: '100vh',
        // marginTop: 0,
        backgroundColor: '#E5E8E8',
        backgroundSize: 'cover',
        // alignItems: 'center',
    },
    left:{
      display: 'flex',
      position: 'fixed',
      minHeight: '100vh',
      // width: ScreenWidth/2
    },
    wrapper:{
      marginTop: '4%',
      marginLeft: '25%',
      // display: 'flex',
      alignItems: 'center',
      // flexDirection: 'column',
      // right: 0,
      // marginLeft: ScreenWidth/2.8,
      // overflow: 'scroll',
    },
    formContainer:{
      display: 'flex',
      backgroundColor: 'white',
      marginTop: '2%',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    },
    
  });
  

export default styles