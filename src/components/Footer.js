import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import githubimg from "../assets/img/githubimg.png";
import twitter from '../assets/img/twitter.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/austinmbenton/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/austinmbenton?tab=repositories" target="_blank"><img src={githubimg} alt="" /></a>
                <a href="https://twitter.com/home" target="_blank"><img src={twitter} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}