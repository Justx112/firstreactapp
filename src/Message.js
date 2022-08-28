import List from '@mui/material/List';
import Grid from '@mui/material/Unstable_Grid2'

function Message(props) {
    let messageList = Array.from(props.MessageList)
    return (
        <Grid
            container
            direction="column"
            rowSpacing={2}
            wrap="nowrap"
            style={{overflow: 'auto'}}
        >
            {messageList.map((item) => {
                return (
                    <div key={item.id}>
                        <Grid xs={3} >
                            <List style={{ textAlign: 'center' }} elevation={2} > {item.text} </List>
                        </Grid>
                    </div>
                )
            })}
        </Grid>
    );
}

export default Message