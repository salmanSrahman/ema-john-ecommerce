import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Order/Order";
import Inventory from "./Components/Inventory/Inventory";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
