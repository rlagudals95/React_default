import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Home() {
  useEffect(() => {}, []);

  return <FlexBox>dd</FlexBox>;
}

export default Home;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0px 10px;
`;

const EnBox = styled.div`
  font-weight: bolder;
  font-size: 3wv;
  margin-bottom: 10px;
`;

const KoBox = styled.div`
  font-size: 1.5wv;
  opacity: 0.8;
`;
