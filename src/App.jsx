import Rookie from "./components/rookie";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import LinkedInPosts from "./components/LinkedInPosts";
import AeonEmbed from "./components/AeonEmbed";
import DataBackground from "./components/DataBackground";

export default function App() {
  return (
    <>
      <DataBackground />
      <Rookie />
      <About />
      <Projects />
      <AeonEmbed />
      <LinkedInPosts />
      <Blog />
      <Contact />
    </>
  );
}
