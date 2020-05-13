import React from 'react';
import { StyleSheet,Text, View , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DataGlobal from './screens/DataGlobal';
import DataIndonesia from './screens/DataIndonesia';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Home(){
  return(
    <View>
      <View>
        <Text style={styles.Data}>DATA</Text>
      </View>
      <Image 
          style={styles.tinyLogo}
          source={require('./assets/covid19.png')}
      />
      <Text style={styles.Swipe}>  ----------> Swipe Right. <Text style={styles.info}>for more information about COVID-19.</Text></Text>
    </View>
  
  );
};

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ 
          drawerLabel: 'Home', 
        }}
      />
      <Drawer.Screen
        name="DataGlobal"
        component={Global}
        options={{ 
          drawerLabel: 'Global', 
        }}
      />
      <Drawer.Screen
        name="DataIndonesia"
        component={Indonesia}
        options={{ drawerLabel: 'Indonesia' }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles= StyleSheet.create=({
    tinyLogo: {
      marginTop:22,
      alignSelf:'center',
      width: 200,
      height: 200,
    },
    Swipe:{
      fontWeight: 'bold',
      fontSize:15,
      marginTop:20,
      fontFamily:'Bahnschrift SemiBold'
    },
    info:{
      fontSize:8,
      fontFamily:'Bahnschrift SemiBold'
    },

    Data:{
      marginTop:200,
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize:60,
      fontFamily:'Bahnschrift SemiBold'
    }
})