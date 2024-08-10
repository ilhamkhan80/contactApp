import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Contact = () => {
    const [name,setName]= useState('')
    const [phone,setPhone]= useState('')
    const [contacts,setContacts]= useState([])
     const[modelVisible,setModelVisible]=useState(false)
    const SaveContact = ()=>{
        const contact = [...contacts,{name,phone}]
        setContacts(contact)
        setModelVisible(false)
        setName('')
        setPhone('')
       
    }

    const Delete = (phone)=>{
       const updatedContacts = contacts.filter((input)=>input.phone !== phone)
        setContacts(updatedContacts)
    }
  return (
    <View >
      <Text style={styles.style}>Contact list:</Text>
      <View style={styles.style1}>
     <Button
        title='Add New Contact'
        onPress={() => setModelVisible(true)}/>
      </View>
     <Modal visible={modelVisible} animationType='fade' transparent={true}>
     
       <View style={styles.style2}>
       
       <TextInput  style={styles.box}
       placeholder='Enter Name'
       onChangeText={(input)=>setName(input)}
       />
    
       <TextInput style={styles.box}
       placeholder='Enter Phone'
       onChangeText={(input)=>setPhone(input)}
       />
      
        <View style={{marginTop:10}}>
        <Button title='Save Contact' onPress={(input)=>SaveContact(input)}/>
        </View>
        </View>
        
        </Modal>
   
     
   
     <FlatList
     data={contacts}
     renderItem={({item})=>{
        return(
            <View>
                <Text>{item.name}</Text>
                <Text>{item.phone}</Text>
            <Button title='Delete' onPress={()=>Delete(item.phone)}/>
            </View>
        )
     }}
     />
    
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
style:{color:'black',fontSize:20,fontWeight:'bold',padding:20,textDecorationLine:'underline'},
style1:{borderRadius:60,width:'50%',margin:10,alignSelf:'center',alignItems:'center'},
style2:{flex:1,backgroundColor:'grey',borderColor:'white',borderRadius:20},
box:{color:'black',fontWeight:'bold',fontSize:20,padding:20,width:'90%',borderWidth:2,borderRadius:20,marginTop:10},
})