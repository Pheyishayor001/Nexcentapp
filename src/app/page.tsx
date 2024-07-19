// import Image from "next/image";
import "./globals.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Body />
      <Footer />
    </>
  );
}
