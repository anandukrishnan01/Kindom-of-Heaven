
import { Component } from "react";
import "./ServiceData.css";
import { BsArrowRight } from 'react-icons/bs'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class ServiceData extends Component {
    render() {
        return (
           


            <Container>
                <Row>
                    <Col className="grid-container"  >
                        <div className=" grid-item card-container"  >
                            <div className="image-container">
                                <img src={this.props.postImage} alt="" />
                            </div>
                            <div className="card-content">
                                <div className="card-title">
                                    <h3>{this.props.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{this.props.desc}</p>
                                </div>
                            </div>
                            <div className="btn">

                                <a href={this.props.href}>Read more</a>
                                <BsArrowRight className="icon" />

                            </div>

                        </div>
                    </Col>
                    {/* <Col sm>
                        <div className="card-container">
                            <div className="image-container">
                                <img src={this.props.postImage} alt="" />
                            </div>
                            <div className="card-content">
                                <div className="card-title">
                                    <h3>{this.props.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{this.props.desc}</p>
                                </div>
                            </div>
                            <div className="btn">

                                <a href="/">Read more</a>
                                <BsArrowRight className="icon" />

                            </div>

                        </div>
                    </Col>
                    <Col sm>
                        <div className="card-container">
                            <div className="image-container">
                                <img src={this.props.postImage} alt="" />
                            </div>
                            <div className="card-content">
                                <div className="card-title">
                                    <h3>{this.props.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{this.props.desc}</p>
                                </div>
                            </div>
                            <div className="btn">

                                <a href="/">Read more</a>
                                <BsArrowRight className="icon" />

                            </div>

                        </div>
                    </Col> */}
                </Row>
            </Container>






        );
    }
}
export default ServiceData;