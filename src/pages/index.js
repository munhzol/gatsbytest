import React from "react";
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Head from '../components/head';
import MainNav from '../components/mainnav';
import Contact from '../components/contact';
import About from '../components/about';
import Education from '../components/education';
import Skills from '../components/skills';
import Services from '../components/services';
import Home from '../components/home';
import Blog from '../components/blog';

export const query = graphql`
  query {
    file (relativePath: {
      eq: "img/anthony-riera-it9kG_dWyVo-unsplash.jpg",
    }) {
      childImageSharp {
          fixed {
            width
            height
            src
          }
        fluid {
          sizes 
          src
        }
        }
    }
  }`;

const IndexPage = ({data}) => {

  return <div className="container">
          <Head />
          <div className="row" style={{ height:"100vh"}}>
            <div className="col-md-3 col-sm-none p-0" style={{backgroundColor:'#F2F3F7'}}>
              <div className="sticky-top text-center pt-5">
                
                <Img fixed={data.file.childImageSharp.fixed} className="rounded-circle mb-5" style={{height:150, width: 150, margin:"auto"}} />
                
                <div>
                 <h4>James (Jamie)</h4>
                </div>
                <div className="mb-5">
                  <p>Software developer</p>
                </div>

                <MainNav />
              
              </div>
            </div>

            <div className="col-md-9 col-sm-12 p-0" style={{overflow: "scroll" }}>
              
              
              <Home />

              <About />

              <Services />

              <Skills />

              <Education />


              <Blog />

            <Contact />
              
            </div>
        </div>
    </div>

}

export default IndexPage;


// return <Layout>
  //       <Head />
  //       <h1>Home page</h1>
  //       <p>This is the beutiful home page!</p>
  //   </Layout>
