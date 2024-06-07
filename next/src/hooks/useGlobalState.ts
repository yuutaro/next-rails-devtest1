import useSWR from 'swr'

export const useUserState = () => {
  //userの型の定義
  type userStateType = {
    id: number
    name: string
    email: string
    isSignedIn: boolean
    isFetched: boolean
  }
  //userの初期値を設定
  const fallbackData: userStateType = {
    id: 0,
    name: '',
    email: '',
    isSignedIn: false,
    isFetched: false,
  }

  const { data: state, mutate: setState } = useSWR('user', null, {
    fallbackData: fallbackData,
  })
  return [state, setState] as [userStateType, (value: userStateType) => void]
}