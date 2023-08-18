import HomeView from "Components/Home";
import { API } from "utils/services";

async function getJobs() {
  try {
    const result = await API.get("/jobs");
    return result.data;
  } catch (error) {
    console.log("error: ", error);
  }
}

export default async function Home() {
  const recentJobs = await getJobs();
  return <HomeView recentJobs={recentJobs} />;
}
