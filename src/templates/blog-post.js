import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby'
import PrevNext from '../components/prevnext';

function BlogPost(props) {

    const { title, image } = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;

    return (
    <Layout>
        <div>
            <h1>{title}</h1>
            {image && <Img fluid={image.childImageSharp.fluid} />}

            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />

            <PrevNext prev={prev && prev.node} next={next && next.node} />
        </div>
    </Layout>
    )
}

export default BlogPost

export const query = graphql`

 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title

       }
   }
}
`