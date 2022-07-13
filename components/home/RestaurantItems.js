import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialsCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const LocalRestaurants = [
  {
    name: "Indian Food",
    image_url:
      "https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg",
    categories: ["Indian", "Comfort Food"],
    price: "$$",
    reviews: 400,
    rating: 3,
  },
  {
    name: "Chinese Food",
    image_url:
      "http://cdn.cnn.com/cnnnext/dam/assets/160325033254-hk-dim-sum-fook-lam-moon.jpg",
    categories: ["Chinese", "Soul Food"],
    price: "$",
    reviews: 300,
    rating: 3.5,
  },
  {
    name: "Korean Food",
    image_url:
      "https://www.thespruceeats.com/thmb/xGusGYYmKSt0reKSB31KJwXkwtE=/3060x2040/filters:no_upscale():max_bytes(150000):strip_icc()/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg",
    categories: ["Korean", "Fast Food"],
    price: "$$$$",
    reviews: 800,
    rating: 5,
  },
  {
    name: "Japanese Food",
    image_url:
      "https://www.tastingtable.com/img/gallery/20-japanese-dishes-you-need-to-try-at-least-once/l-intro-1644007893.jpg",
    categories: ["Japanese"],
    price: "$$",
    reviews: 1100,
    rating: 4,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            key={index}
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialsCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}> {props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}> 20-40 ◘ mins</Text>
    </View>
    <View
      style={{
        backgroundColor: "grey",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text> {props.rating}</Text>
    </View>
  </View>
);
