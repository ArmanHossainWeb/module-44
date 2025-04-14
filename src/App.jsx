import { Suspense } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import PricingOptoions from "./component/pricing options/PricingOptoions";

const pricingPromice = fetch("pricingData.json")
.then(res => res.json())

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptoions pricingPromice={pricingPromice}></PricingOptoions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
