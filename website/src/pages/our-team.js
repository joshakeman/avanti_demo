import React from 'react'
import Layout from "../components/layout"
import BackgroundSection from '../components/BackgroundSection'
import '../styles/our-team.css'

export default function about() {
    return (
        <Layout>
            <div className="background">
                <div className="jumbo adjust-up fade-in">
                {/* <!-- Meet Our Team Section --> */}
                    <h2>
                    About Us
                    </h2>
                        {/* <!-- People --> */}
                    <div class="meet-team-pictures">
                        {/* <!-- Person 1 --> */}
                        <div class="person">
                            <img src="img/headshots/jacob.jpg"/>
                            <h2>Jacob A Brennan</h2>
                            <p>Team Lead</p>
                            <a href="https://twitter.com/jacobabrennan"><span class="icon-wrapper">
                                <i class="fab fa-twitter"></i>
                            </span></a>
                            <a href="https://github.com/jacobabrennan" class="fav-links"><span class="icon-wrapper"><i class="fab fa-github"></i></span></a>
                            <a href="mailto:fake-email@fake-website.com"><span class="icon-wrapper"><i class="fas fa-envelope"></i></span></a>
                        </div>
                        {/* <!-- Person 2 --> */}
                        <div class="person">
                            <img src="img/headshots/omarsalah95.jpg"/>
                            <h2>Omar Salah-Eddine</h2>
                            <p>Front End Architect</p>
                            <span class="icon-wrapper"><i class="fab fa-twitter"></i></span>
                            <a href="https://github.com/OmarSalah95"><span class="icon-wrapper"><i class="fab fa-github"></i></span></a>
                            <a href="mailto:fake-email@fake-website.com"><span class="icon-wrapper"><i class="fas fa-envelope"></i></span></a>
                        </div>
                        {/* <!-- Person 3 --> */}
                        <div class="person">
                            <img src="img/headshots/EJaona.jpg"/>
                            <h2>Enoka Jaona</h2>
                            <p>Back End Architect</p>
                            <a href="https://twitter.com/EnokaJaona"><span class="icon-wrapper"><i class="fab fa-twitter"></i></span></a>
                            <a href="https://github.com/EJaona"><span class="icon-wrapper"><i class="fab fa-github"></i></span></a>
                            <a href="mailto:fake-email@fake-website.com"><span class="icon-wrapper"><i class="fas fa-envelope"></i></span></a>
                        </div>
                        {/* <!-- Person 4 --> */}
                        <div class="person">
                            <img src="img/headshots/edwardauron.jpg"/>
                            <h2>Edward Barnett</h2>
                            <p>Data Scientist</p>
                            <a href="https://www.linkedin.com/in/edward-barnett-data-scientist/"><span class="icon-wrapper"><i class="fab fa-linkedin"></i></span></a>
                            <a href="https://github.com/edwardauron"><span class="icon-wrapper"><i class="fab fa-github"></i></span></a>
                            <a href="mailto:fake-email@fake-website.com"><span class="icon-wrapper"><i class="fas fa-envelope"></i></span></a>
                        </div>
                        {/* <!-- Person 5 --> */}
                        <div class="person">
                            <img src="img/headshots/krsmith.jpg"/>
                            <h2>Kailey Smith</h2>
                            <p>Data Scientist</p>
                            <a href="https://twitter.com/kays310"><span class="icon-wrapper"><i class="fab fa-twitter"></i></span></a>
                            <a href="https://github.com/krsmith"><span class="icon-wrapper"><i class="fab fa-github"></i></span></a>
                            <a href="mailto:fake-email@fake-website.com"><span class="icon-wrapper"><i class="fas fa-envelope"></i></span></a>
                        </div>
                        {/* <!-- Person 6 --> */}
                        <div class="person">
                            <img src="img/headshots/me-2.jpg"/>
                            <h2>Josh Akeman</h2>
                            <p>Web UI Developer</p>
                            <a href="https://www.linkedin.com/in/joshakeman/"><span class="icon-wrapper"><i class="fab fa-linkedin"></i></span></a>
                            <a href="https://github.com/joshakeman"><span class="icon-wrapper"><i class="fab fa-github"></i></span></a>
                            <a href="mailto:fake-email@fake-website.com"><span class="icon-wrapper"><i class="fas fa-envelope"></i></span></a>
                        </div>
                    </div>
                </div>
                <div className="relative-wrapper">
                    <BackgroundSection />
                </div>
            </div>
            {/* <div className="about-body">
                <div className="about-body-content">
                    <h1 className="about-title">About Avanti</h1>
                    <p>Avanti Financial Group, Inc. is a Wyoming corporation formed to apply for a bank charter under Wyoming’s special-purpose depository institution (“SPDI”) law. Based in Cheyenne, WY, it will likely do business under the name “Avanti Bank & Trust.”</p>
                    <p>Avanti expects to serve as a compliant bridge to the U.S. dollar payments system and a custodian of digital assets that can meet the strictest level of institutional custody standards.</p>
                    <p>Avanti will be required to fully comply with all applicable laws and regulations, including federal “know your customer,” anti-money laundering and related laws and regulations.</p>
                    <p> Avanti will also comply with Wyoming’s SPDI and digital asset laws, which include requirements that fiat deposits be 100% reserved and that Avanti meet the strictest consumer protections in the digital asset industry.</p>
                    <strong><p>Subject to approval of its application, Avanti plans to open its doors by early 2021.</p></strong>
                </div>
            </div> */}
        </Layout>
    )
}
