import React from "react";
import { Link } from "react-router-dom";
import "./AboutStyles.css";
import Layout from "../components/Layout";
import { FaPaperPlane } from "react-icons/fa";
import Auth from "../services/auth"; // Import Auth service

function About() {
  return (
    <>
      <Layout>
        <section className="post card-position-relative card-z-index-1 card-margin-y-2xl">
          <div className="card-container card-max-width-adaptive-lg">
            <p className="post__label">A bit about us</p>

            <div className="post__grid">
              <div className="post__grid-item-1">
                <h1 className="text-capitalize">
                  Stay close to the CUNY Law alumni for legal wisdom, and the
                  occasional courtroom drama story!
                </h1>
              </div>

              <div className="post__grid-item-2">
                <div className="post__content">
                  <p>
                    We are dedicated to providing a dynamic online platform that
                    fosters a thriving alumni community, facilitating meaningful
                    connections, lifelong learning, and professional growth. Our
                    goal is to offer a space where alumni can engage, share
                    their experiences, and collaborate with their fellow
                    graduates, ensuring that the bonds forged during their time
                    at CUNY Law School continue to thrive.
                  </p>

                  <p>
                    AlumLink aims to provide a supportive network for legal
                    professionals who have graduated from CUNY Law School.
                    Furthermore, the portal serves as a valuable resource for
                    alumni's ongoing professional development, offering job
                    postings, career advancement resources, and mentorship
                    opportunities. It also encourages the sharing of legal
                    insights and experiences, allowing alumni to contribute to
                    the broader legal community.
                  </p>

                  <p>
                    Join AlumLink
                    <FaPaperPlane /> &nbsp;today and unlock a world of
                    opportunities, knowledge, and connections. Your journey
                    continues with us.
                  </p>

                  <p>
                    <Link to={Auth.isAuthenticated ? "/directory" : "/login"}>
                      <span className="card-btn card-btn--primary">
                        Let's Link &nbsp;
                        <FaPaperPlane />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default About;
