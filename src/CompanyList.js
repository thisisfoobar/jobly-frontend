import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem
} from "reactstrap";
import CompanyCard from "./JoblyInfoCard";

function CompanyList({companies, currentUser}) {
  return(
    <>
    <ListGroup>
      {companies.map(company => (
        <Link to={`/companies/${company.handle}`} key={company.handle}>
          <ListGroupItem><CompanyCard title={company.name} description={company.description} currentUser={currentUser}></CompanyCard></ListGroupItem>
        </Link>
      ))}
    </ListGroup>
    </>
  )
}

export default CompanyList;