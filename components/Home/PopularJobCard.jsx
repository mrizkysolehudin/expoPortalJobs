import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const PopularJobCard = ({ item, selectedJob, handleJobClick }) => {
	return (
		<TouchableOpacity
			onPress={() => handleJobClick(item)}
			activeOpacity={0.8}
			style={{
				flex: 1,
				width: 210,
				paddingHorizontal: 10,
				paddingTop: 20,
				paddingBottom: 5,
				borderWidth: selectedJob == item?.job_id ? 1 : 0,
				borderRadius: 10,
			}}>
			<View
				style={{
					padding: 10,
					backgroundColor: "#e2e8f0",
					width: 60,
					height: 60,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 12,
				}}>
				<Image
					src={
						item?.employer_logo
							? item?.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
					}
					style={{
						width: 50,
						height: 50,
						borderRadius: 10,
					}}
				/>
			</View>

			<Text style={{ color: "#b5b5bb", fontWeight: 500, marginTop: 10 }}>
				{item.employer_name}
			</Text>
			<Text style={{ fontSize: 18, fontWeight: 500, marginTop: 20 }}>
				{item?.job_title.length > 21
					? `${item?.job_title.slice(0, 20)}...`
					: item?.job_title}
			</Text>
			<Text style={{ color: "#b5b5bb", fontWeight: 500 }}>{item.job_country}</Text>
		</TouchableOpacity>
	);
};

export default PopularJobCard;
