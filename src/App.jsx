import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Sections";
import { DetailProduit, Main } from "./Component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route
            path="/*"
            element={
              <Main>
                <Routes>
                  <Route
                    path="/DetailProduit/:produitId"
                    element={<DetailProduit />}
                  />
                </Routes>
              </Main>
            }
          />
          {/* <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
