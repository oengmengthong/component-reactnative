import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { Input, Button, Text, Icon } from '@rneui/themed';
import axios from 'axios';

const LoginForm1Example: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handleLogin = async () => {
        if (!validateEmail(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

        setLoading(true);
        setMessage('');
        try {
            // Fake API call
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                email,
                password,
            });

            if (response.status === 201) {
                setMessage('Login successful!');
            } else {
                setMessage('Login failed!');
            }
        } catch (error) {
            setMessage('Login failed!');
        } finally {
            setLoading(false);
        }
    };

    function alert(arg0: string): void {
        throw new Error('Function not implemented.');
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://your-logo-url.com/logo.png' }} style={styles.logo} />
            <Text h3 style={styles.title}>Login</Text>
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                onBlur={handleEmailBlur}
                keyboardType="email-address"
                autoCapitalize="none"
                errorMessage={emailError}
                containerStyle={styles.inputContainer}
                leftIcon={<Icon name="email" size={24} color="black" />}
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                containerStyle={styles.inputContainer}
                leftIcon={<Icon name="lock" size={24} color="black" />}
            />
            <TouchableOpacity onPress={() => alert('Forgot Password')}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title="Login" onPress={handleLogin} containerStyle={styles.buttonContainer} />
            )}
            {message ? <Text style={styles.message}>{message}</Text> : null}
            <Text style={styles.signupMessage}>Don't have an account? <Text style={styles.signupLink} onPress={() => alert('Sign Up')}>Sign Up</Text></Text>
            <Button
                title="Login with Google"
                onPress={() => alert('Google Login')}
                containerStyle={styles.socialButton}
                icon={<Icon name="google" type="font-awesome" size={24} color="white" />}
            />
            <Button
                title="Login with Facebook"
                onPress={() => alert('Facebook Login')}
                containerStyle={styles.socialButton}
                icon={<Icon name="facebook" type="font-awesome" size={24} color="white" />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 16,
    },
    title: {
        marginBottom: 16,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 12,
    },
    forgotPassword: {
        textAlign: 'right',
        color: 'blue',
        marginBottom: 16,
    },
    buttonContainer: {
        marginTop: 16,
    },
    message: {
        marginTop: 16,
        textAlign: 'center',
        color: 'red',
    },
    signupMessage: {
        marginTop: 16,
        textAlign: 'center',
    },
    signupLink: {
        color: 'blue',
    },
    socialButton: {
        marginTop: 16,
    },
});

export default LoginForm1Example;
