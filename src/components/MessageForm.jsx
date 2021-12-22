import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react"
import { sendMessage,isTyping } from "react-chat-engine";



const MessageForm =(props)=>{
    const [value,setValue] = useState("");
    const {chatId, creds} =props;
    

    const messageFormHandler=(event)=>{
        event.preventDefault();
        const text = value.trim();
       
        if(text.length>0){
            sendMessage(creds,chatId,{text});
            setValue("");
        }
    }
    const messageFormChangeHandler=(event)=>{
        setValue(event.target.value);
  
        isTyping(props,chatId);
    }

    const uploadHandler=(event)=>{
        sendMessage(creds,chatId,{files:event.target.files,text:''});
    }


    return(
        <form className="message-form" onSubmit={messageFormHandler}>
            <input type="text" 
            className="message-input" 
            placeholder="Send a message..."
            value={value}
            onChange={messageFormChangeHandler}
            onSubmit={messageFormHandler}/>
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>

            </label>
            <input type="file" 
            name="" 
            id="upload-button"
            multiple={false} 
            style={{display:'none'}}
            onChange={uploadHandler}/>
            <button type="submit" className="send-button">
                <SendOutlined/>
            </button>
        </form>
        
    );




}


export default MessageForm;