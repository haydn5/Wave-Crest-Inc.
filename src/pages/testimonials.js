import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
// import Img from 'gatsby-image';

const amenities = (props) => (
    <Layout>
        <SEO title="Testimonials" />
        <section>
        <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.testimonials.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
            <h1>Testimonials</h1>
            </div>
          </div>          
        </BackgroundImage>

        <Container className="singleCol">
          <p>

            During my 35 years with PepsiCo, I had responsibility for 140 manufacturing plants in the US and International markets and 8,000 KFC, Pizza Hut, and Taco Bell units in 100+ countries. As a result, I gained valuable insights into the critical importance of engineering design, material specifications, and high quality construction standards.
          </p>
          <p>
          Wave Crest more than exceeded my expectations when we built our two homes in Solana Beach, first in 1996 and then in 2009. It is a homeowners dream to hear the magical phrase “on time and on budget!” and we had that distinct pleasure on both projects.
          </p>
          <p>
            Jim O'Neal<br />
            Homeowner, Previous CEO of Frito-Lay International 
          </p>
          <hr />
          <p>After buying a building lot in Fairbanks Ranch in 1998, I looked around, did my research, and found that WaveCrest Builders had built two custom homes there a couple years before. They seemed well-built and presented a total picture of what an ideal custom home should look like, with the beautiful landscaping and easy-to-discern quality construction.</p>
          <p>Soon thereafter, after several design meetings with Mr. Steve Adams, I met with Mr. Jeff Adams, President of WaveCrest and commissioned him to build our custom home. It was a two year labor of love as we sorted through all the details, worked out the problems, and finally, in July 2001, we moved in, and have enjoyed the beautiful Italian villa style home ever since.</p>
          <p>Mr. Adams met all my high expectations, and to this day, continues to look after his work and maintain an interest in our home!</p>
          <p>Mike Paul<br />
          Homeowner
          </p>
          <p>
          A couple of months ago I called Jeff about a leak in my new bathroom. His guys were at my house within 90 minutes, found the leak via the stucco wall of the balcony and solved the problem before it became a big problem. His stucco guy was also very prompt and professional. I appreciate WaveCrest standing behind their work and the prompt response.
          </p>
          <p>Marc Kramer <br />
          Homeowner
          </p>
          <p>
          Jeff did SUCH a fine job and should be very proud. What a fantastic team of talented homebuilders. Wow!!
          </p>
          <p>Christy Walton</p>
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
    testimonials: file(relativePath: { eq: "testimonials-page.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
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