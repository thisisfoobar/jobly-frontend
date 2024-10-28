import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import JoblyApi from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInForm({ setToken, setUsername }) {
  const navigate = useNavigate();
  const DEFAULT_FORM_DATA = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await JoblyApi.userLogin(
        formData.username,
        formData.password
      );
      setToken(token);
      setUsername(formData.username);
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <>
      <Card>
        <CardHeader>Log In</CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='username'>Username:</Label>
              <Input
                type='text'
                id='username'
                name='username'
                value={FormData.username}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password'>Password:</Label>
              <Input
                type='password'
                id='password'
                name='password'
                value={FormData.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type='submit'>Log In</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default LogInForm;
