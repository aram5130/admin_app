import { useCallback, useState } from "react";
import styled from "styled-components";

export default function NameContact() {
  // 이름 이메일 휴대전화
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // 오류 메세지
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // 이름
  const onChangeName = useCallback((e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  }, []);
  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다 : )");
      setIsEmail(true);
    }
  }, []);
  // 휴대전화
  const onChangePhone = useCallback((e) => {
    const phoneRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const phoneCurrent = e.target.value;

    setPhoneNumber(phoneCurrent);
    if (!phoneRegex.test(phoneCurrent)) {
      setPhoneMessage("010으로 시작하는 번호를 입력해주세요.");
      setIsPhone(false);
    } else {
      setPhoneMessage("올바른 번호 형식입니다 :)");
      setIsPhone(true);
    }
  });

  return (
    <NameContactBox>
      <form>
        <div className="formbox">
          <label htmlFor="user_name">
            <span>*</span>
            이름
          </label>
          <input
            text="name"
            type="text"
            typeName="name"
            onChange={onChangeName}
          />
          {name.length > 0 && (
            <span className={`message ${isName ? "success" : "error"}`}>
              {nameMessage}
            </span>
          )}
        </div>
        <div className="formbox">
          <label htmlFor="user_mail">
            <span>*</span>
            이메일
          </label>
          <input
            text="email"
            type="email"
            typeName="email"
            onChange={onChangeEmail}
          />
          {email.length > 0 && (
            <span className={`message ${isEmail ? "success" : "error"}`}>
              {emailMessage}
            </span>
          )}
        </div>
        <div className="formbox">
          <label htmlFor="user_phone">
            <span>*</span>
            휴대전화 번호
          </label>
          <input
            text="phoneNumber"
            type="text"
            typeName="phoneNumber"
            maxLength={11}
            onChange={onChangePhone}
          />
          {phoneNumber.length < 11 ||
            (phoneNumber.startsWith[0] !== 0 && (
              <span className={`message ${isPhone ? "success" : "error"}`}>
                {phoneMessage}
              </span>
            ))}
        </div>
      </form>
    </NameContactBox>
  );
}

const NameContactBox = styled.div`
  margin: 0 auto;
  padding-top: 46px;
  width: 630px;
  height: 310px;
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
