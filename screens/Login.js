import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#e0e1e1" }}>
      <View style={styles.container}>
        <Image
          style={{ height: 250, width: 300, top: 0, borderRadius:100, }}
          source={{
            uri: "https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg",
          }}
        />
        <View style={styles.center}>
          <Text style={{ color: "deeppink", fontSize: 30, textAlign:"center" }}>
           Tunisian Burger
          </Text>
          <Text style={{textAlign:"center"}}>sign in to your account </Text>
          <TextInput style={styles.input} placeholder="email" />
          <AntDesign name="user" size={20} color="black" style={{top:-50, left:-120}} />
          <TextInput style={styles.input} placeholder="password" />
          <MaterialIcons name="password" size={20} color="black" style={{top:-50, left:-120}} />
         
          <Text style={{ backgroundColor: "deeppink",  borderRadius: 10,height: 25, width: 150, textAlign:"center" }}>
            Login
          </Text>

          <Text style={{color:"blue"}}>Forget the password. Click here to reset</Text>
          <TouchableOpacity onPress={()=>{navigate.navigate("register")}} >
           
            <Text style={{ backgroundColor: "deeppink" , borderRadius: 10, height:25,width:150,textAlign:"center" }}>Register New Account</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigate.navigate("home")}} >
           
           <Text style={{ backgroundColor: "deeppink" ,height:25,width:60, borderRadius: 10,textAlign:"center"}}>Home</Text>
         </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
 input: {
    height: 40,
    width: 300,
    borderColor: "black",
    backgroundColor: "white",
    padding: 20,
    margin: 0,
    borderRadius:100,
    color:"white"

  }, 
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
   
    

    flex: 1,
  },
  center: {
    gap:20,
    alignItems: "center",
    justifyContent: "center",
    
  },
});
