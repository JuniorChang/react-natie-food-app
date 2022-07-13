import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Chicken",
    description: "Kampong Chicken",
    price: "$12",
    image:
      "https://assets.epicurious.com/photos/5732526f1877f76a0e20831c/1:1/w_2560%2Cc_limit/EP_05102016_PeruvianStyleRoastChicken_recipe_.jpg",
  },
  {
    title: "Pork",
    description: "Grill Pork",
    price: "$23",
    image:
      "https://www.foodnetwork.com/content/dam/images/food/video/2019/6/3/0/0181847-pork-chops-s4x3.jpg",
  },
  {
    title: "Beef",
    description: "Beef",
    price: "$30",
    image:
      "https://images-gmi-pmc.edge-generalmills.com/b57ee35f-bce2-4229-8bf5-19b97876a4cb.jpg",
  },
  {
    title: "Seafood",
    description: "From The Sea",
    price: "$11",
    image:
      "https://assets.epicurious.com/photos/54bd6f452a4b69f8647ec174/master/pass/shellfish-mixed-grill-6x4.jpg",
  },
  {
    title: "Grass",
    description: "Grass",
    price: "$9",
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-500x375.jpg",
  },

  {
    title: "Seafood",
    description: "From The Sea",
    price: "$11",
    image:
      "https://assets.epicurious.com/photos/54bd6f452a4b69f8647ec174/master/pass/shellfish-mixed-grill-6x4.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
  },
  container: { flex: 1 },
  scrollView: {
    height: "60%",
    width: "100%",
    margin: 0,
    alignSelf: "center",
    padding: 0,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 0,
  },
});

export default function MenuItems() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    >
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
