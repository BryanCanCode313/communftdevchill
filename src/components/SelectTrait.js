import React from "react";
import styled from "styled-components";
import Trait from "./Trait";

function SelectTrait() {
  const traits = [
    {
      name: "Nose",
      key: 1,
      img_url: "www.google.com"
    },
    {
      name: "Ear",
      key: 2,
      img_url: "www.google.com"
    }
  ];
  return (
    <Container>
      <h2>Select a Trait</h2>
      <div className="flex center border">
        {traits.map((trait, id) => {
          return <Trait key={id} trait={trait} />;
        })}
      </div>
    </Container>
  );
}

export default SelectTrait;

const Container = styled.div``;
