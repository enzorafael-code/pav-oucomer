import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type FooCardProps = {
  name: string;
  price: number;
  image: any;
  onAdd: () => void;
};

export default function FooCard({
  name,
  price,
  image,
  onAdd,
}: FooCardProps) {
  return (
    <View className="mb-5 w-[48%] rounded-2xl bg-orange-50 py-4 px-2">
      <Image
        source={image}
        className="h-24 w-full rounded-xl"
        resizeMode="cover"
      />
      <Text className="mt-3 text-lg font-bold">
        {name}
      </Text>
      <Text className="mt-1 font-bold text-amber-800">
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