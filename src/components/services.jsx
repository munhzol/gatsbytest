import React from 'react';
import LayoutSub from '../components/layout-sub';

import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMobileAlt, faBalanceScale, faBoxes, faAward, faCapsules } from '@fortawesome/free-solid-svg-icons';


import  './services.scss';


const Services = () => {
    return <LayoutSub subId="services" subTitle="WHAT I DO?" title="HERE ARE SOME OF MY EXPERTISE">
        <div className="services">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                <Card className="bbc-blue">
                    <Card.Body>
                        <div className="card-icon tc-blue">
                            <FontAwesomeIcon icon={faGlobe} className="fa-3x" />
                        </div>
                        <Card.Title>
                            <p>INNOVATIVE IDEAS</p>
                        </Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-sm-12 col-md-4">
                <Card className="bbc-red">
                    <Card.Body>
                        <div className="card-icon tc-red">
                            <FontAwesomeIcon icon={faMobileAlt} className="fa-3x" />
                        </div>
                        <Card.Title>SOFTWARE</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-sm-12 col-md-4">
                <Card className="bbc-green">
                    <Card.Body>
                        <div className="card-icon tc-green">
                            <FontAwesomeIcon icon={faBalanceScale} className="fa-3x" />
                        </div>
                        <Card.Title>APPLICATION</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                <Card className="bbc-pink">
                    <Card.Body>
                        <div className="card-icon tc-pink">
                            <FontAwesomeIcon icon={faBoxes} className="fa-3x" />
                        </div>
                        <Card.Title>GRAPHIC DESIGN</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-sm-12 col-md-4">
                <Card className="bbc-yellow">
                    <Card.Body>
                        <div className="card-icon tc-red">
                            <FontAwesomeIcon icon={faAward} className="fa-3x" />
                        </div>
                        <Card.Title>GRAPHIC DESIGN</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-sm-12 col-md-4">
                <Card className="bbc-light-blue">
                    <Card.Body>
                        <div className="card-icon tc-light-blue">
                            <FontAwesomeIcon icon={faCapsules} className="fa-3x" />
                        </div>
                        <Card.Title>APPLICATION</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            </div>
            </div>
        </LayoutSub>
};

export default Services;