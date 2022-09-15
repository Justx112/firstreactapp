import { useState } from 'react';
import Message from '../Message';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2'
import ListChats from '../ListChats';
import { useSelector, useDispatch } from 'react-redux/es/exports';




function ChatPage() {
    const [textInput, SetTextInput] = useState('');
    const activeId = useSelector(state => state.filter(item => item.isActiveChat === true))[0]?.id
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (messageList[messageList.length - 1]?.autor === "man") {
    //         const delay = setInterval(() => {
    //             dispatch({ type: 'ADD_MESSAGE', payload: { id: activeId, message: 'интересно' } })
    //         }, 1500)
    //         return () => clearInterval(delay)
    //     }
    // }, [messageList]);

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
            <ListChats xs={2} />
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
                <Message />
                <form onSubmit={(e) => e.preventDefault()}>
                    <Grid
                        container
                        direction="row"
                        rowSpacing={2}
                        alignItems="flex-end"
                    >
                        <Grid xs={10}><TextField autoFocus value={textInput} onChange={(e) => SetTextInput(e.target.value)} fullWidth id="outlined-basic" variant="outlined" placeholder="Введите текст" /></Grid>
                        <Grid xs={2}><Button onClick={() => dispatch({ type: 'ADD_MESSAGE', payload: { id: activeId, message: textInput, }, meta: { message: textInput } })} size={"large"} variant="contained" fullWidth type="submit" disabled={!textInput}>Submit</Button></Grid>

                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default ChatPage