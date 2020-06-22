import React, { useRef, useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	View,
	Dimensions,
	TextInput,
	StatusBar,
	ImageBackground,
	FlatList
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';

export default function Home() {
	const [ background, setBackground ] = useState({
		uri:
			'https://ichef.bbci.co.uk/news/410/cpsprodpb/13A26/production/_106022408_avnegers976.jpg',
		name: 'Avengers: End game',
		stat: '2019 . Action/Sci-fi . 3h 2m',
		desc:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
	});
	const [ gallery, setgallery ] = useState([
		{
			image:
				'https://pmcvariety.files.wordpress.com/2016/02/gladiator.jpg?w=681&h=383&crop=1',
			title: 'Gladiator',
			released: '2019 . Action/Sci-fi . 3h 2m',
			desc:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
			key: '1'
		},
		{
			image:
				'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT0Yf7_FepQU9VEbNsZ7824_2nvdFKOlogCo-yvJhSjuRA22aYg',
			title: 'ladybird',
			released: '2019 . Action/Sci-fi . 3h 2m',
			desc:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
			key: '2'
		},
		{
			image:
				'https://images-na.ssl-images-amazon.com/images/I/91FZZD7AfHL._AC_SY679_.jpg',
			title: 'beauty and the beast',
			released: '2019 . Action/Sci-fi . 3h 2m',
			desc:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
			key: '3'
		},
		{
			image:
				'https://ichef.bbci.co.uk/news/410/cpsprodpb/13A26/production/_106022408_avnegers976.jpg',
			title: 'Avengers: End game',
			released: '2019 . Action/Sci-fi . 3h 2m',
			desc:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
			key: '4'
		}
	]);
	const { width, height } = Dimensions.get('window');
	const carouselRef = useRef(null);
	const renderItem = ({ item, index }) => {
		return (
			<View>
				<TouchableOpacity
					onPress={() => {
						carouselRef.current.scrollToIndex(index);
						setBackground({
							uri: item.image,
							name: item.title,
							stat: item.released,
							desc: item.desc
						});
					}}
				>
					<Image
						source={{ uri: item.image }}
						style={styles.carouselImage}
					/>
					<Text style={styles.carouselText}>{item.title}</Text>
					<MaterialIcons
						name="library-add"
						size={30}
						color="white"
						style={styles.carouselIcon}
					/>
				</TouchableOpacity>
			</View>
		);
	};
	return (
		<ScrollView>
			<View style={styles.carouselContainer}>
				<View
					style={{
						...StyleSheet.absoluteFill,
						backgroundColor: '#000'
					}}
				>
					<ImageBackground
						source={{ uri: background.uri }}
						style={styles.imageBg}
						blurRadius={2}
					>
						<View style={styles.searchBoxContainer}>
							<TextInput
								placeholder="search movies"
								placeholderTextColor="#666"
								style={styles.searchBox}
							/>
							<Feather
								name="search"
								size={22}
								color="#666"
								style={styles.searchBoxIcon}
							/>
						</View>
						<Text
							style={{
								color: '#fff',
								fontSize: 24,
								fontWeight: 'bold',
								marginLeft: 10,
								marginVertical: 10
							}}
						>
							Top picks this week
						</Text>
						<View style={styles.carouselContainerView}>
							<Carousel
								data={gallery}
								renderItem={renderItem}
								itemWidth={200}
								containerWidth={width - 20}
								style={styles.carousel}
								separatorWidth={0}
								ref={carouselRef}
								inActiveOpacity={0.4}
							/>
						</View>
						<View style={styles.movieinfoContainer}>
							<View style={{ justifyContent: 'center' }}>
								<Text style={styles.movieName}>
									{background.name}
								</Text>
								<Text style={styles.movieStat}>
									{background.stat}
								</Text>
							</View>
							<TouchableOpacity style={styles.playContainer}>
								<FontAwesome
									name="play"
									size={22}
									color="#02ad94"
									style={{ marginLeft: 4 }}
								/>
							</TouchableOpacity>
						</View>
						<View style={{ paddingHorizontal: 14, marginTop: 14 }}>
							<Text
								style={{
									color: 'white',
									opacity: 0.8,
									lineHeight: 20
								}}
							>
								{background.desc}
							</Text>
						</View>
					</ImageBackground>
				</View>
			</View>
			<View
				style={{
					backgroundColor: '#000',
					paddingVertical: 20,
					paddingHorizontal: 20
				}}
			>
				<Text
					style={{
						color: 'white',
						fontSize: 24,
						fontWeight: 'bold',
						marginBottom: 24
					}}
				>
					Continue watching
				</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	carouselContainer: {
		flex: 1,
		backgroundColor: '#000',
		height: 720,
		paddingHorizontal: 14
	},
	imageBg: {
		flex: 1,
		height: null,
		width: null,
		opacity: 1,
		justifyContent: 'flex-start'
	},
	searchBoxContainer: {
		backgroundColor: '#fff',
		borderRadius: 50,
		elevation: 10,
		marginTop: 50,
		marginHorizontal: 10,
		overflow: 'hidden',
		width: '95%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	searchBox: {
		padding: 12,
		paddingLeft: 20,
		lineHeight: 50,
		fontSize: 16
	},
	searchBoxIcon: {
		position: 'absolute',
		right: 20
	},
	carouselContainerView: {
		width: '100%',
		height: 350,
		justifyContent: 'center',
		alignItems: 'center'
	},
	Carousel: {
		flex: 1,
		overflow: 'visible'
	},
	carouselImage: {
		width: 200,
		height: 320,
		borderRadius: 10,
		alignSelf: 'center',
		backgroundColor: 'rgba(0,0,0,0.9)'
	},
	carouselText: {
		padding: 14,
		color: 'white',
		position: 'absolute',
		bottom: 10,
		left: 2,
		fontWeight: 'bold'
	},
	carouselIcon: {
		position: 'absolute',
		top: 20,
		right: 20
	},
	movieinfoContainer: {
		flexDirection: 'row',
		marginTop: 16,
		justifyContent: 'space-between',
		width: Dimensions.get('window').width - 14
	},
	movieName: {
		paddingLeft: 14,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 6
	},
	movieStat: {
		paddingLeft: 14,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 14,
		opacity: 0.8
	},
	playContainer: {
		backgroundColor: '#212121',
		padding: 18,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 10,
		borderWidth: 4,
		borderColor: 'rgba(2,173,148,0.2)',
		marginBottom: 14
	}
});
