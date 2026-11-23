
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");

  const [cadastro, setCadastro] = useState<any>(null);
  const [mensagem, setMensagem] = useState("");

  function cadastrar() {
    if (!nome.trim() || !email.trim() || !curso.trim()) {
      setMensagem("Preencha todos os campos!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMensagem("Digite um e-mail válido!");
      return;
    }

    setCadastro({
      nome: nome.trim(),
      email: email.trim(),
      curso: curso.trim(),
    });

    setMensagem("Cadastro realizado com sucesso!");

    setNome("");
    setEmail("");
    setCurso("");
  }

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-1 px-6 py-12">

        {/* Identificação da instituição */}
        <View className="items-center mb-8">
          <View className="bg-green-700 rounded-2xl px-6 py-4 mb-3">
            <Text className="text-white text-3xl font-extrabold">
              IFPB
            </Text>
          </View>

          <Text className="text-gray-800 text-center text-lg font-bold">
            Instituto Federal da Paraíba
          </Text>

          <Text className="text-gray-500 text-sm mt-1">
            Educação, Ciência e Tecnologia
          </Text>
        </View>

        {/* Cabeçalho */}
        <View className="mb-6">
          <View className="h-1 w-16 bg-red-600 mb-3 rounded-full" />

          <Text className="text-2xl font-bold text-gray-900">
            Meu Aplicativo Acadêmico
          </Text>

          <Text className="text-gray-500 mt-2">
            Cadastre suas informações acadêmicas abaixo.
          </Text>
        </View>

        {/* Formulário */}
        <View className="bg-white p-5 rounded-2xl shadow-sm">

          <Text className="text-xl font-bold text-gray-800 mb-5">
            Dados do estudante
          </Text>

          {/* Nome */}
          <Text className="text-gray-700 font-semibold mb-2">
            Nome completo
          </Text>

          <TextInput
            className="border border-gray-300 rounded-xl p-4 mb-4 text-gray-800"
            placeholder="Digite seu nome"
            placeholderTextColor="#9CA3AF"
            value={nome}
            onChangeText={setNome}
          />

          {/* E-mail */}
          <Text className="text-gray-700 font-semibold mb-2">
            E-mail
          </Text>

          <TextInput
            className="border border-gray-300 rounded-xl p-4 mb-4 text-gray-800"
            placeholder="Digite seu e-mail"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Curso */}
          <Text className="text-gray-700 font-semibold mb-2">
            Curso
          </Text>

          <TextInput
            className="border border-gray-300 rounded-xl p-4 mb-6 text-gray-800"
            placeholder="Digite seu curso"
            placeholderTextColor="#9CA3AF"
            value={curso}
            onChangeText={setCurso}
          />

          {/* Botão */}
          <Pressable
            onPress={cadastrar}
            className="bg-green-700 rounded-xl p-4 items-center active:bg-green-800"
          >
            <Text className="text-white font-bold text-base">
              Cadastrar estudante
            </Text>
          </Pressable>

          {/* Mensagem */}
          {mensagem !== "" && (
            <Text
              className={`text-center mt-4 font-semibold ${
                cadastro ? "text-green-700" : "text-red-600"
              }`}
            >
              {mensagem}
            </Text>
          )}
        </View>

        {/* Dados cadastrados */}
        {cadastro && (
          <View className="bg-white p-5 rounded-2xl mt-6 shadow-sm">

            <Text className="text-xl font-bold text-gray-800 mb-4">
              Dados cadastrados
            </Text>

            <View className="h-1 w-12 bg-green-700 mb-4 rounded-full" />

            <Text className="text-gray-500 text-sm">Nome</Text>
            <Text className="text-gray-900 font-semibold mb-3">
              {cadastro.nome}
            </Text>

            <Text className="text-gray-500 text-sm">E-mail</Text>
            <Text className="text-gray-900 font-semibold mb-3">
              {cadastro.email}
            </Text>

            <Text className="text-gray-500 text-sm">Curso</Text>
            <Text className="text-gray-900 font-semibold">
              {cadastro.curso}
            </Text>
          </View>
        )}

        {/* Rodapé */}
        <Text className="text-center text-gray-400 text-xs mt-8">
          IFPB • Instituto Federal da Paraíba
        </Text>

      </View>
    </ScrollView>
  );
}
