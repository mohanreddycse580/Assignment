import React from "react";
import "./styles.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Footer />
      </div>
    );
  }
}

export default App;
