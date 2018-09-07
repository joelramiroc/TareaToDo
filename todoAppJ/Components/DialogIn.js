import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Dialog from "react-native-dialog-input";

export default class DialogTester extends Component {
  constructor(props) {
    super(props);
  this.state = {
    dialogVisible : true
  };
  this.showDialog=this.showDialog.bind(this)
  this.handleCancel=this.handleCancel.bind(this)
  this.sendInput=this.sendInput.bind(this)
}

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.props.isVisible()
    this.setState({ dialogVisible: false });
  };

  sendInput = (inputText) => {
    this.props.in(inputText)
   this.setState({ dialogVisible: false });
 };
  render() {
    return (
      <Dialog isDialogVisible={this.state.isDialogVisible}
            title={"Add Task"}
            message={"Write a new Task"}
            hintInput ={"Description"}
            submitInput={ (inputText) => {this.sendInput(inputText)} }
            closeDialog={this.handleCancel}>
        </Dialog>
        // <Dialog.Container visible={this.state.dialogVisible}>
        //   <Dialog.Title>Account delete</Dialog.Title>
        //   hintInput={"Write Task Name"}
        //   <Dialog.Button label="Cancel" onPress={this.handleCancel} />
        //   <Dialog.Button label="Delete" onPress={this.handleDelete} />
        // </Dialog.Container>
    );
  }
}