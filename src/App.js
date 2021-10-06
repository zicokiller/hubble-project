import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import {Container} from './components/styled/Container.styled';
import GlobalStyles from './components/styled/Global';

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#eff",
    footer: "#003333"
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      <h1>Hello World</h1>
    </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
