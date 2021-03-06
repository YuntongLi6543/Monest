import React from 'react';
import {
    Button,
    Input,
    Container,
    Row,
    Table,
    PopoverBody,
    Popover,
    PopoverHeader
} from "reactstrap";

export default class MortgageAffordabilityCalcultor extends React.Component {
    render() {
        return (
            <div className="Mortgage">
                <div className="titleContainer">
                    <h1 className="title">Mortgage Affordability Calcultor</h1>
                </div>
                <div className="section">
                    <Container>
                        <div>
                            <h2 className="mb-3 mb-0">Mortgage Affordability Calcultor</h2>
                            <p>Determining how much you can afford is the first step in buying a home. Affordability is based on the household income of the applicants purchasing the house, the personal monthly expenses of those applicants (car payments, credit expenses, etc.), and the expenses associated with owning a home (property taxes, condo fees, and heating costs). Our calculator shows you the maximum mortgage that you can qualify for.</p>
                            <section className="section section-lg py-3">
                                <Container>
                                    <Row className="third-row">
                                        <div className="mortgage-calculator">
                                            <script type="text/javascript" src="https://www.ratehub.ca/assets/js/widget-loader.js"></script>
                                            <div>
                                                <Table className="sub-content" responsive>
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th colSpan="3">Annual Income</th>
                                                            <th colSpan="3">Living Costs</th>
                                                            <th colSpan="1">Estimate</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="annual-income">Annual Income: </label>
                                                                <br></br>
                                                                <span className="clarification">Before Tax</span>
                                                            </td>

                                                            <td id="annual-income-filed">
                                                                <input className=".input-group text" type="text" id="annual-income" tabindex="1"></input>
                                                            </td>

                                                            <td>
                                                                <Button className="btn-sm btn-icon-label" color="secondary" id="PopoverClick" type="button">
                                                                    Tips
                                                        </Button>
                                                                <Popover placement="top" target="PopoverClick">
                                                                    <PopoverHeader>Click Trigger</PopoverHeader>
                                                                    <PopoverBody>Clicking on</PopoverBody>
                                                                </Popover>
                                                            </td>
                                                            <td>
                                                                <label for="prop_tax">Property Tax: </label>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="text" id="prop_tax" tabindex="6"></input>
                                                            </td>
                                                            <td>
                                                                <span className="select">
                                                                    <Input className="selector" type="select" name="select">
                                                                        <option selected value="month">/mo</option>
                                                                        <option value="year">/yr</option>
                                                                    </Input>
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="check-box">
                                                                    <input type="checkbox"></input>
                                                                </span>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <label for="co-applicant-income">Co-Applicant Income: </label>
                                                                <br></br>
                                                                <span className="clarification">Before Tax</span>
                                                            </td>

                                                            <td id="co-applicant-income-filed" colSpan="1">
                                                                <input type="text" className="text" id="co-applicant-income-filed" tabindex="1"></input>
                                                            </td>

                                                            <td>
                                                                <Button className="btn-sm btn-icon-label" color="secondary" id="PopoverClick" type="button">
                                                                    Tips
                                                        </Button>
                                                                <Popover placement="top" target="PopoverClick">
                                                                    <PopoverHeader>Click Trigger</PopoverHeader>
                                                                    <PopoverBody>Clicking on</PopoverBody>
                                                                </Popover>
                                                            </td>
                                                            <td>
                                                                <label for="condo-fees">Condo Fees: </label>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="text" id="condo-fees" tabindex="6"></input>
                                                            </td>
                                                            <td>
                                                                <span className="select">
                                                                    <Input className="selector" type="select" name="select">
                                                                        <option selected value="month">/mo</option>
                                                                        <option value="year">/yr</option>
                                                                    </Input>
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="check-box">
                                                                    <input type="checkbox"></input>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td colSpan="1"></td>
                                                            <td></td>
                                                            <td>
                                                                <label for="heating-costs">Heating Costs: </label>
                                                            </td>
                                                            <td>
                                                                <input type="text" className="text" id="heating-costs" tabindex="6"></input>
                                                            </td>
                                                            <td>
                                                                <span className="select">
                                                                    <Input className="selector" type="select" name="select">
                                                                        <option selected value="month">/mo</option>
                                                                        <option value="year">/yr</option>
                                                                    </Input>
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className="check-box">
                                                                    <input type="checkbox"></input>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className="debt-payments" colSpan="100%">Debt Payments</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="credit-card">Credit Card: </label>
                                                                <br></br>
                                                            </td>

                                                            <td id="credit-card-filed" colSpan="1">
                                                                <input type="text" className="text" id="annual-income" tabindex="1"></input>
                                                            </td>

                                                            <td>
                                                                <Button className="btn-sm btn-icon-label" color="secondary" id="PopoverClick" type="button">
                                                                    Tips
                                                        </Button>
                                                                <Popover placement="top" target="PopoverClick">
                                                                    <PopoverHeader>Click Trigger</PopoverHeader>
                                                                    <PopoverBody>Clicking on</PopoverBody>
                                                                </Popover>
                                                            </td>
                                                            <td>
                                                                <span className="select">
                                                                    <Input className="selector" type="select" name="select">
                                                                        <option selected value="month">/mo</option>
                                                                        <option value="year">/yr</option>
                                                                    </Input>
                                                                </span>
                                                            </td>
                                                            <td colSpan="5" rowSpan="3">
                                                                <button className="affordability">How much can I afford</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="car-payment">Car Payment: </label>
                                                                <br></br>

                                                            </td>

                                                            <td id="car-payment-filed" colSpan="1">
                                                                <input type="text" className="text" id="car-payment-filed" tabindex="1"></input>
                                                            </td>

                                                            <td>
                                                                <Button className="btn-sm btn-icon-label" color="secondary" id="PopoverClick" type="button">
                                                                    Tips
                                                        </Button>
                                                                <Popover placement="top" target="PopoverClick">
                                                                    <PopoverHeader>Click Trigger</PopoverHeader>
                                                                    <PopoverBody>Clicking on</PopoverBody>
                                                                </Popover>
                                                            </td>
                                                            <td>
                                                                <span className="select">
                                                                    <Input className="selector" type="select" name="select">
                                                                        <option selected value="month">/mo</option>
                                                                        <option value="year">/yr</option>
                                                                    </Input>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label for="other-loan">Other Loan: </label>
                                                                <br></br>
                                                            </td>

                                                            <td id="other-loan-filed" colSpan="1">
                                                                <input type="text" className="text" id="other-loan-filed" tabindex="1"></input>
                                                            </td>

                                                            <td>
                                                                <Button className="btn-sm btn-icon-label" color="secondary" id="PopoverClick" type="button">
                                                                    Tips
                                                        </Button>
                                                                <Popover placement="top" target="PopoverClick">
                                                                    <PopoverHeader>Click Trigger</PopoverHeader>
                                                                    <PopoverBody>Clicking on</PopoverBody>
                                                                </Popover>
                                                            </td>
                                                            <td>
                                                                <span className="select">
                                                                    <Input className="selector" type="select" name="select">
                                                                        <option selected value="month">/mo</option>
                                                                        <option value="year">/yr</option>
                                                                    </Input>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                            </div>
                                        </div>
                                    </Row>
                                </Container>
                            </section>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}