import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'


export default class SettingsScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId : "",
            firstName:"",
            lastName:"",
            address:"",
            contact:"",
            docId:""
        }
    }

    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email
        db.collection('users').where('emailId' , '==' , email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                console.log(data);
                this.setState({
                    emailId:data.emailId,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    address:data.address,
                    contact:data.contact,
                    docId:doc.id
                })
            })
        })

    }

    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId).update({
            'first_name' : this.state.firstName,
            'last_name' : this.state.lastName,
            'address' : this.state.address,
            'contact' : this.state.contact
        })
        Alert.alert('Profile updated successfully');
        console.log('Profile updated successfully')
    }


    componentDidMount(){
        this.getUserDetails();
    }


    render(){
        return(
            <View style={styles.container}>
                <MyHeader title="Settings Screen" navigation={this.props.navigation}/>

                <View stlye={styles.formContainer}>
                <TextInput
                            style={styles.formTextInput}
                            placeholder="First Name"
                            maxLength={12}
                            onChangeText={(text)=>{
                                this.setState({
                                    firstName:text
                                })
                            }}
                            value={this.state.firstName}/>

                            <TextInput
                                style={styles.formTextInput}
                                placeholder="Last Name"
                                maxLength={12}
                                onChangeText={(text)=>{
                                    this.setState({
                                        lastName:text
                                    })
                            }}
                            value={this.state.lastName}/>

                            <TextInput
                            style={styles.formTextInput}
                            placeholder="Contact"
                            maxLength={10}
                            keyboardType="numeric"
                            onChangeText={(text)=>{
                                this.setState({
                                    contact:text
                                })
                            }}
                            value={this.state.contact}/>

                            <TextInput
                            style={styles.formTextInput}
                            placeholder="Address"
                            multiline={true}
                            onChangeText={(text)=>{
                                this.setState({
                                    address:text
                                })
                            }}
                            value={this.state.address}/>

                            <TouchableOpacity style={styles.button} onPress={()=>{
                                this.updateUserDetails();
                            }}>
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#87ceeb"
    },
    formContainer:{
        flex:1,
        alignItems:'center',
        width:'100%'
    },
    formTextInput:{
        width:'75%',
        height:35,
        alignSelf:"center",
        borderColor:"white",
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        backgroundColor:'#779ecb',
    },
    buttonText:{
        color:"white",
        fontSize:20,
        fontWeight:200
    }
})