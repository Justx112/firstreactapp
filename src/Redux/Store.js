import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const getId = (array) => {
    return array.length ? array[array.length - 1].id + 1 : 0
}

const initianalValue = {
    messanger: [
    {
        id: 0,
        Name: 'Миша',
        messages: [],
        isActiveChat: true,

    },
    {
        id: 1,
        Name: 'Гоша',
        messages: [],
        isActiveChat: false,
    },
    {
        id: 2,
        Name: 'Кеша',
        messages: [],
        isActiveChat: false,
    }],
    users: [],
    isLoading: false,
    isError: false,
};


const timer = store => next => action => {

    next(action)

    const delay = setTimeout(() => {
        console.log(action?.meta?.message)
    }, 3000)

    return () => {
        setTimeout(delay);
    }
}

const reducer = (state = initianalValue, action) => {
    switch (action.type) {
        case 'SET_ACTIVE':
            const setActiveFunction = (item) => {
                let newObj = {
                    ...item,
                    isActiveChat: false,
                }
                if (item.id === action.payload) {
                    newObj = {
                        ...item,
                        isActiveChat: true,
                    };
                }
                return newObj;
            }

            let setActive = state.messanger.map(i => setActiveFunction(i))

            return { ...state, messanger: setActive }

        case 'ADD_MESSAGE':
            const AddMessage = (item) => {
                let newObj = {
                    ...item,
                }
                if (item.id === action.payload.id) {
                    newObj = {
                        ...item,
                        messages: [...item.messages, action.payload.message],
                    };
                }
                return newObj;
            }

            let newMessage = state.messanger.map(i => AddMessage(i))

            return { ...state, messanger: newMessage }
        case 'ADD_NEW_CHAT':
            let newID = getId(state.messanger)
            return {...state,
                messanger: [...state.messanger,
                    {
                        id: newID,
                        Name: action.payload,
                        messages: [],
                        isActiveChat: false,

                    }]
            }
        case 'DELETE_CHAT':
            return {...state,
                messanger: state.messanger.filter(item => item.id !== action.payload),
            }
        case 'ADD_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'IS_LOADING':
            return{
                ...state,
                isLoading: action.payload
            }
        case 'SET_ERROR':
            return{
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}


export const getUsers = () => {
    return async dispatch => {
        dispatch({type: 'SET_ERROR', payload: false})
        dispatch({ type: 'IS_LOADING', payload: true });
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (response.status!==200){
            dispatch({ type: 'IS_LOADING', payload: false });
            dispatch({ type: 'SET_ERROR', payload: true })
        }
        const data = await response.json();
        dispatch({ type: 'ADD_USERS', payload: data });
        dispatch({ type: 'IS_LOADING', payload: false });
    }
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(timer, thunk)));
