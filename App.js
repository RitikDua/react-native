import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Keyboard,TouchableOpacity,KeyboardAvoidingView,TextInput } from 'react-native';
import Task from './Components/Task';
export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask=()=>{
    console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask('');
  }
  const completeTask=(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  }
  return (
    <View style={styles.container}>
    <View style={styles.taskwrapper}>
      <Text style={styles.selectionTitle}>
      Today's Tasks</Text>
      <View style={styles.items}>
      
        {
           taskItems.map((item,index)=>{
               return (
                   <TouchableOpacity  key={index} onPress={()=>completeTask(index)} >
                     <Task text={item} />
                   </TouchableOpacity>
                )
           }) 
        }
      
      </View>

    </View>
    <KeyboardAvoidingView behaviour={Platform.OS==="ios"?"padding":"height"} 
      style={styles.writeTaskWrapper}>
      <TextInput style={styles.input} value={task} onChangeText={(text)=>setTask(text)} placeholder="Write a text" ></TextInput>
      <TouchableOpacity onPress={()=> handleAddTask()}> 
        <View style={styles.addWrapper}>
          <Text style={styles.addText} >+</Text>
        </View>
      </TouchableOpacity>  
    </KeyboardAvoidingView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskwrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  selectionTitle:{
    fontSize:24,
    fontWeight:'bold' 
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:40,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1
  }
});
