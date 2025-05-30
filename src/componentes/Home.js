import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import CryptoJS from 'crypto-js';

const PUBLIC_KEY = 'ca42b51068cea80cd6968e18ea34bbad';
const PRIVATE_KEY = '13a4817820d57088649a8e8801bf1405c06674a0';
const MARVEL_API_BASE = 'https://gateway.marvel.com/v1/public';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const ts = Date.now().toString();
      const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

      const url = `${MARVEL_API_BASE}/characters?limit=50&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.data.results);
      } catch (error) {
        console.error('Error al cargar personajes de Marvel:', error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <ScrollView>
      <View style={styles.lista}>
        {data.map((personaje, index) => (
          <View key={index} style={styles.item}>
            <Text>{personaje.name}</Text>
            <Image
              source={{
                uri: `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`,
              }}
              style={styles.imagen}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'space-between',
    padding: 10,
  },
  item: {
    backgroundColor: 'aliceblue',
    width: '48%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  buscador: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
});
