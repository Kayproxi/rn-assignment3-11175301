import { StatusBar } from 'expo-status-bar';
import { PixelRatio, SafeAreaView, StyleSheet, Text, View , Image, TextInput} from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <View >
       
          <Text style={styles.TSize} >
            Hello, devs {" " + " " + " " + " " + " " + " " + " " + " "} 
            <Image source={require("./Profile Image.png")} style={styles.image}/>
          </Text>

          <Text style={styles.size} >14 tasks today</Text>
         
         

      </View>
      
      
     <TextInput
        style={styles.searchBox}
        placeholder="Search"
     />
    </SafeAreaView>
  


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    
    
  },
  TSize: {
    fontSize: 50,
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    width: '60%',
  },
  image: {
   
    
  },
  size: {
    fontSize: 14,
  }
});
