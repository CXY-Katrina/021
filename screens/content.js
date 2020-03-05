import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default class content extends React.Component {

  state = {
    users: [],
    subject: "",
    focus: false,
    message: "",
  }

  componentDidMount() {
    let users = this.props.navigation.getParam("users");
    this.setState({ users });
    let subject = this.props.navigation.getParam("subject");
    this.setState({ subject });
    let message = this.props.navigation.getParam("message");
    console.log(message)
    this.setState({ message });
  }

  confirm = () => {
    this.props.navigation.navigate("Letter", { users: this.state.users, subject: this.state.subject, message: this.state.message })
  }

  render() {
    const b = (
      <>
        <View style={styles.toView}>
              <Text style={styles.toText}>Content: </Text>
            </View>
            
            <View style={styles.pageView}>
              <TextInput
                style={styles.input}
                scrollEnabled={true}
                placeholder="I want to say something..."
                placeholderTextColor="#514E5A"
                multiline={true}
                numberOfLines={50}
                defaultValue={this.state.message}
                onChangeText={message => {
                  this.setState({ message });
                }}
                onFocus={() => this.setState({ focus: true })}
                onBlur={() => this.setState({ focus: false })}
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
    width: '95%',
    height: '95%',
    color: '#D81B60',
    fontWeight: '600',
    fontSize: 20,
    textAlignVertical: "top"
  },
  confirmView: {
    height: '20%',
  },
  confirm: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});