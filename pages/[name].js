import { useRouter } from "next/router"
import Layout from '../components/layout'
import Header from '../components/header'
import Main from '../components/main'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import getDataByUsername from "../functions/get-data-by-username"
import { useEffect, useState } from "react"

export default function Name() {
  let [ data, setData ] = useState(null)
  const router = useRouter()
  let { name } = router.query

  useEffect(() => {
    getDataByUsername(name).then(res => setData(res))
  })

  


  return (
    <Layout>
      <Header />
      <Main></Main>
      <Sidebar />
      <Footer />
    </Layout>
    
  )
}



