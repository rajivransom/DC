import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';


import { SafeAreaView } from 'react-navigation';
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomListItem from './components/CustomListItem';
import { Input } from 'react-native-elements/dist/input/Input';
import { HeaderTitle } from '@react-navigation/stack';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { auth } from './firebase';
import {db} from './firebase';
import chatScreen from './screens/chatScreen';
import axios from 'axios';
import { Card } from 'react-native-elements';
import ConfettiCannon from 'react-native-confetti-cannon';


import { AntDesign, SimpleLineIcons, FontAwesomeIcon, Entypo } from  '@expo/vector-icons';

export default function HomeScreen({ navigation }){
   
    const [chats,setChats]=useState([]);
    const [doge,setDoge]=useState(0);
   
 
    useLayoutEffect(()=>{
        
       navigation.setOptions({
           title:'Dogechats',
           headerStyle:{backgroundColor:'white'},
           headerTitleStyle:{color:'black',fontWeight:'bold',},
           headerLeft:()=><View style={{marginLeft:20}}><TouchableOpacity onPress={signOut} activeOpacity={0.1}><Avatar size='medium' rounded source={{uri:'https://cdn.imgbin.com/5/23/25/imgbin-doge-pixel-art-youtube-youtube-Wr1fNnHHDBgXXyBFggjkV1iHu.jpg'}}></Avatar></TouchableOpacity>
               
              


           </View>,
           headerRight:()=><View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,width:80}}><TouchableOpacity  activeOpacity={0.5}>
              <AntDesign onPress={()=>{WebBrowser.openBrowserAsync('https://ctt.ac/sg4E9')} } name='twitter' size={30} color='black' />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate('news')}} activeOpacity={0.5}>
              <Entypo name="news" size={28} color="black" style={{top: 2,}}/>

           </TouchableOpacity>
           
               
              


            </View>
            
          
       })

    },[])
    const signOut=()=>{
        auth.signOut().then(()=>navigation.navigate('Login'))
    // code here
    
    };
    useEffect(()=>{
        axios.get('https://api.wazirx.com/api/v2/tickers')
        .then( async function (response) {
          // handle success
          await alert(`Current Dogecoin Price is :${response.data.dogeinr.buy} ₹`);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
        
        
       
        const unsubscribe=db.collection("chat").onSnapshot((snapshot)=>
            setChats(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data(),
            })

            ))
            
        )
       
        return unsubscribe;
        
    },[navigation]);
    const enterChat=(id,chatName)=>{
        navigation.navigate('chatscreen',{
            id:id,
            chatName:chatName,
        });
    }

    return( 
        <SafeAreaView>
          

           
            
            <Card containerStyle={{backgroundColor:'#0C0C0C',marginBottom:20,borderRadius:12}}>
               
  <Card.Title numberOfLines={2} style={{color:'white'}}>Welcome {auth.currentUser.displayName}, you're a true dogefan!</Card.Title>
  <Card.Divider/>
  <Card.Image style={{borderRadius:7}} source={{uri:'https://static.coindesk.com/wp-content/uploads/2021/01/doge-moon-1200x628.png'}}>
   
   
  </Card.Image>
</Card>
           
            <ScrollView  style={{height:'100%',}} contentContainerStyle={{ flexGrow: 1 }} >
           
            
           
                
                {chats.map(({id,data:{ chatName }})=>
                    <CustomListItem key={1} id={id} chatName={chatName} enterChat={enterChat}/>
                )}
                
                

            </ScrollView>
        </SafeAreaView>
    )
}
