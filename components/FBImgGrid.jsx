import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default FBImgGrid = (props) => {
	const RenderImage = (props) => {
		let imgSource = {};
		if(props.sourceType=='local'){
			imgSource = { uri : props.photoUri};
		}
		return (
			<Image source={imgSource} style={{ resizeMode: 'cover', width: '100%', height: (props.containerHeight / props.heightDivisor) - props.gutter }}/>
		)
	}
	let num = 0;
	return (
		<View style={{ width: '100%', height: props.height, backgroundColor: 'gray' }}>
			{
				props.photos.length >= 1?
				<View style={{ padding: props.gutter }}>
					{
						props.photos.length > 2 &&
						<View style={{ flexDirection: 'row', width: '100%'}}>
							{
								[...Array(props.photos.length >= 5 ? 2 : 1)].map((_, index) => {
									num += 1;
									return (
										<TouchableOpacity key={index} activeOpacity={0.5} style={{ width: props.photos.length >= 5 ? '50%' : '100%',padding: props.gutter }}>
											<RenderImage photoUri={props.photos[num-1]} containerHeight={props.height} heightDivisor={props.photos.length > 2 ? 2 : 1} sourceType={props.sourceType} gutter={props.gutter * (props.photos.length >= 3 ? 3 : 4)}/>
										</TouchableOpacity>
									)
								})
							}
						</View>
					}
					<View style={{ flexDirection: 'row', width: '100%'}}>
						{
							[...Array(3)].map((_, index) => {
								num += 1;
								return (
									<TouchableOpacity key={index} activeOpacity={0.5} style={{width: props.photos.length == 1 ? '100%' : props.photos.length <= 3 ? '50%' : '33.33%', padding: props.gutter }}>
										<RenderImage photoUri={props.photos[num-1]} containerHeight={props.height} heightDivisor={props.photos.length > 2 ? 2 : 1} sourceType={props.sourceType} gutter={props.gutter * (props.photos.length >= 3 ? 3 : 4)}/>
										{
											num >= 5 && props.photos.length-5 != 0 &&
											<View
												onPress={() => {}}
												style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(50, 50, 50, 0.6)', justifyContent: 'center', alignItems: 'center', top: props.gutter, left: props.gutter }}>
												<Text style={{ fontSize: 24, color: 'white' }}>+{props.photos.length-5}</Text>
											</View>
										}
									</TouchableOpacity>
								)
							})
						}
					</View>
				</View>
				:
				<></>
			}
		</View>
	)
}