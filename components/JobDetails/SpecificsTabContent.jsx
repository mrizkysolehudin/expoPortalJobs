import { View, Text } from "react-native";
import React from "react";

const SpecificsTabContent = ({ items, title }) => {
	return (
		<View>
			<Text>{title}</Text>

			<View style={{ marginTop: 20 }}>
				{items ? (
					items.map((item) => <Text style={{ color: "#a3a3a3" }}>{item}</Text>)
				) : (
					<Text style={{ color: "#a3a3a3" }}>N/A</Text>
				)}
			</View>
		</View>
	);
};

export default SpecificsTabContent;
