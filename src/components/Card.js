import React from "react";
import { View, Text, Image } from "react-native";
import style from "../style";
export default function Card({ news }) {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: news.imageUrl }} />
      <View style={style.inner}>
        <Text style={style.title}>{news.title}</Text>
        <Text style={style.decription}>{news.description}</Text>
        <Text style={style.author}>{news.author}</Text>
      </View>
    </View>
  );
}
