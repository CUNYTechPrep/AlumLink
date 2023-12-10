import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyles.css";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { FaPaperPlane } from "react-icons/fa";

const Home = () => {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <>
      <Layout>
        <section
          className="custom-hero custom-hero--center custom-hero--overlay-layer "
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          <div className="custom-card-container custom-card-max-width-adaptive-sm home_para">
            <div className="custom-hero__label custom-card-margin-bottom-2xs">
              AlumLink
            </div>

            <h1 className="custom-card-margin-bottom-xs tagline">
              Connecting Minds, Igniting Possibilities: Embrace the Power of
              Connections.
            </h1>

            <p className="custom-card-line-height-lg custom-card-margin-bottom-sm">
              Stay ahead, stay connected! Join our vibrant alumni network and
              unlock a world of opportunities. From exclusive events to career
              insights, be part of a community that fuels your success journey.
              Elevate your network, amplify your impact – because the strongest
              connections never graduate.
            </p>

            <div className="custom-hero__cta">
              {/* Using the existing Button component */}
              <Link to="/directory" className="btn-link">
                <Button text="Ready to Link?" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
