import { Helmet } from "react-helmet-async";
import "./index.scss";
import Header from "../../layout/Header";
import ItServices from "../../components/ItServices";
import Insights from "../../components/Insights";
import OurCase from "../../components/OurCase";
import WorkTogether from "../../components/WorkTogether";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header />
      <ItServices />
      <Insights/>
      <OurCase/>
      <WorkTogether/>
    </>
  );
};

export default Home;
