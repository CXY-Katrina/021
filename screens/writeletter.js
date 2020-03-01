import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Fire from '../fire';
import { FontAwesome5 } from '@expo/vector-icons';

export default class writeletter extends React.Component {
    
    state = {
        text: "",
        name: "",
        output: [],
    }
    // constructor()

    // componentDidMount() {
    //   var t = this.props.navigation.getParam('text');
    //   this.setState({ text: t });
    // }

    home = () =>{
        this.props.navigation.navigate("Home",{name: this.state.name})
    }

    setResult = (output) => {
      this.setState({ output, text: output.join(', ') });
    };

    select = () =>{
        this.props.navigation.navigate("Select",{ currentResult: this.state.output, setResult: this.setResult });
    }

    send = () => {
        Fire.writeUserData(t, this.state.name)
        Alert.alert("你的心意已被送达",
              "sent",)
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <View style={styles.s1}>
                        <View style={styles.row}>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.blank1}>
                                <Text style={styles.to}>
                                    To:
                                </Text>
                            </View>

                            <View style={styles.blank2}>
                                <TouchableOpacity style={styles.select} onPress={this.select}>
                                <Text style={styles.selectText}>
                                    Select
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.s2}>
                        <Image
                            source={
                            require('../assets/logo.png')
                        }
                        style={styles.logoImage}
                        resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={styles.outputView}>
                    <ScrollView>
                        <Text style={styles.output}>
                            {this.state.text}
                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.contentView}>
                    <View style={styles.contentView}>
                        <ScrollView style={styles.content}>
                            <TextInput style={styles.input} 
                                   placeholder="   I want to say something..." 
                                   multiline={true}
                                   numberOfLines={1000}
                                   onChangeText={name => {this.setState({name});
                                   }}
                                   value={this.state.name}
                            />
                        </ScrollView>
                    </View>

                    <View style={styles.sendView}>
                        <TouchableOpacity style={styles.send} onPress={this.send}>
                            <FontAwesome5 name='paper-plane' color='#0B345C' size={30} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.home} onPress={this.home}>
                        <Text style={styles.homeText}>
                            Home
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
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  s1: {
    flex: 3,
    flexDirection: 'column'
  },
  s2: {
    flex: 1,
    alignSelf: 'center',
    marginRight: 20
  },
  blank1: {
    flex: 1
  },
  blank2: {
    flex: 2
  },
  to: {
    fontSize: 40,
    color: "#fff",
    marginLeft: 20,
    fontWeight: "700",
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  select: {
    width: 120,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 30,
  },
  selectText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "500",
    alignSelf: 'center'
  },
  outputView: {
    flex: 0.5,
    marginTop: 20,
  },
  output: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "500",
  },
  contentView: {
    flex: 6,
    width: 370,
    backgroundColor: "#FFD564",
    marginTop: 10,
  },
  content: {
    flex: 5,
  },
  input: {
    color: "#0B345C",
    height: 700,
    fontSize: 25,
  },
  sendView: {
    flex: 0.7
  },
  send: {
    height: 35,
    width: 35,
    alignSelf: 'flex-end',
    marginRight: 20
  },
  sendText:{
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
},
  home: {
    height: 35,
    width: 120,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 30,
    alignSelf: 'center',
  },
  homeText:{
      color: '#fff',
      fontSize: 20,
      alignSelf: 'center',
  },
});