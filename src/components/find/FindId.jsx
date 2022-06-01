import styled from "styled-components";

function FindId() {
  return (
    <FindIdContainer>
      <form>
        <div>
          <p>
            <span>*</span>이름
          </p>
          <input type="text" />
        </div>
        <div>
          <p>
            <span>*</span>휴대전화 번호
          </p>
          <input type="number" />
        </div>
      </form>
    </FindIdContainer>
  );
}

export default FindId;
const FindIdContainer = styled.div``;
