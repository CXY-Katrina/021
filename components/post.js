import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Post (props) {

      return (
        <View style={styles.container}>
            <View style={styles.pageView}>

                <View style={styles.subjectView}>
                    <Text style={styles.subject}>
                        {props.title}
                    </Text>
                </View>

                <View style={styles.messageView}>
                    <Text style={styles.message}>
                        {props.message}
                    </Text>
                </View>

                <View style={styles.timeView}>
                    <Text style={styles.time}>
                        {props.time}
                    </Text>
                </View>

            </View>
        </View>
      );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageView: {
        width: '90%',
        backgroundColor: "#FFD564",
        marginTop: 10,
        flexDirection: 'column',
        borderRadius: 90/10,
    },
    subjectView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        // backgroundColor: '#abc',
    },
    subject: {
        flex: 1,
        color: '#0B345C',
        fontSize: 25,
        fontWeight: "600",
    },
    timeView: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
        // backgroundColor: '#abc',
    },
    time: {
        flex: 1,
        color: '#0B345C',
        fontSize: 20,
        fontWeight: "400",
    },
    messageView: {
        width: '90%',
        marginTop: 10,
        alignSelf:'center',
        // backgroundColor: '#abc',
    },
    message: {
        flex: 1,
        color: '#0B345C',
        fontSize: 20,
        fontWeight: "600",
    },
})