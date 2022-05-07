/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={'CJ Kenney'}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p style={{ margin: 0 }}>
          Personal blog by CJ Kenney. I write about software and my hobbies.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: rhythm(2.5),
        }}
      >
        <a
          href='https://github.com/cjkenney'
          target='_blank'
          rel='noopener noreferrer'
          style={{ marginLeft: '10px', marginRight: '10px' }}
        >
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/cj-kenney/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ marginLeft: '10px', marginRight: '10px' }}
        >
          LinkedIn
        </a>
      </div>
    </>
  );
};

export default Bio;
