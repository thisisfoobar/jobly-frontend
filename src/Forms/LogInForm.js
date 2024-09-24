import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

function LogInForm() {
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
