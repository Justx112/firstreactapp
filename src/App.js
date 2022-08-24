import { useState, useEffect } from 'react';
import Message from './Message';
import styles from './App.css';

function App() {
  const [messageList, addMessage] = useState([]);
  let textInput = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage(
      [...messageList,
      {
        id: 0,
        autor: 'man',
        text: textInput,
      }]);
  }

  useEffect(()=>{
    if (messageList[messageList.length - 1]?.autor === "man")
    {
      const delay = setInterval(()=>{
        addMessage(
          [...messageList,
          {
            id: 0,
            autor: 'robo',
            text: "Интересно",
          }])
        }, 1500)
        return () => clearInterval(delay)
    }
    }, [messageList]);

  const inputText = (event) => {
    event.preventDefault();
    textInput = event.target.value;
  }
 
  return (
    <div className={styles.container}>
      <Message MessageList={messageList} />
      <form onSubmit={handleSubmit}>
        <label >
          <input className={styles.inputs} onChange={inputText} />
        </label>
        <button className={styles.button}  type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
