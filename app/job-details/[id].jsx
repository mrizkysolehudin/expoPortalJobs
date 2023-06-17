import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	Alert,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import useFetchApiSearch from "../../hooks/useFetchApiSearch";
import { ScrollView } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import AboutTabContent from "../../components/JobDetails/AboutTabContent";
import SpecificsTabContent from "../../components/JobDetails/SpecificsTabContent";

const JobDetailsScreen = () => {
	const router = useRouter();
	const { id } = useSearchParams();

	const { data, isLoading, error } = useFetchApiSearch("job-details", {
		job_id: id,
		extended_publisher_details: "false",
	});
	const item = data?.data ? data?.data[0] : "";

	const tabsTypesOptions = ["About", "Qualifications", "Responsibilities"];
	const [activeTab, setActiveTab] = useState(tabsTypesOptions[0]);

	const displayTabContent = () => {
		switch (activeTab) {
			case "About":
				return <AboutTabContent item={item} />;

			case "Qualifications":
				return (
					<SpecificsTabContent
						title="Qualifications:"
						items={item?.job_highlights?.Qualifications}
					/>
				);

			case "Responsibilities":
				return (
					<SpecificsTabContent
						title="Responsibilities"
						items={item.job_hightlights?.Responsibilities}
					/>
				);

			default:
				return null;
		}
	};

	if (error) return Alert.alert("Error: ", error);

	if (isLoading)
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
				}}>
				<ActivityIndicator />
			</View>
		);

	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "white" },
					headerShadowVisible: false,
					headerTitle: "",
					headerRight: () => (
						<View style={{ marginTop: 19, marginHorizontal: 6 }}>
							<Entypo name="share" size={24} color="black" />
						</View>
					),
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => router.back()}
							style={{ marginTop: 19, marginHorizontal: 6 }}>
							<AntDesign
								name="arrowleft"
								size={24}
								color="black"
								style={{ transform: [{ scaleX: 1.2 }] }}
							/>
						</TouchableOpacity>
					),
				}}
			/>

			<ScrollView style={{ paddingVertical: 60, marginHorizontal: 20 }}>
				<View>
					<View>
						<View
							style={{
								alignItems: "center",
							}}>
							<Image
								src={
									item?.employer_logo
										? item?.employer_logo
										: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
								}
								style={{ width: 50, height: 50, borderRadius: 10 }}
							/>

							<Text
								style={{
									fontSize: 20,
									fontWeight: 700,
									color: "#701a75",
									marginTop: 40,
								}}>
								{item?.job_title}
							</Text>
							<Text>
								{item?.employer_name}/{" "}
								<SimpleLineIcons name="location-pin" size={12} color="gray" />{" "}
								<Text style={{ color: "gray" }}>{item?.job_country}</Text>
							</Text>
						</View>

						<View
							style={{
								flexDirection: "row",
								columnGap: 10,
								justifyContent: "center",
								marginTop: 30,
							}}>
							{tabsTypesOptions.map((tab) => (
								<TouchableOpacity
									onPress={() => setActiveTab(tab)}
									key={tab}
									style={{
										backgroundColor: activeTab == tab ? "#701a75" : "#f1f5f9",
										paddingVertical: 10,
										paddingHorizontal: 17,
										borderRadius: 10,
									}}>
									<Text style={{ color: activeTab == tab ? "white" : "#a1a1aa" }}>
										{tab}
									</Text>
								</TouchableOpacity>
							))}
						</View>

						<View style={{ paddingBottom: 100, paddingTop: 40 }}>
							{displayTabContent()}
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default JobDetailsScreen;
