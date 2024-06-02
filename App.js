import { StatusBar } from 'expo-status-bar';
import { PixelRatio, SafeAreaView, StyleSheet, Text, View , Image, TextInput, ScrollView} from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.flx}>
          <View flx2>
            <Text style={styles.TSize} >
             Hello, Devs 
            </Text>  

            <Text style={styles.size}>
             14 tasks today
            </Text>
          </View>  
            <Image source={require("./Profile_Image.png")}/>
      </View>
      
      
      <TextInput
        style={styles.searchBox}
        placeholder="Search"
      />
      <ScrollView>
       <View><Text style={styles.size2}> Categories</Text></View>

      <ScrollView horizontal={true} style={styles.horizontalScroll}  showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollItem1}>
          <Text style={styles.ts1}>Exercise</Text>
          <Text style={styles.ts2}>12 tasks</Text>
          <View style={styles.image}>
            <Image source={require("./young woman working online.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem2}>
          <Text style={styles.ts1}>Item 2</Text>
          <Text style={styles.ts2}>12 tasks</Text>
          <View style={styles.image}>
             <Image source={require("./young woman working at desk.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem3}>
          <Text style={styles.ts1}>Item 3</Text>
          <Text style={styles.ts2}>12 tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem4}>
          <Text style={styles.ts1}>Item 1</Text>
          <Text style={styles.ts2}>12 tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem5}>
          <Text style={styles.ts1}>Item 2</Text>
          <Text style={styles.ts2}>12 tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem6}>
          <Text style={styles.ts1}>Item 3</Text>
          <Text style={styles.ts2}>12 tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem7}>
          <Text style={styles.ts1}>Item 1</Text>
          <Text style={styles.ts2}>12 tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem8}>
          <Text style={styles.ts1}>Item 2</Text>
          <Text style={styles.ts2}>12 tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
      </ScrollView>  

      <View ><Text style= {styles.OT}>Ongoing Task</Text></View>
      
        
      <ScrollView style={styles.verticalScroll} showsVerticalScrollIndicator={false}>
        <View style={styles.scrollItem}><Text style={styles.txt}>Mobile App Development</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Web Development</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Push Ups</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Documentation</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Maintenance</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Research</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Deployment</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Monitoring</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Software Design</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Code Review</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Testing and Debugging</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Optimization</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Data Analysis and Reporting</Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Security Audits  </Text></View>
        <View style={styles.scrollItem}><Text style={styles.txt}>Mentoring and Training</Text></View>


      </ScrollView>
     </ScrollView>

    </SafeAreaView>
  


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(232, 209, 186, 0.5)',
  
    
    
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
      borderWidth: 1,
      borderColor: '#E8D1BA',
      borderRadius: 30,
    },
    txt: {
      textAlign: 'left',
      paddingTop: 75,
      paddingLeft: 50,
      fontSize: 30,
    },
    img :{
      height: 200,
      width: 200,
    },
    image: {
      paddingLeft: 70,
      paddingTop:15,
     },
     flx: {
      flex: 0,
      flexDirection:'row',
      alignItems: 'center',
      marginRight: 100,
     },
     flx2: {
       
     },
});
