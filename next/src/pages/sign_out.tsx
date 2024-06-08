import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUserState } from '@/hooks/useGlobalState'


const SignOut: NextPage = () => {
  const router = useRouter()
  const [, setUser] = useUserState()

  //signoutページにアクセスするとUseEffectの第一引数の処理が実行
  useEffect(() => {
    localStorage.clear()
    setUser({
      id: 0,
      name: '',
      email: '',
      isSignedIn: false,
      isFetched: true,
    })
    router.push('/')
  }, [router, setUser])

  return <></>
}

export default SignOut