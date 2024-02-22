import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonWrapper,
  HeaderDiv,
  HederWrapper,
  ParagraphWrapper,
} from "./headerStyles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HederWrapper>
      <HeaderDiv>
        <ParagraphWrapper>
          <p>Student Management System</p>
        </ParagraphWrapper>
        <ButtonWrapper>
          <Button onClick={() => navigate("/")}>Home</Button>
          <Button onClick={() => navigate("/crud")}>Crud</Button>
          <Button onClick={() => navigate("/studentRecordTables")}>
            Tables
          </Button>
        </ButtonWrapper>
      </HeaderDiv>
    </HederWrapper>
  );
};

export default Header;
