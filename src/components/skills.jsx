import React from 'react';
import LayoutSub from '../components/layout-sub';

import { ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return <LayoutSub subId="skills" subTitle="MY SPECIALTY" title="MY SKILLS" className="mb-5">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias hic dolor quibusdam facere maxime, necessitatibus est earum, atque veritatis nulla error esse repudiandae sapiente veniam nemo quasi quaerat ex porro.
            </p>
            <div className="row mb-3">
                <div className="col">
                    Photoshop
                    <ProgressBar variant="success" now={75} label={'75%'}/>
                </div>
                <div className="col">
                    Jquery
                    <ProgressBar variant="danger" now={88} label={'88%'}/></div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    HTML5
                    <ProgressBar variant="info" now={82} label={'82%'}/>
                </div>
                <div className="col">
                    CSS3
                    <ProgressBar variant="warning" now={70} label={'70%'}/></div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    React
                    <ProgressBar variant="primary" now={75} label={'75%'}/>
                </div>
                <div className="col">
                    CEO
                    <ProgressBar variant="secondary" now={75} label={'88%'}/></div>
            </div>
        </LayoutSub>
};

export default Skills;