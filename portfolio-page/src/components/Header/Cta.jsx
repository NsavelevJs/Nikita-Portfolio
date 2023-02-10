import React from "react";
import NikitaResume from "../../assets/NikitaResume.pdf";
import styled from "styled-components";

const PaddedDiv = styled.div`
  padding: 10px;
  justify-content:center;
  display:flex;
`;
const Wrapper = styled.div`
justify-content:center;
display:flex;

`
const Cta = () => {
  return (
    <Wrapper className="cta">
      <PaddedDiv>
        <a class="nes-btn" href={NikitaResume}>
          Download Resume
        </a>
      </PaddedDiv>
      {/* <PaddedDiv>
      <a class="nes-btn" href="#contact">
        Lets Chat!
      </a>
      </PaddedDiv> */}
    </Wrapper>
  );
};

export default Cta;
