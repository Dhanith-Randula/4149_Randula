import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "./Desktop1.css";
import { Link } from "react-router-dom";
/*<img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />*/
function Desktop1() {
  return (
    <header className="background-styles">
      <div className="header-container">
        <h1 className="ha">INTRODUCTION NEW PRODUCT</h1>
        <div>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div className="image-container">
          
        </div>
        <div >
          <p className="pa">
          We're thrilled to present a curated selection of cutting-edge products
          that redefine modern living. Our passion for innovation drives us to bring 
          you the latest technological, design, and functionality advancements. 
          With a commitment to quality and aesthetics, we invite you to explore our 
          range of new products that seamlessly integrate into your lifestyle.

          </p>
          
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </header>
  );
}

export default Desktop1;
