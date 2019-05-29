//components/Todo.js
import React from "react";
import styled from "styled-components";

const To = styled.p`
  display: grid;
  justify-self: end;
  margin-right: 10px;
  margin-bottom: -1px;
  font-weight: 800;
`;

const From = styled.p`
  display: grid;
  justify-self: start;
  margin-left: -20px;
  margin-bottom: -1px;
  font-weight: 800;
`;

const SendMessage = styled.li`
  padding: 10px;
  width: max-content;
  border: 1px solid black;
  border-radius: 35px;
  border-bottom-right-radius: 0px;
  justify-self: end;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #f9ca24;
`;

const ReciveMessage = styled.li`
  padding: 10px;
  width: max-content;
  border: 1px solid black;
  border-radius: 35px;
  border-bottom-left-radius: 0px;
  justify-self: start;
  margin-left: -30px;
  background-color: #f5f6fa;
`;

const Message = ({ state, date }) => (
  <>
    <To>to</To>
    <SendMessage>
      내용: {state}
      <br />
      날짜: {date}
    </SendMessage>
    <From>From</From>
    <ReciveMessage>
      내용: {state}
      <br />
      날짜: {date}
    </ReciveMessage>
  </>
);

export default Message;
