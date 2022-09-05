import { useState, useEffect, useRef } from 'react';
import Message from '../Message';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2'
import ListChats from '../ListChats';

const getId = (array) => {
    return array.length ? array[array.length - 1].id + 1 : 0
}

function ChatPage() {
    const [messageList, addMessage] = useState([]);
    const [textInput, SetTextInput] = useState('');
    const listChatsSource = [
        {
            id: 0,
            name: "Стив джобс"
        },
        {
            id: 1,
            name: "Павел дуров"
        },
        {
            id: 2,
            name: "Билл Гейтс"
        },
    ]
    const inputTextRef = useRef(null);

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

    useEffect(() => {
        console.log(inputTextRef.current);
    });

    const inputText = (event) => {
        event.preventDefault();
        SetTextInput(event.target.value)
    }


    return (
        <Grid
            container
            direction="row"
            columnSpacing={0}
            xs={12}
            style={{
                height: '100%',
                overflow: 'none'
            }}>
            <ListChats ListChats={listChatsSource} xs={2} />
            <Grid
                container
                direction="column"
                columnSpacing={2}
                xs={10}
                justifyContent="flex-end"
                style={{
                    height: '100%',
                }}
                wrap="nowrap">
                <Message MessageList={messageList} />
                <form onSubmit={handleSubmit}>
                    <Grid
                        container
                        direction="row"
                        rowSpacing={2}
                        alignItems="flex-end"
                    >
                        <Grid xs={10}><TextField autoFocus ref={inputTextRef} value={textInput} onChange={inputText} fullWidth id="outlined-basic" variant="outlined" placeholder="Введите текст" /></Grid>
                        <Grid xs={2}><Button size={"large"} variant="contained" fullWidth type="submit" disabled={!textInput}>Submit</Button></Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default ChatPage