import React from 'react';
import LayoutSub from '../components/layout-sub';

import { Card, Button, Accordion } from 'react-bootstrap';




const education = () => {
    return <LayoutSub subId="education" subTitle="education" title="Education" className="mb-5">
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    MASTER DEGREE GRAPHIC DESIGN
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <div className="row">
                        <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur qui rem tempore fugiat et, officia architecto nesciunt aperiam consequuntur</div>
                        <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur qui rem tempore </div>
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                BACHELOR DEGREE OF COMPUTER SCIENCE
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <div className="row">
                        <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur qui rem tempore fugiat et, officia architecto nesciunt aperiam consequuntur</div>
                        <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur qui rem tempore </div>
                    </div>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                DIPLOMA IN INFORMATION TECHNOLOGY
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Card.Body>
                    <div className="row">
                        <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur qui rem tempore fugiat et, officia architecto nesciunt aperiam consequuntur</div>
                        <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur qui rem tempore </div>
                    </div>

                </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                HIGH SCHOOL SECONDARY EDUCATION
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Card.Body>
                    <div className="row">
                        <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur qui rem tempore fugiat et, officia architecto nesciunt aperiam consequuntur</div>
                        <div className="col">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aspernatur qui rem tempore </div>
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card>

            
            </Accordion>
        </LayoutSub>
};

export default education;