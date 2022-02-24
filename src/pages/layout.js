import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div id="root">
      <>
        <header>
          <h1> Exercicis React </h1>{" "}
        </header>
        <div className="HolyGrail-body">
          <main className="HolyGrail-content">
            <Outlet />
          </main>
          <nav className="HolyGrail-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/Contador">Contador</Link>
              </li>
              <li>
                <Link to="/Acordeo">Acordeo</Link>
              </li>
              <li>
                <Link to="/Graella">Graella</Link>
              </li>
              <li>
                <Link to="/Carrusel">Carrusel</Link>
              </li>
              <li>
                <Link to="/Vector">Ex 1 Array</Link>
              </li>
              <li>
                <Link to="/Afegir">Ex 2 Array</Link>
              </li>
              <li>
                <Link to="/Afegir2">Ex 2 Array Versio 2</Link>
              </li>
              <li>
                <Link to="/Repetits">Ex 3 items Repetits</Link>
              </li>
              <li>
                <Link to="/NoRepetits">Ex 3 items No Repetits</Link>
              </li>
              <li>
                <Link to="/CounterUseReducer">Counter useReducer</Link>
              </li>
              <li>
                <Link to="/CounterRedux">Counter Redux</Link>
              </li>
            </ul>
          </nav>
          <aside className="HolyGrail-ads">aside…</aside>
        </div>
        <footer> Created by Jose Luis Montero </footer>
      </>
    </div>
  );
}
