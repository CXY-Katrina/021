import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Selectrow from '../components/selectrow'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import Fire from '../fire';
import { TextInput } from 'react-native-gesture-handler';

export default class subject extends React.Component {

  state = {
    users: [],
    subject: "",
    focus: false,
  }

  componentDidMount() {
    let users = this.props.navigation.getParam("users");
    this.setState({ users });
    let subject = this.props.navigation.getParam("subject");
    this.setState({ subject });
  }

  confirm = () => {
    this.props.navigation.navigate("Content", { users: this.state.users, subject: this.state.subject, message: this.props.navigation.getParam("message") })
  }

  render() {
    const b = (
      <>
        <View style={styles.toView}>
          <Text style={styles.toText}>Subject: </Text>
        </View>
        <View style={styles.pageView}>
          <TextInput
            style={styles.input}
            placeholder="enter the subject here..."
            placeholderTextColor="#514E5A"
            defaultValue={this.state.subject}
            onChangeText={subject => {
              this.setState({ subject });
            }}
            maxLength={11}
          />
        </View>

        <View style={styles.confirmView}>
          <TouchableOpacity style={styles.confirm} onPress={this.confirm}>
            <FontAwesome5 name='arrow-circle-right' color='#fff' size={45} />
          </TouchableOpacity>
        </View>
      </>
    );
    const a = (
      <KeyboardAvoidingView flexDirection='column' width='100%' alignItems='center' behavior='padding'>
        {b}
      </KeyboardAvoidingView>
    );
    return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {Platform.OS === 'ios' ? a : b}
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B345C',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  toView: {
    height: '20%',
    flexDirection: 'column-reverse',
  },
  toText: {
    fontSize: 50,
    fontWeight: '800',
    color: '#fff',
  },
  pageView: {
    marginTop: 20,
    height: '60%',
    width: '90%',
    backgroundColor: '#FFD564',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    // height: 50,
    width: '80%',
    borderBottomWidth: 2,
    borderColor: '#D81B60',
    color: '#D81B60',
    fontWeight: '600',
    fontSize: 20,
  },
  confirmView: {
    height: '20%',
  },
  confirm: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});