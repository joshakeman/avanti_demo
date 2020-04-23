import React from 'react'
import Layout from "../components/layout"
import BackgroundSection from '../components/BackgroundSection'
import '../styles/about.css'

export default function about() {
    return (
        <Layout>
            <div className="background">
                <div className="jumbo adjust-up fade-in">
                    <h2>
                    About Us
                    </h2>
                    <p>Avanti Financial Group, Inc. is a Wyoming corporation formed to apply for a bank charter under Wyoming’s special-purpose depository institution (“SPDI”) law. Based in Cheyenne, WY, it will likely do business under the name “Avanti Bank & Trust.”</p>
                    <p>Avanti expects to serve as a compliant bridge to the U.S. dollar payments system and a custodian of digital assets that can meet the strictest level of institutional custody standards.</p>
                    <p>Avanti will be required to fully comply with all applicable laws and regulations, including federal “know your customer,” anti-money laundering and related laws and regulations.</p>
                    <p> Avanti will also comply with Wyoming’s SPDI and digital asset laws, which include requirements that fiat deposits be 100% reserved and that Avanti meet the strictest consumer protections in the digital asset industry.</p>
                    <strong><p className="big-para">Subject to approval of its application, Avanti plans to open its doors by early 2021.</p></strong>
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
