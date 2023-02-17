import React from "react";
import NikitaResume from "../../assets/NikitaResume.pdf";
import styled from "styled-components";
import '../../index.css'

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
    <>
    <Wrapper className="cta">
      <PaddedDiv>
        <a className="nes-btn btn is-primary" href={NikitaResume} download>
          Download Resume
        </a>
      </PaddedDiv>
      </Wrapper>
      <Wrapper>
      <PaddedDiv>
      <a className="nes-btn btn" href="#contact">
        Lets Chat!
      </a>
      </PaddedDiv>
    </Wrapper>
    </>
  );
};

export default Cta;
