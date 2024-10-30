import { useState, useEffect } from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import JoblyApi from "./api";

function JoblyInfoCard({ title, description, job=false, currentUser, jobId }) {
  const [hasApplied, setHasApplied] = useState(false);
  const applyToJob = async () => {
    try {
      await JoblyApi.applyToJob(currentUser.username, jobId);
      setHasApplied(true);
    } catch (error) {
      console.error("Error applying to job:", error);
    }
  }
  useEffect(() => {
    if (currentUser.applications.includes(jobId)) {
      setHasApplied(true);
    }
  }, [currentUser.applications, jobId])


  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className='font-weight-bold text-center'>
            {title}
          </CardTitle>
          <CardText className='font-italic'>{description}</CardText>
        </CardBody>
        {job && !hasApplied && 
        <Button onClick={applyToJob}>Apply</Button>}
      </Card>
    </>
  );
}

export default JoblyInfoCard;
