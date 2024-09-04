import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {}

const Header = (props: Props) => {
    return (
        <View style={styles.continer}>
            <View style={styles.userInfo}>
                    <Image
                        source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }}
                        style={styles.userImg}
                    />
                <View style={{gap:3}}>
                    <Text style={styles.welcomText}>Welcom</Text>
                    <Text style={styles.userName}>Mohammed Gamal</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{}} />
            <Ionicons name='notifications-outline'
                size={24}
                color={Colors.black}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    continer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:20,
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    welcomText:{
        fontSize : 12,
        color: Colors.darkGrey
    },
    userName:{
        fontSize : 12,
        fontWeight :'700',
        color: Colors.black
    },
})