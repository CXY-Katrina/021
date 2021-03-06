import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Selectrow from '../components/selectrow'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

export default class select extends React.Component {

    state = {
        users: [],
    }

    componentDidMount(){
        let temp_out = this.props.navigation.getParam('currentResult');
        this.setState({users: temp_out});
    }

    confirm = () =>{
        let setResult = this.props.navigation.getParam('setResult');
        setResult(this.state.users);
        this.props.navigation.goBack();
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
                        <FontAwesome5 name='check-square' color='#fff' size={45} />
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
  flatListView: {
      marginTop: 20,
      flex: 17,
  },
  confirmeView: {
    flex: 1.5,
  },
  confirm: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
});