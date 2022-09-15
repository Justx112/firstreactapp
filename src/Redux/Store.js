import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const getId = (array) => {
    return array.length ? array[array.length - 1].id + 1 : 0
}

const initianalValue = [
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
    },
];


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

            state = state.map(i => setActiveFunction(i))

            return state

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

            state = state.map(i => AddMessage(i))

            return state
        case 'ADD_NEW_CHAT':
            let newID = getId(state)
            return [...state,
            {
                id: newID,
                Name: action.payload,
                messages: [],
                isActiveChat: false,

            }]
        case 'DELETE_CHAT':
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
}

export const store = createStore(reducer, composeWithDevTools());