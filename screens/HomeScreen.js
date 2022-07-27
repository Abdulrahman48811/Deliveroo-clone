import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState, useEffect } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "featured"] {
        ...,
        restaurants[]->{
        ...,
        dishes[]->,
       },
      }`
    )
    .then((data) => {
      setFeaturedCategories(data);
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: "http://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text>Deliver Now!</Text>
          <Text className="font-{bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* {Search} */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants & Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* {Body} */}

      <ScrollView
        className="bg-gray-100"
        contentContaonerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        {featuredCategories?.map((category) => (
          <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
          />
        ))}

        {/* <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not suppport your local restaurant tonight!"
        />
        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placement from our partners"
        />

        <FeaturedRow
          id="1234"
          title="Discounts!"
          description="Summer discounts until september!"
        /> */}

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
