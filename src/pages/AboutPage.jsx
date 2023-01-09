import React, { Component, Fragment } from 'react'
import AboutMe from '../components/AboutMe.jsx/AboutMe'
import AboutPageDesc from '../components/aboutPageDescription/AboutPageDesc'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TopPage from '../components/TopPage/TopPage'

export default class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation/>
        <TopPage title="About Us"/>
        <AboutMe/>
        <AboutPageDesc/>
        <Footer/>
      </Fragment>
    )
  }
}