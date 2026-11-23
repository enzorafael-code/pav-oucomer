
import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import FoodCard from "../components/FoodCard";
import { foods } from "../constants/foods";

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

        <TouchableOpacity className="mt-5 self-start rounded-xl bg-white px-5 py-3">
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
          <Text className="mt-2">Pavê</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-orange-50 py-5">
          <Text className="text-4xl">🍓</Text>
          <Text className="mt-2">Pavês Trufados</Text>
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
            <Text>
              {item.emoji} {item.name}
            </Text>

            <Text className="font-bold text-orange-500">
              R$ {item.price.toFixed(2)}
            </Text>

            <TouchableOpacity
              onPress={() => removeFromCart(index)}
            >
              <Text className="text-red-500">
                Remover
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}

    </ScrollView>
  );
}
