import React from 'react'
import Layout from "../components/layout"
import BackgroundSection from '../components/BackgroundSection'
import '../styles/our-team.css'
import SEO from "../components/seo"
import email from '../images/email2.png'
import twitter from '../images/twitter2.png'

export default function contact() {
    return (
        <Layout>
        <SEO title="Contact" keywords={['Avanti Financial Group', 'Contact Us']} />
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
                            <p><a href="mailto:info@avantibank.com">info@avantibank.com</a></p>
                        </div>
                        {/* <!-- Person 2 --> */}
                        <div class="person wider">
                            <img src={twitter} className="no-margin smaller"/>
                            <h2>Follow Us</h2>
                            <p><a href="https://twitter.com/avantibt?lang=en">@AvantiBT</a></p>
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
