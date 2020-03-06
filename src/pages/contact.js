import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
// import Img from 'gatsby-image';

const scheduleATour = (props) => (
    <Layout>
        <SEO title="Contact Us" />
        <section>
            <BackgroundImage
            Tag="section"
            className="masthead fixed"
            fluid={props.data.indexImage.childImageSharp.fluid}
            fadeIn
            >
            <div className="black-overlay">
                <div className="content-box">
                <h1>Contact Us</h1>
                </div>
            </div>          
            </BackgroundImage>
            <Container className="singleCol">
                <p>WaveCrest Enterprises, Inc.<br />
                829 Second Street. Ste. A<br />
                Encinitas, CA 92024</p>
                <p><a href="mailto:admin@wavecrestinc.com">admin@wavecrestinc.com</a></p>
                <p>760-753-2423</p>
                <p>If you would like us to bid on your project, please shoot us an email or give us a call. We look forward to hearing from you!</p>

            </Container>
        </section>
    </Layout>
);

export default scheduleATour;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "contact-page.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`;