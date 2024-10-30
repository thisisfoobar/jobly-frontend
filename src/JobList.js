import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem
} from "reactstrap";
import JobCard from "./JoblyInfoCard";

function JobList({jobs, currentUser}) {
  return(
    <>
    <ListGroup>
      {jobs.map(job => (
          <ListGroupItem key={job.id}><JobCard title={job.title} description={job.companyName} job={true} key={job.id} jobId={job.id} currentUser={currentUser} ></JobCard></ListGroupItem>
      ))}
    </ListGroup>
    </>
  )
}

export default JobList;