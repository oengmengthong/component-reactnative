import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Input, Button, Text, Icon } from '@rneui/themed';
import { ActivityIndicator } from 'react-native';

const LoginForm2Example: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+1');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        const phoneNumberWithCountryCode = `${countryCode}${phone}`;
        
        // Simulate an API call
        setTimeout(() => {
            setLoading(false);
            alert(`Logged in successfully with phone number: ${phoneNumberWithCountryCode}`);
        }, 2000);
    };

    const handleSocialLogin = (platform: string) => {
        alert(`Logging in with ${platform}`);
    };

    return (
        <View style={styles.pageContainer}>
            <View style={styles.formContainer}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s' }} style={styles.logo} />
                <Text h4 style={styles.title}>Login</Text>
                <View style={styles.phoneContainer}>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={countryCode}
                            style={styles.picker}
                            onValueChange={(itemValue) => setCountryCode(itemValue)}
                        >
                            <Picker.Item label="+1" value="+1" />
                            <Picker.Item label="+44" value="+44" />
                            <Picker.Item label="+91" value="+91" />
                            {/* Add more country codes as needed */}
                        </Picker>
                    </View>
                    <Input
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                        containerStyle={styles.input}
                        inputContainerStyle={styles.phoneInput}
                    />
                </View>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <Button title="Login" onPress={handleLogin} />
                )}
                <View style={styles.socialLoginContainer}>
                    <TouchableOpacity onPress={() => handleSocialLogin('Facebook')}>
                        <Icon name="facebook" type="font-awesome" color="#3b5998" size={40} containerStyle={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSocialLogin('Google')}>
                        <Icon name="google" type="font-awesome" color="#db4437" size={40} containerStyle={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSocialLogin('Apple')}>
                        <Icon name="apple" type="font-awesome" color="#000000" size={40} containerStyle={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSocialLogin('TikTok')}>
                        <Icon name="tiktok" type="font-awesome-5" color="#000000" size={40} containerStyle={styles.socialIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Background color for the page
    },
    formContainer: {
        width: '90%',
        padding: 16,
        backgroundColor: '#ffffff', // Background color for the form
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 16,
        objectFit: 'cover',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginRight: 8,
    },
    picker: {
        height: 50,
        width: 100,
    },
    input: {
        flex: 1,
    },
    phoneInput: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingLeft: 8,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },
    socialIcon: {
        marginHorizontal: 10,
    },
});

export default LoginForm2Example;
function alert(arg0: string) {
    return Alert.alert('Login', arg0);
}
