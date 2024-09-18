import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import CompanyDetails from "./Routes/CompanyDetails";
import Companies from "./Routes/Companies";
import Jobs from "./Routes/Jobs";
import Login from "./Routes/Login";
import SignUpForm from "./Routes/SignUpForm";
import UserProfile from "./Routes/UserProfile";

function JoblyRoutes() {
  return (
    <Routes>
      /** Homepage */
      <Route path='/jobly' element={<HomePage />} />

      /** list of all companies */
      <Route path='/companies' element={<Companies />} />

      /** company details */
      <Route path='/companies/:company' element={<CompanyDetails />} />

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