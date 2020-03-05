import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Fire from '../fire';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class letter extends React.Component {
    
    state = {
        users: [],
        subject: "",
        message: "",
        outputText: "",
    }

    componentDidMount(){
        let users = this.props.navigation.getParam("users");
        this.setState({ users });
        let subject= this.props.navigation.getParam("subject");
        this.setState({ subject });
        let message = this.props.navigation.getParam("message");
        this.setState({ message });

        // update outputText
        let outputText = "";
        users.forEach(obj => {
            if (obj.pressStatus === true){
            outputText = outputText + "@" + obj.userName;
            }
        })
        this.setState({ outputText });
    }

    modifyTo = () => {
        this.props.navigation.navigate("To", {indicator: true, subject: this.state.subject, message: this.state.message});
    }

    modifySubject = () => {
        this.props.navigation.navigate("Subject", {subject: this.state.subject, message: this.state.message});
    }

    modifyContent = () => {
        this.props.navigation.navigate("Content");
    }

    home = () =>{
        this.props.navigation.navigate("Home")
    }

    send = () => {
        let date = new Date().getDate(); //Current Date
        if (date < 10){
          date = "0" + date;
        }
        let month = new Date().getMonth() + 1; //Current Month
        if (month < 10){
          month = "0" + month;
        }
        let year = new Date().getFullYear(); //Current Year
        let hour = new Date().getHours(); //Current Hours
        if (hour < 10){
          hour = "0" + hour;
        }
        let min = new Date().getMinutes(); //Current Minutes
        if (min < 10){
          min = "0" + min;
        }
        let sec = new Date().getSeconds(); //Current Seconds
        if (sec < 10){
          sec = "0" + sec;
        }
        let time = year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
        if (subjectIsEmpty(this.state.subject)){
          Alert.alert("Error",
              "Subject is empty",);
        } else if (messageIsEmpty(this.state.message)){
          Alert.alert("Error",
              "Message is empty",);
        } else if (toIsEmpty(this.state.outputText)){
          Alert.alert("Error",
              "Please select readers",);
        } else {
          Fire.addMessage(this.state.users, this.state.message, time, this.state.subject);
          Alert.alert("Success",
              "Your letter has been sent",);
        }
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.pageView}>
            <SafeAreaView height='90%' alignItems='center'>
              <View style={styles.imageView}>
                <Image
                  source={
                    require('../assets/logo-dark.png')
                  }
                  style={styles.logoImage}
                  resizeMode='contain'
                />
              </View>

              <View width='100%' height='90%' alignItems='center'>
                <ScrollView width='90%'>
                  <View flexDirection='row'>
                    <Text style={styles.titleText}>To: </Text>
                    <TouchableOpacity onPress={this.modifyTo}>
                      <FontAwesome5 name='edit' color='#0B345C' size={30} />
                    </TouchableOpacity>
                  </View>

                  <View width='90%' alignSelf='center' marginTop={10} >
                    <Text style={styles.outputText}>{this.state.outputText}</Text>
                  </View>

                  <View marginTop={10} flexDirection='row'>
                    <Text style={styles.titleText}>Subject: </Text>
                    <TouchableOpacity onPress={this.modifySubject}>
                      <FontAwesome5 name='edit' color='#0B345C' size={30} />
                    </TouchableOpacity>
                  </View>

                  <View width='90%' alignSelf='center' marginTop={10} >
                    <Text style={styles.outputText}>{this.state.subject}</Text>
                  </View>

                  <View marginTop={10} flexDirection='row'>
                    <Text style={styles.titleText}>Content: </Text>
                    <TouchableOpacity onPress={this.modifyContent}>
                      <FontAwesome5 name='edit' color='#0B345C' size={30} />
                    </TouchableOpacity>
                  </View>

                  <View width='90%' alignSelf='center' flex={1} marginTop={10}>
                    <Text style={styles.outputText}>{this.state.message}</Text>
                  </View>

                </ScrollView>
              </View>

            </SafeAreaView>


            <View style={styles.sendView}>
              <TouchableOpacity style={styles.send} onPress={this.send}>
                <FontAwesome5 name='paper-plane' color='#fff' size={35} />
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.homeView}>
            <TouchableOpacity style={styles.home} onPress={this.home}>
              <FontAwesome5 name='home' color='#fff' size={45} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}

function subjectIsEmpty(title){
  if (title === "" || title === undefined){
    return 1;
  }
  return 0;
}

function messageIsEmpty(message){
  if (message === "" || message === undefined){
    return 1;
  }
  return 0;
}

function toIsEmpty(outputText){
  if (outputText === "" || outputText === undefined){
    return 1;
  }
  return 0;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B345C',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageView: {
    height: '90%',
    width: '90%',
    flexDirection: 'column',
    backgroundColor: '#FFD564',
  },
  imageView: {
    height: '18%',
    width: '100%',
    alignItems: 'center',
  },
  logoImage: {
    height: '100%',
  },
  titleText: {
    fontSize: 30,
    color: "#0B345C",
    fontWeight: "700",
  },
  outputText: {
    fontSize: 20,
    color: "#2163A8",
    fontWeight: "500",
  },
  sendView: {
    height: '10%',
    justifyContent: 'center'
  },
  send: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#D81B60',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  homeView: {
    height: '10%',
    width: '90%',
    alignItems: 'center',
  },
  home: {
    marginTop: 10,
  },
});