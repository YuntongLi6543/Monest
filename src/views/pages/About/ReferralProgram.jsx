import React, { Component } from 'react';
import "scss/OurStory.scss";
import 'scss/Home.scss';

import {
    Container,
    Button
} from "reactstrap";

export default class ReferralProgram extends Component {
    render() {
        return (
            <div className="About">
                <div className="header-and-feature">
                    <p className="h1">Our Story</p>
                </div>
                <section className="section section-lg">
                    <Container>
                        <div className="pr-md-5">
                            <h2>Do you know someone looking for a mortgage?</h2>
                            <p>
                                If you've closed a mortgage with Monest in the past, you can take part in our referral program.
                            </p>
                            <ul className="list-unstyled mt-5">
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h4 className="">
                                                How it Works
                                            </h4>
                                            <p>
                                                For every person you refer that closes a mortgage with Monest, we'll give you $100 cash!
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h4 className="">
                                                How to Refer Someone
                                            </h4>
                                            <p>
                                                You can refer a friend, family member, or colleague through any of the following ways:
                                            </p>
                                            <p>
                                                1. Email their name, phone number, and email address to your Monest Agent
                                            </p>
                                            <p>
                                                2. Send their details to us via our contact form
                                            </p>
                                            <p>
                                                3. Have them contact your favourite Monest Agent directly. Make sure they mention your name so that the agent knows they were referred by you.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <Button
                                className="see-rate-btn"
                                onClick={e => e.preventDefault()}
                            >
                                Make a Referral
                            </Button>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}