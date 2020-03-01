import firebase from 'firebase'

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
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

    writeUserData(text, name) {
        firebase.database().ref('users/').push({
          to: text,
          message: name,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
        });
    }

    checkAuth =()=>{
        firebase.auth().onAuthStateChanged( user => {
            if (!user){
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: new Date(firebase.database.ServerValue.TIMESTAMP),
                user: item.user
            }

            this.db.push(message)
        })
    }

    parse = message => {
        const{user, text, timestamp} = message.val();
        const {key: _id} = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off(){
        this.db.off()
    }

    get db(){
        return firebase.database().ref("messages");

    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();