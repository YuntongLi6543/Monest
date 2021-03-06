import React from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import 'scss/Home.scss';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    Button,
    Card,
    CardBody,
    FormGroup,
    Input,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
import { getPageData } from "../../actions/data";

import styled from 'styled-components'

const items = [
    {
        src: "assets/img/home/carousel1.jpg",
        altText: 'carousel1.jpg',
        caption: 'We Lock Lowest Mortgage Rate Today',
        button: "apply mortgage",
        link: '/mortgage'
    },
    {
        src: "assets/img/home/carousel2.jpg",
        altText: 'carousel2.jpg',
        caption: 'Learning Your Benefits And Suitable Plans As A First Time Buyer Or New Immigrant',
        button: 'Contact Monest',
        link: '/contact'
    },
    {
        src: "assets/img/home/carousel3.jpg",
        altText: 'carousel3.jpg',
        caption: 'Want To Look For How You Can Afford Your Mortgage?',
        button: 'See Mortgage calculators',
        link: '/calculator'
    }
];

const CarsouelImg = styled.img`
  object-fit:cover;
  width: 100vw;
  max-height: 80vh;
`

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false,
        };
    }

    componentDidMount() {
        this.props.getPageData();
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    nextCarouselPage = () => {
        if (!this.state.animating) {
            let nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
            this.setState({
                activeIndex: nextIndex
            })
        }
    }

    previousCarouselPage = () => {
        if (!this.state.animating) {
            let nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
            this.setState({
                activeIndex: nextIndex
            })
        }
    }

    goToCarouselPage = (newIndex) => {
        if (!this.state.animating) {
            this.setState({
                activeIndex: newIndex
            })
        }
    }

    setAnimatingStatus = (animatingStatus) => {
        this.setState({ animating: animatingStatus })
    }

    render() {
        let slides = items.map((item) =>
            <CarouselItem
                onExiting={() => this.setAnimatingStatus(true)}
                onExited={() => this.setAnimatingStatus(false)}
                key={item.src}
            >
                <CarsouelImg className="CarsouelImg" width='100%' height='80%' src={require(`assets/img/home/${item.altText}`)} alt={item.altText} />
                <div className="carousel-caption align-items-center justify-content-center m-0 p-0 carouselText">
                    <h1>{item.caption}</h1>
                    <Link to={item.link}>
                        <button className="btn btn-lg carsouelBtn">{item.button}</button>
                    </Link>
                </div>
            </CarouselItem>
        );

        return (
            <>
                <main ref="main">
                    <div className="position-relative">
                        <section className="section p-0">
                            <Container className="d-flex p-0 m-0">
                                <div className="p-0 m-0">
                                    <Carousel
                                        activeIndex={this.state.activeIndex}
                                        next={this.nextCarouselPage}
                                        previous={this.previousCarouselPage}
                                    >
                                        <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToCarouselPage} />
                                        {slides}
                                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previousCarouselPage} />
                                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextCarouselPage} />
                                    </Carousel>
                                </div>
                            </Container>
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points=""
                                    />
                                </svg>
                            </div>
                        </section>

                        <section className="section section-md">
                            <Container className="application">
                                <Row className="justify-content-center text-center mb-sm">
                                    <Col lg="8">
                                        <h2 className="display-3">Start an application</h2>
                                        <p className="lead text-muted">
                                            lowest rate and the most professional service served by Monest
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="row-item">
                                    <Col className="mb-5 mb-lg-0 col-item" md="4">
                                        {/* add link address */}
                                        <Link to="/mortgage">
                                            <div className="application-item">
                                                <i className="fa fa-gift fa-3x three-icon" aria-hidden="true"></i>
                                                <div className="application-text">Purchase</div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col className="mb-5 mb-lg-0 col-item" md="4">
                                        <Link to="/mortgage">
                                            <div className="application-item">
                                                <i className="fa fa-usd fa-3x three-icon" aria-hidden="true"></i>
                                                <div className="application-text">Refinance</div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col className="mb-5 mb-lg-0 col-item renewer-item" md="4">
                                        <Link to="/mortgage">
                                            <div className="application-item">
                                                <i className="fa fa-check-circle-o fa-3x three-icon" aria-hidden="true"></i>
                                                <div className="application-text">Renewer</div>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </section>

                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <Container className="py-1 d-flex">
                                <div className="col px-0">
                                    <Row className="justify-content-center text-center">
                                        <Col>
                                            <h1 className="display-2 text-white mb-3">
                                                Our Service{" "}
                                            </h1>
                                            <h4 className="text-white mb-1">
                                                YOU WORTH MORE THAN YOU THOUGHT
                                            </h4>
                                            <h4 className="text-white mb-5 mt-1">
                                                WE OFFER YOU BEST RATE & BEST SERVICE
                                            </h4>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points=""
                                    />
                                </svg>
                            </div>
                        </section>
                        {/* 1st Hero Variation */}
                    </div>
                    <section className="section section-lg pt-lg-0 mt--200">
                        <Container>
                            <Row className="justify-content-center text-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5 our-server-card">
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4 our-server-icon">
                                                        <i className="ni ni-check-bold" />
                                                    </div>
                                                    <h6 className="text-uppercase">
                                                        Guaranteed Best Rate
                          </h6>
                                                    <p className="description mt-3 mb-1">
                                                        Even for same products
                          </p>
                                                    <p className="description mt-1 mb-1">
                                                        We offer better rate simply
                          </p>
                                                    <p className="description mt-1 mb-1">
                                                        Because the volume we get
                          </p>
                                                    <Link to="/rates">
                                                        <Button
                                                            className="mt-4 our-server-btn"
                                                            color="primary"
                                                        >
                                                            See Rate
                                                    </Button>
                                                    </Link>

                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5 our-server-card">
                                                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4 our-server-icon">
                                                        <i className="ni ni-istanbul" />
                                                    </div>
                                                    <h6 className="text-uppercase">
                                                        Most Suitable Mortgage Plan
                          </h6>
                                                    <p className="description mt-3 mb-1">
                                                        We look and hear your need
                          </p>
                                                    <p className="description mt-1 mb-1">
                                                        Review and Select the best plan
                          </p>
                                                    <p className="description mt-1 mb-1">
                                                        That meets demand
                          </p>
                                                    <Link to="/mortgage">
                                                        <Button className="mt-4 our-server-btn">
                                                            Ask For Suitable Plan
                            </Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5 our-server-card">
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4 our-server-icon">
                                                        <i className="ni ni-planet" />
                                                    </div>
                                                    <h6 className="text-uppercase">
                                                        Professional mortgage team
                          </h6>
                                                    <p className="description mt-3 mb-1">
                                                        Extensive Banking Experience
                          </p>
                                                    <p className="description mt-1 mb-1">
                                                        Underwriting experience
                          </p>
                                                    <p className="description mt-1 mb-1">
                                                        Travel to meet you in person
                          </p>
                                                    <Link to="/about/agent">
                                                        <Button
                                                            className="mt-4 our-server-btn"
                                                        >
                                                            Meet Our Team
                          </Button>
                                                    </Link>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section section-md customer">
                        <Container className="pt-0">
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3">Customer</h2>
                                    <p className="lead">
                                        Find a package suitable for you!
                  </p>
                                </Col>
                            </Row>
                            <Row className="text-center justify-content-center row-grid mt-5">
                                <Col lg="4" className="customer-item first-item">
                                    <h5 className="mb-3">First-Time Home Buyers</h5>
                                    <p className="p-0 m-0">
                                        Considering buying your first properties
                  </p>
                                    <p className="text-white p-0 m-0">
                                        Take a look on what benefit that you can get
                  </p>
                                    <Link to="/mortgage/first-time-home-buyer">
                                        <Button
                                            className="mt-4 cusomer-btn"
                                            color="neutral"
                                        >
                                            First time home buyer page
                    </Button>
                                    </Link>
                                </Col>
                                <Col lg="4" className="customer-item">
                                    <h5 className="mb-3">New to Canada </h5>
                                    <p className="p-0 m-0">
                                        Are you a new comer?
                  </p>
                                    <p className="text-white p-0 m-0">
                                        Check out with monest to find out
                  </p>
                                    <Link to="/mortgage/new-to-Canada">
                                        <Button
                                            className="mt-4 cusomer-btn"
                                            color="neutral"
                                        >
                                            new to Canada
                          </Button>
                                    </Link>
                                </Col>
                                <Col lg="4" className="customer-item">
                                    <h5 className="text-white mb-3">Low income family </h5>
                                    <p className="text-white p-0 m-0">
                                        Are you low income or have bad credit history?
                    </p>
                                    <p className="text-white p-0 m-0">
                                    </p>
                                    <Link to="/mortgage/low-income-education-centre">
                                        <Button
                                            className="mt-4 cusomer-btn"
                                            color="neutral"
                                        >
                                            low income
                  </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="mt-5 section section-lg py-3 our-partners">
                        <Container>
                            <Row className="justify-content-center text-center mb-sm">
                                <Col lg="8">
                                    <h2 className="display-3">Our partners</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/TDBank.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/Scotiabank.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/Manulife.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/BankOfChina.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/HSBC.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/StreetCapital.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/HomeTrust.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/B2BBank.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/EQBank.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/ICSaving.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/FirstNationalFinancial.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/Merix.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/MarathonMortgageCorp.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/Lendwise.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/MCAP.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/AlternaBank.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/CMLS.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/CommunityTrust.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/DUCA.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/Meridian.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                                <Col className="px-0 mb-5 mb-lg-0" lg="3" md="6">
                                    <div className="px-0 mb-3">
                                        <img
                                            alt="..."
                                            className="img-center"
                                            src={require("assets/img/partner/HomeEquityBank.png")}
                                            style={{ width: "200px" }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-end text-right mb-sm">
                                <Col>
                                    <h6>Centum Monest Mortgage Inc. License: #12289</h6>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="section feedback">
                        <Container>
                            <Row className="row-grid">
                                <Col>
                                    <h4 className="text-center justify-content-center display-3">Testimonials</h4>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <Row>
                                                <div className="d-flex px-3">
                                                    <Col className="px-0 mb-5 mb-lg-0" lg="3" md="3">
                                                        <img
                                                            alt="Purchase"
                                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                            src={require("assets/img/theme/team-1-800x800.jpg")}
                                                            style={{ width: "200px" }}
                                                        />
                                                    </Col>
                                                    <Col className="px-0 mb-0 mb-lg-0" lg="9" md="9">
                                                        <div className="pl-4">
                                                            <h5 className="title">
                                                                First time Buyer, Happy for low interest rate and quick response.
                              </h5>
                                                            <p>
                                                                I am an overseas buyer from Beijing. I only have a short stay in Toronto. Although it was near Christmas holiday when I contacted Monest, the agent helped me complete all the mortgage procedures within 1 week and the interest rate was also very good. The ability to solve problems so quickly is really commendable.
                              </p>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <Row>
                                                <div className="d-flex px-3">
                                                    <Col className="px-0 mb-5 mb-lg-0" lg="3" md="3">
                                                        <img
                                                            alt="Purchase"
                                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                            src={require("assets/img/theme/team-3-800x800.jpg")}
                                                            style={{ width: "200px" }}
                                                        />
                                                    </Col>
                                                    <Col className="px-0 mb-0 mb-lg-0" lg="9" md="9">
                                                        <div className="pl-4">
                                                            <h5 className="title">
                                                                Private mortgage lender, avoiding for paying high penalty.
                                                            </h5>
                                                            <p>
                                                                The mortgage agent from other company have been slow to progress, which has caused me to miss the closing time, As a result of that, I am paying very high penalty every day.
                                                                Monest quickly gave private loan for me, then I can close my the deal. I really hope that I was cooperate with Monest from the beginning, so I would not waste time and money.
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    <Card className="shadow shadow-lg--hover my-5">
                                        <CardBody>
                                            <Row>
                                                <div className="d-flex px-3">
                                                    <Col className="px-0 mb-5 mb-lg-0" lg="3" md="3">
                                                        <img
                                                            alt="Purchase"
                                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                            src={require("assets/img/theme/team-2-800x800.jpg")}
                                                            style={{ width: "200px" }}
                                                        />
                                                    </Col>
                                                    <Col className="px-0 mb-0 mb-lg-0" lg="9" md="9">
                                                        <div className="pl-4">
                                                            <h5 className="title">
                                                                Trustworthy service, Lower rate than bank
                                                            </h5>
                                                            <p>
                                                                A friend introduced me to contact Monest Mortgage to apply for my mortgage. They helped me to obtain the 5 years fixed interest rate of 2.49% . I am very satisfied. I will also introduce Monest Mortgega to other friends. Monest is trustworthy.
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points=""
                                />
                            </svg>
                        </div>
                    </section>

                    <section className="section section-md contact-us ">
                        <Container className="pb-300">
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3 text-white">Contact Us</h2>
                                    <p className="mt-5 text-white">
                                        Unit #1008, 250 Consumers Road
                  </p>
                                    <p className="text-white">
                                        Toronto ON Canada, M2J 4V6
                  </p>
                                    <p className="mb-0 text-white">
                                        (416) 855-4565
                  </p>
                                </Col>
                            </Row>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>

                    <section className="section section-md pt-lg-0 section-contact-us">
                        <Container>
                            <Row className="justify-content-center mt--300">
                                <Col lg="8">
                                    <Card className="bg-gradient-secondary shadow">
                                        <CardBody className="p-lg-5">
                                            <h4 className="mb-1">We want to hear from you!</h4>
                                            <p className="mt-0">
                                                Your finance is very important to us.
                      </p>
                                            <FormGroup
                                                className={classnames("mt-5", {
                                                    focused: this.state.nameFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <Input
                                                        placeholder="Your name"
                                                        type="text"
                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup
                                                className={classnames({
                                                    focused: this.state.emailFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <Input
                                                        placeholder="Email address"
                                                        type="email"
                                                        onFocus={e => this.setState({ emailFocused: true })}
                                                        onBlur={e => this.setState({ emailFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="name"
                                                    placeholder="Type a message..."
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round contact-us-btn"
                                                    size="lg"
                                                    type="button"
                                                >
                                                    Send Message
                        </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
            </>
        )
    }
}

const mapStateToProps = ({ data }) => {
    return {
        pageData: data.pageData
    };
};
function mapDispatchToProps(dispatch) {
    return {
        getPageData: () => {
            dispatch(getPageData());
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);