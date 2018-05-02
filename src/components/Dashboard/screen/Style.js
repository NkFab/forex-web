const ScreenHeight= window.outerHeight
const ScreenWidth= window.outerWidth
const styles = theme => ({
    container: {
        display: 'flex',
        // position: 'fixed',
        flexDirection: 'row wrap',
        width: '100%',
        minHeight: '100vh',
        marginTop: 0,
        backgroundColor: '#E5E8E8',
        backgroundSize: 'cover',
        // alignItems: 'center',
    },
    wrapper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: ScreenWidth/2.8,
        // overflow: 'scroll',
    },
    content:{
        // display: 'flex',
        justifyContent: 'center',
        // overflow: 'scroll',
        // alignItems: 'center',
        // marginTop: 100,
        // width: ScreenWidth/2,
        // height: ScreenHeight
    },
    formContainer:{
      marginTop: '2%'
    },
    title:{
        fontSize: 20,
        color:'#006442',
        fontWeight: 'bold',
        marginTop: 70,
        marginLeft: -90,
    },
    category:{
      marginTop: 20,
    },
    categoryBtn:{
        // backgroundColor: '#005464',
       borderRadius: 5,
       border: 'groove',
       borderColor: '#005464',
       width: ScreenWidth/4,
       height: 36,
       marginLeft: 170,
     },
     btnBuy:{
       // backgroundColor: '#005464',
      //  borderRadius: 5,
       // border: 'groove',
       borderColor: '#005464',
       color: '#005464',
       fontWeight: 'bold',
       '&:active': {
         boxShadow: 'none',
         backgroundColor: '#0062cc',
         borderColor: '#005cbf',
       },
    //    '&:hover, &$focusVisible': {
    //      backgroundColor: '#005464',
    //     //  borderRadius: 5,
    //      // width: 300,
    //      color: 'white',
    //      fontWeight: 'bold',
    //  },
       width: ScreenWidth/8,
     },
     btnSell:{
       // backgroundColor: '#005464',
       borderRadius: 5,
       // border: 'groove',
       borderColor: '#005464',
       color: '#005464',
       fontWeight: 'bold',
       width: ScreenWidth/8
     },
      textField:{
        width: ScreenWidth/10,
          marginRight: 150,
          // marginTop: -25,
      },
      textFieldSelect:{
        marginLeft: 170,
        marginTop: 33,
      },
      btnAdd:{
        backgroundColor: '#640022',
        marginLeft: ScreenWidth /2.5,
        marginTop: -45,
        '&:hover, &$focusVisible': {
          color: '#640022',
      }
      },
      btnSave:{
        position: 'fixed',
        bottom: 50,
        right: 20,
        backgroundColor: '#009764',
        color: 'white',
        fontWeight: 'bold',
        width: ScreenWidth/12,
        height: ScreenWidth/35,
        borderRadius: ScreenWidth/9,
        '&:hover, &$focusVisible': {
          color: '#005464',
          fontWeight: 'bold',
      }
      }
  });
  

export default styles