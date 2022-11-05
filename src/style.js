import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "gray",
  },
  inner: {
    padding: 5,
  },
  author: { fontStyle: "italic", textAlign: "right" },
  title: { fontWeight: "bold", fontSize: 18 },
  decription: { marginTop: 3 },
  image: {
    height: Dimensions.get("window").height / 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    padding: 5,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  bannerImage: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 4,
  },
});
