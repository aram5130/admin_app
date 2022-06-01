import { useState, useCallback } from "react";
import styled from "styled-components";

export default function PasswordContact() {
  // 비밀번호, 비밀번호 확인
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // 오류메세지
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  // 유효성 검사
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*,.+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호를 똑같이 입력했어요 : )");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 틀려요. 다시 확인해주세요 : (");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  return (
    <PassWordContainer>
      <div className="formbox">
        <label htmlFor="user_pw">
          <span>*</span>
          비밀번호
        </label>
        <input
          type="password"
          onChange={onChangePassword}
          passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
          title="비밀번호"
          typeTitle="password"
        />
        {password.length > 0 && (
          <span className={`message ${isPassword ? "success" : "error"}`}>
            {passwordMessage}
          </span>
        )}
      </div>

      <div className="formbox">
        <label htmlFor="user_pwc">
          <span>*</span>
          비밀번호 확인
        </label>
        <input
          type="password"
          onChange={onChangePasswordConfirm}
          passwordText=" "
          title="비밀번호 확인"
          typeTitle="passwordConfirm"
        />
        {passwordConfirm.length > 0 && (
          <span
            className={`message ${isPasswordConfirm ? "success" : "error"}`}
          >
            {passwordConfirmMessage}
          </span>
        )}
      </div>
    </PassWordContainer>
  );
}

const PassWordContainer = styled.div`
  margin: 0 auto;
  width: 630px;
  .formbox {
    width: 501px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin-right: 130px;
    margin-bottom: 49px;
    label {
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
    }
    .message {
      width: 400px;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: -1px;
      position: absolute;
      top: 50px;
      left: 100px;
      text-align: right;
      &.success {
        color: #8f8c8b;
      }
      &.error {
        color: #ff2727;
      }
    }
  }
`;
