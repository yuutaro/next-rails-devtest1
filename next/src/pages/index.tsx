import { Box, Grid, Container } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import ArticleCard from '@/components/ArticleCard'
import { styles } from '@/styles'
import { fetcher } from '@/utils'

type ArticleProps = {
  id: number
  title: string
  createdAt: string
  fromToday: string
  user: {
    name: string
  }
}

const Index: NextPage = () => {
  // RailsAPIからarticlesレコードの取得
  const url = 'http://localhost:3000/api/v1/articles'
  //レコード取得にuseSWRとfetcherを使用。返ってきたbodyをdataに格納
  const { data, error } = useSWR(url, fetcher)
  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  console.log(data)
  const articles = camelcaseKeys(data.articles)
  //-------------------------//

  return (
    <Box css={styles.pageMinHeight} sx={{ backgroundColor: '#e6f2ff' }}>
      <Container maxWidth="md" sx={{ pt: 6 }}>
        <Grid container spacing={4}>
          {articles.map((article: ArticleProps, i: number) => (
            <Grid key={i} item xs={12} md={6}>
              <Link href={'/articles/' + article.id}>
                <ArticleCard
                  title={article.title}
                  fromToday={article.fromToday}
                  userName={article.user.name}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Index