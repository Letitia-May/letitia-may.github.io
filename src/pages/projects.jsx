import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import ProjectTile from '../components/projectTile/projectTile'

const Projects = () => (
  <>
    <Layout>
      <SEO title="Projects" />
      <ProjectTile
        url="https://capricornrecords.com.au/"
        title="Capricorn Records"
        about="An independent e-commerce store selling new and used vinyls, built using Shopify's CMS."
        tech="Technologies: HTML, SCSS, Liquid, Shopify, JavaScript, jQuery."
      />
    </Layout>
  </>
)

export default Projects
