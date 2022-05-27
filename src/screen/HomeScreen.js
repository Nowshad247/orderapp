import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text'
import { colors } from '../Theme/colors'
import { spacing } from '../Theme/spacing'
import { AntDesign } from '@expo/vector-icons';


export default function HomeScreen({ navigation }) {
    return (

        <View style={style.home}>


            <View style={style.top}>
                <View style={style.cercle}>
                    <Text preset='h3' style={style.textStyleInCarcle}>D</Text>
                </View>
            </View>
            <View style={style.bottom}>
                <View style={style.icon}>
                    <AntDesign name="CodeSandbox" size={30} color="black" />
                </View>
                <Text preset='h1' style={{ textAlign: 'center' }}>Non-Contact Deliveries</Text>
                <View>
                    <Text style={{ textAlign: "center", margin: spacing[3] }}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                    </Text>
                </View>
                <Pressable onPress={() => {
                    navigation.navigate('OrderScreen');
                }}>
                    <View style={style.btn}>
                        <Text style={{ textAlign: 'center', margin: spacing[4], color: 'white', textTransform: 'uppercase' }}>Order Now</Text>
                    </View>
                </Pressable>
                <View style={style.btnTwo}>
                    <Text style={{
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}>Dismiss</Text>
                </View>
            </View>
        </View>


    )
}
const style = StyleSheet.create({
    home: {
        backgroundColor: colors.main,
        flex: 1,
    },
    top: {
        flex: 1,
        padding: spacing[7]
    },
    bottom: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: spacing[7]
    },
    cercle: {
        backgroundColor: '#CDFFB6',
        width: 40,
        height: 40,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing[2]
    },
    icon: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: spacing[2]
    },
    btn: {
        backgroundColor: colors.btnBgColor,
        borderRadius: 10
    },
    btnTwo: {
        marginTop: spacing[5]
    }
})