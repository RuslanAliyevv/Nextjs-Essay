import React from 'react'
import MainPageHeader from "../components/mainpageHeader/header"
import Info from "../components/section2/info"
import InfoVideo from "../components/section3/infovideo"
import Ekspert from "../components/section4/ekspert"
import Statistic from "../components/section5/statistic"
import Ambassador from "../components/section6/ambassador"
import Rules from "../components/section7/rules"
import Ranking from "../components/section8/ranking"
import UserComment from "../components/section9/usercomment"
import Partner from "../components/section10/partner"
import Footer from "../components/footer/footer"
export default function Main() {
  return (
    <>
    <MainPageHeader />
    <Info />
    <InfoVideo />
    <Ekspert />
    <Statistic />
    <Ambassador />
    <Rules />
    <Ranking />
    <UserComment />
    <Partner />
    <Footer />
    </>
  )
}
