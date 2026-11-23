import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type FooCardProps ={
  name: string 
  price: number;
  emoji: string;
  onAdd: () => void;
}

export default function FooCard ({
  name,

  price,

  emoji,

  onAdd,

}:FooCardProps){
  return(
    <view className="mb-5 w-[48] rounded-2x1 bg-orange-50 py-4">
      <Text className="text-center text-6x1">
        {emoji}
      </Text>
      <Text className="mt-3 text-1g front-bold">
        {name}
      </Text>
      <Text className="mt-1 front-bold text-orange-500">
        R$ {price.toFixed(2)}
      </Text>
    <TouchableOpacity onPress = {onAdd} className="text-center front-bload text-white">
      
      <text className="texte-center front-bold text-white">
        Adicionar
      </text>
    </TouchableOpacity>
    </view>
  )
}