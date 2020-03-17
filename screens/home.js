import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import readletter from './readletter';

export default class home extends React.Component {
    state = {
        isHidden: false,
    }

    read = () =>{
        this.props.navigation.navigate("ReadLetter")
    }

    write = () =>{
        this.props.navigation.navigate("To")
    }

    show = () => {
        if (this.state.isHidden) {
            this.setState({isHidden: false})
        } else {
            this.setState({isHidden: true})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    barStyle={'light-content'}
                />

                <View>
                    <TouchableOpacity onPress={this.show}>
                        <Image
                            style={styles.logoImage}
                            source={this.state.isHidden
                                ? require('../assets/logo.png')
                                : require('../assets/logo.png')}
                        />
                    </TouchableOpacity>
                </View>

                <Image
                    source={
                        require('../assets/jieyou.png')
                    }
                    style={styles.jieyouImage}
                />

                {this.state.isHidden ? 
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.readLetter} onPress={this.read}>
                        <FontAwesome5 name='readme' color='#fff' size={45} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.writeLetter} onPress={this.write}>
                        <FontAwesome5 name='edit' color='#fff' size={45} />
                    </TouchableOpacity>
                </View>
                : 
                <View style={styles.buttonRow}>
                </View>}

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B345C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
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
    marginTop: 40,
    alignContent:'space-between',
  },
  readLetter: {
    flex: 1,
    // marginLeft: 50,
    alignItems:'center',
    // backgroundColor: '#abc',
  },
  writeLetter: {
    flex: 1,
    // alignItems:'center',
    // marginRight: 50,
    // backgroundColor: '#eee',
    alignItems:'center'
  },
});