import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class login extends React.Component {
    state = {
        name: "",
        password: ""
    }

    Back = () => {
        this.props.navigation.navigate("ReadLetter",{name: this.state.name})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <TextInput style={styles.input} 
                                   placeholder="Enter your password" 
                                   onChangeText={password => {this.setState({password});
                                   }}
                                   value={this.state.password}>

                    </TextInput>
                </View>
                

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.home} onPress={this.Back}>
                        <Text style={styles.homeText}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B345C',
    alignItems: 'center',
  },
  contentView: {
    flex: 11,
    width: 370,
    backgroundColor: "#FFD564",
    marginTop: 70,
  },
  input: {
    color: "#0B345C",
    height: 50,
    fontSize: 25,
    alignSelf: 'center',
    borderColor: '#0B345C',
    borderWidth: 3,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  home: {
    // flex: 1,
    height: 35,
    width: 120,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 30,
  },
  homeText:{
      color: '#fff',
      fontSize: 20,
      alignSelf: 'center',
  },
});