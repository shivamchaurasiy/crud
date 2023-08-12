import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from "./Home";
import Insert from "./Insert";
import Delete from "./Delete";
import Display from "./Display";
import Search from "./Search";
import Update from "./Update";
import Editrec from "./Editrec";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="delete" element={<Delete />} />
            <Route path="display" element={<Display />} />
            <Route path="search" element={<Search />} />
            <Route path="update" element={<Update />} />
            <Route path="/Editrec/:id" element={<Editrec />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;