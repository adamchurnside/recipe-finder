import styled from "styled-components";

export const Header = styled.div`
  color: white;
  background: linear-gradient(135deg, #c56cd6, #7367f0, #5435b7 100%);
  background-size: 200% 200%;
  font-family: "Readex Pro", sans-serif;
  animation: Animation 5s ease infinite;
  @keyframes Animation {
    0% {
      background-position: 10% 0%;
    }
    50% {
      background-position: 91% 100%;
    }
    100% {
      background-position: 10% 0%;
    }
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0px 3px 6px #555;
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 15px;
`;
export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;
