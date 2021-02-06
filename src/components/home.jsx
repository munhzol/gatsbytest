import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";

import { Carousel } from 'react-bootstrap';

const Home = () => {

    const data = useStaticQuery(graphql`
        query {
        allImageSharp {
            nodes {
            fluid (quality:100) {
                src
            }
            }
        }
        }`);

    return <>
        <a id="home"></a>
        <Carousel className="w-100">
        <Carousel.Item>
            <Img fluid={data.allImageSharp.nodes[15].fluid} className="img-fluid vh-100" alt="First slide"  />  

            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        

        <Carousel.Item>
        <Img fluid={data.allImageSharp.nodes[13].fluid} className="img-fluid vh-100" alt="First slide"  />  


            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>


        {/* 
        7,8,9,13,15,17,18,21,23
        <Carousel.Item>
        <Img fluid={data.allImageSharp.nodes[3].fluid} className="img-fluid vh-100" alt="First slide"  />  


            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>*/}
        </Carousel> 
        </>;
};

export default Home;