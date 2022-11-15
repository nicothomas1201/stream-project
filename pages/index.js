import Head from 'next/head'
import Icon from '../components/icons'


export default function Home() {
  return (
    <div>
      <Head>
        <title>The Best Streaming</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Icon name="heart" />
      <Icon name="left" />
      <Icon name="link" />
      <Icon name="pause" />
      <Icon name="play" />
      <Icon name="search" />
      <Icon name="share-left" />
      <Icon name="share-rigth" />
      <Icon name="star" />
      <Icon name="user" />

    </div>
  )
}
