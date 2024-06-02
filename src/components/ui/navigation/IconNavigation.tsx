import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import {useRouter} from "expo-router";

interface Props {
    children: string;
    icon: any,
    status: boolean,
    link: string
}

export function IcoNavigation({children, icon, status, link}: Props){
    const router = useRouter();

    const handlePress = ()=> {
        router.replace(link)
    }
    return (

            <Pressable style={styles.container} onPress={handlePress}>
                <View style={styles.image_container}>
                    <Image source={icon} style={[styles.image, { tintColor: status ? "white" : "gray" }]}/>
                </View>
                <Text style={styles.text}>{children}</Text>

            </Pressable>

    )
}

const styles = StyleSheet.create({
    container:{
        minWidth:106,
        width:'auto',
        minHeight:80,
        height:'auto',
        alignContent: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    image_container:{
        width:32,
        height:32
    },
    image:{
        resizeMode: 'contain',
        width:'100%',
        height:'100%',
    }, 
    text:{
        color:"#E6E0E9",
        lineHeight:16,
        letterSpacing:0.5,
        fontSize:12
    }
})