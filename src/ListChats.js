import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'

const getPath = (id) => {
    return `/Chats/id${id}`
}

function ListChats(props) {
    let listChats = Array.from(props.ListChats)
    return (
        < List xs={2} >
            {listChats.map((item) => {
                return (
                    <ListItem disablePadding key={item.id}>
                        <Link style={{ color: 'black', textDecoration:'none' }}  to={getPath(item.id)}>
                            <ListItemButton>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                )
            })}
        </List >
    );
}

export default ListChats