import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	FlatList,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const WelcomeSection = ({ searchTerm, setSearchTerm, handleSearchClick }) => {
	const router = useRouter();

	const jobTypesOptions = ["Full-time", "Part-time", "Contractor"];
	const [activeJob, setActiveJob] = useState(jobTypesOptions[0]);

	return (
		<View style={{ marginTop: 16 }}>
			<View>
				<Text style={{ fontSize: 21, color: "#848587", fontWeight: 500 }}>
					Hello rizky
				</Text>
				<Text style={{ fontSize: 26, color: "#73147b", fontWeight: 700 }}>
					Find your perfect job
				</Text>
			</View>

			<View style={{ flexDirection: "row", columnGap: 10, marginVertical: 18 }}>
				<TextInput
					value={searchTerm}
					onChangeText={setSearchTerm}
					placeholder="What are you looking for?"
					placeholderTextColor="#bec2c7"
					style={{
						backgroundColor: "#f1f5f9",
						paddingHorizontal: 10,
						width: "85%",
						paddingVertical: 8,
						borderRadius: 8,
					}}
				/>

				<TouchableOpacity
					onPress={handleSearchClick}
					activeOpacity={0.8}
					style={{
						backgroundColor: "#f43f5e",
						flex: 1,
						borderRadius: 10,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<EvilIcons name="search" size={30} color="#dce8f6" />
				</TouchableOpacity>
			</View>

			<FlatList
				data={jobTypesOptions}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							setActiveJob(item);
							router.push(`/search/${item}`);
						}}
						style={{
							borderColor: activeJob === item ? "black" : "#d6d3d1",
							borderWidth: 2,
							borderRadius: 18,
							paddingVertical: 4,
							paddingHorizontal: 14,
						}}>
						<Text
							style={{
								color: activeJob === item ? "black" : "#d6d3d1",
							}}>
							{item}
						</Text>
					</TouchableOpacity>
				)}
				horizontal
				contentContainerStyle={{ columnGap: 10 }}
				keyExtractor={(item) => item}
			/>
		</View>
	);
};

export default WelcomeSection;
