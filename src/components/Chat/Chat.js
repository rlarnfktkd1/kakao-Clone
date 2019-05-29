import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Message from "./Message";

const HeaderDiv = styled.header`
  width: 100%;
`;

const Title = styled.h1`
  margin-top: -10px;
  margin-left: -50px;
`;

const ToolBar = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #7ed6df;
  border-radius: 5px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  padding-top: 10px;
`;

const ChatOn = styled.button`
  width: 75px;
  height: 30px;
  background-color: #e74c3c;
  text-align: center;
  justify-self: start;
  margin-left: 15px;
  margin-top: -30px;
`;

const ChatOff = styled.button`
  width: 75px;
  height: 30px;
  background-color: #3498db;
  text-align: center;
  justify-self: start;
  margin-left: 15px;
  margin-top: -30px;
`;

const Chat = styled.div`
  width: 100%;
  height: 83vh;
  border: 1px solid black;
  margin-top: 10px;
  overflow: scroll;
  background-color: #7ed6df;
`;

const ChatList = styled.ul`
  list-style: none;
  display: grid;
`;

const InputBoard = styled.div`
  width: 100%;
  height: 5vh;
  border: 1px solid black;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Form = styled.form`
  width: 100%;
  display: flex
  justify-content:center;
`;

const Input = styled.input`
  width: 70%;
  height: 25px;
  border: 1px solid blue;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 15%;
  height: 30px;
  border: 1px solid red;
  background-color: #fbc531;
`;

const Disable = styled.div`
  width: 100%;
  height: 20px;
  background-color: gray;
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: ""
    };
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  }
  handleSubmit(e) {
    const input = document.querySelector("Input");
    e.preventDefault();
    if (this.state.input !== "") {
      this.props.onSend(this.state.input);
      this.setState({
        input: ""
      });
      input.value = "";
    }
  }

  render() {
    const { data } = this.props;
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const today = `${month}월${day}일`;
    console.log(Date);
    const messages = data.map((message, index) => (
      <Message key={index} date={today} {...message} />
    ));
    if (data.length > 0) {
      console.log(data);
    }
    // const Message = ({data}) => <li>{data}</li>
    // const messages = data.map((message, index) => (<Message key={index} {...message} />))
    return (
      <HeaderDiv>
        <ToolBar>
          {this.props.isChat ? (
            <ChatOff onClick={this.props.onChatOff}>Chat Off</ChatOff>
          ) : (
            <ChatOn onClick={this.props.onChatOn}>Chat On</ChatOn>
          )}
          <Title>Hello Talk</Title>
        </ToolBar>
        <Chat>
          <ChatList>{messages}</ChatList>
        </Chat>
        <InputBoard>
          {this.props.isChat ? (
            <Form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                name="message"
                placeholder="대화 내용을 입력하세요"
                onChange={this.handleChange}
              />
              <Button onClick={this.handleSubmit}>전송</Button>
            </Form>
          ) : (
            <Disable>채팅 입력 불가 상태입니다</Disable>
          )}
        </InputBoard>
      </HeaderDiv>
    );
  }
}

Header.propTypes = {
  onChatOff: PropTypes.func,
  onChatOn: PropTypes.func,
  onSubmit: PropTypes.func,
  isChat: PropTypes.bool
};
export default Header;
