import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type FooCardProps = {
  name: string;
  price: number;
  emoji: string;
  onAdd: () => void;
};

export default function FooCard({
  name,
  price,
  emoji,
  onAdd,
}: FooCardProps) {
  return (
    <View className="mb-5 w-[48%] rounded-2xl bg-orange-50 py-4 px-2">
      <Text className="text-center text-6xl">
        {emoji}
      </Text>
      <Text className="mt-3 text-lg font-bold">
        {name}
      </Text>
      <Text className="mt-1 font-bold text-orange-500">
        R$ {price.toFixed(2)}
      </Text>
      <TouchableOpacity
        onPress={onAdd}
        className="text-center font-bold text-black"
      >
        <Text className="text-center font-bold text-black">
          Adicionar
        </Text>
      </TouchableOpacity>
    </View>
  );
}