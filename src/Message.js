function Message(props) {
    let messageList = Array.from(props.MessageList)
    return(
        <div>
            {messageList.map((item) => {
                return (
                    <div key={item.id}>
                        {item.text}
                    </div>
                )
            })}
        </div>
    );
}

export default Message