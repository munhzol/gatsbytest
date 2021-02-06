import React, { useState, useEffect } from 'react';

import { Form,Button,Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import firebase from "gatsby-plugin-firebase";

import LayoutSub from '../components/layout-sub';

const Contact = () => {

    const [data, setData] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showMessages, setShowMessages] = useState(0);

    const getData = () => {
        firebase.database().ref(`/contact`).child('msgs').once('value', (snapshot)=>{

            let newData = [];
            for (const property in snapshot.val()) {
                newData.push(snapshot.val()[property]);
              }
            setData(newData);
        });
    }

    useEffect(()=>{
        getData();
    },[]);




    const addMessage = (e) => {
            e.preventDefault();
          firebase.database().ref(`/contact/msgs`).child(Math.floor(Math.random() * 10000000)).set(
            {
                "name": name,
                "email": email,
                "message" : message
            }
          ).then(()=>{
            getData();
            setName('');
            setEmail('');
            setMessage('');
          });
    };

    return <LayoutSub subTitle="Get in touch" title="Contact" subId="contact">
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-3">
                        <h4>Location</h4>
                        <p className="mb-4">100 Street Name<br/>
                        City name, AA 10000</p>

                        <h4>Contact Info</h4>
                        <p className="mb-4">(888) 888-8888<br/>
                        email@example.com</p>
                        <p>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGlobe} /></a>
                            
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">

                        <Form onSubmit={e=>addMessage(e)}>
                            <Form.Group>
                                <Form.Control required type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control required type="email" placeholder="Email" value={email} onChange={(e,v)=>setEmail(e.target.value)}  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control required as="textarea" rows={3} placeholder="Message" value={message} onChange={(e,v)=>setMessage(e.target.value)}   />
                            </Form.Group>
                            <div style={{ display: "flex", justifyContent: "space-between"}}>
                                <Button variant="primary" type="submit">
                                    Send
                                </Button> 
                                <Button variant="outline-danger" type="button" className="ml-1" onClick={()=>{
                                    setShowMessages(showMessages===0?1:0)
                                }}>
                                    Messages
                                </Button>
                            </div>
                        </Form>

                    </div>
            </div>

           

            {showMessages===1 ? <div>
                <p>Firebase realtime database</p>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data !== null ? 
                        data.map((row)=>{
                            return <tr>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.message}</td>
                                </tr>
                        }) : ''
                    }
                </tbody>
                </Table></div> : '' }

            


        </LayoutSub>;
};

export default Contact;