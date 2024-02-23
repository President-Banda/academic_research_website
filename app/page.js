import Header from "./components/header";
import Footer from "./components/footer";
export default function Home() {
  return (
      <>
        <Header />
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8 mx-52 my-14">
          <div class="h-32 rounded-lg bg-gray-200">
            Name and Photo Photo
          </div>
          <div class="h-32 rounded-lg bg-gray-200">
            Content
          </div>
        </div>


        <Footer />
      </>
      );
}
