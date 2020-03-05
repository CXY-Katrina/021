import firebase from 'firebase'

class Fire {
    constructor(){
        this.init()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBWy_Ndz-IWedGY5380IqPHq-pUz4ApbLs",
                authDomain: "react-native-466f8.firebaseapp.com",
                databaseURL: "https://react-native-466f8.firebaseio.com",
                projectId: "react-native-466f8",
                storageBucket: "react-native-466f8.appspot.com",
                messagingSenderId: "592472302430",
                appId: "1:592472302430:web:b21199296d3da62878a5cf",
                measurementId: "G-ZGHK2FL901"
              })
        }
    };

    onUsersChange(callback) {
        firebase.database().ref('Users/').on('value', callback);
    }

    onMessagesChange(callback) {
        firebase.database().ref('Messages/').on('value', callback);
    }

    addMessage(to, message, time, title) {
        firebase.database().ref('Messages/'+time).set({
            to: to,
            message: message,
            status: false,
            title: title,
        });
    }

    updateMessageStatus(time) {
        firebase.database().ref('Messages/' + time).update({
            status: true,
        });
    }
}

export default new Fire();