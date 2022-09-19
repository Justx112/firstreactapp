import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/Store";

function Users() {
    const users = useSelector(state => state.users);
    const loading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.isError);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getUsers());
    },[]);

    if (error){
        return(
            <div>
                <button onClick={() => dispatch(getUsers())}>Отправить запрос повторно</button>
            </div>
        )
    }

    if (loading){
        return(
            <div>
                Загрузка...
            </div>
        )
    }

    return (
        <div>
        {users.map((item)=>{
            return(
                <div key={item.key}>
                    {item.username}
                </div>
                )
        })}
        </div>
    );
}

export default Users;
