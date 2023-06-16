import {
	View,
	Text,
	TouchableOpacity,
	Alert,
	ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import useFetch from "../../hooks/useFetchApiSearch";
import PopularJobCard from "./PopularJobCard";
import { FlatList } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const PopularJobsSection = () => {
	const { data, isLoading, error } = useFetch("search", {
		query: "Frontend developer",
	});

	const [selectedJob, setSelectedJob] = useState("");

	const router = useRouter();
	const handleJobClick = (item) => {
		setSelectedJob(item?.job_id);
		router.push(`/job-details/${item?.job_id}`);
	};

	return (
		<View style={{ marginTop: 25 }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "flex-end",
				}}>
				<Text style={{ fontSize: 22, color: "#73147b", fontWeight: 600 }}>
					Popular Jobs
				</Text>
				<TouchableOpacity>
					<Text style={{ color: "gray", fontSize: 16 }}>Show all</Text>
				</TouchableOpacity>
			</View>
			{error ? (
				Alert.alert("error:", error)
			) : isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={data?.data}
					renderItem={({ item }) => (
						<PopularJobCard
							selectedJob={selectedJob}
							item={item}
							handleJobClick={handleJobClick}
						/>
					)}
					horizontal
					contentContainerStyle={{ columnGap: 20, marginVertical: 10 }}
					keyExtractor={(item) => item.job_id}
				/>
			)}
		</View>
	);
};

export default PopularJobsSection;
