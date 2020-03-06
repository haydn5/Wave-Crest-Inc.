import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import logo01 from "../images/logos/Certified-Green-Professional-white-2.png"
import logo02 from "../images/logos/LEED-AP-H-2-white.png"
import logo03 from "../images/logos/Leed-for-Homes-white.png"
import logo04 from "../images/logos/NAHB-logo.png"
import logo05 from "../images/logos/NAR-Green-white.png"
import logo06 from "../images/logos/USGBC-3.png"



import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
// import Img from 'gatsby-image';


const test3 = (props, {text123}) => (
  <Layout>
        <SEO title="Offices in Brunswick, Georgia"/>
        <section className="page-section">

        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.indexImage.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>Serving San Diego for over 45 years.</h1>
            <p>WaveCrest is a general contracting firm that specializes in custom single and multifamily residential in first-class resort construction throughout San Diego County‘s ranch and coastal regions.</p>
            </div>
          </div>          
        </BackgroundImage>

        <Container>
          <Row>
            <Col lg={4}>
              <h2 className="summary">New Construction</h2>
              <p className="summary">WaveCrest's homes represent an inspired vision for luxury living that balances human health, environmental sustainability, and cost effectiveness for its occupants.</p>
            </Col>
            <Col lg={4}>
              <h2 className="summary">Remodels</h2>
              <p className="summary">WaveCrest has extensive experience with remodeling existing houses into their client's dream homes.</p>
            </Col>
            <Col lg={4}>
              <h2 className="summary">Resorts</h2>
              <p className="summary">WaveCrest has built two multimillion dollar resorts along the San Diego coastline and can keep a project of any scale on time and on budget.</p>
            </Col>
          </Row>
        </Container>
        <div className="bg-secondary p-5">
        <Container className="singleCol testimonial">
          <blockquote >
          "WaveCrest is truly one of the premiere construction companies in California with a sterling reputation for integrity, reliability, quality and 100% customer satisfaction. I offer my recommendation to anyone who is considering projects ranging from modest renovation/remodeling to multi-million dollar turn-key construction of new homes or commercial buildings..."
          </blockquote>
          <p>Jim O'Neal<br />
Homeowner, Previous CEO of Frito-Lay International</p>
          </Container>
          </div>
          <div className="wcBGColor p-5">
            <Container>
              <Row>
                <Col className="maxWidth50" lg={2} md={4} xs={6}>
                  <Image src={logo01} alt="Logo" fluid />
                </Col>
                <Col className="maxWidth50" lg={2} md={4} xs={6}>
                  <Image src={logo02} alt="Logo" fluid />
                </Col>
                <Col className="maxWidth50" lg={2} md={4} xs={6}>
                  <Image src={logo03} alt="Logo" fluid />
                </Col>
                <Col className="maxWidth50" lg={2} md={4} xs={6}>
                  <Image src={logo04} alt="Logo" fluid />
                </Col>
                <Col className="maxWidth50" lg={2} md={4} xs={6}>
                  <Image src={logo05} alt="Logo" fluid />
                </Col>
                <Col className="maxWidth50" lg={2} md={4} xs={6}>
                  <Image src={logo06} alt="Logo" fluid />
                </Col>
                
              </Row>
            </Container>
          </div>
 
        </section>
        
      </Layout>
);

export default test3;

export const query = graphql`
  query {
    indexImage: file(relativePath: { eq: "index-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`;