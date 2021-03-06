import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Button 
       title="Increment"
       onPress={ () => setCounter(counter + 1)}
       />
       <Button 
        title="Decrement"
        onPress={ () => setCounter(counter - 1)}
        />
        <Text>Current Counter</Text>
        <Text>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
