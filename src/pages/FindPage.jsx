import styled from "styled-components";
import FindId from "../components/find/FindId";
import FindPassword from "../components/find/FindPassword";

function FindPage() {
  return (
    <FindContainer>
      <FindBox>
        <FindId />
      </FindBox>
      <FindBox>
        <FindPassword />
      </FindBox>
    </FindContainer>
  );
}

export default FindPage;

const FindContainer = styled.div``;

const FindBox = styled.div`
  width: 802px;
  height: 310px;
  margin-bottom: 30px;
  background: #f5f5f5;
  border-radius: 10px;
`;
