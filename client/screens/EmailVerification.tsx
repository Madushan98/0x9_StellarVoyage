import React, {useEffect, useState} from 'react';
import {useAuth} from '../contexts/auth.context';
import {common, commonColor, commonFonts} from '../config/style';
import {MainButton} from '../components/MainButton/MainButton';
import {UserInput} from '../components/UserInputCard/UserInput';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import CommonView from './CommonView';
import {StackNavigationProp} from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const EmailVerification = ({route,navigation}) => {

    const {email} = route.params;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const {onVerify} = useAuth();

    const handleVerification = async () => {
        const userEmail = email;
        if (!userEmail) {
            navigation.navigate('Login');
        }
        if(!value) {
            alert('Fill in the verification code');
        }
        const verificationCode = value;
        const result = await onVerify!({verificationCode, userEmail});
        if (result?.error) {
            alert(result.message);
        }
    }

    return (
        <>
            <CommonView>
                <View style={[common.middleArea, common.topArea]}>
                    <Text style={[common.mainTitle, {color: "white", marginBottom: 12}]}>Verification</Text>
                </View>
                <View style={[common.centerVertical, {height: "20%", justifyContent: "space-around"}]}>
                    <Text style={[commonColor.white, commonFonts.mulish]}>We’ve send you the verification code</Text>

                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                            <View
                                key={index}
                                onLayout={getCellOnLayoutHandler(index)}
                                style={[styles.cellContainer, isFocused && styles.focusCellContainer]}
                            >
                                <Text style={[styles.cell]}>
                                    {symbol || (isFocused ? <Cursor/> : null)}
                                </Text>
                            </View>
                        )}
                    />
                </View>

                <View style={[common.centerVertical, {height: "30%", justifyContent: "space-around"}]}>
                    <MainButton text='Continue' onPress={handleVerification}/>
                    <Text onPress={() => navigation.navigate('Login')} style={[commonColor.white, commonFonts.mulish]}>Didn't
                        Recive the code? Try Again</Text>
                    <Text onPress={() => navigation.navigate('Login')} style={[commonColor.white, commonFonts.mulish]}>Already
                        have an account?</Text>
                </View>
            </CommonView>
        </>
    )
}

const styles = StyleSheet.create({
    codeFieldRoot: {
        marginTop: 16,
    },
    cellContainer: {
        height: 50,
        width: 50,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'white', // Change this to your desired separator color
        elevation: 4, // Add elevation
    },
    focusCellContainer: {
        borderBottomColor: '#00F', // Change this to your desired focused separator color
    },
    cell: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white', // Set text color to black
    },
    focusCell: {
        borderColor: '#00F', // Change this to your desired focus color
    },
});

export default EmailVerification;