import List from '@mui/material/List';
import Grid from '@mui/material/Unstable_Grid2'
import { useSelector } from 'react-redux/es/hooks/useSelector';


function Message() {
    let activeChat = useSelector(state => state.filter(item => item.isActiveChat === true))[0]
    let messages = activeChat ? activeChat.messages : false
    if (messages)
    return (
        <Grid
            container
            direction="column"
            rowSpacing={2}
            wrap="nowrap"
            style={{overflow: 'auto'}}
        >
            {messages.map((item) => {
                return (
                    <div key={Math.random()}>
                        <Grid xs={3} >
                            <List style={{ textAlign: 'center' }} elevation={2} > {item} </List>
                        </Grid>
                    </div>
                )
            })}
        </Grid>
    );
    else
    {
        <h1>Сообщений пока нет</h1>        
    }
}

export default Message