import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Selectrow (props) {

      return (
        <View style={styles.container}>
            <TouchableOpacity style={props.pressStatus
                                    ? styles.namePress
                                    : styles.name}
                                onPress={props.press}>
                    <Text style={props.pressStatus
                                ? styles.nameTextPress
                                : styles.nameText}>
                        {props.name}
                    </Text>
            </TouchableOpacity>
        </View>
      );
  }

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    namePress: {
        flex: 1,
        height: 35,
        width: 120,
        borderWidth: 4,
        borderColor: "#D81B60",
        borderRadius: 30,
        // padding: 2,
        marginLeft: 7,
        marginRight: 7,
      },
      nameTextPress: {
        color: '#D81B60',
          fontSize: 20,
          fontWeight: "600",
          alignSelf: 'center',
      },
      name: {
        flex: 1,
        height: 35,
        width: 120,
        // padding: 3,
        marginLeft: 7,
        marginRight: 7,
        borderWidth: 4,
        borderColor: "#fff",
        borderRadius: 30,
      },
      nameText:{
          color: '#fff',
          fontSize: 20,
          fontWeight: "600",
          alignSelf: 'center',
      },
})