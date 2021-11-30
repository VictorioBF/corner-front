import "./styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";

import CrnTheme from "./utils/Crn-Theme";

import Home from "./views/Home";
import OpenPost from "./views/OpenPost";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Test from "./views/Test";

const App = () => {
  const staticData = {
    title: "Título Estático",
    topic: "Assunto Estático",
    content:
      "Conteúdo Estático: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices ex elit, ut lobortis sem accumsan nec. Nulla sit amet vehicula purus, at facilisis purus. Morbi cursus metus vitae ex laoreet tempor. Nunc urna ipsum, euismod ac sagittis sit amet, posuere id enim. Sed luctus lobortis tortor, et ornare lectus consectetur vitae. Duis nec ligula id orci vestibulum congue. Donec rutrum varius enim. Maecenas fermentum elit eget libero dignissim facilisis.",
    comments: "estáticos",
    author: "john staticus"
  };
  return (
    <div className="App">
      <CrnTheme>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home data={staticData} />} />
            <Route path="/post" element={<OpenPost data={staticData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/teste" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </CrnTheme>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.func
};

export default App;
