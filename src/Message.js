import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Message.css';
import  { forwardRef } from 'react';
const Message=forwardRef(({message,userName},ref)=> {
    const isUser = userName===message.userName;
  return (
    <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <Card className={isUser? "message_userCard":"message_guestCard"}>
            <CardContent>
                <Typography color='whilte' variant='h5' component='h5'>
                    {!isUser && `${message.userName||'Unknown User'}:`} {message.message}
                </Typography>
            </CardContent>
        </Card>
        
        
    </div>
  )
})

export default Message