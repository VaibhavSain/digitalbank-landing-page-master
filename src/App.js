import "./App.css";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";

function App() {
  return (
    <div className="App overflow-x-hidden relative w-screen h-screen">
      <Header />
      <Main />
      <Services />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
