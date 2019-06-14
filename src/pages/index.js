import React from "react"  
import Layout from "../components/layout" 
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery-1'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="restaurant" subtitle="Sun aprt. Shiraz Iran">
          <BannerButton style={{ margin: '2rem auto'}}>Menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo/>
    <Gallery/>
  </Layout>
)

export default IndexPage
