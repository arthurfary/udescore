import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import styles from "./criarTurma.styles";

const alunos = [
  { id: 1, nome: "Maria" },
  { id: 2, nome: "João" },
  { id: 3, nome: "Ana" },
  { id: 4, nome: "Carlos" },
];

const CriarTurma: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [selecionados, setSelecionados] = useState<number[]>([]);

  const toggleAluno = (id: number) => {
    setSelecionados((prev) =>
      prev.includes(id)
        ? prev.filter((alunoId) => alunoId !== id)
        : [...prev, id]
    );
  };

  const handleCriar = () => {
    const alunosSelecionados = alunos.filter((a) =>
      selecionados.includes(a.id)
    );
    console.log("Criando turma:", nome, alunosSelecionados);
    alert(`Turma "${nome}" criada com ${alunosSelecionados.length} aluno(s)!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar nova turma</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da turma"
        placeholderTextColor="#ccc"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Alunos</Text>
      <ScrollView style={styles.alunoList}>
        {alunos.map((aluno) => (
          <TouchableOpacity
            key={aluno.id}
            onPress={() => toggleAluno(aluno.id)}
            style={[
              styles.alunoItem,
              selecionados.includes(aluno.id) && styles.alunoSelecionado,
            ]}
          >
            <Text
              style={[
                styles.alunoText,
                selecionados.includes(aluno.id) && styles.alunoTextSelecionado,
              ]}
            >
              • {aluno.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.btnSair}
        onPress={() => navigation.navigate("ProfessorTurmas")}
      >
        <Text style={styles.btnText}>Cancelar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCriar} onPress={handleCriar}>
        <Text style={styles.btnText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CriarTurma;
