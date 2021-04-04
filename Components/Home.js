import React from 'react'
import {Text,View,SafeAreaView,Image,StyleSheet,FlatList} from 'react-native';
import { Feather } from '@expo/vector-icons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../colors';
const Home = props => {
	const renderCategoryItem=({item})=>{
		return (
			<View style={[
				styles.categoryItemWrapper,
				{
					backgroundColor:item.selected?colors.primary:colors.white,
					marginLeft:item.id===1?20:0
				}
				]}>
				<Image source={item.image} style={styles.categoryItemImage}/>
				<Text style={styles.categoryItemTitle}>{item.title}</Text>
				<View style={[styles.categorySelectWrapper,{
					backgroundColor:item.selected?colors.white:colors.secondary
				}]}>
					<Feather name="chevron-right" size={8} 
					style={[styles.categorySelectItem,{

					}]}
					color={item.selected?'black':colors.white}
					/>
				</View>
			</View>
		)
	}
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={styles.headerWrapper}>
		<Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
		<Feather name="menu" size={24} color={colors.textDark} />
		</View>	
		
		</SafeAreaView>
		<View style={styles.titleWrapper}>
			<Text style={styles.titlesSubtitle}>Food</Text>
			<Text style={styles.titlesTitle}> Delivery</Text>
		</View>

		<View style={styles.searchWrapper}>
			<Feather name="search" size={16} colors={colors.textDark} />
			<View style={styles.search}>
				<Text style={styles.searchText}> Search</Text>
			</View>
		</View>

		<View style={styles.categoriesWrapper}>
			<Text style={styles.categoriesTitle}> Categories</Text>
			<View style={styles.categoriesListWrapper}> 
				<FlatList horizontal={true} data={categoriesData} renderItem={renderCategoryItem} keyExtractor={item=>item.id}/>
			</View>
		</View>

		</View>
	
	);
}

const styles=StyleSheet.create({
	container:{
		flex:1
	},
	headerWrapper:{
		flexDirection:'row',
		justifyContent:'space-between',
		paddingHorizontal:20,
		paddingTop:34,
		alignItems:'center'
	},
	profileImage:{
		width:40,
		height:40,
		borderRadius:40
	},
	titleWrapper:{
		marginTop:50,
		paddingHorizontal:20,
	},
	titlesSubtitle:{
		fontFamily:'Montserrat-Regular',
		fontSize:16,
		padding:11,
		color:colors.textDark,
	},
	titlesTitle:{
		fontFamily:'Montserrat-Bold',
		fontSize:32,
		paddingLeft:0,
		color:colors.textDark,
		marginTop:5
	},
	searchWrapper:{
		paddingHorizontal:20,
		marginTop:30,
		flexDirection:'row',
		alignItems:'center',	
	},
	search:{
		flex:1,
		marginLeft:10,
		borderBottomColor:colors.textLight,
		borderBottomWidth:2
	},
	searchText:{
		fontFamily:'Montserrat-Semibold',
		fontSize:14,
		marginBottom:5,
		color:colors.textLight,
	},
	categoriesWrapper:{
		marginTop:30
	},
	categoriesTitle:{
		fontFamily:'Montserrat-Bold',
		fontSize:16,
		paddingHorizontal:20,
	},
	categoriesListWrapper:{
		paddingTop:15,
		paddingBottom:20
	},
	categoryItemWrapper:{
		backgroundColor:'#F5CA48',
		marginRight:20,
		borderRadius:20,

	},
	categoryItemImage:{
		 width:60,
		 height:60,
		 marginTop:24,
		 alignItems:'center',
		 marginHorizontal:20,
	},
	categoryItemTitle:{
		textAlign:'center',
		fontFamily:'Montserrat-Medium',
		fontSize:14,
		marginTop:10
	},
	categorySelectWrapper:{
		alignSelf:'center',
		justifyContent:'center',
		marginTop:20,
		width:26,
		height:26,
		borderRadius:56,
		marginBottom:20
	},
	categorySelectItem:{
		alignSelf:'center'
	}

});
export default Home

