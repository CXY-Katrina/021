import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Fire from '../fire';

export default class login extends React.Component {
    state = {
        message: "",
        time: "",
    }

    componentDidMount(){
      let message = this.props.navigation.getParam("message");
      let time = this.props.navigation.getParam("time");
      if (message === null){
        this.setState({ message: "fighting" });
      } else {
        this.setState({ message: message });
      }
      if (time === null){
        this.setState({ time: "forever" });
      } else {
        this.setState({ time: time });
      }
    }

    back = () => {
        this.props.navigation.navigate("Login")
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.message}>
                        {"Time: " + this.state.time + "\n\n" 
                        + "Content: " + this.state.message}
                    </Text>
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
  },
  message: {
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '600',
    color: "#0B345C",
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