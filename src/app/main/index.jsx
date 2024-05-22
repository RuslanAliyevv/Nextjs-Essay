import React from 'react'
import MainPageHeader from "../components/mainpageHeader/header"
import Info from "../components/section2/info"
import InfoVideo from "../components/section3/infovideo"
import Ekspert from "../components/section4/ekspert"
import Statistic from "../components/section5/statistic"
import Ambassador from "../components/section6/ambassador"
export default function Main() {
  return (
    <>
    <MainPageHeader />
    <Info />
    <InfoVideo />
    <Ekspert />
    <Statistic />
    <Ambassador />
    </>
  )
}
