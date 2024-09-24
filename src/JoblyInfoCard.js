import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

function JoblyInfoCard({ title, description, job=false }) {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className='font-weight-bold text-center'>
            {title}
          </CardTitle>
          <CardText className='font-italic'>{description}</CardText>
        </CardBody>
        {job && 
        <Button>Apply</Button>}
      </Card>
    </>
  );
}

export default JoblyInfoCard;
