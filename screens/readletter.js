import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

export default class readletter extends React.Component {
    state = {
        name: ""
    }

    home = () =>{
        this.props.navigation.navigate("Home",{name: this.state.name})
    }

    letter = () => {
        this.props.navigation.navigate("Login",{name: this.state.name})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Dan'},
                        {key: 'Dominic'},
                        ]}
                    renderItem={({item}) => 
                        <TouchableOpacity style={styles.touch}
                                          onPress={this.letter}>
                            <Text style={styles.item}>{"message: " + item.key}</Text>
                            <Text style={styles.status}>{"read"}</Text>
                        </TouchableOpacity>}
                />
                </View>
                

                <View style={styles.buttonRow}>
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
    alignItems: 'center',
  },
  contentView: {
    flex: 11,
    marginTop: 50,
  },
  touch: {
    height: 100,
    width: 370,
    // borderWidth: 4,
    // borderColor: "#fff",
    backgroundColor: "#FFD564",
    marginTop: 10,
  },
  item: {
    flex: 1,
    color: '#0B345C',
    fontSize: 25,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: "600",
  },
  status: {
    flex: 1,
    color: '#0B345C',
    fontSize: 25,
    marginRight: 20,
    fontWeight: "600",
    alignSelf: 'flex-end'
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