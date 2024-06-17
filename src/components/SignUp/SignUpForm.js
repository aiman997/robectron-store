import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo/LOGO-Black.png';

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  height: 100vh; /* Ensures the form takes full height of the viewport */
`;

const Form = styled.form`
  width: 80%;
  max-width: 400px;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 150px;
  height: auto; /* Maintain aspect ratio */
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 15px;
  color: gray;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: gray;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 40px 0 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: gray;
  box-sizing: border-box; /* Ensures padding is included in the total width and height */

  &:focus {
    outline: none;
    border-color: #ff6c00;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 68%;
  transform: translateY(-50%);
  color: gray;
  pointer-events: none; /* Prevent the icon from blocking clicks on the input */
  font-size: 1.2em;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1em;
  background-color: #ff6c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }
`;

const GoogleButton = styled(Button)`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  &:hover {
    background-color: #333;
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: gray;

  a {
    color: #ff6c00;
    text-decoration: none;
  }
`;

const SignUpForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Add sign up logic here
    login();
    navigate('/login', { state: { notification: 'Please check your email and verify your account.' } });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSignUp}>
        <Logo src={logo} alt="Logo" />
        <Title>Sign Up</Title>
        <Subtitle>Join us today! Create your account below</Subtitle>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <InputGroup>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Aiman_X"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="aiman@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Phone Number</Label>
          <Input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Icon icon={faEye} />
        </InputGroup>
        <InputGroup>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Icon icon={faEye} />
        </InputGroup>
        <Button type="submit">Sign Up</Button>
        <GoogleButton>
          <FontAwesomeIcon icon={faGoogle} />
          Sign Up with Google
        </GoogleButton>
        <FooterText>
          Already have an account? <a href="/login">Login</a>
        </FooterText>
      </Form>
    </FormContainer>
  );
};

export default SignUpForm;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faEye } from '@fortawesome/free-solid-svg-icons';
// import logo from '../../assets/logo/LOGO-Black.png';

// const FormContainer = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #f9f9f9;
//   height: 100vh; /* Ensures the form takes full height of the viewport */
// `;

// const Form = styled.form`
//   width: 80%;
//   max-width: 400px;
// `;

// const Logo = styled.img`
//   display: block;
//   margin: 0 auto 20px;
//   width: 150px;
//   height: auto; /* Maintain aspect ratio */
// `;

// const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 10px;
// `;

// const Subtitle = styled.p`
//   text-align: center;
//   margin-bottom: 15px;
//   color: gray;
// `;

// const InputGroup = styled.div`
//   position: relative;
//   margin-bottom: 10px;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   color: gray;
//   text-align: left;
// `;

// const Input = styled.input`
//   width: 100%;
//   height: 40px;
//   padding: 0 40px 0 10px;
//   font-size: 1em;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #fff;
//   color: gray;
//   box-sizing: border-box; /* Ensures padding is included in the total width and height */

//   &:focus {
//     outline: none;
//     border-color: #ff6c00;
//   }
// `;

// const Icon = styled(FontAwesomeIcon)`
//   position: absolute;
//   right: 10px;
//   top: 68%;
//   transform: translateY(-50%);
//   color: gray;
//   pointer-events: none; /* Prevent the icon from blocking clicks on the input */
//   font-size: 1.2em;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   font-size: 1em;
//   background-color: #ff6c00;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: #e65c00;
//   }
// `;

// const GoogleButton = styled(Button)`
//   background-color: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   margin-top: 10px;

//   &:hover {
//     background-color: #333;
//   }
// `;

// const FooterText = styled.p`
//   text-align: center;
//   margin-top: 20px;
//   color: gray;

//   a {
//     color: #ff6c00;
//     text-decoration: none;
//   }
// `;

// const SignUpForm = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [error, setError] = useState('');

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     // Add sign up logic here
//     login();
//     navigate('/');
//   };

//   return (
//     <FormContainer>
//       <Form onSubmit={handleSignUp}>
//         <Logo src={logo} alt="Logo" />
//         <Title>Sign Up</Title>
//         <Subtitle>Join us today! Create your account below</Subtitle>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <InputGroup>
//           <Label>Name</Label>
//           <Input
//             type="name"
//             placeholder="Aiman_X"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </InputGroup>
//         <InputGroup>
//           <Label>Email</Label>
//           <Input
//             type="email"
//             placeholder="aiman@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </InputGroup>
//         <InputGroup>
//           <Label>Phone Number</Label>
//           <Input
//             type="text"
//             placeholder="Enter Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </InputGroup>
//         <InputGroup>
//           <Label>Password</Label>
//           <Input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Icon icon={faEye} />
//         </InputGroup>
//         <InputGroup>
//           <Label>Confirm Password</Label>
//           <Input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <Icon icon={faEye} />
//         </InputGroup>
//         <Button type="submit">Sign Up</Button>
//         <GoogleButton>
//           <FontAwesomeIcon icon={faGoogle} />
//           Sign Up with Google
//         </GoogleButton>
//         <FooterText>
//           Already have an account? <a href="/login">Login</a>
//         </FooterText>
//       </Form>
//     </FormContainer>
//   );
// };

// export default SignUpForm;
