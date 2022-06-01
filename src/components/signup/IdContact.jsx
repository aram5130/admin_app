import { useState } from "react";
import styled from "styled-components";

function IdContact() {
  const [userId, setUserId] = useState("");

  const onchangeId = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  return (
    <IdContactContainer>
      <form>
        <label htmlFor="user_id">
          <span>*</span>
          아이디
        </label>
        <input type="text" minLength={5} name="user_id" onChange={onchangeId} />
        <button>중복확인</button>
      </form>
    </IdContactContainer>
  );
}

export default IdContact;

const IdContactContainer = styled.div`
  margin: 0 auto;
  padding-top: 46px;
  width: 630px;
  form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 49px;
    label {
      margin-right: 95px;
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
    button {
      width: 100px;
      height: 40px;
      border: none;
      border-radius: 10px;
      background: #849fff;
      color: #fff;
    }
  }
`;
