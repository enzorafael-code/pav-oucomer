import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import FoodCard from "../components/FoodCard";
import { foods, special } from "../constants/foods";

export default function HomeScreen() {
  const [cart, setCart] = useState<any[]>([]);

  // Adicionar ao carrinho
  function addToCart(food: any) {
    setCart((current) => [...current, food]);
  }

  // Remover do carrinho
  function removeFromCart(index: number) {
    setCart((current) =>
      current.filter((_, itemIndex) => itemIndex !== index)
    );
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function finishOrder() {
    Alert.alert(
      "Pedido realizado! 🎉",
      `Sua compra de R$ ${total.toFixed(2)} foi confirmada e já está sendo preparada.`
    );
    setCart([]);
  }

  return (
    <ScrollView
      className="flex-1 bg-white px-5"
      showsVerticalScrollIndicator={false}
    >
      {/* Cabeçalho */}
      <View className="mb-6 mt-4">
        <Text className="text-base text-gray-500">
          Olá! 👋
        </Text>

        <Text className="mt-2 text-base font-bold text-orange-500">
          Itens no carrinho: {cart.length}
        </Text>

        <Text className="mt-1 text-3xl font-bold">
          O que deseja comer hoje?
        </Text>
      </View>

      {/* Oferta especial */}
      <View className="rounded-3xl bg-orange-500 p-5">
        <Text className="text-sm font-bold text-white">
          OFERTA ESPECIAL.
        </Text>

        <Text className="mt-2 text-3xl font-bold text-white">
          Frutado + Tradicional.
        </Text>

        <Text className="mt-2 text-base text-white">
          Uma combinação perfeita para o seu dia.
        </Text>

        <Text className="mt-2 text-1xl font-bold text-white">
          R$ 29,99 
        </Text>

        <TouchableOpacity
          onPress={() => addToCart(special)}
          className="mt-5 self-start rounded-xl bg-white px-5 py-3">
          <Text className="font-bold text-orange-500">
            Peça Agora!!!
          </Text>
        </TouchableOpacity>
      </View>

      {/* Categorias */}
      <Text className="mb-4 mt-8 text-2xl font-bold">
        Categorias.
      </Text>

      <View className="mb-6 flex-row justify-between">
        <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-5">
          <Text className="text-4xl">🍰</Text>
          <Text className="mt-2">Pavês</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-5">
          <Text className="text-4xl">🍓</Text>
          <Text className="mt-2">Trufados</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-5">
          <Text className="text-4xl">🥛</Text>
          <Text className="mt-2">Bebidas</Text>
        </TouchableOpacity>
      </View>

      {/* Produtos populares */}
      <Text className="mb-4 mt-8 text-2xl font-bold">
        Produtos populares
      </Text>

      <View className="flex-row flex-wrap justify-between">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            emoji={food.emoji}
            onAdd={() => addToCart(food)}
          />
        ))}
      </View>

      {/* Carrinho */}
      <Text className="mb-4 mt-8 text-2xl font-bold">
        Carrinho
      </Text>

      {cart.length === 0 ? (
        <Text className="mb-6 text-gray-500">
          Seu carrinho está vazio. 🛒
        </Text>
      ) : (
        cart.map((item, index) => (
          <View
            key={index}
            className="mb-3 flex-row items-center justify-between rounded-xl bg-gray-100 p-4"
          >
            <Text className="w-[40%]">
              {item.emoji} {item.name}
            </Text>

            <Text className="w-[30%] text-center font-bold text-orange-500">
              R$ {item.price.toFixed(2)}
            </Text>

            <TouchableOpacity
              onPress={() => removeFromCart(index)}
              className="w-[25%] items-center rounded-xl bg-red-400 py-2"
            >
              <Text className="font-bold text-red-900">
                Remover
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      {cart.length > 0 && (
        <View className="mb-10 mt-2 rounded-2xl bg-orange-50 p-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-gray-700">
              Total da compra:
            </Text>
            <Text className="text-2xl font-bold text-orange-500">
              R$ {total.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={finishOrder}
            className="mt-4 items-center rounded-xl bg-orange-500 py-4"
          >
            <Text className="text-lg font-bold text-white">
              Finalizar Compra
            </Text>
          </TouchableOpacity>
        </View>
      )}

    </ScrollView>
  );
}