import React from "react" 
// import { FaBeer } from 'react-icons/fa';

import Layout from "../components/layout" 
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import aboutImg from '../images/bcg/aboutBcg.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <PageHeader img={aboutImg}>
      <Banner title="about" subtitle="this is about page">
        </Banner>
    </PageHeader>
  </Layout>
)

export default AboutPage
