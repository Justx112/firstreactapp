import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux/es/exports';


const getPath = (id) => {
    return `/Chats/id${id}`
}

function ListChats() {
    const listChats = useSelector(state => state.messanger.filter(item => item.Name));
    const dispatch = useDispatch();
    return (
        < List xs={2} >
            <ListItemButton onClick={() => dispatch({ type: 'ADD_NEW_CHAT', payload: prompt() })}>
                <ListItemText primary='Добавить новый чат' />
            </ListItemButton>
            {listChats.map((item) => {
                return (
                    <ListItem disablePadding key={item.id}>
                        <Link style={{ color: 'black', textDecoration: 'none' }} to={getPath(item.id)}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <ListItemButton style={{ background: item.isActiveChat ? 'grey' : 'white' }} onClick={() => dispatch({ type: 'SET_ACTIVE', payload: item.id })}>
                                    <ListItemText primary={item.Name} />
                                </ListItemButton>
                                <ListItemButton onClick={() => dispatch({ type: 'DELETE_CHAT', payload: item.id })}>
                                    <ListItemText primary='❌' />
                                </ListItemButton>
                            </div>
                        </Link>
                    </ListItem>
                )
            })}
        </List >
    );
}

export default ListChats