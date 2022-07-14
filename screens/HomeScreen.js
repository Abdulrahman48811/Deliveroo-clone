import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLayoutEffect } from 'react';

const HomeScreen = () => {
const navigation = useNavigation();

useLayoutEffect(() => {
  navigation.setOptions({
      headerShown: false,
  })
}, []);

  return (
      <SafeAreaView>
          <Text className="text-red-500">HomeScreen</Text>
      </SafeAreaView>
  )
}

export default HomeScreen