import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { ListProjects } from "./components/listProjects"
import { Footer } from "./components/footer"


function App() {
  return (
    <>
      <Header level={"homepage"} />
      <Hero />
      <ListProjects />
      <Footer />
    </>
  )
};

export default App;
