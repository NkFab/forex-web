const ScreenHeight= window.innerHeight
const ScreenWidth= window.innerWidth
const styles = theme => ({
    content:{
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 100,
        backgroundColor: 'white',
        width: ScreenWidth/2,
        height: ScreenHeight /3,
        elevation: 20,
        boxShadow: 20,
    },
    formContainer:{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      // padding: 50,
    },
    containerBtn:{
      marginLeft: ScreenWidth /2.5,
      marginTop: -25,
    },
    title:{
        fontSize: 20,
        color:'#006442',
        fontWeight: 'bold',
        marginTop: 70,
        // marginLeft: -90,
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
      '&:hover': {
         backgroundColor: '#005464',
         color: 'white',
         fontWeight: 'bold',
     },
       '&:active': {
         backgroundColor: '#005464',
       },
       '&:focus': {
        backgroundColor: '#005464',
        color: 'white',
        fontWeight: 'bold',
        transitionDelay: 12000,
      },
       width: ScreenWidth/8,
     },
     btnSell:{
       color: '#005464',
       fontWeight: 'bold',
       width: ScreenWidth/8,
       '&:active': {
         backgroundColor: '#005464',
       },
       '&:focus': {
        // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        backgroundColor: '#005464',
        color: 'white',
        fontWeight: 'bold',
      },
     },
      textField:{
        width: ScreenWidth/10,
        marginLeft: 70,
          // marginTop: -25,
      },
      textFieldSelect:{
        marginLeft: 170,
        marginTop: 53,
      },
      btnAdd:{
        backgroundColor: '#640022',
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