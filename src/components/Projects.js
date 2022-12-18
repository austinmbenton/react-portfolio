import { Col, Tab, Container, Nav, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Coding2 from "../assets/img/Coding2.png";
import todolist from "../assets/img/todolist.png";
import snake2 from "../assets/img/snake2.png";

export const Projects = () => {

    const projects = [
        {
          title: "Coding Companions",
          description: "Fullstack E-Commerce",
          imgUrl: Coding2,
          link: ""
        },
        {
          title: "Arcade Project",
          description: "Javascript based Appliation",
          imgUrl: snake2,
          link: "https://62b92e5ff345054e9cb44e88--silver-otter-1b3142.netlify.app/"
        },
        {
          title: "React To-do List",
          description: "General Todo list using React",
          imgUrl: todolist,
          link: "https://deft-cactus-9f94fe.netlify.app/"
        },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg1,
        // },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg2,
        // },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg3,
        // },
      ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-cneter align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                               {
                                projects.map((project, index) => {
                                    return(
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                               } 
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-imgage-right" src={colorSharp2}></img>
        </section>
    )
}