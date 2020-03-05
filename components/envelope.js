import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Envelope (props) {

      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableView}
                              onPress={props.pressLetter}>
                <View style={styles.envelopView}>
                    {props.status ? 
                    <FontAwesome5 name='envelope-open-text' color='#0B345C' size={60} />
                    :
                    <FontAwesome5 name='envelope' color='#0B345C' size={60} />
                }
                </View>

                <View style={styles.textView}>
                    <Text style={styles.title}>
                        {props.title}
                    </Text>
                    <Text style={styles.time}>
                        {props.time}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableView: {
        height: 90,
        width: '90%',
        backgroundColor: "#FFD564",
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 90/10,
    },
    envelopView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: '30%'
    },
    textView: {
        flex: 4,
        flexDirection: 'column',
    },
    title: {
        flex: 1,
        color: '#0B345C',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        fontWeight: "600",
    },
    time: {
        flex: 1,
        color: '#0B345C',
        fontSize: 18,
        marginRight: 20,
        fontWeight: "400",
        alignSelf: 'flex-end'
    },
})