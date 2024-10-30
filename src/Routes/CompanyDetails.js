import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "../api";
import { Button, Card, CardBody, CardText, CardTitle, ListGroup } from "reactstrap";
import CompanyCard from "../JoblyInfoCard"
import JobCard from "../JoblyInfoCard"

function CompanyDetails({currentUser}) {
  const { handle } = useParams();

  const [company, setCompany] = useState({ jobs: [] });
  const fetchCompany = async () => {
    try {
      const companyData = await JoblyApi.getCompany(handle);
      setCompany(companyData)
    } catch (error) {
      console.error("Error fetching companies:", error)
      alert("Failed to fetch company details, please try again later.")
    }
  }

  useEffect(() => {
    fetchCompany();
  }, [handle])

  return (
    <>
    <CompanyCard title={company.name} description={company.description} currentUser={currentUser} ></CompanyCard>
    
    <ListGroup>
      {company.jobs.map(job => (
        <JobCard currentUser={currentUser} key={job.id} title={job.title} description={`Salary: ${job.salary}, Equity: ${job.equity}`} job={true} jobId={job.id} ></JobCard>
      ))}
    </ListGroup>
    </>
  )
}

export default CompanyDetails;