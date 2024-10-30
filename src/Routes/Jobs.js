import { useEffect, useState } from "react";
import JobList from "../JobList";
import JoblyApi from "../api";

function Jobs({currentUser}) {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const jobsData = await JoblyApi.getJobs();
      setJobs(jobsData)
    } catch (error) {
      console.error("Error fetching jobs:", error)
    }
  }

  useEffect(() => {
    fetchJobs();
  }, [])
  return(
    <>
      <h1>JOBS</h1>
      <JobList jobs={jobs} currentUser={currentUser}></JobList>
    </>
  )
}

export default Jobs;