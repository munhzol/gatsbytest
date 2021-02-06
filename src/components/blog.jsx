import React from 'react';

import LayoutSub from '../components/layout-sub';
import { useStaticQuery,graphql,Link } from 'gatsby';
import { Card,Button } from 'react-bootstrap';
import Img from "gatsby-image";


const Blog = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulAsset {
            edges {
                node {
                title
                fluid  {
                        src
                    }
                }
            }
        }    
        allContentfulBlogPost (
                        sort: {
                        fields: publishedDate,
                        order: DESC
                        }
                    ) {
                        edges {
                        node {
                            title
                            slug
                            publishedDate(fromNow:true)
                            description
                        }
                }
            }
        }
    `);


    return <LayoutSub subTitle="Read" title="Recent blog" subId="blog">
            
            <p>
                Using <b>contentful.com</b> as content backend.
            </p>

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                <Card>
                <Img fluid={data.allContentfulAsset.edges[4].node.fluid} style={{height: 150}} className="img-fluid" alt={data.allContentfulAsset.edges[0].title}  />  
                <Card.Body>
                    <Card.Title>{data.allContentfulBlogPost.edges[0].node.title}</Card.Title>
                    <Card.Text>
                    {data.allContentfulBlogPost.edges[0].node.description}
                    </Card.Text>
                    <Link variant="primary" to={`/blog/${data.allContentfulBlogPost.edges[0].node.slug}`}>Read</Link>
                </Card.Body>
                </Card>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                <Card>
                <Img fluid={data.allContentfulAsset.edges[0].node.fluid} style={{height: 150}} className="img-fluid" alt={data.allContentfulAsset.edges[0].title}  />  
                <Card.Body>
                <Card.Title>{data.allContentfulBlogPost.edges[1].node.title}</Card.Title>
                    <Card.Text>
                    {data.allContentfulBlogPost.edges[1].node.description}
                    </Card.Text>
                    <Link variant="primary" to={`/blog/${data.allContentfulBlogPost.edges[1].node.slug}`}>Read</Link>

                </Card.Body>
                </Card>
                </div>                
                <div className="col-sm-12 col-md-12 col-lg-4">
                <Card>
                <Img fluid={data.allContentfulAsset.edges[10].node.fluid} style={{height: 150}} className="img-fluid" alt={data.allContentfulAsset.edges[0].title}  />  
                <Card.Body>
                    <Card.Title>{data.allContentfulBlogPost.edges[2].node.title}</Card.Title>
                    <Card.Text>
                    {data.allContentfulBlogPost.edges[2].node.description}
                    </Card.Text>
                    <Link variant="primary" to={`/blog/${data.allContentfulBlogPost.edges[2].node.slug}`}>Read</Link>
                </Card.Body>
                </Card>
                </div>
            </div>

        </LayoutSub>;
};

export default Blog;