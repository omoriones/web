import { Header } from "./components/header"
import { Form } from "./components/form";
import ScrollToTop from "./hooks/ScrollToTop";


function Private() {
  return (
    <>
		<ScrollToTop />
		
      <Header level={"project"} />

		<Form />

    </>

  );
};

export default Private
