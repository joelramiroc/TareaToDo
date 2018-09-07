import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Nav from './Components/Navigate';
import Dialog from './Components/DialogIn';
import { Header } from "react-native-elements";


export default class Checked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      shoWdialog: false,
      cont : 1
    };
    this.shoWdialogs = this.shoWdialogs.bind(this);
  }
  shoWdialogs()
  {
    if(this.state.shoWdialog)
    {
      this.setState(
        {
          shoWdialog : false
        }
      )
    }else
    {
      this.setState(
        {
          shoWdialog : true
        }
      )
    }
  }
 toggleCheck = id => {
    let newList = this.state.todos;
    let index = newList.findIndex(x => x.id == id);
    if (newList[index].checked) {
      newList[index].checked = false;
    } else {
      newList[index].checked = true;
    }

    this.setState({ todos: newList });
  };

  deleteTask = id => {
    let newList = this.state.todos.filter(x => x.id != id);
    this.setState({ todos: newList });
  };

  sendInput = inputText => {
    this.setState(
      {
        shoWdialog : false
      }
    )
    let newCont = this.state.cont + 1;
    let newItem = {
      id: newCont.toString(),
      todo: inputText,
      checked: false
    };
    let newList = this.state.todos;
    newList.push(newItem);
    this.setState({ todos: newList, cont: newCont });
  };

    render() {
      return (
        <View style={{ flex: 1}}>
        <Header
          centerComponent={{
            text: "Reactive ToDo's",
            style: { color: "#fff", fontSize: 20 }
          }}
          backgroundColor="#694fad"
        />
        <Nav
        screenProps={{
          todos: this.state.todos,
          toggleCheck: this.toggleCheck,
          deleteTask: this.deleteTask
        }}/>
        <ActionButton
          buttonColor="#9328B0"
          offsetY = {65}
          onPress={() => {
            this.setState({
              shoWdialog : true
            })}}
        />
        {this.state.shoWdialog  && <Dialog isVisible = {this.shoWdialogs} in = {this.sendInput}/>}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });