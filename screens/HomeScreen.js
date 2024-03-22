import React from "react";
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { ImageBackground } from "react-native";
import {Dimensions} from 'react-native';
import {
  Box,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { VStack, Input, Icon } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { fetchingProducts } from "../store/productSlice";

export default function HomeScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  const productSlice = useSelector((state) => state.products);
  console.log("this is products", productSlice.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingProducts());
    console.log("babam");
  }, [dispatch]);
  return (
    <View style={{ gap: 10, backgroundColor: "#e0e1e1" }}>
      <ImageBackground
        source={{
          uri: "https://thumbs.dreamstime.com/t/hamburger-avec-le-d%C3%A9licieux-petit-drapeau-tunisien-sur-eux-un-cure-dent-rotation-des-hamburgers-d%C3%A9licieuse-juteuse-burger-204767389.jpg",
        }}
        style={{ width: "100%", height: 200 }}
      >
        <View style={{ padding: 10, top: 10 }}>
          <Text bold style={{ fontSize: 22, color: "white" }}>
            Merhba to Tunisian Burger <LottieView
            source={require("../assets/Animation - 1711115139106.json")}
            style={{ width: 100, height: 100, paddingLeft:650 }}
            autoPlay
            loop
          />
          </Text>
      
          <Text style={{ padding: 5 , color:"white" }}>Let's get your order</Text>

          <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="Search our delicious burger"
              width="100%"
              borderRadius="4"
              py="3"
              px="1"
              fontSize="14"
              backgroundColor={"white"}
              rounded={"md"}
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
            />
          </VStack>
        </View>
      </ImageBackground>
      
      <FlatList
        style={{ marginBottom: 0, paddingBottom: 50, gap: 20 }}
        data={productSlice.products}
        horizontal={true}
        renderItem={({ item }) => (
          <Box alignItems="center">
            <Box
              maxW="140"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "deeppink",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "gray.50",
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    alt="image"
                  />
                </AspectRatio>
                <Stack
                  space={2}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <View size="md" ml="-1">
                    <Text>{item.name}</Text>
                    <Text>$ {item.price}</Text>
                  </View>
                </Stack>
              </Box>
              <Stack
                p="1"
                space={2}
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                
                <Stack
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome name="play-circle-o" size={24} color="black" />
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        style={{ top:0.004* windowHeight, }}
        data={productSlice.products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(`productdetails`, { id: item.id })
            }
          >
            <Box alignItems="center">
              <Box
               height="400"
               width="300"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "deeppink",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box>
                  <AspectRatio w="100%" ratio={11 / 9}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
                <Stack
                  p="4"
                  space={3}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Stack space={2}>
                    <View size="md" ml="-1">
                      <Text>{item.name}</Text>
                      <Text>{item.price}</Text>
                    </View>
                  </Stack>
                  <Stack
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        backgroundColor: "deeppink",
                        color: "white",
                        height: 30,
                        width: 150,
                        textAlign: "center",
                      }}
                    >
                      Details
                    </Text>
                  </Stack>
                  <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="space-between"
                  >
                    <HStack alignItems="center"></HStack>
                  </HStack>
                </Stack>
              </Box>
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    borderColor: "black",
    padding: 20,
    margin: 10,
    color: "white",
    backgroundColor: "silver",
  },
});
