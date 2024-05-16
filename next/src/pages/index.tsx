import { Box, Grid, Container, Pagination } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import ArticleCard from '@/components/ArticleCard'
import Error from '@/components/Error'
import Loading from '@/components/Loading'
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
  //ページ遷移を設定したり、パスからidなどを取得できる
  const router = useRouter()
  const page = 'page' in router.query ? Number(router.query.page) : 1
  // RailsAPIからarticlesレコードの取得
  const url = process.env.NEXT_PUBLIC_API_BASE_URL + '/articles/?page=' + page
  //レコード取得にuseSWRとfetcherを使用。返ってきたbodyをdataに格納
  const { data, error } = useSWR(url, fetcher)
  //エラーの場合
  if (error) return <Error />
  //dataの値を取得するまでLoading
  if (!data) return <Loading />

  console.log(data)
  const articles = camelcaseKeys(data.articles)
  const meta = camelcaseKeys(data.meta)

  //クリックされたページ番号をpathに入れる
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push('/?page=' + value)
  }

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
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <Pagination
            count={meta.totalPages}
            page={meta.currentPage}
            onChange={handleChange}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Index