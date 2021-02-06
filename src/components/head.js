import React from 'react';
import { Helmet } from 'react-helmet';
import {useStaticQuery, graphql } from 'gatsby';
// import {useStaticQuery, graphql, withPrefix } from 'gatsby';

const Head = ({title}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Helmet  title={`${title} | ${data.site.siteMetadata.title}`}>

            {/* <script
                src={withPrefix('https://code.jquery.com/jquery-3.3.1.min.js')}
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossOrigin="anonymous"
            /> 
            */}

           
        </Helmet>
    );
}

export default Head;