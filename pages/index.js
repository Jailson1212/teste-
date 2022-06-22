import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container } from '@mui/icons-material'
import Todolist from '../components/Todolist'

export default function Home() {
  return (
    <Container>
      <Todolist/>
    </Container>
  )
}
