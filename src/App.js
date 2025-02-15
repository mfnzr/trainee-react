import Header from './components/Header'; 
import Search from './components/Search';
import styled from 'styled-components';
import Developers from './components/Developers';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3E444F;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <Developers />
    </AppContainer>
  );
}

export default App;

