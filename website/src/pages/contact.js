import React from 'react'
import Layout from "../components/layout"
import BackgroundSection from '../components/BackgroundSection'
import '../styles/our-team.css'
import email from '../images/email2.png'
import twitter from '../images/twitter2.png'

export default function contact() {
    return (
        <Layout>
            <div className="background">
                <div className="jumbo adjust-up fade-in">
                {/* <!-- Meet Our Team Section --> */}
                    <h2 className="no-margin">
                    Contact And Follow
                    </h2>
                        {/* <!-- People --> */}
                    <div class="meet-team-pictures">
                        {/* <!-- Person 1 --> */}
                        <div class="person wider">
                            <img src={email} className="no-margin smaller"/>
                            <h2>Email Us</h2>
                            <p>info@avantibank.com</p>
                        </div>
                        {/* <!-- Person 2 --> */}
                        <div class="person wider">
                            <img src={twitter} className="no-margin smaller"/>
                            <h2>Follow Us</h2>
                            <p>@AvantiBT</p>
                        </div>
                    </div>
                </div>
                <div className="relative-wrapper">
                    <BackgroundSection />
                </div>
            </div>
        </Layout>
    )
}
