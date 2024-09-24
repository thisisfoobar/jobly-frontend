import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem
} from "reactstrap";
import JobCard from "./JoblyInfoCard";

function JobList({jobs}) {
  return(
    <>
    <ListGroup>
      {jobs.map(job => (
          <ListGroupItem><JobCard title={job.title} description={job.companyName} job={true} ></JobCard></ListGroupItem>
      ))}
    </ListGroup>
    </>
  )
}

export default JobList;