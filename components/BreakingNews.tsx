import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { NewsDataType } from '@/types'
import SliderItem from '@/components/SliderItem'
import Animated, { useAnimatedRef, useSharedValue } from 'react-native-reanimated'

type Props = {
    newList: Array<NewsDataType>
}

const BreakingNews = ({ newList }: Props) => {
    const [data,setData] = useState(newList);
    const [paginationIndex,setPaginationIndex] = useState(0);
    const scrollX = useSharedValue(0);
    const ref = useAnimatedRef<Animated.FlatList<any>>();


    return (
        <View style={styles.continer}>
            <Text style={styles.title}>BreakingNews</Text>
            <View style={styles.slideWrapper}>
                <Animated.FlatList
                    ref={ref}
                    data={data}
                    keyExtractor={(_, index) => `list_item${index}`} 
                    renderItem={({ item, index }) => (
                        <SliderItem slideItem={item} index={index} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    />
            </View>
        </View>
    )
}

export default BreakingNews

const styles = StyleSheet.create({
    continer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.black,
        marginBottom: 10,
        marginLeft: 20,
    },
    slideWrapper: {
        // width: '100%',
        // flex: 1,
        justifyContent: 'center'
    },
})