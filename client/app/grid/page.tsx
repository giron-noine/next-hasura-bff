"use client";

import styled from "@emotion/styled";

export default function Home() {
  return (
    <>
      <h1>Grid practice</h1>
      <GridContainer>
        <Chiled1>1</Chiled1>
        <Chiled2>2</Chiled2>
        <ChildGrid>3</ChildGrid>
        <ChildGrid>4</ChildGrid>
        <ChildGrid>5</ChildGrid>
        <ChildGrid>6</ChildGrid>
        <ChildGrid>7</ChildGrid>
        <ChildGrid>8</ChildGrid>
        <ChildGrid>9</ChildGrid>
      </GridContainer>
    </>
  );
}

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
`;

export const ChildGrid = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  font-size: 30px;
`;

export const Chiled1 = styled(ChildGrid)`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Chiled2 = styled(ChildGrid)`
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;
