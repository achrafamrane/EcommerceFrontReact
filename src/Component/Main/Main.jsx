import { Footer, Header } from "../../Sections";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
