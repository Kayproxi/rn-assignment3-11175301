import { StatusBar } from 'expo-status-bar';
import { PixelRatio, SafeAreaView, StyleSheet, Text, View , Image, TextInput, ScrollView} from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <View >
       
          <Text style={styles.TSize} >
             Hello, devs {" " + " " + " " + " " + " " + " " + " " + " "} 
            <Image source={require("./Profile_Image.png")} style={styles.image}/>
          </Text>

          <Text style={styles.size} >14 tasks today</Text>
         
      </View>
      
      
     <TextInput
        style={styles.searchBox}
        placeholder="Search"
     />
      <ScrollView>
       <View><Text style={styles.size2}> Categories</Text></View>

      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        <View style={styles.scrollItem1}><Text style={styles.ts1}>Exercise</Text><Text style={styles.ts2}>12 tasks</Text><Image source={require("./young woman working at desk.png")} style={styles.image}/></View>
        <View style={styles.scrollItem2}><Text style={styles.ts1}>Item 2</Text><Text style={styles.ts2}>12 tasks</Text><Image source={require("./young woman working online.png")} style={styles.image}/></View>
        <View style={styles.scrollItem3}><Text style={styles.ts1}>Item 3</Text><Text style={styles.ts2}>12 tasks</Text><Image source={require("./Profile_Image.png")} style={styles.image}/></View>
        <View style={styles.scrollItem4}><Text style={styles.ts1}>Item 1</Text><Text style={styles.ts2}>12 tasks</Text><Image source={require("./Profile_Image.png")} style={styles.image}/></View>
        <View style={styles.scrollItem5}><Text style={styles.ts1}>Item 2</Text><Text style={styles.ts2}>12 tasks</Text><Image source={require("./Profile_Image.png")} style={styles.image}/></View>
        <View style={styles.scrollItem6}><Text style={styles.ts1}>Item 3</Text><Text style={styles.ts2}>12 tasks</Text><Image source={require("./Profile_Image.png")} style={styles.image}/></View>
        <View style={styles.scrollItem7}><Text style={styles.ts1}>Item 1</Text><Text style={styles.ts2}>12 tasks</Text><Image source={require("./Profile_Image.png")} style={styles.image}/></View>
        <View style={styles.scrollItem8}><Text style={styles.ts1}>Item 2</Text><Text style={styles.ts2}>12 tasks</Text><Image source={require("./Profile_Image.png")} style={styles.image}/></View>
      </ScrollView>  

      <View ><Text style= {styles.OT}>Ongoing Task</Text></View>
      
        
      <ScrollView style={styles.verticalScroll}>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 1</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 2</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Item 3</Text></View>


      </ScrollView>
     </ScrollView>

    </SafeAreaView>
  


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1BA',
    paddingLeft: 20,
    
    
  },
  OT :{
    fontSize:30 ,
  },
  TSize: {
    fontSize: 50,
  },
  searchBox: {
    height: 40,
    borderColor: '#FBF9F7',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 60,
    width: '60%',
    backgroundColor: 'white',
  },

  horizontalScroll:{
   marginBottom: 50,
  },
  image: {
   
    
  },
  size: {
    fontSize: 14,
  },
  size2: {
   fontSize: 20,
   fontWeight: 700,
   fontFamily: 'Lato',
   lineHeight: 24,
   marginTop: 2,
   marginBottom: 30 
  },
  scrollItem1: {
  backgroundColor:'white',
  marginRight: 10,
  width: 300,
  height: 320,
  borderRadius: 30,
  },
  scrollItem2: {
    backgroundColor:'white',
    marginRight: 10,
    width: 300,
    height: 320,
    borderRadius: 30,
    },
  scrollItem3: {
    backgroundColor:'white',
    marginRight: 10,
    width: 300,
    height: 320,
    borderRadius: 30,
    },
  scrollItem4: {
    backgroundColor:'white',
    marginRight: 10,
    width: 300,
    height: 320,
    borderRadius: 30,
    },
  scrollItem5: {
    backgroundColor:'white',
    marginRight: 10,
    width: 300,
    height: 320,
    borderRadius: 30,
    },
  scrollItem6: {
    backgroundColor:'white',
    marginRight: 10,
    width: 300,
    height: 320,
    borderRadius: 30,
   },
    scrollItem7: {
      backgroundColor:'white',
      marginRight: 10,
      width: 300,
      height: 320,
      borderRadius: 30,
    },
  scrollItem8: {
    backgroundColor:'white',
    marginRight: 10,
    width: 300,
    height: 320,
    borderRadius: 30,
    },
    ts1: {
     paddingLeft: 40,
     paddingTop: 30,
     fontSize: 30,
    },
    ts2: {
      paddingLeft: 40,
    },
    scrollItem: {
      backgroundColor: 'white',
      width: 'fit-to-screen',
      height: 200,
      marginBottom: 20,
      borderColor: '#E8D1BA',
      borderRadius: 30,
    },
    txt: {
      textAlign: 'center',
      paddingTop: 90
    },
});
