import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import jeffAdams from "../images/jeff-adams.jpg"
import richW from "../images/rich-williams.jpg"
import threeElements from "../images/3-elements.png"

import {graphql} from 'gatsby';
// import Img from 'gatsby-image';

const amenities = (props) => (
    <Layout>
        <SEO title="About" />
        <section>
        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.about.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>About</h1>
            </div>
          </div>          
        </BackgroundImage>

        <Container className="singleCol">
          <p>We’ve crossed Enterprises Inc. has served as San Diego’s premier general contractor for over four decades. We are proud of our unique ability to convert clients’ dreams into beautiful realities and believe it is our responsibility as general contractor to act as the principal link between conception of every project and its ultimate expression. </p>
          <p>The WaveCrest team is dedicated to ensuring the highest quality, utmost integrity, and best value for your project. We work with you, the architect, and all other key players from the planning and permitting stages through final construction to ensure a transparent and timely project. Or keen attention to detail, innovative problem-solving and solutions-oriented mindset will guarantee a project that exceeds your expectations.</p>
        </Container>

        <Container>


          <Row>
            <Col lg={4}>
              <p><Image src={jeffAdams} alt="Jeff Adams" fluid /></p>
            </Col>
            <Col lg={8}>
            <h2>Jeff Adams<span className="notBoldSmaller">, President</span></h2>
          <p>Since 1972, Mr. Adams has overseen the construction of numerous residential projects, as well as three multimillion-dollar resorts. Regardless of the size of the project, Jeff has a meticulous eye detail. While his projects have been characterized by their creativity in quality, Mr. Adams, who has a degree in economics from University of California Santa Barbara, is extremely cost-conscious as well. He is very aware of the need to get the best possible product at the lowest possible cost.
            </p>
            <p>Mr. Adams has been honored with numerous prestigious awards for his projects, including:

          <ul>
            <li>Gold Nugget Awards at the Pacific Coast Builder’s Conference on two occasions.</li>
            <li>Award of Honor from the American Institute of Architects / San Diego Chapter.</li>
            <li>Orchid Award by the San Diego Orchids and Onions Committee.</li>
            <li>Lilly Award from the Rancho Santa Fe Association.</li>
            <li>Best Building Improvement of the Decade by the City of Del Mar.</li>
          </ul>
          </p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col lg={4}>
              <p><Image src={richW} alt="Rich Williams" fluid /></p>
            </Col>
            <Col lg={8}>
            <h2>Rich Williams<span className="notBoldSmaller">, Vice President</span></h2>
          <p>
            Rich has been a leading builder in San Diego for decades. His expertise in building science and desire to continually learn allow him to build top quality homes that last more than a lifetime. His goal is to build homes that are not only healthy, safe places for your family but are also comfortable, beautiful, and durable. 
          </p>
          <p>
            Rich is also known to many as the preeminent green building expert in San Diego. He built the first LEED Platinum home in San Diego under his company Arthaus and has since built many LEED and GreenPoint Rated projects. He is also a Passive House Certified Builder and is the president of the Passive House Alliance of San Diego. In an effort to reduce the impact of construction on the environment, he integrates sustainable practices into every project where it is possible and cost-effective.
          </p>
          
          </Col>
          </Row>
          <hr />
        </Container>
        <Container className="singleCol">
        <h2>Catch the Green Wave</h2>
          <p>Having practiced Green Building since the oil shortages of the late seventies, Jeff has earned multiple ‘green’ designations and knows how to integrate sustainability into his practice without compromising cost. He is a Certified Green Professional (CGP) by the National Association of Home Builders which signifies his incorporation of green building principles into homes using cost-effective and affordable options. He is a LEED Accredited Professional for Homes and Building Design + Construction by the U.S. Green Building Council, which distinguishes building professionals with the knowledge and skills to successfully steward the LEED certification process. A real estate broker since 1978, Jeff has also been awarded the National Association of Realtors’s Green Designation, the only green real estate professional designation by NAR.</p>
        </Container>
        <div className="wcBGColor p-5 lightGray">
            <Container className="singleCol">
              <p>WaveCrest has a division dedicated specifically to environmentally-focused projects called <a href="https://www.alliancegreenbuilders.com">Alliance Green Builders</a>. AGB’s award winning projects include Passive House Certified, LEED Platinum, and GreenPoint Rated homes. They are the leaders of San Diego’s residential green building sector.</p>
            </Container>
        </div>


        <Container>
        <Row>
            <Col lg={4}>
              <Image src={threeElements} className="mt-4" alt="3 Elements" fluid />
            </Col>
            <Col lg={8}>
          <h2>
          Three Elements of Building
          </h2>
          <p>The development of a building is determined by three crucial components: time, cost, and quality. Wave Crest Enterprises works closely in partnership with clients, balancing these three factors according to the individual nature of the project.</p>
          <p>
            <strong className="coloredType">1) Time </strong>– Time is money. Attention to time constraints with suppliers, subcontractors, engineers, and architects ensures continuity at a cost-saving pace. Wave Crest is committed to hands-on supervision throughout the entire development process, providing the highest level of efficiency during every phase of the project. It is this level of competence that solves problems before they arise, saving valuable time and money.
          </p>
          <p>
          <strong className="coloredType">2) Cost </strong>– Wave Crest has over three decades of experience building projects around strict realistic budgets.  From a simple remodeling to a 5.4 million dollar resort complex, we are committed to keeping costs within pre-established limits, striving to achieve the greatest value per dollar invested without sacrificing precise attention to detail.
          </p>
          <p><strong className="coloredType">3) Quality </strong>– Quality and craftsmanship have always been hallmarks of our projects.  Wave Crest has a reputation for creating custom environments that are meticulously constructed.  On site supervision ensures fulfillment of our client’s exact specifications. Relentless pursuit of perfection and uncompromising quality is guaranteed, surpassing standards inside and out.</p>
          </Col>
          </Row>
          </Container>
          <Container className="singleCol">
          <h2>Enjoyable Experience </h2>
          <p>Above all, WaveCrest is committed to making the process of building a home the most rewarding experience it can be.  Our goal is to unburden our clients from tedious day-to-day supervision, and to provide reliable guidance to ensure cost-effective quality work and timely delivery. The result is a lifetime experience, and a residence of endearing charm and enduring quality. One in which owners can take special pride in calling their own. Wave Crest is committed to the integration of all project elements, tailored to the precise needs of the client. We strive to assess and understand the unique character of each project. No matter how large or small the challenge, a fine balance of budget, craftsmanship, and efficiency reflects the uncompromising commitment to excellence that defines the work of WaveCrest. The result is an enjoyable experience for all involved parties, and a beautiful construction that will stand the test of time.</p>
        </Container>
        </section>
    </Layout>
);

export default amenities;

export const pageQuery = graphql`
  query {
    conferenceroom: file(relativePath: { eq: "conference-room.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    events: file(relativePath: { eq: "events.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    officeEquipment: file(relativePath: { eq: "machine-clipart-office-equipment-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    noInvoices: file(relativePath: { eq: "no-invoices.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about: file(relativePath: { eq: "about-page.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    camera: file(relativePath: { eq: "bullet-camera-atlanta-business.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;