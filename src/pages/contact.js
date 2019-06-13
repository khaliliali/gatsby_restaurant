import React from "react" 
import { FaBeer } from 'react-icons/fa';
import Layout from "../components/layout" 
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import contactImg from '../images/bcg/contactBcg.jpeg'

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <PageHeader img={contactImg}>
      <Banner title="contact" subtitle="contact page">
        </Banner>
    </PageHeader>
  </Layout>
)

export default ContactPage
