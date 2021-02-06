import React from 'react';
import LayoutSub from '../components/layout-sub';
import { Button } from 'react-bootstrap';

import {aClick} from './utils';


const About = () => {
    return <LayoutSub subId="about" subTitle="about us" title="Who am I?" className="mb-5">
        <div className="row">
            <div className="col">
        
            <p><b>Hi, I'm my name.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis et reprehenderit numquam beatae ex saepe cum reiciendis odit Optio sint ex facilis sunt soluta praesentium consectetur eius quos consequuntur enim</p>

            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, enim quasi eos corrupti voluptatum explicabo necessitatibus adipisci totam deleniti</p>
    
       <Button variant="outline-primary" onClick={(e) => aClick(e,'contact')}>Hire me!</Button>

              
              </div>
        </div>
    </LayoutSub>;
};

export default About;