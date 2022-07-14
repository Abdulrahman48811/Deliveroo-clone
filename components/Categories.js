import { ScrollView, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Testing1" />
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Testing2" />
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Testing3" />
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Testing3" />
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Testing3" />
      <CategoryCard imgUrl="http://links.papareact.com/gn7" title="Testing3" />
    </ScrollView>
  );
};

export default Categories;
