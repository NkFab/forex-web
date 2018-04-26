const ScreenHeight= window.innerHeight
const ScreenWidth= window.innerWidth
const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row wrap',
        // padding: 20,
        width: '100%',
        backgroundColor: '#E5E8E8'
    },
    wrapper:{
        // display: 'flex',
        // marginTop: 100
    },
    content:{
        display: 'flex',
        alignItems: 'center',
        // flexGrow: 1,
        marginTop: 20,
        marginLeft: ScreenWidth/8.5,
        // marginLeft: 5,
    },
    category: {
        marginTop: 100
        // flexDirection: 'column'
    },
    categoryTitle:{
        marginTop: 50
    },
    cardContainer:{
        // flexDirection: 'row',
        marginTop: 100,
        marginLeft: 50,
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
        margin: theme.spacing.unit,
        padding: theme.spacing.unit * 2,
        color: '#006442', 
        fontWeight: 'bold', 
        marginBottom: 20, 
        fontSize: 20, 
        backgroundColor: 'transparent'
    },
    titleCont:{
        marginTop: 80,
        marginLeft: -1080,
    },
    title:{
        fontSize: 20,
        color:'#006442',
        fontWeight: 'bold',
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
    // control: {
    //   padding: theme.spacing.unit * 2,
    // },
  });
  

export default styles