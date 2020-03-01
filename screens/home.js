import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import readletter from './readletter';

export default class home extends React.Component {
    state = {
        text: "",
        name: "",
    }

    read = () =>{
        this.props.navigation.navigate("ReadLetter",{name: this.state.name})
    }

    write = () =>{
        this.props.navigation.navigate("WriteLetter",{name: this.state.name})
    }


    
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    barStyle={'light-content'}
                />

                <Image
                    source={
                        require('../assets/logo.png')
                    }
                    style={styles.logoImage}
                    resizeMode="contain"
                />

                <Image
                    source={
                        require('../assets/jieyou.png')
                    }
                    style={styles.jieyouImage}
                />

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.readLetter} onPress={this.read}>
                        <Text style={styles.readText}>
                            Read Letter
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.blank}>
                    </View>

                    <TouchableOpacity style={styles.writeLetter} onPress={this.write}>
                        <Text style={styles.readText}>
                            Write Letter
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
    backgroundColor: '#0B345C'
  },
  logoImage: {
    marginTop: 200,
    height: 250,
    width: 250,
    alignSelf: 'center'
  },
  jieyouImage: {
    marginTop: 50,
    height: 100,
    width: 400,
    alignSelf: 'center'
  },
  buttonRow: {
    height: 50,
    flexDirection: "row",
    backgroundColor: '#0B345C',
    marginTop: 20,
  },
  readLetter: {
    flex: 1,
    height: 35,
    width: 140,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 30,
    marginLeft: 45
  },
  readText:{
      color: '#fff',
      fontSize: 20,
      alignSelf: 'center',
      padding: 6,
      fontWeight: "700"
  },
  writeLetter: {
    flex: 1,
    height: 35,
    width: 140,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 30,
    marginRight: 30,
  },
  blank: {
    flex: 0.8
  }
});