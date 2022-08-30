import List from '@mui/material/List';
import Grid from '@mui/material/Unstable_Grid2'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function ListChats(props) {
    let listChats = Array.from(props.ListChats)
    return (
        < List xs={2} >
            {listChats.map((item) => {
                return(
                <ListItem disablePadding key={item.id}>
                    <ListItemButton>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
                    )
                })}
        </List >
    );
}

export default ListChats