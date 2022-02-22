import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div id="root">
      <>
        <header>
          <h1> Exercicis React </h1>{" "}
        </header>
        <div class="HolyGrail-body">
          <main class="HolyGrail-content">
            <Outlet />
          </main>
          <nav class="HolyGrail-nav">
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
            </ul>
          </nav>
          <aside class="HolyGrail-ads">aside…</aside>
        </div>
        <footer> Created by - Jose Luis Montero -</footer>
      </>
    </div>
  );
}
