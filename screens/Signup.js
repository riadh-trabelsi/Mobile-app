import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Signup() {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={{ height: 250, width: 300, top: -50, borderRadius: 100 }}
          source={{
            uri: "https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg",
          }}
        />
        <View style={styles.center}>
          <Text style={{ color: "deeppink", fontSize: 30 }}>
            Tunisian Burger
          </Text>
          <Text>Register new Account</Text>
          <TextInput style={styles.input} placeholder="email" />
          <TextInput style={styles.input} placeholder="password" />

          <Text
            style={{
              backgroundColor: "deeppink",
              height: 30,
              width: 150,
              textAlign: "center",
            }}
          >
            Register
          </Text>

          <Text>I forget my password. Click here to reset</Text>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("login");
            }}
          >
        
            <Text style={{ borderWidth: 2 }}>Have already account? Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigate.navigate("home")}} >
           
           <Text style={{ borderWidth: 2 }}>home</Text>
         </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 20,
    width: 300,
    borderColor: "black",
    backgroundColor: "silver",
    padding: 10,
    margin: 10,
    borderRadius: 100,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",

    flex: 1,
  },
  center: {
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
