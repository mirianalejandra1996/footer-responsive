
// project imports
import { Affiliations, Awards, BlockDropdown, Footer, Partners, Social } from "./components";

import "./grid.css";

function App() {

  return (
   <section>
    <div className="main-grid">
      <div className="one">
        <div className="section">
          <BlockDropdown/>
        </div>
      </div>
      <div className="two">
        <div className="section">
          <Awards />
        </div>
      </div>
      <div className="three">
        <div className="section">
          <Partners />
        </div>
      </div>
      <div className="four">
        <div className="section">
          <Social />
        </div>
      </div>
      <div className="five">
        <div className="section">
          <Affiliations />
        </div>
      </div>
    </div>
    
    <Footer/>
   </section>
  );
}

export default App;
