import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Fire from '../fire';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class writeletter extends React.Component {
    
    state = {
        message: "",
        outputText: "",
        users: [],
        title: "",
    }

    componentDidMount(){
      this.firebaseItemsLister = Fire.onUsersChange((data) => {
        data = data.val();
        let users = [];
        for (let key in data) {
          users.push({userName: key, pressStatus: false});
        }
        this.setState({ users });
      });
    }

    home = () =>{
        this.props.navigation.navigate("Home")
    }

    setResult = (users) => {
      // update users
      this.setState({ users });
      // update outputText
      let outputText = "";
      users.forEach(obj => {
        if (obj.pressStatus === true){
          outputText = outputText + "@" + obj.userName;
        }
      })
      this.setState({ outputText });
    };

    select = () =>{
        this.props.navigation.navigate("Select",{ currentResult: this.state.users, setResult: this.setResult });
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
        if (titleIsEmpty(this.state.title)){
          Alert.alert("Error",
              "Title is empty",);
        } else if (messageIsEmpty(this.state.message)){
          Alert.alert("Error",
              "Message is empty",);
        } else if (toIsEmpty(this.state.outputText)){
          Alert.alert("Error",
              "Please select readers",);
        } else {
          Fire.addMessage(this.state.users, this.state.message, time, this.state.title);
          Alert.alert("Success",
              "Your letter has been sent",);
        }
    }

    // componentWillUnmount() {
    //   Fire.off(this.firebaseItemsLister);
    // }

    render() {
        return (
          <SafeAreaView style={styles.container}>
                <View style={styles.abovePageView}>
                    <View style={styles.leftColumn}>
                        <View style={styles.toSelectView}>
                            <View style={styles.toView}>
                                <Text style={styles.to}>
                                  To:
                                </Text>
                            </View>

                            <View style={styles.selectView}>
                                <TouchableOpacity style={styles.select} onPress={this.select}>
                                  <FontAwesome5 name='list' color='#fff' size={35} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.outputView}>
                          <ScrollView>
                              <Text style={styles.output}>
                                  {this.state.outputText}
                              </Text>
                          </ScrollView>
                        </View>
                    </View>

                    <View style={styles.rightColumn}>
                        <Image
                            source={
                            require('../assets/logo.png')
                        }
                        style={styles.logoImage}
                        resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={styles.pageView}>
                    <View style={styles.titleContentView}>
                      <View style={styles.titleView}>
                        <View><Text style={styles.titleText}>Title:</Text></View>

                        <View>
                          <TextInput style={styles.titleInput} 
                                      placeholder="Enter your title..." 
                                      maxLength={25}
                                      onChangeText={title => {this.setState({title});
                                      }}
                                      value={this.state.title}
                          />
                        </View>
                      </View>

                      <View style={styles.contentView}>
                        <Text style={styles.titleText}>Content:</Text>
                        <ScrollView keyboardDismissMode='on-drag'>
                              <TextInput style={styles.content} 
                                    placeholder="I want to say something..." 
                                    multiline={true}
                                    numberOfLines={1000}
                                    onChangeText={message => {this.setState({message});
                                    }}
                                    value={this.state.message}
                              />
                          </ScrollView>
                      </View>
                    </View>

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
          </SafeAreaView>
        );
    }
}

function titleIsEmpty(title){
  if (title === ""){
    return 1;
  }
  return 0;
}

function messageIsEmpty(message){
  if (message === ""){
    return 1;
  }
  return 0;
}

function toIsEmpty(outputText){
  if (outputText === ""){
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
    justifyContent: 'center',
  },
  abovePageView: {
    flex: 2,
    flexDirection: "row",
    width: "90%"
  },
  toSelectView: {
    flex: 1,
    flexDirection: "row",
  },
  leftColumn: {
    flex: 2.5,
    flexDirection: 'column'
  },
  rightColumn: {
    flex: 1,
    marginLeft: 10,
  },
  toView: {
    flex: 1,
  },
  selectView: {
    flex: 2,
    marginLeft: 10,
  },
  to: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "700",
  },
  logoImage: {
    height: '100%',
    width: '100%',
  },
  select: {
    width: 120,
    marginTop: 5,
  },
  selectText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "500",
    alignSelf: 'center'
  },
  outputView: {
    flex: 1,
    marginLeft: 20,
  },
  output: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "500",
  },
  pageView: {
    flex: 10,
    backgroundColor: "#FFD564",
    marginTop: 10,
    width: '90%',
    flexDirection: 'column'
  },
  titleContentView: {
    flex: 11,
    width: '100%',
    backgroundColor: "#FFD564",
    marginTop: 10,
  },
  titleView: {
    flex: 1,
    flexDirection: 'row',
  },
  titleText: {
    color: "#0B345C",
    fontSize: 25,
    fontWeight: "700",
    marginLeft: 10,
    marginRight: 10,
  },
  titleInput: {
    color: "#0B345C",
    fontSize: 20,
    borderBottomWidth: 2,
    borderColor: '#0B345C',
    fontWeight: '500',
  },
  contentView: {
    flex: 15,
    marginTop: 10,
  },
  content: {
    color: "#0B345C",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 2,
    borderColor: '#0B345C',
    fontWeight: '500',
  },
  sendView: {
    flex: 1.5,
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
    flex: 1,
  },
  home: {
    marginTop: 10,
  },
});