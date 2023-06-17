import { View, Text } from "react-native";
import React from "react";

const AboutTabContent = ({ item }) => {
	return (
		<View>
			<Text style={{ fontWeight: 600, fontSize: 17 }}>About the job:</Text>

			<View style={{ marginTop: 20 }}>
				<Text style={{ color: "#9ca3af" }}>{item?.job_description}</Text>
			</View>
		</View>
	);
};

export default AboutTabContent;
