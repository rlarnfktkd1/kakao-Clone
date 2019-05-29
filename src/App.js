import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./reducers";
import Header from "./components/Chat/Chat";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header
          isChat={this.props.isChat}
          data={this.props.chat}
          date={this.props.date}
          onChatOn={this.props.handleChatOn}
          onChatOff={this.props.handleChatOff}
          onSend={this.props.handleAddChat}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isChat: state.chatOnOff.isChat,
    chat: state.chat,
    date: Date.now()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChatOff: () => {
      dispatch(actions.chatOff());
    },
    handleChatOn: () => {
      dispatch(actions.chatOn());
    },
    handleAddChat: data => {
      dispatch(actions.addChat(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
