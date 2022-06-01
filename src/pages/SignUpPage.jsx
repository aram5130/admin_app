import styled from "styled-components";

import IdContainer from "../components/signup/IdContact";
import NameContact from "../components/signup/NameContact";
import PasswordContact from "../components/signup/PasswordContact";

export default function SignUpPage() {
  return (
    <div>
      <Tittle>회원가입</Tittle>
      <Box>
        <IdContainer />
        <PasswordContact />
      </Box>
      <Box>
        <NameContact />
      </Box>
      <Button>Submit</Button>
    </div>
  );
}
const Tittle = styled.h1`
  margin: 123px 0 48px 0;
  font-size: 30px;
  letter-spacing: 10px;
`;
const Box = styled.div`
  width: 800px;
  height: 310px;
  background: #f5f5f5;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
const Button = styled.button`
  width: 300px;
  height: 68px;
  color: #ffffff;
  background-color: #849fff;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;
