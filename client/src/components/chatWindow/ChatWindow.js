import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { Box } from '@material-ui/core'

export default function ChatWindow() {
     return (
          <Box>
               <ChatHeader />
               <Messages />
          </Box>
     )
}
