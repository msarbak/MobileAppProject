import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      // alert('mailizi kontrol edin');
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      // alert('mailizi kontrol edin');
    } catch (error) {
      console.log(error);
      alert('oturum acilamadi' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.baslik}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 35, marginTop: 10 }}>
          REACT-NATIVE
        </Text>
      </View>

      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        value={password}
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={{ margin: 5, backgroundColor: 'skyblue', padding: 10, borderRadius: 15 }}
              onPress={() => signIn()}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>GİRİŞ YAP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 5, backgroundColor: 'skyblue', padding: 10, borderRadius: 15 }}
              onPress={() => signUp()}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>KAYIT OL</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 35,
  },
  baslik: {
    alignItems: 'center',
  },
});

