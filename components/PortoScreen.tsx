import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

const PortoScreen = () => {
  const [selectedPorto, setSelectedPorto] = useState<string | undefined>(undefined);
  const [portos, setPortos] = useState<string[]>([]);
  const [dadosPorto, setDadosPorto] = useState<any>(null);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/offmonte/FakeAPI/SobreAgua')
      .then((response) => {
        const portosUnicos: string[] = Array.from(new Set(response.data.map((item: any) => item.Porto)));
        setPortos(portosUnicos);
      })
      .catch((error) => {
        console.error('Erro ao buscar portos:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedPorto) {
      axios
        .get('https://my-json-server.typicode.com/offmonte/FakeAPI/SobreAgua')
        .then((response) => {
          const portoData = response.data.find((item: any) => item.Porto === selectedPorto);
          setDadosPorto(portoData);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do porto:', error);
        });
    }
  }, [selectedPorto]);

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.label}>Escolha o porto:</Text>
          <Picker
            selectedValue={selectedPorto}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedPorto(itemValue)}
          >
            {portos.map((porto) => (
              <Picker.Item key={porto} label={porto} value={porto} />
            ))}
          </Picker>
          {dadosPorto && (
            <View>
              <Text style={styles.label}>Escolha a data: {new Date().toLocaleDateString()}</Text>
              <Text style={styles.label}>Cidade: {dadosPorto.Cidade}</Text>
              <Text style={styles.label}>Porto: {dadosPorto.Porto}</Text>
              <Text style={styles.label}>Nível de pH: {dadosPorto.pH}</Text>
              <Text style={styles.label}>Oxigênio dissolvido: {dadosPorto.OxigenioDissolvido} mg/L</Text>
              <Text style={styles.label}>Nitrato: {dadosPorto.Nitrato} mg/L</Text>
              <Text style={styles.label}>Fosfato: {dadosPorto.Fosfato} mg/L</Text>
              <Text style={styles.label}>Microplásticos: {dadosPorto.Microplasticos} p/L</Text>
              <Text style={styles.label}>Salinidade: {dadosPorto.Salinidade} PSU</Text>
            </View>
          )}
          <View style={styles.textBlock}>
            <Text style={styles.heading}>Informações sobre os parâmetros da água</Text>
            <Text style={styles.text}>
              pH: O nível de acidez ou alcalinidade da água. O pH ideal para a maioria dos organismos marinhos está entre 7.5 e 8.4.
            </Text>
            <Text style={styles.text}>
              Oxigenação da água (Oxigênio Dissolvido): A quantidade de oxigênio disponível na água. Níveis adequados são essenciais para a respiração dos organismos aquáticos. Valores acima de 5 mg/L são geralmente considerados bons.
            </Text>
            <Text style={styles.text}>
              Nutrientes (Nitrogênio e Fósforo): A presença de nutrientes como nitrato (NO3-) e fosfato (PO4³-) na água. Concentrações excessivas podem causar eutrofização, levando a proliferação de algas e condições hipóxicas.
            </Text>
            <Text style={styles.text}>
              Presença de Microplásticos: Pequenos fragmentos de plástico que podem ser ingeridos por organismos marinhos, causando danos físicos e químicos.
            </Text>
            <Text style={styles.text}>
              Salinidade: A concentração de sal na água. A salinidade afeta a osmose e o equilíbrio hídrico dos organismos marinhos. A salinidade típica da água do mar é de cerca de 35 ppt (partes por mil).
            </Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.heading}>Impacto dos Portos no Ecossistema</Text>
            <Text style={styles.text}>
              Os portos são infraestruturas cruciais para o comércio global, facilitando o transporte de mercadorias entre diferentes partes do mundo. No entanto, a construção e operação de portos podem ter impactos significativos no meio ambiente. A dragagem para criar e manter canais de navegação profundos pode destruir habitats marinhos, enquanto a poluição das embarcações pode afetar a qualidade da água. Além disso, o tráfego intenso de navios pode resultar em colisões com a vida marinha e introdução de espécies invasoras, perturbando os ecossistemas locais.
            </Text>
            <Image
              source={require('../assets/images/impacto-porto.jpg')}
              style={styles.image}
            />
            <Text style={styles.text}>
              Trecho tirado do site Observatório de Justiça & Conservação. Para mais informações, acesse o{' '}
              <Text style={styles.link} onPress={() => Linking.openURL('https://justicaeco.com.br/o-impacto-de-um-porto-2/')}>
                artigo completo
              </Text>.
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
  },
  innerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  textBlock: {
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  link: {
    color: '#0645AD',
    textDecorationLine: 'underline',
  },
});

export default PortoScreen;
