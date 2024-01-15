import { Link } from "react-router-dom";
import "./index.scss";
import { LiaBoxesSolid } from "react-icons/lia";
const ItServices = () => {
  return (
    <section id="ItServices">
      <div className="container">
        <div className="content">
          <p>INDUSTRY WE OFFER</p>
          <h3>Managed IT services customized for your industry</h3>
          <p>
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insurance,
            pharma & life sciences,
          </p>
        </div>
        <div className="cards">
            <div className="card">
            <LiaBoxesSolid />
            <p>Industries & <br /> Manufacturing</p>
           <Link> <span>Learn More </span></Link>
            </div>
            <div className="card">
            <LiaBoxesSolid />
            <p>Industries & <br /> Manufacturing</p>
           <Link> <span>Learn More </span></Link>
            </div>
            <div className="card">
            <LiaBoxesSolid />
            <p>Industries & <br /> Manufacturing</p>
           <Link> <span>Learn More </span></Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ItServices;
