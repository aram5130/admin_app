import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
// import { isLoggedIn } from "../utils/atoms";
// import { signIn } from "../utils/auth";

function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  // const submitHandler = () => {
  //   try {
  //     signIn({ userId, password });
  //     setIsLoggedIn((value) => !value);
  //   } catch (e) {
  //     alert("Failed to login");
  //     setUserId("");
  //     setPassword("");
  //   }
  // };

  return (
    <LoginBox>
      <Loginform>
        <form>
          <label htmlFor="user_id">
            <span>*</span>아이디
          </label>
          <input
            type="text"
            value={userId}
            name="user_id"
            onChange={({ target: { value } }) => {
              setUserId(value);
            }}
          />
        </form>
        <form>
          <label htmlFor="user_pw">
            <span>*</span>비밀번호
          </label>
          <input
            type="password"
            value={password}
            name="user_pw"
            onChange={({ target: { value } }) => {
              setPassword(value);
            }}
          />
        </form>
        <Link to="/find" id="findBTN">
          <button className="textBtn">아이디 / 비밀번호 찾기</button>
        </Link>
      </Loginform>
      <BtnSection>
        <button className="submitBtn">Login</button>
        <Link to="/signup">
          <button className="signBtn">Sign up</button>
        </Link>
      </BtnSection>
    </LoginBox>
  );
}

export default LoginPage;

const LoginBox = styled.div`
  width: 800px;
  height: 520px;
  background: #f5f5f5;
  border-radius: 10px;
  margin: 0 auto;
  padding-top: 46px;
  margin-top: 10%;
`;
const Loginform = styled.div`
  width: 500px;
  margin: 0 auto;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 49px;
  }
  label {
    margin-right: 50px;
    span {
      margin-right: 10px;
      color: #849fff;
    }
  }
  input {
    width: 331px;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin: 0 20px 0 5px;
  }
  .textBtn {
    border: none;
    background: none;
    position: relative;
    top: -40px;
    left: 160px;
    cursor: pointer;
  }
`;

const BtnSection = styled.div`
  .submitBtn {
    width: 434px;
    height: 70px;
    border: none;
    border-radius: 10px;
    background: #849fff;
    color: #fff;
    margin-bottom: 34px;
    font-size: 24px;
  }

  .signBtn {
    width: 434px;
    height: 35px;
    border: none;
    border-radius: 10px;
    background: #c2c2c2c2;
    color: #fff;
    font-size: 24px;
    font-weight: 400;
  }
`;
