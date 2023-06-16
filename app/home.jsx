import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import WelcomeSection from "../components/Home/WelcomeSection";
import { useState } from "react";
import PopularJobsSection from "../components/Home/PopularJobsSection";

const HomeScreen = () => {
	const avatar =
		"https://www.mpit-beratung.de/wp-content/uploads/2021/05/shutterstock_Berater-700x933.png";

	const router = useRouter();

	const [searchTerm, setSearchTerm] = useState("");

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 10 }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: "white" },
					headerShadowVisible: false,
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={{ marginTop: 10 }}>
							<MaterialIcons name="menu-open" size={29} color="gray" />
						</TouchableOpacity>
					),
					headerRight: () => (
						<TouchableOpacity style={{ marginTop: 10 }}>
							<Image
								src={avatar}
								resizeMode="cover"
								style={{ width: 35, height: 35, borderRadius: 10 }}
							/>
						</TouchableOpacity>
					),
				}}
			/>

			<ScrollView>
				<WelcomeSection
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					handleSearchClick={() => {
						if (searchTerm) {
							router.push(`/search/${searchTerm}`);
						}
					}}
				/>

				<PopularJobsSection />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
