import './App.css';
import React,{useEffect, useState} from 'react';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import {IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
function App() {
  const[input,setInput]=useState('');
  const[messages,setMessages]=useState([]);
  const[userName,setUsername]=useState('');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
    })
  },[])
  
  useEffect(()=>{
    setUsername(prompt('Please Enter Your Name'))
  },[])

  const sendMessage=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      userName:userName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="" />
      <h1>MESSENGER</h1>
      <h2>Welcome {userName}</h2>
      <form className='app_form'>
      <FormControl className='app_formControl'>
        <Input className='app_input' placeholder='Enter a message...' value={input} onChange={event=>setInput(event.target.value)}/>
        <IconButton className='app_iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
          <SendIcon/>
        </IconButton>
       
      </FormControl>
      </form>
     <FlipMove>
        {
          messages.map(({id,data})=>(
            <Message key={id} userName={userName} message={data}/>
          ))
        }
     </FlipMove>
      
    </div>
  );
}

export default App;
