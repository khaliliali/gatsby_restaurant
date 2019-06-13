import React from "react" 
import { FaBeer } from 'react-icons/fa';
import Layout from "../components/layout" 
import SEO from "../components/seo"
import {PageHeader, Banner} from '../utils'
import menuImg from '../images/bcg/menuBcg.jpeg'


const MenuPage = () => (
  <Layout>
    <SEO title="menu" />
    <PageHeader img={menuImg}>
      <Banner title="menu " subtitle="menu page">
        </Banner>
    </PageHeader>
  </Layout>
)

export default MenuPage
