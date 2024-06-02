import { StatusBar } from 'expo-status-bar';
import { PixelRatio, SafeAreaView, StyleSheet, Text, View , Image, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
   <View style={styles.container}>
    <SafeAreaView  style={styles.mainView}>
      <View style={styles.flx}>
          <View flx2>
            <Text style={styles.TSize}>
             Hello, Devs 
            </Text>  

            <Text style={styles.size}>
             14 tasks today
            </Text>
          </View>  
            <Image source={require("./Profile_Image.png")} style={styles.img1}/>
      </View>


      <View style={styles.flex2}>
       
        <TextInput
          style={styles.searchBox}
          placeholder= "Search"
        />
        <Image source={require("./Filter.png")} style={styles.img2}/>
      </View>


      <ScrollView>
       <View><Text style={styles.size2}> Categories</Text></View>

      <ScrollView horizontal={true} style={styles.horizontalScroll}  showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollItem1}>
          <Text style={styles.ts1}>Exercise</Text>
          <Text style={styles.ts2}>12 Tasks</Text>
          <View style={styles.image}>
            <Image source={require("./young woman working online.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem2}>
          <Text style={styles.ts1}>Study</Text>
          <Text style={styles.ts2}>12 Tasks</Text>
          <View style={styles.image}>
             <Image source={require("./young woman working at desk.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem3}>
          <Text style={styles.ts1}>Code</Text>
          <Text style={styles.ts2}>12 Tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem4}>
          <Text style={styles.ts1}>Cook</Text>
          <Text style={styles.ts2}>12 Tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem5}>
          <Text style={styles.ts1}>Play</Text>
          <Text style={styles.ts2}>12 Tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem6}>
          <Text style={styles.ts1}>Wash</Text>
          <Text style={styles.ts2}>12 Tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem7}>
          <Text style={styles.ts1}>Cleaning</Text>
          <Text style={styles.ts2}>12 Tasks</Text>
          <View style={styles.image}>
            <Image source={require("./Profile_Image.png")} style={styles.img}/>
          </View>
        </View>
        <View style={styles.scrollItem8}>
          <Text style={styles.ts1}>Sing</Text>
          <Text style={styles.ts2}>12 Tasks</Text>
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
  
    </View> 

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(232, 209, 186, 0.5)',
   },
   mainView: {
    marginLeft: 20,
    marginRight: 10,
   },
  OT :{
    fontSize: 20,
   fontWeight: 700,
   fontFamily: 'Lato',
   lineHeight: 24,
   marginTop: 2,
   marginBottom: 30 ,
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
    width: '70%',
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
  width: 250,
  height: 300,
  borderRadius: 30,
  },
  scrollItem2: {
    backgroundColor:'white',
    marginRight: 10,
    width: 270,
    height: 300,
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
     
     fontFamily: 'Lato',
     fontSize: 20
    },
    ts2: {
      paddingLeft: 40,
    },
    scrollItem: {
      backgroundColor: 'white',
      width: 'fit-to-screen',
      height: 130,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#E8D1BA',
      borderRadius: 30,
    },
    txt: {
      textAlign: 'left',
      paddingTop: 50,
      paddingLeft: 20,
      fontSize: 20,
      fontFamily: 'Lato',
    },
    img :{
      height: 150,
      width: 150,
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
     flex2: {
      flexDirection:'row',

     },
    img1: {
      marginLeft: 80,
      marginTop: 0,
    },
    img2: {
      marginLeft: 55,
      marginTop: 15,
    },
});
