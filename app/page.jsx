import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import AboutComponent from "./components/AboutComponent";

export default function Home() {
  return (
    <Container>
      <Header />
      <AboutComponent />
      <Footer />
    </Container>
  );
}
