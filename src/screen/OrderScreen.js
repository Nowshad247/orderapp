import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from '../components/text'
import { spacing } from '../Theme/spacing'
import { colors } from '../Theme/colors'
import { AntDesign } from '@expo/vector-icons';
export default function OrderScreen() {

    return (
        <View style={style.container}>
            <View style={style.top}>
                <Image style={{ flex: 1 }} source={require('../../assets/Media.png')}>
                </Image>
            </View>
            <View style={style.bottm}>
                <Text preset='h1'>
                    Boston Lettuce
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text preset='h1'>
                        1.10
                    </Text>
                    <Text preset='small' style={{ fontSize: 20, margin: spacing[4] }} >
                        € / piece
                    </Text>
                </View>
                <Text preset='h4' style={{ color: colors.btnBgColor }}>
                    ~ 150 gr / piece
                </Text>
                <Text preset='h3' style={{ marginTop: spacing[4] }}>
                    Spain
                </Text>
                <Text preset='h4' style={{ color: colors.textColorPrimary, marginTop: spacing[4] }}>
                    Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
                </Text>
            </View>
            <View style={style.bottmBtn}>
                <View style={style.btnlove}>
                    <AntDesign name="hearto" size={24} color="black" />
                </View>
                <View style={style.btn}>
                    <Text style={{ textAlign: 'center', margin: spacing[4], color: 'white', textTransform: 'uppercase' }}>add to cart</Text>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        flex: 1
    },
    bottm: {
        flex: 2,
        margin: 10
    },
    bottmBtn: {
        margin: spacing[4],
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: colors.btnBgColor,
        borderRadius: 10,
        flex: 1,
        margin: spacing[5]
    },
    btnlove: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: spacing[5]
    }
})