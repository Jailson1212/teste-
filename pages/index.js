import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container } from '@mui/material'
import Todolist from '../components/Todolist'
import Todoform from '../components/Todoform'

export default function Home() {
  return (
    <Container maxWidth ='sm'>
      <Todoform/>
      <Todolist/>
    </Container>
  )
}
