import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, sizes } from '../shared/constant'
import Input from '../componenets/Input'
import  Icon from 'react-native-vector-icons/FontAwesome5'

const Home = () => {
  const [search, setsearch] = useState("")

  const articles = [
    {picture : require("../../assets/node.png"),title : "Nodejs" , desc : 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine' },
    {picture : require("../../assets/react.png"),title : "React" , desc : 'React JS is a JavaScript library used in web development to build interactive elements on websites' },
    {picture : require("../../assets/mongo.png"),title : "Mongo db" , desc : 'MongoDB is an open-source document-oriented database that is designed to store a large scale of data' },
  ]
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}> 
      <View style={styles.info}>
            <View style={{flexDirection : "row"}}>
              <Text style={styles.locationTitle}>location  </Text>
              <Icon name='caret-down' color={colors.gray } size={16} />
            </View>
            <View style={{flexDirection : "row"}}>
              <Icon name='map-pin' size={18} color={colors.secondary} />
              <Text style={styles.location}>Setif algeria</Text>
            </View>
          </View>
          <Image source={require("../../assets/picture_profil.png")} style={styles.pictureProfile} />
      </View>
      <Input placeHolder={"Search"} value={search} onHandler={setsearch} label='' /> 
      {articles.map((item,index) => {
         if ((search && item.title.includes(search)) || !search) {
          return(
            <View key={index} style={styles.articleContainer} >
                <Image source={item.picture} style={styles.pictureArticle} />
                <View style={styles.infoArticle}>
                  <Text style={styles.titleArticle}>{ item.title }</Text>
                  <Text style={styles.descArticle}>{item.desc}</Text>
                  <Text style={styles.seeDetails}>See All</Text>

                </View>
            </View>
          )
         }

          })}

          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>+</Text>
        </Pressable>
    
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container  : {
        display : 'flex',
        minHeight : sizes.height,
        alignItems : 'center',
        paddingTop : 60,
        paddingBottom : 30,
        paddingHorizontal  : sizes.mh,
    },
    header : {
      width : sizes.width - sizes.mh,
      justifyContent : "space-between",
      flexDirection :'row',
      alignItems :"center"
    },
    locationTitle :{
      fontSize : 16,
      color : colors.gray,
      fontWeight : "600"
    },
    location : {
      fontSize : 16,
      fontWeight : "bold",
      color : colors.secondary,
      marginLeft : 10
    },
    articleContainer : {
      width : sizes.width - sizes.mh,
      paddingHorizontal : 15,
      display : "flex",
      
      paddingVertical : 10,
      flexDirection : "row",
      elevation : 2,
      marginVertical : 10,
      backgroundColor : "#FFF",
      borderRadius :20,
    },
    pictureArticle :{
      height : 60,
      width :60,
      borderRadius : 30,
      marginRight : 20
    },
    infoArticle : {
      display : 'flex',
      flex : 1
    },
    titleArticle :{
      color : colors.secondary,
      fontSize : 16,
      fontWeight :"bold",
    },
    descArticle : {
      fontSize : 12,
      fontWeight :"600",
      color : colors.gray
    },
    seeDetails : {
      fontSize: 14,
      fontWeight : 'bold',
      color : colors.primary,
      marginTop :10
    },
    buttonContainer: {
      position :'absolute',
      right : 20,
      bottom : 40,
      width: 60,
      height: 60,
      borderRadius : 30,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 30,
      fontWeight: "600",
      color: "#FFF",
    },
})