import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Contador from "./pages/Contador";
import Graella from "./pages/Graella";
import Acordeo from "./pages/Acordeo";
import Carrusel from "./pages/Carrusel";
import Vector from "./pages/Vector";
import Afegir from "./pages/Afegir";
import Afegir2 from "./pages/Afegir2";
import Repetits from "./pages/Repetits";
import NoRepetits from "./pages/NoRepetits";
import CounterUseReducer from "./pages/CounterUseReducer";
import CounterRedux from "./pages/CounterRedux";
import { counter } from "./pages/Counter";

const reducer = combineReducers({
  counter,
});
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Contador" element={<Contador />}></Route>
            <Route path="Acordeo" element={<Acordeo />}></Route>
            <Route path="Graella" element={<Graella />}></Route>
            <Route path="Carrusel" element={<Carrusel />}></Route>
            <Route path="Vector" element={<Vector />}></Route>
            <Route path="Afegir" element={<Afegir />}></Route>
            <Route path="Afegir2" element={<Afegir2 />}></Route>
            <Route path="Repetits" element={<Repetits />}></Route>
            <Route path="NoRepetits" element={<NoRepetits />}></Route>
            <Route
              path="CounterUseReducer"
              element={
                <>
                  <CounterUseReducer />
                  <CounterUseReducer />
                </>
              }
            ></Route>
            <Route
              path="CounterRedux"
              element={
                <>
                  <CounterRedux />
                  <CounterRedux />
                </>
              }
            ></Route>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}
