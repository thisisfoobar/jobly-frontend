import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CompanyDetails from "./CompanyDetails";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Login from "./Login";
import SignUpForm from "./SignUpForm";
import UserProfile from "./UserProfile";

function JoblyRoutes() {
  return (
    <Routes>
      /** Homepage */
      <Route path='/jobly' element={<HomePage />} />

      /** list of all companies */
      <Route path='/companies' element={<Companies />} />

      /** company details */
      <Route path='/companies/:handle' element={<CompanyDetails />} />

      /** list of all jobs */
      <Route path='/jobs' element={<Jobs />} />

      /** user login page */
      <Route path='/login' element={<Login />} />

      /** user signup form*/
      <Route path='/signup' element={<SignUpForm />} />

      /** user profile page */
      <Route path='/profile' element={<UserProfile />} />

      /** Catch all route */
      <Route path='*' element={<Navigate to='/jobly' />} />
    </Routes>
  );
};

export default JoblyRoutes;