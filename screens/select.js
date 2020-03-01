import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class select extends React.Component {
    componentDidMount() {
        this.setState({ output: this.props.navigation.getParam('currentResult', []) });
        this.setState({ text: this.props.navigation.getParam('currentResult', []).join(', ') });
    }
    state = {
        name: "",
        pressStatusA: false,
        pressStatusB: false,
        pressStatusC: false,
        textA: "A",
        textB: "B",
        textC: "C",
        output: [],
        text: ""
    }

    home = () =>{
        this.props.navigation.navigate("Home",{name: this.state.name})
    }

    confirm = () =>{
        this.props.navigation.getParam('setResult')(this.state.output);
        this.props.navigation.goBack();
    }

    nameA = () =>{
        if (this.state.pressStatusA == false) {
            this.setState({ pressStatusA: true });

            var out = this.state.output;
            out.push(this.state.textA);
            this.setState({ output: out });

        } else {
            this.setState({ pressStatusA: false });

            var out = this.state.output;
            out.splice( out.indexOf(this.state.textA), 1 );
            this.setState({ output: out });

        }
    }

    nameB = () =>{
        if (this.state.pressStatusB == false) {
            this.setState({ pressStatusB: true });

            var out = this.state.output;
            out.push(this.state.textB);
            this.setState({ output: out });
            
            var t = "";
            t = this.state.output.join(", ");
            this.setState({ text: t });
        } else {
            this.setState({ pressStatusB: false });

            var out = this.state.output;
            out.splice( out.indexOf(this.state.textB), 1 );
            this.setState({ output: out });

            var t = "";
            t = this.state.output.join(", ");
            this.setState({ text: t });
        }
    }

    nameC = () =>{
        if (this.state.pressStatusC == false) {
            this.setState({ pressStatusC: true });

            var out = this.state.output;
            out.push(this.state.textC);
            this.setState({ output: out });
            
            var t = "";
            t = this.state.output.join(", ");
            this.setState({ text: t });
        } else {
            this.setState({ pressStatusC: false });

            var out = this.state.output;
            out.splice( out.indexOf(this.state.textC), 1 );
            this.setState({ output: out });

            var t = "";
            t = this.state.output.join(", ");
            this.setState({ text: t });
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scrollView}>
                <ScrollView>
                    <View style={styles.row}>
                        <TouchableOpacity style={this.state.pressStatusA
                                                    ? styles.namePress
                                                    : styles.name}
                                          onPress={this.nameA}>
                            <Text style={this.state.pressStatusA
                                            ? styles.nameTextPress
                                            : styles.nameText}>
                                {this.state.textA}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.pressStatusB
                                                    ? styles.namePress
                                                    : styles.name}
                                          onPress={this.nameB}>
                            <Text style={this.state.pressStatusB
                                            ? styles.nameTextPress
                                            : styles.nameText}>
                                {this.state.textB}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.pressStatusC
                                                    ? styles.namePress
                                                    : styles.name}
                                          onPress={this.nameC}>
                            <Text style={this.state.pressStatusC
                                            ? styles.nameTextPress
                                            : styles.nameText}>
                                {this.state.textC}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                </View>

                <View style={styles.outputView}>
                    <ScrollView>
                        <Text style={styles.output}>
                            {this.state.output.join(", ")}
                        </Text>
                    </ScrollView>
                </View>

                <View style={styles.confirmed}>
                    <TouchableOpacity style={styles.confirm} onPress={this.confirm}>
                        <Text style={styles.confirmText}>
                            Confirm
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
    justifyContent: 'center',
    flexDirection: 'column'
  },
  scrollView: {
      marginTop: 50,
      flex: 15,
  },
  outputView: {
    flex: 3,
  },
  row: {
    height: 50,
    width: 350,
    flexDirection: "row",
    backgroundColor: '#0B345C',
  },
  confirmed: {
    flex: 1,
    marginBottom: 20
  },
  confirm: {
    height: 40,
    width: 120,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 30,
    alignSelf: 'center',
    padding: 2
  },
  confirmText:{
      color: "#fff",
      fontSize: 20,
      fontWeight: "600",
      alignSelf: 'center',
  },
  namePress: {
    flex: 1,
    height: 35,
    width: 120,
    borderWidth: 4,
    borderColor: "#D81B60",
    borderRadius: 30,
    padding: 2,
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
    // borderWidth: 4,
    // borderColor: "#fff",
    // borderRadius: 30,
    padding: 2,
    marginLeft: 7,
    marginRight: 7,
  },
  nameText:{
      color: '#fff',
      fontSize: 20,
      fontWeight: "600",
      alignSelf: 'center',
  },
  output:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});