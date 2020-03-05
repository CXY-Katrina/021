import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Selectrow from '../components/selectrow'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import Fire from '../fire';

export default class to extends React.Component {

    state = {
        users: [],
        subject: "",
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

    confirm = () =>{
      this.props.navigation.navigate("Subject", {users : this.state.users, subject: this.props.navigation.getParam("subject"), message: this.props.navigation.getParam("message")})
    }

    press = (item) => {
        if (item.pressStatus == false) {
            // change status
            let temp = this.state.users;
            let itemIndex = temp.findIndex( element => element === item);
            temp[itemIndex].pressStatus = true;
            this.setState({ users: temp });
        } else {
            // change status
            let temp = this.state.users;
            let itemIndex = temp.findIndex( element => element === item);
            temp[itemIndex].pressStatus = false;
            this.setState({ users: temp });
        }
    }
    
    render() {
        return (
        <SafeAreaView style={styles.container}>
                <View style={styles.toView}>
                    <Text style={styles.toText}>TO: </Text>
                </View>
                <View style={styles.flatListView}>
                    <FlatList
                    horizontal={false}
                    numColumns={3}
                    data={this.state.users}
                    renderItem={({item}) => 
                        <Selectrow pressStatus={item.pressStatus} 
                                   name={item.userName} 
                                   press={() => this.press(item)}/>
                    }
                    keyExtractor={(item) => item.userName}
                    />
                </View>

                <View style={styles.confirmeView}>
                    <TouchableOpacity style={styles.confirm} onPress={this.confirm}>
                        <FontAwesome5 name='arrow-circle-right' color='#fff' size={45} />
                    </TouchableOpacity>
                </View>
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
  flatListView: {
      marginTop: 20,
      height: '60%',
  },
  confirmeView: {
    height: '20%',
  },
  confirm: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});