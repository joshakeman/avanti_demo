import React from 'react'
import Layout from "../components/layout"
import BackgroundSection from '../components/BackgroundSection'
import '../styles/our-team.css'
import chuck from '../images/chuck-thompson.jpg'
import bryan from '../images/bryan-bishop.jpg'
import britney from '../images/britney-reddy.jpg'
import zev from '../images/zev-shimko.jpg'
import caitlin from '../images/caitlin-long.jpg'

export default function about() {
    return (
        <Layout>
            <div className="background">
                <div className="jumbo adjust-up fade-in">
                {/* <!-- Meet Our Team Section --> */}
                    <h2 className="no-margin">
                    Our Team
                    </h2>
                        {/* <!-- People --> */}
                    <div class="meet-team-pictures">
                        {/* <!-- Person 1 --> */}
                        <div class="person">
                            <img src={caitlin}/>
                            <h2>Caitlin Long</h2>
                            <p>Founder, CEO</p>
                        </div>
                        {/* <!-- Person 2 --> */}
                        <div class="person">
                            <img src={bryan}/>
                            <h2>Bryan Bishop</h2>
                            <p>Co-founder, CTO</p>
                        </div>
                        {/* <!-- Person 3 --> */}
                        <div class="person">
                            <img src={britney}/>
                            <h2>Britney Reddy</h2>
                            <p>Co-founder, CFO</p>
                        </div>
                        {/* <!-- Person 4 --> */}
                        <div class="person">
                            <img src={zev}/>
                            <h2>Zev Shimko</h2>
                            <p>Co-founder, COO</p>
                        </div>
                        {/* <!-- Person 5 --> */}
                        <div class="person">
                            <img src={chuck}/>
                            <h2>Chuck Thompson</h2>
                            <p>Co-founder, Chief Legal Officer</p>
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
