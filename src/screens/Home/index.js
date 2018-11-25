import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation })=>{
    return (
        <View style={{flex:1, justifyContent:'center', alignItems : 'center'}}>
            <Text>HOME</Text>
            <Button title="Voltar" onPress={ () => { navigation.goBack()} }  />
        </View>
    )
}