const ScreenHeight= window.outerHeight
const ScreenWidth= window.outerWidth
const styles = theme => ({
    container: {
        display: 'flex',
        // // // // position: 'fixed',
        flexDirection: 'row wrap',
        // width: '100%',
        minHeight: '100vh',
        // marginTop: 0,
        backgroundColor: '#E5E8E8',
        backgroundSize: 'cover',
        alignItems: 'center',
    },
    left:{
        display: 'flex',
        // position: 'fixed',
        minHeight: '100vh',
        // width: ScreenWidth/2
      },
    signup:{
        display: 'flex',
        // height: '100%',
        // width: '100%',
        // overflow: 'hidden',
        // background: '#40926d',
        // marginTop: '0%',
    },
    card:{
        width: ScreenWidth /4,
        height: ScreenHeight /4
        // margin: '7% 27% 2% 27%',
        // padding: '5%',
        // overflow: 'scroll',
        /* box-sizing: content-box; */
    },
    // left:{
    //     float: 'left'
    // },
    // right:{
    //     float: 'right'
    // },
    btn:{
        flex: 1,
        float: 'left',
        marginTop: '2%',
        width: '100%'
    },
    timepickers:{
        width: '200px'
    },
    agree:{
        display: 'inline-flex'
    },
    formContent:{
        display: 'flex'
    },
})