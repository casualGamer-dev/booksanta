import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, Alert,Modal,ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import   firebase from 'firebase'
import db from '../db'
import MyHeader from '../components/Myheader'
export default class BookRequestScreen extends React.Component{
    constructor(){
        super()
        this.state={
            userID:firebase.auth().currentUser.email,
            bookName:"",
            reasonTorequest:""
        }
    }
    createUniqueID(){
        return Math.random().toString(36).substring(7)
    }
   addRequest=( bookName,reasonTorequest)=>{
    var userID=this.state.userID
    var randomRequestID=this.createUniqueID()
    db.collection("requestedBooks").add({
        userID:userID,
        bookName:bookName,
        reasonTorequest:reasonTorequest,
        requestId:randomRequestID
    })
    this.setState({
        bookName:"",
         reasonTorequest:""
    })
    return Alert.alert("book requested succesfully")
    }
    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader title="request books">
            </MyHeader>
            <KeyboardAvoidingView style={styles.keyboardstyle}>
            <TextInput style={styles.formTextInput} placeholder="enter book name "  onChangeText={(text)=>{
             this.setState({
                 bookName:text
             })
         }} value={this.state.bookName}></TextInput>
         <TextInput style={[styles.formTextInput,{height:300}]} placeholder="reason to request " multiline numberOfLines={8} onChangeText={(text)=>{
             this.setState({
                 reasonTorequest:text
             })
         }} value={this.state.reasonTorequest}></TextInput>
          <TouchableOpacity style={styles.button}onPress={()=>{this.addRequest(this.state.bookName,this.state.reasonTorequest)}}>
            <Text>REQUEST</Text>
          </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:"center",
        borderColor:"grey",
         borderRadius:10,
         borderWidth:1,
        marginTop:20,
         padding:10
     },
     button:{

        width:300,
        height:50,
        justifyContent:"center",
        alingItems:"center",
        borderRadius:25,
        backgroundColor:"red",
        shadowColor:"#000",
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.3,
        shadowRadius:10,
        elevation:16
         },
         keyboardstyle:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
         }
})