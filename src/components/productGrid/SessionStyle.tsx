import styled from "styled-components";
import Card from "../Card";

export const StyledSessionCard = styled(Card)`
  width: 600px;
  min-height: 550px;
  overflow: hidden;
  .content {
    padding: 2rem 2.75rem 0px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    .content {
      padding: 1.5rem 1rem 0px;
    }
  }
`;
