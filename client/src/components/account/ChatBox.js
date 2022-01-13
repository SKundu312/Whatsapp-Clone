import { Box, Dialog,withStyles,makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
     component: {
          display: 'flex',
     },
     leftComponent: {
          minWidth:'380px'
     },
     rightComponent: {
          borderLeft:'1px solid rgba(0,0,0,0.14)',
     },
})

const style = {
	dialogPaper: {
		height: "95%",
		width: "91%",
		boxShadow: "none",
		borderRadius: 0,
		maxHeight: "100%",
		maxWidth: "100%",
		overflow: "hidden",
	},
};

const ChatBox=({classes})=> {
    const class1=useStyles()
     return (
          <Dialog
               open={true}
               classes={{ paper: classes.dialogPaper }}
          >
			<Box className={class1.component}>
				<Box className={class1.leftComponent}>h</Box>
				<Box className={class1.rightComponent}>y</Box>
			</Box>
		</Dialog>
	);
}

export default withStyles(style)(ChatBox);