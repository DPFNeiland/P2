import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { styles } from './StylePinterest';

export default function Pinterest() {
    const [emailorphone, onChangeText] = React.useState('');
    const [password, onChangeNumber] = React.useState('');



    return (

        <View style={styles.View}>

            <Image
                style={styles.logo}
                source={require('../../assets/logo-pinterest.png')}
            >

            </Image>

            <Text style={styles.Text}>
                Log in to see more
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={emailorphone}
                placeholder="Email or phone number"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={password}
                placeholder="password"
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.buttonLoginIn}>
                <Text style={styles.TextInsideButton}>Login in</Text>
            </TouchableOpacity>

            <Text style={styles.Textunderbuttom}>
                OR
            </Text>

            <TouchableOpacity style={styles.buttonFacebook}>

                <Image
                    style={styles.miniFacebook}
                    source={require('../../assets/logo-facebook.png')}
                >
                </Image>

                <Text style={styles.TextInsideButton}>Continue with Facebook</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonGoogle}>

                <Image
                    style={styles.minilogo}
                    source={require('../../assets/logo-google.png')}
                >
                </Image>
                <Text style={styles.TextInsideButton}>Continue with Google</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Are yoou a business? Get started here</Text>
            </TouchableOpacity>
            <Text style={styles.Trasso}>
                -------------------------
            </Text>
            <TouchableOpacity>
                <Text>Not on Pinterest yet? Sign Up</Text>
            </TouchableOpacity>

        </View>


    );
};