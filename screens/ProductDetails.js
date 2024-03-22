import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../store/productSlice";
import React from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductDetails() {
  const element = useSelector((state) => state.products.product);
  console.log("this is element", element);
  const dispatch = useDispatch();
  const  {params} = useRoute();
  console.log("this is id", params.id);
  useEffect(() => {
    dispatch(getOneProduct(params.id));
  }, []);
  return (
    <View
      style={{ display: "flex", flexDirection: "row", gap: 20, padding: 10 }}
    >
      <Box alignItems="center">
        <Box
          maxW="480"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={12 / 9}>
              <Image
                source={{
                  uri: element.image,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack
            p="4"
            space={3}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Stack space={2}>
              <Heading size="md" ml="-1">
                <Text>{element.name}</Text>
              </Heading>
            </Stack>
            <Stack style={{ alignItems: "center", justifyContent: "center" }}>
              <Text bold>
                A cheeseburger is a sandwich consisting of a ground beef patty,
                melted cheese, lettuce, tomato, and condiments sandwiched
                between two hamburger buns. It's a popular dish in American
                cuisine, offering a blend of savory, sweet, and spicy flavors in
                every bite.
              </Text>
            </Stack>
            <Heading size="md" ml="-1">
              <Text>$11,99</Text>
            </Heading>
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: "deeppink",
                  color: "white",
                  height: 30,
                  width: 150,
                  textAlign: "center",
                }}
              >
                Add to cart
              </Text>
            </TouchableOpacity>
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
    </View>
  );
}
