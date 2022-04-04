import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


 


export default class WFapp extends React.Component{
  constructor(){
    super();
    this.state={weather:''};
  }
  getWeather= async () => {
var url="https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
return fetch(url)
.then(response=>response.json())
.then(responseJson=> {

this.seState({
  weather:responseJson,

});
})
.catch(error=>{
console.error(error);

});
  };
 
   componentDidMount=()=>{
     this.getWeather();
   }

render(){
 if(this.state.weather===''){
           return(<View style={styles.container}>
           <Text style={{marginTop:200,marginLeft:90,fontSize:43,color:"blue"}}>Loading...</Text>
           </View>
           ); 
           
 }
else{
  return(<View style={styles.container}>
  <View style={styles.subContainer}>
  <Text style={styles.title}>WeatherForecast</Text>{

}
  <Image
  style={styles.CloudImage}
  source={require('./assets/CloudImage.png')}

  />

  <View style={styles.textContainer}>
  <Text  style={{fontSize:18}}> {this.state.weather.main.temp}&deg;C </Text>
<Text style={{fontSize:20,margin:15}}> humidity:{this.state.weather.main.humidity}</Text>
<Text style={{fontSize:20}}>{this.state.weather.weather[0].description}  </Text>
  </View>
  
  </View>
  </View>

  );
}

}


}
const styles=StyleSheet.create({
  container:{
    flex:1
    
  },
  subContainer:{
    flex:1,
    borderWidth:1,
    alignItems:"center"

  
  },
  title:{
    marginTop:50,
    fontSize:30,
    fontWeight:'550'

  },
  CloudImage:{
    width:200,
    heigth:200,
    marginTop:30
  },
  textContainer:{
    flex:1,
    alignItems:"center",
    marginTop:-150,
    flexDirection:"row"

  }
  
});

