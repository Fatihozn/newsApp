import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import style from "./style";
import data from "./news_data.json";
import bannerData from "./news_banner_data.json";
import Card from "./components/Card";
export default function App() {
  const renderFunction = ({ item }) => <Card news={item} />;
  const keyFunction = (item) => item.u_id.toString();
  const headerComponent = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {bannerData.map((item) => (
        <Image
          key={item.id}
          style={style.bannerImage}
          source={{ uri: item.imageUrl }}
        />
      ))}
    </ScrollView>
  );
  return (
    <SafeAreaView style={style.app}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
        keyExtractor={keyFunction}
        data={data}
        renderItem={renderFunction}
      />
      <StatusBar></StatusBar>
    </SafeAreaView>
  );
}
