import React from 'react'
import {AppBar, Toolbar, makeStyles, Box} from '@material-ui/core'
import Login from './account/Login'

const useStyles=makeStyles({
    loginHeader:{
      height:200,
      background:'#00bfa5',
      boxShadow:'none',
    },
    component:{
         background:'#DCDCDC',
         height:'100vh'
    }
})
export default function Messenger() {
    const classes=useStyles()
    return (
        <Box className={classes.component}>
            <AppBar className={classes.loginHeader}>
                <Toolbar>  
                </Toolbar> 
            </AppBar>
            <Login/>
        </Box>
    )
}
