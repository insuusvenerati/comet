import { gql } from '@urql/core'
import {
  POST_FRAGMENT,
  SERVER_FRAGMENT,
  USER_FRAGMENT
} from '@/graphql/fragments'
import { useQuery } from 'urql'

export const GET_POSTS = gql`
  query GetPosts(
    $sort: GetPostsSort
    $page: Int
    $pageSize: Int
    $time: GetPostsTime
    $folderId: ID
    $serverId: ID
    $search: String
  ) {
    getPosts(
      sort: $sort
      time: $time
      folderId: $folderId
      serverId: $serverId
      search: $search
      page: $page
      pageSize: $pageSize
    ) {
      ...POST_FRAGMENT
      author {
        ...USER_FRAGMENT
      }
      server {
        ...SERVER_FRAGMENT
      }
    }
  }
  ${POST_FRAGMENT}
  ${USER_FRAGMENT}
  ${SERVER_FRAGMENT}
`

export const usePostsQuery = ({
  sort,
  time,
  folderId,
  serverId,
  page,
  pageSize
}) =>
  useQuery({
    query: GET_POSTS,
    variables: { sort, time, folderId, serverId, page, pageSize }
  })
