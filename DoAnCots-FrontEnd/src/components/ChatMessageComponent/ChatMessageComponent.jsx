import React from "react";
//import {ChatDots , Person} from "react-bootstrap-icons"
import {MessageOutlined, UserOutlined} from '@ant-design/icons';
import {ChatMessage2, Message_Left, Message_Right, Message_Text } from "./style";

const ChatMessageComponent = (props) => {
    return(
        <ChatMessage2>
            {
                props.user ? (
                    <Message_Right>
                        <Message_Text style={{marginRight:'5px'}}>{props.message}</Message_Text>
                        {/* <Person /> */}
                        <UserOutlined />
                    </Message_Right>
                ) : (
                    <Message_Left>
                        <MessageOutlined />
                        {/* <ChatDots/> */}
                        <Message_Text style={{marginLeft:'5px'}}>{props.message}</Message_Text>
                    </Message_Left>
                )
            }
        </ChatMessage2>
    )
}

export default ChatMessageComponent