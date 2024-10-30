import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CompaniesPage from "./Companies";
import JobsPage from "./Jobs";
import CompanyDetailsPage from "./CompanyDetails";
import LogInForm from "../Forms/LogInForm";
import SignUpForm from "../Forms/SignUpForm";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "./UserProfile";

function JoblyRoutes({ setToken, currentUser, setUsername, setCurrentUser }) {
  return (
    <Routes>
      <Route path='/' element={<HomePage currentUser={currentUser} />} />
      <Route
        path='/login'
        element={<LogInForm setToken={setToken} setUsername={setUsername} />}
      />
      <Route path='/signup' element={<SignUpForm setToken={setToken} />} />
      <Route
        path='/companies'
        element={
          <ProtectedRoute
            currentUser={currentUser}
            element={<CompaniesPage currentUser={currentUser} />}
          />
        }
      />
      <Route
        path='/jobs'
        element={
          <ProtectedRoute currentUser={currentUser} element={<JobsPage currentUser={currentUser} />} />
        }
      />
      <Route
        path='/companies/:handle'
        element={
          <ProtectedRoute
            currentUser={currentUser}
            element={<CompanyDetailsPage currentUser={currentUser} />}
          />
        }
      />
      <Route
        path='/profile'
        element={
          <ProtectedRoute currentUser={currentUser} element={<UserProfile currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        }
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default JoblyRoutes;
