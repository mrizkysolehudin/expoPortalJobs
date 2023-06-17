import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	Alert,
} from "react-native";
import React, { useState } from "react";
import JobCard from "../Common/JobCard";
import useFetchApiSearch from "../../hooks/useFetchApiSearch";
import { useRouter } from "expo-router";

const NearbyJobsSection = () => {
	const { data, isLoading, error } = useFetchApiSearch("search", {
		query: "Backend developer",
	});

	const [selectedJob, setSelectedJob] = useState();

	const router = useRouter();
	const handleJobClick = (item) => {
		router.push(`/job-details/${item?.job_id}`);
		setSelectedJob(item?.job_id);
	};

	return (
		<View style={{ marginTop: 25, marginBottom: 30 }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "flex-end",
				}}>
				<Text style={{ fontSize: 22, color: "#73147b", fontWeight: 600 }}>
					Nearby Jobs
				</Text>
				<TouchableOpacity>
					<Text style={{ color: "gray", fontSize: 16 }}>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={{ marginTop: 20, rowGap: 10 }}>
				{isLoading ? (
					<ActivityIndicator />
				) : error ? (
					Alert.alert("Error: ", error)
				) : (
					data?.data?.map((item, index) => (
						<JobCard
							key={index}
							item={item}
							handleJobClick={handleJobClick}
							selectedJob={selectedJob}
						/>
					))
				)}
			</View>
		</View>
	);
};

export default NearbyJobsSection;
