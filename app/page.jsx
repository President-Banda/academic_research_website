import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import About from "./components/About";

export default function Home() {
  return (
    <Container>
      <Header />
      <About />
      <Footer />
    </Container>
  );
}
