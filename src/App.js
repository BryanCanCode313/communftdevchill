import "./styles.css";
import "./css/tailwind.css";
import styled from "styled-components";
import MainCanvas from "./components/MainCanvas";
import SelectTrait from "./components/SelectTrait";
import Landing from "./components/Landing";

export default function App() {
  return (
    <Container className="App">
      <Landing />
      <SelectTrait />
      <MainCanvas />
    </Container>
  );
}

const Container = styled.div`
  background-color: #d189eb;
  margin: 0;
  padding: 0;
`;
