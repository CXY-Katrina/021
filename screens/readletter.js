import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Envelope from '../components/envelope'
import Post from '../components/post'
import Fire from '../fire';
import { FontAwesome5 } from '@expo/vector-icons';

export default class readletter extends React.Component {
    state = {
      messages: [],
    }

    componentDidMount(){
      this.firebaseItemsLister = Fire.onMessagesChange((data) => {
        data = data.val();
        let messages = [];
        for (let key in data) {
          let item = data[key];
          messages.push({time: key, to: item.to, message: item.message, status: item.status, title: item.title});
        }
        this.setState({ messages });
      });
    }

    home = () =>{
        this.props.navigation.navigate("Home")
    }

    pressLetter = (item) => {
        this.props.navigation.navigate("Login", { message: item })
    }
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentView}>
                  <FlatList
                      data={this.state.messages}
                      renderItem={({item}) => 
                          atAll(item.to)===1 ? 
                          <Post time={item.time} title={item.title} message={item.message} />
                          :
                          <Envelope time={item.time} 
                                  status={item.status} 
                                  pressLetter={() => this.pressLetter(item)}
                                  title={item.title}/>
                      }
                      keyExtractor={(item) => item.time}
                  />
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.home} onPress={this.home}>
                      <FontAwesome5 name='home' color='#fff' size={45} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

function atAll(to){
  for (let i=0;i<to.length;i++){
    if (to[i].userName === 'ALL' && to[i].pressStatus === true){
      return 1;
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
    flex: 12,
    marginTop: 20,
    width: '100%'
  },
  buttonRow: {
    flex: 1,
    marginTop: 10,
  },
  home: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});