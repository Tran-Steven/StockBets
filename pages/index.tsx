import Head from 'next/head'
import NavBar from '../pages/components/Header/Header'
import Footer from './components/Footer/Footer'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ["Open Sans"] style: []})

export default function Home() {
  return (
    <>
      <NavBar/>
      <Footer/>
    </>
  )
}
