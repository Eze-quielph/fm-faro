import {View, Text, StyleSheet, Image} from 'react-native'

interface Props {}

export function Header (){

    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image source={require('../../../../assets/FM-FARO-dark.png')} style={styles.image}/>
            </View>
            <View style={styles.text_container}>
                <View style={styles.title_container}>
                    <Text style={styles.text}>FM Faro</Text>
                    <Text style={styles.text_red}> 90.5</Text>
                </View>
                <View style={styles.subtitle_container}>
                    <Text style={styles.text_subtitle}>Marcando Tu Rumbo</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        direction: 'inherit',
        flexWrap:'wrap',
        height:78,
        width:269,
        padding:13
    },
    image_container:{
        width:78,
        height:78
    },
    title_container:{
        display:'flex',
        direction:'inherit',
        flexWrap:'wrap',
        minWidth:178,
        width: 'auto',
        height:20
    },
    subtitle_container:{
        minWidth:164,
        width:'auto',
        height:20,
       margin:8
    },
    text_container:{
        marginTop:15
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    text:{
        color:'#FFFFFF',
        fontSize:25,
        lineHeight:25,
    },
    text_red:{
        color:"#FF0000",
        fontSize:25,
        lineHeight:25,
    },
    text_subtitle:{
        color:"#FFFFFF",
        opacity:0.6,
        fontSize:14,
        lineHeight:20,
    }
})