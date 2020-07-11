import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
<<<<<<< HEAD
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
        </div>
        {/* <Link to='/contact' className="button -primary">Get in touch &rarr;</Link> */}
=======
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
>>>>>>> f82baebf15d92c126c9171bd6e6cd52e2505d2fb
      </div>
    )}
  />
)