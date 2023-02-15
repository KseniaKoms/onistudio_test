import GlobalStyle from 'global.styled';
import { Contacts } from 'pages/Contacts/Contacts';
import { Description } from 'pages/Description/Description';
import { Feedbacks } from 'pages/Feedbacks/Feedbacks';
import { Footer } from 'pages/Footer/Footer';
import { MainPage } from 'pages/Main/Main';
import { Projects } from 'pages/projects/Projects';
import { Services } from 'pages/Services/Services';
import { Slogan } from 'pages/Slogan/Slogan';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
      <Description />
      <Services />
      <Projects />
      <Slogan />
      <Feedbacks />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
