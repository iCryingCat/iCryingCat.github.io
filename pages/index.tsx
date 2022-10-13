import Head from 'next/head'
import Nav, { Group } from '../components/home/nav'
import Container from '../components/main/container'
import Layout from '../components/main/layout'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'

type Props = {
  allPosts: Post[]
}
const menus: string[] = ["八股文", "重开", "学艺", "游戏开发"]

export default function Index({ allPosts }: Props) {
  var groupMap = new Map<string, Group>();
  menus.forEach(menu => {
    groupMap[menu] = {
      title: menu,
      indexs: [],
    }
  })

  allPosts.forEach(post => {
    groupMap[post.menu].indexs.push(post);
  })

  const allGroups: Group[] = []
  menus.forEach(menu => {
    allGroups.push(groupMap[menu])
  })
  
  return (
    <>
      <Layout>
        <Head>
          <title>Crying Cat</title>
        </Head>
        <Nav allGroups={allGroups} />
        <Container>

        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'menu',
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}