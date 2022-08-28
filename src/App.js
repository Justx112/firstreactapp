import { useState, useEffect } from 'react';
import Message from './Message';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2'

const getId = (array) => {
  return array.length ? array[array.length - 1].id + 1 : 0
}

function App() {
  const [messageList, addMessage] = useState([]);
  const [textInput, SetTextInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage(
      [...messageList,
      {
        id: getId(messageList),
        autor: 'man',
        text: textInput,
      }]);
    SetTextInput('');
  }

  useEffect(() => {
    if (messageList[messageList.length - 1]?.autor === "man") {
      const delay = setInterval(() => {
        addMessage(
          [...messageList,
          {
            id: getId(messageList),
            autor: 'robo',
            text: "Интересно",
          }])
      }, 1500)
      return () => clearInterval(delay)
    }
  }, [messageList]);

  const inputText = (event) => {
    event.preventDefault();
    SetTextInput(event.target.value)
  }



  return (
    <Grid
      container
      direction="column"
      columnSpacing={2}
      justifyContent="flex-end"
      style={{
        height: '100%',
        overflow: 'none'
      }}
      wrap="nowrap">
      <Message MessageList={messageList}/>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction="row"
          rowSpacing={2}
          alignItems="flex-end"
        >
          <Grid xs={10}><TextField value={textInput} onChange={inputText} fullWidth id="outlined-basic" variant="outlined" placeholder="Введите текст" /></Grid>
          <Grid xs={2}><Button size={"large"} variant="contained" fullWidth type="submit" disabled={!textInput}>Submit</Button></Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default App;
