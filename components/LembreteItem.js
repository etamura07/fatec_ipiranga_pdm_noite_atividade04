import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Pressable, TouchableOpacity } from 'react-native';

const LembreteItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
      <View style={styles.itemNaLista}>
        <Text>{props.lembrete}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center'
  }
})

export default LembreteItem;