const ScreenHeight= window.innerHeight
const ScreenWidth= window.innerWidth
const styles = theme => ({
    container: {
        // display: 'flex',
        flexDirection: 'row wrap',
        // padding: 20,
        // width: '100%',
        // backgroundColor: '#E5E8E8'
    },
    wrapper:{
        // display: 'flex',
        // marginTop: 100
    },
    content:{
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // flexGrow: 1,
        // marginTop: 20,
        // marginLeft: ScreenWidth/8.5,
        // marginLeft: 5,
    },
    currency:{
        // backgroundColor: 'grey',
        borderStyle: 'groove',
        borderColor: 'transparent',
        marginLeft: 150,
        marginTop: 38,
        height: 400,
        width: 400,
        alignItems: 'center',
    },
    grid:{
        overflow: 'hidden',
        // margin: theme.spacing.unit,
        padding: theme.spacing.unit * 2,
        color: '#006442', 
        fontWeight: 'bold', 
        marginBottom: 20, 
        fontSize: 20, 
        backgroundColor: 'transparent'
    },
    // titleCont:{
    //     marginTop: 80,
    //     marginLeft: -1080,
    // },
    title:{
        color: '#006442', 
        fontWeight: 'bold', 
        marginBottom: 20, 
        fontSize: 20, 
    },
    menuItem: {
        marginTop: -8,
        width: 350,
        '&:focus': {
        backgroundColor: '#40926d',
        color: '#FDFEFE',
        '& $primary, & $icon': {
            color: '#FDFEFE',
        },
        },
    },
    paper: {
        alignSelf: 'center',
        height: 50,
        width: 350,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 100,
        borderStyle: 'groove',
        borderColor: '#006442',
    },
    currencytitle:{
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        fontSize: 18,
        // justifyContent: 'flex-start'
        marginRight: ScreenWidth /50
    },
    currencyrate:{
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        fontSize: 18,
        marginLeft: ScreenWidth /10,
        // marginRight: -100
    },
    currencyContent:{
        display: 'flex',
        flexDirection: 'row wrap',
        width: ScreenWidth/2,
        height: 70,
        backgroundColor:'white',
        color:'black',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
        // paddingLeft: 100
    },
    button:{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 5,
        width: ScreenWidth/10,
        height: ScreenHeight /15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: ScreenWidth /10
    }
  });
  

export default styles