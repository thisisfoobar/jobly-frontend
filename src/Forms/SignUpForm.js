import { Button, Card, CardHeader, Form, FormGroup, Input, Label } from "reactstrap";

function SignUpForm() {
  <>
    <Card>
      <CardHeader>Sign Up</CardHeader>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='firstName'>First Name:</Label>
          <Input
            type='text'
            id='firstName'
            name='firstName'
            value={FormData.firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='lastName'>Last Name:</Label>
          <Input
            type='text'
            id='lastName'
            name='lastName'
            value={FormData.lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>Email:</Label>
          <Input
            type='email'
            id='email'
            name='email'
            value={FormData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
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
        <Button>Sign Up!</Button>
      </Form>
    </Card>
  </>;
}
