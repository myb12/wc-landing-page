
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MainSection from '../components/mainSection/mainSection'
import TopBar from '../components/topBar/topBar'

export default function Home() {

  return (
    <>
      <TopBar />
      <MainSection />
    </>
  )
}
