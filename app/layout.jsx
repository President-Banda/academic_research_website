import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Seongyoon Kim",
  description: "Seongyoon Kim web page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
