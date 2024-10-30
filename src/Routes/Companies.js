import { useEffect, useState } from "react";
import CompanyList from "../CompanyList";
import JoblyApi from "../api";
function Companies({currentUser}) {
  const [companies, setCompanies] = useState([]);
  const fetchCompanies = async () => {
    try {
      const companiesData = await JoblyApi.getCompanies();
      setCompanies(companiesData)
    } catch (error) {
      console.error("Error fetching companies:", error)
    }
  }

  useEffect(() => {
    fetchCompanies();
  }, [])

  return (
    <>
      <h1>COMPANIES</h1>
      <CompanyList companies={companies} currentUser={currentUser}></CompanyList>
    </>
  )
}

export default Companies;