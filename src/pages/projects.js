import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"


// import BackgroundImage from 'gatsby-background-image'

import {graphql} from 'gatsby';
import Img from 'gatsby-image';

const theWick = (props) => (
    <Layout>
        <SEO title="Projects" />
        <section>


        <Container>
          <h1 className="text-center">Projects</h1> 
        </Container> 
        <Container>
          <Row>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestSenses.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>12 Senses</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestBella.childImageSharp.fluid} alt="Bellasario" />
              <figcaption>Bella</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestBrinner.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Brinner</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestCasa.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Casa</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestCasaaguila.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Casa Aguila</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestEnrico.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Enrico</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestFinn.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Finn</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestGreisman.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Greisman</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestJaska.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Jaska</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestMellowYellow.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Mellow Yellow</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestMilligan.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Milligan</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestNeptune.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Neptune</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestNeuhaus.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Neuhaus</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestPoole.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Poole</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestResort.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>WaveCrest Resort</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestShed.childImageSharp.fluid} alt="12 Senses" />
              <figcaption>Shed</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestStallione.childImageSharp.fluid} alt="Stallione" />
              <figcaption>Stallione</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestSunder.childImageSharp.fluid} alt="Sunder" />
              <figcaption>Sunder</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestTamarack.childImageSharp.fluid} alt="Tamarack" />
              <figcaption>Tamarack</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestWalton.childImageSharp.fluid} alt="Walton" />
              <figcaption>Walton</figcaption>
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Img fluid={props.data.wavecrestYuhl.childImageSharp.fluid} alt="Yuhl" />
              <figcaption>Yuhl</figcaption>
            </Col>
          </Row>
        </Container>
        </section>
    </Layout>
);

export default theWick;
 
export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "wick1-header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestSenses: file(relativePath: { eq: "projects/wavecrest_12senses.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestBella: file(relativePath: { eq: "projects/wavecrest_bellasario.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestBrinner: file(relativePath: { eq: "projects/wavecrest_brinner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestCasa: file(relativePath: { eq: "projects/wavecrest_casa.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestCasaaguila: file(relativePath: { eq: "projects/wavecrest_casaaguila.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestEnrico: file(relativePath: { eq: "projects/wavecrest_enrico.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestFinn: file(relativePath: { eq: "projects/wavecrest_finn.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestGreisman: file(relativePath: { eq: "projects/wavecrest_greisman.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestJaska: file(relativePath: { eq: "projects/wavecrest_jaska.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestMellowYellow: file(relativePath: { eq: "projects/wavecrest_mellowyellow.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestMilligan: file(relativePath: { eq: "projects/wavecrest_milligan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestNeptune: file(relativePath: { eq: "projects/wavecrest_neptune.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestNeuhaus: file(relativePath: { eq: "projects/wavecrest_neuhaus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestNeuhaus: file(relativePath: { eq: "projects/wavecrest_neuhaus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestPoole: file(relativePath: { eq: "projects/wavecrest_poole.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestResort: file(relativePath: { eq: "projects/wavecrest_resort.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestShed: file(relativePath: { eq: "projects/wavecrest_shed.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestStallione: file(relativePath: { eq: "projects/wavecrest_stallione.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestSunder: file(relativePath: { eq: "projects/wavecrest_sunder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestTamarack: file(relativePath: { eq: "projects/wavecrest_tamarack.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestWalton: file(relativePath: { eq: "projects/wavecrest_walton.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wavecrestYuhl: file(relativePath: { eq: "projects/wavecrest_yuhl.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;