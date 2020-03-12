/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/custom.css"
import { Container, Col, Row } from "react-bootstrap";

const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement
}

const isScrolled = (element) => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = "site-container"
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled) className += " navbar-scrolled"

    return (
      <div
        className={className}
        ref={this.siteContainer}
        id="page-top">
        <Header/>
        <main>{this.props.children}</main>
        <footer>
          <Container>
            <Row>
            <Col lg={1}></Col>
              <Col lg={2}>
                <h2>Address</h2>
                <p>829 Second Street Ste. A<br />
                    Encinitas, CA 92024</p>
              </Col>
              <Col lg={2}>
                <h2>Contact</h2>
                <p><a href="mailto:info@wavecrestinc.com">info@wavecrestinc.com</a><br />(760)753-2440</p>
              </Col>
              <Col lg={2}>
                <h2>License</h2>
                <p>CSLB #732912</p>
              </Col>
              <Col lg={4}>
                <h2>Copyright</h2>
                <p>©{(new Date().getFullYear())} WaveCrest Enterprises, Inc.<br />Site designed by <a href="https://www.nautilusdesigns.com">Nautilus Designs</a></p>
              </Col>
              <Col lg={1}></Col>

            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}