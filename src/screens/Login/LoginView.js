import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default ( {onEmailChange, onPasswordChange, email, password, onSubmit} ) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>LOGO</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.containerInputs}>
                    <View style={styles.containerInput}>
                        <TextInput placeholder="E-mail" style={styles.input} onChangeText={onEmailChange} value={email}/>
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput 
                            placeholder="Senha" 
                            secureTextEntry 
                            style={styles.input}
                            onChangeText={onPasswordChange}
                            value={password}
                        />
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity 
                            style={styles.loginButton}
                            onPress={onSubmit}
                        >
                            <Text style={styles.loginButtonText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    content : {
        flex : 2
    },
    headerText : {
        fontSize : 32,
        color : "red"
    },
    containerInputs : {
        marginHorizontal : 30,
        flex : 1
    },
    containerInput : {
        paddingVertical : 10
    },
    input : { 
        borderBottomWidth : 1,
        fontSize : 18
    },
    loginButton : {
        backgroundColor : '#4f43a1',
        width : width * .5,
        height : 40,
        justifyContent : 'center',
        alignItems : 'center'
    },
    loginButtonText : {
        color : 'white'
    },
    containerButton : {
        marginTop : 35,
        alignSelf:'center'

    }
});