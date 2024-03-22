import { View, Text, TouchableOpacity, } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";
import { Image , TextInput,} from 'react-native';
import {  StyleSheet, ToastAndroid, Button, StatusBar } from 'react-native';

export default function ProfilScreen() {
  const navigate = useNavigation();
 
  return (
    <View style={{flex:1,backgroundColor: "#e0e1e1",}}>
          <TouchableOpacity onPress={()=>{navigate.navigate("login")}} >
      <View>
        <View style={{backgroundColor:"deeppink", alignItems:"center"}}>
          <Image
          
           source={{
             uri: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
           }}
           alt="image"
           style={{height: 200, width: 200, borderRadius: 100,}}
         />
        </View>
        
        <View style={{padding:20,}}>
          
        <Text bold style={{ fontSize: 32, alignItems:"center",textAlign:"center"}}>Edit Profile  <LottieView
            source={require("../assets/Animation - 1711124199284.json")}
            style={{ width: 50, height: 50,marginnTop:30}}
            autoPlay
            loop
          />
       </Text>
       
        <View style={{paddingTop:10,}}>
          <Text > Name</Text>
        <TextInput  placeholder="Name" style={{backgroundColor:"white",height:50,borderRadius: 100,paddingLeft:10}} />
      </View>
      <View style={{paddingTop:10,}}>
          <Text> Email</Text>
        <TextInput  placeholder="Email" style={{backgroundColor:"white",height:50,borderRadius: 100,paddingLeft:10}} />
      </View>
      <View style={{paddingTop:10,}}>
          <Text> Password</Text>
        <TextInput  placeholder="Password" style={{backgroundColor:"white",height:50,borderRadius: 100,paddingLeft:10}} />
     
      </View>
      <View style={{paddingTop:10,}}>
          <Text> Adress</Text>
        <TextInput  placeholder="Street" style={{backgroundColor:"white",height:50,borderRadius: 100,paddingLeft:10}} />
     
      </View>
      </View>
</View>
         </TouchableOpacity>
         <View style={{backgroundColor:"darkorange",width:300,borderRadius: 100,padding:10, alignItems:"center",textAlign:"center",marginLeft:50}}>
      <Button title="Edit"  />
    </View>
    </View>
  )
}
