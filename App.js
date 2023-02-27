import { StyleSheet, Text, View, Button } from 'react-native';

export default App = () => {
  return (
    <View style={styles.container}>
      <Text>Heelo!</Text>
      <Button title='Tap me' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
