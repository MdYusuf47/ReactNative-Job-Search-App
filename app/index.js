import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { SIZES, icons, images, COLORS } from "../constants";
import { Stack, useRouter } from "expo-router";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm,setSearchTerm]=useState("")
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
          ),
          headerTitle:""
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,padding:SIZES.medium}}>
            <Welcome
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={() => {
                if(searchTerm){
                  router.push(`/search/${searchTerm}`)
                }
              }}
            />
            <Popularjobs/>
            <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
