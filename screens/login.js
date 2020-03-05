import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Fire from '../fire';

export default class login extends React.Component {
    state = {
        password: "",
        focus: false,
        users: [],
        oneMessage: [],
    }

    componentDidMount(){
      let message = this.props.navigation.getParam("message");
      this.setState({ oneMessage: message });

      this.firebaseItemsLister = Fire.onUsersChange((data) => {
        data = data.val();
        let users = [];
        for (let key in data) {
          users.push({userName: key, password: data[key]});
        }
        this.setState({ users });
      });
    }

    back = () => {
        this.props.navigation.navigate("ReadLetter")
    }

    signIn = () => {
      if (checkAuth(this.state.oneMessage.to, this.state.password, this.state.users) === 1) {
        // update status
        let oneMessage = this.state.oneMessage;
        oneMessage.status = true;
        Fire.updateMessageStatus(this.state.oneMessage.time);

        this.props.navigation.navigate("Read", {message: this.state.oneMessage.message, time: this.state.oneMessage.time});
      } else {
        this.props.navigation.navigate("Read", {message: null, time: null});
      }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <KeyboardAvoidingView width='100%' behavior='padding'>
                      <View alignItems='center'><Text style={styles.headerText}>Enter Your Password</Text></View>
                      <View alignItems='center'>
                        <TextInput
                          style={this.state.focus
                            ? styles.inputFocus
                            : styles.input}
                          placeholder="Password"
                          onChangeText={password => {
                            this.setState({ password });
                          }}
                          onFocus={() => this.setState({ focus: true })}
                          onBlur={() => this.setState({ focus: false })}
                          maxLength={30}
                          value={this.state.username}
                        />
                      </View>
                      <View style={styles.signInView}>
                        <TouchableOpacity
                          style={styles.signInButton}
                          onPress={this.signIn}>
                          <Text style={styles.signInText}>Sign In</Text>
                        </TouchableOpacity>
                      </View>
                    </KeyboardAvoidingView>
                </View>
                

                <View style={styles.backView}>
                    <TouchableOpacity style={styles.backButton} onPress={this.back}>
                      <FontAwesome5 name='sign-out-alt' color='#fff' size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function checkAuth(to, password, users) {
  let i = 0;
  let j = 0;
  for (i = 0; i < to.length; i++){
    if (to[i].pressStatus === true) {
      for (j = 0; j < users.length; j++){
        if (users[j].userName === to[i].userName){
          if (users[j].password === password){
            return 1;
          }
        }
      }
    }
  }
  return 0;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B345C',
    alignItems: 'center',
  },
  contentView: {
    height: '90%',
    width: '90%',
    backgroundColor: "#FFD564",
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '800',
    // color: '#514E5A',
    color: '#0B345C',
  },
  input: {
    marginTop: 30,
    height: 50,
    width: '80%',
    borderBottomWidth: 2, 
    borderColor: '#514E5A',
    color: '#514E5A',
    fontWeight: '600',
    fontSize: 20,
  },
  inputFocus: {
    marginTop: 30,
    height: 50,
    width: '80%',
    borderBottomWidth: 2, 
    borderColor: '#D81B60',
    color: '#D81B60',
    fontWeight: '600',
    fontSize: 20,
  },
  signInView: {
    alignItems: 'center',
    marginTop: 50,
  },
  signInButton: {
    height: 40,
    width: 150,
    borderRadius: 70 / 2,
    backgroundColor: '#D81B60',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signInText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backView: {
    flexDirection: "row",
    marginTop: 10,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotateY: '180deg' }],
  },
});