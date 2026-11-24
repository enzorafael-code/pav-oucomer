import { useState } from "react";
import {
  Alert,
  Image,
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
      className="flex-1 bg-amber-50 px-5"
      showsVerticalScrollIndicator={false}
    >
      {/* Cabeçalho */}
      <View className="mb-6 mt-4">
        <Text className="text-base text-amber-800">
          Olá! 👋
        </Text>

        <Text className="mt-2 text-base font-bold text-amber-800">
          Itens no carrinho: {cart.length}
        </Text>

        <Text className="mt-1 text-3xl font-bold text-stone-900">
          O que deseja comer hoje?
        </Text>
      </View>

      {/* Oferta especial */}
      <View className="rounded-3xl bg-amber-900 p-5">
        <Text className="text-sm font-bold text-amber-200">
          OFERTA ESPECIAL.
        </Text>

        <Text className="mt-2 text-3xl font-bold text-amber-50">
          Frutado + Tradicional.
        </Text>

        <Text className="mt-2 text-base text-amber-100">
          Uma combinação perfeita para o seu dia.
        </Text>

        <Text className="mt-2 text-1xl font-bold text-amber-50">
          R$ 29,99 
        </Text>

        <TouchableOpacity
          onPress={() => addToCart(special)}
          className="mt-5 self-start rounded-xl bg-amber-50 px-5 py-3">
          <Text className="font-bold text-amber-900">
            Peça Agora!!!
          </Text>
        </TouchableOpacity>
      </View>

      {/* Categorias */}
      <Text className="mb-4 mt-8 text-2xl font-bold text-stone-900">
        Categorias.
      </Text>

      <View className="mb-6 flex-row justify-between">
        <View className="w-[30%] items-center rounded-2xl bg-orange-100/70 py-5">
          <Image
            source={require("../../assets/images/emoji.png")}
            className="h-10 w-10"
          />
          <Text className="mt-2 text-stone-900">Pavês</Text>
        </View>

        <View className="w-[30%] items-center rounded-2xl bg-orange-100/70 py-5">
          <Text className="text-4xl">🍓</Text>
          <Text className="mt-2 text-stone-900">Trufados</Text>
        </View>

        <View className="w-[30%] items-center rounded-2xl bg-orange-100/70 py-5">
          <Text className="text-4xl">🥛</Text>
          <Text className="mt-2 text-stone-900">Bebidas</Text>
        </View>
      </View>

      {/* Produtos populares */}
      <Text className="mb-4 mt-8 text-2xl font-bold text-stone-900">
        Produtos populares
      </Text>

      <View className="flex-row flex-wrap justify-between">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            onAdd={() => addToCart(food)}
          />
        ))}
      </View>

      {/* Carrinho */}
      <Text className="mb-4 mt-8 text-2xl font-bold text-stone-900">
        Carrinho
      </Text>

      {cart.length === 0 ? (
        <Text className="mb-6 text-amber-800">
          Seu carrinho está vazio. 🛒
        </Text>
      ) : (
        cart.map((item, index) => (
          <View
            key={index}
            className="mb-3 flex-row items-center justify-between rounded-xl bg-orange-100/70 p-4"
          >
            <Text className="w-[40%] text-stone-900">
              {item.emoji} {item.name}
            </Text>

            <Text className="w-[30%] text-center font-bold text-amber-800">
              R$ {item.price.toFixed(2)}
            </Text>

            <TouchableOpacity
              onPress={() => removeFromCart(index)}
              className="w-[25%] items-center rounded-xl bg-amber-900 py-2"
            >
              <Text className="font-bold text-amber-50">
                Remover
              </Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      {cart.length > 0 && (
        <View className="mb-10 mt-2 rounded-2xl bg-orange-100/70 p-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-stone-900">
              Total da compra:
            </Text>
            <Text className="text-2xl font-bold text-amber-800">
              R$ {total.toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            onPress={finishOrder}
            className="mt-4 items-center rounded-xl bg-amber-800 py-4"
          >
            <Text className="text-lg font-bold text-amber-50">
              Finalizar Compra
            </Text>
          </TouchableOpacity>
        </View>
      )}

    </ScrollView>
  );
}