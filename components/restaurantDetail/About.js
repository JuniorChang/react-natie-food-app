import { View, Text, Image } from "react-native";
import React from "react";

// const yelpRestaurantInfo = {
//   name: "Super Grill Restaurant",
//   image:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoFLRajJ5zMPiMur-8ElFi6kUj20_x8iKmW9R4gvlVBepPqgjiO3kIvTSht00m1UZXmc&usqp=CAU",
//   price: "$$",
//   reviews: "1500",
//   categories: [{ title: "American" }, { title: "Seafood" }],
// };

export default function About(props) {
  const { name, image, price, reviews, categories } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories}   Price:${
    price ? " . " + price : ""
  }  ${reviews} Reviews`;

  return (
    <View>
      <RestaurantImage image={image} />
      <Title name={name} />
      <Description description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const Title = (props) => (
  <Text
    style={{
      fontSize: 20,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const Description = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
