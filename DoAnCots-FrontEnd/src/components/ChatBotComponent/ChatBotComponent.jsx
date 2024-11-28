// import { Button } from "bootstrap";
import React, { useState } from "react";
import { ChatBody, ChatHead, ChatMessage } from "./style";
import ChatMessageComponent from "../ChatMessageComponent/ChatMessageComponent";
import { analyze } from "../ReplyComponent/Reply";

export default function ChatBot() {
    const [messages,setMessages] = useState([
        {
            message : "Tôi Là Chatbot ! Bạn Muốn Build Bộ PC Như Thế Nào ?",
        },
    ])

    const [text,setText] = useState("")

    const onSend = () => {
        let list = [...messages,{message:text,user : true}]
        if(list.length > 2){
            const reply = analyze(text)
            list = [...list,{message : reply}]
        }else{
            list = [
                ...list,
                {
                    message : `Hi ${text}`
                },
                {
                    message : 'How can i help you ?'
                }
            ]
        }
        setMessages(list)
        console.log("list : ",messages)
        setText("")
        setTimeout(() => {
            document.querySelector("#copyright").scrollIntoView();
        },1000)
        console.log("User : ",messages.map((data) => data))
    }

    return(
        <div>
            <ChatHead className="d-flex align-items-center justify-content-center">
                <img src="https://ecpvn.com/wp-content/uploads/2021/08/bi-quyet-trien-khai-chatbot-hieu-qua-cho-doanh-nghiep-2-1280x720.jpg" alt="logo" width={200} height={200} style={{borderRadius: '990px'}} />
                <h2 className="text-primary">ChatBot</h2>
            </ChatHead>
            <ChatMessage>
                {
                    messages.length > 0 && messages.map((data) => <div style={{fontSize:'12px' , fontWeight:'bold'}} className="text-center">{<ChatMessageComponent {...data} />}</div>)
                }
                <ChatBody>
                    <input type="text" style={{width : "100%" , borderRadius:'20px'}} value={text} onChange={(e) => setText(e.target.value) }/>
                    {/* <Button type="button" className="ms-3">Gửi</Button> */}
                    <button style={{ width:'45px' ,borderRadius: '7px' , marginLeft:'8px' , backgroundColor:'#0866ff' , color:"#fff" , cursor:'pointer'}} className="btn-send" onClick={onSend}>Gửi</button>
                </ChatBody>
                <div id="copyright" style={{fontSize:'12px' , fontWeight:'bold' , marginTop:'15px' , textAlign:'center'}}>ChatBot from ComputerShop</div>
            </ChatMessage>
        </div>
    )
} 