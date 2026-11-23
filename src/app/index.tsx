import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import FoodCard from "../components/FoodCard";

import{foods}from "../constants/foods";

import{useState}from "react";


export default function HomeScreen() {
  const [cartCount, setCartCount] = useState(0);
  return (
<ScrollView
  className="flex-1 bg-white px-5"
  showsVerticalScrollIndicator={false}>
<View className="mb-6 mt-4">
  <Text className="text-base text-gray-500">
    Olá! 👋
  </Text>
  <Text className="mt-2 text-base font-bold text-orange-500">
    Items no carinho: {cartCount}
  </Text>

  <Text className="mt-1 text-3xl font-bold">
    O que deseja comer hoje?
  </Text>
</View>

<View className="rounded-3xl text-orange-500 p-5">
  <Text className="text-sm font-bold text-white">
    OFERTA ESPECIAL.
  </Text>
  <Text className="mt-2 text-3xl font-bold text-white">
    Frutado + Tradicional.
  </Text>

  <Text className="mt-2 text-base text-white">
    Uma combinaçao perfeita para o seu dia.
  </Text>

  <TouchableOpacity className="mt-5 self-start rounded-xl bg-white px-5 py-3">
    <Text className="font-bold text-orange-500">
      Peça Agora!!!
    </Text>
  </TouchableOpacity>
</View>

<Text className="mb-4 mt-8 text-2xl font-bold">
    Categorias.
</Text>

<View className="flex-row justify-between">
  <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-5">

    <Text className="text-4xl">
      🍰
    </Text>

    <Text className="mt-2">
      Pavê
    </Text>

  </TouchableOpacity>

  <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-5">

    <Text className="text-4xl">
      🍰
    </Text>

    <Text className="mt-2">
      Pavê
    </Text>

  </TouchableOpacity>

  <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-5">

    <Text className="text-4xl">
      🍰
    </Text>

    <Text className="mt-2">
      Pavê
    </Text>

  </TouchableOpacity>

</View>

<view className="flex-row flex-wrap justify-between">
  {foods.map((foods) => (
  <FoodCard
    key={foods.id}
    name={foods.name}
    price={foods.price}
    emoji={foods.emoji}
    onAdd={() => setCartCount(cartCount +1)}
  />
  ))}
  
</view>

</ScrollView>
  );
}