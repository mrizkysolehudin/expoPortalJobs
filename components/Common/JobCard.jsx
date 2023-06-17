import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const JobCard = ({ item, handleJobClick, selectedJob }) => {
	return (
		<TouchableOpacity
			onPress={() => handleJobClick(item)}
			activeOpacity={0.7}
			style={{
				flexDirection: "row",
				paddingHorizontal: 10,
				paddingVertical: 4,
				borderWidth: selectedJob == item?.job_id ? 1 : 0,
				borderRadius: 10,
				backgroundColor: selectedJob == item?.job_id ? "#f3f4f6" : "white",
			}}>
			<View
				style={{
					backgroundColor: "#e2e8f0",
					width: 50,
					height: 50,
					borderRadius: 15,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<Image
					src={
						item?.employer_logo
							? item?.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
					}
					style={{ width: 40, height: 40, borderRadius: 10 }}
				/>
			</View>

			<View style={{ marginLeft: 10, justifyContent: "center" }}>
				<Text style={{ fontSize: 16, fontWeight: 600 }}>{item?.job_title}</Text>
				<Text style={{ color: "#9ca3af" }}>{item?.employer_name}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default JobCard;
