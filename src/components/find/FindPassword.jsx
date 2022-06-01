import styled from "styled-components";
import { useState, useCallback } from "react";
function FindPassword() {
  // 아이디 이메일
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // 오류 메세지
  const [userEmailMessage, setUserEmailMessage] = useState("");
  // 유효성 검사
  const [isUserEmail, setIsUserEmail] = useState(false);

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setUserEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setUserEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요.");
      setIsUserEmail(false);
    } else {
      setUserEmailMessage("올바른 이메일 형식입니다 : )");
      setIsUserEmail(true);
    }
  }, []);
  return (
    <FindIdContainer>
      <form>
        <p>
          <span>*</span>아이디
        </p>
        <input text="userId" type="text" typeName="userId" />
      </form>
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
        {userEmail.length > 0 && (
          <span className={`message ${isUserEmail ? "success" : "error"}`}>
            {userEmailMessage}
          </span>
        )}
      </div>
      <button type="submit">submit</button>
    </FindIdContainer>
  );
}

export default FindPassword;
const FindIdContainer = styled.div``;
