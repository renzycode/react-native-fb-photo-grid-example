import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FBImgGrid from './components/FBImgGrid';
import { useState } from 'react';

export default App = () => {

    const [gutter, setGutter] = useState(0);
    const [imageLength, setImageLength] = useState(1);

    const photoList = [
        'https://images.pexels.com/photos/13796708/pexels-photo-13796708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/26840789/pexels-photo-26840789/free-photo-of-old-riga.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/20257661/pexels-photo-20257661/free-photo-of-man-with-broom-in-hand-stands-on-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/18501328/pexels-photo-18501328/free-photo-of-giraffe-in-savannah.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/26861260/pexels-photo-26861260/free-photo-of-a-cat-sitting-on-the-side-of-the-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/20363012/pexels-photo-20363012/free-photo-of-woman-in-a-colorful-outfit-and-sunglasses-holding-a-purse-and-standing-in-front-of-a-rusty-truck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/27107645/pexels-photo-27107645/free-photo-of-shinjuku-temple-charms.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/27107645/pexels-photo-27107645/free-photo-of-shinjuku-temple-charms.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                <TouchableOpacity onPress={()=>{setGutter(gutter-1)}} style={{ backgroundColor: 'gray', color: 'white', width: 30, borderRadius: 10}}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'white'}}>-</Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }}>gutter({gutter})</Text>
                <TouchableOpacity onPress={()=>{setGutter(gutter+1)}} style={{ backgroundColor: 'gray', color: 'white', width: 30, borderRadius: 10}}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'white'}}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                <TouchableOpacity onPress={()=>{setImageLength(imageLength-1)}} style={{ backgroundColor: 'gray', color: 'white', width: 30, borderRadius: 10}}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'white'}}>-</Text>
                </TouchableOpacity>
                <Text style={{ marginHorizontal: 10 }}>images({imageLength})</Text>
                <TouchableOpacity onPress={()=>{setImageLength(imageLength+1)}} style={{ backgroundColor: 'gray', color: 'white', width: 30, borderRadius: 10}}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'white'}}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'center', marginBottom: 10 }}>@renzycode/react-native-fb-img-grid</Text>
            <FBImgGrid 
                height={400}
                photos={photoList.slice(0, imageLength)}
                sourceType='local'
                gutter={gutter}
            />
        </View>
    );
}

