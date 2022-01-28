import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 10px 20px #555;
  padding: 20px 10px;
  border-radius: 10px;
  width: 380px;
  background: grey;

`;

const AppLabel = styled.span`
  color: Black;
  font-weight: bold;
  font-size: 30px;
`;



function App() {
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel> 
      <CityComponent />
    </Container>
  );  
}

export default App;
