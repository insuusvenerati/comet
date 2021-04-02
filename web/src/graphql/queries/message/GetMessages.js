import { gql } from '@urql/core'
import { MESSAGE_FRAGMENT, USER_FRAGMENT } from '@/graphql/fragments'
import { useQuery } from 'urql'

export const GET_MESSAGES = gql`
  query GetMessages(
    $channelId: ID
    $userId: ID
    $groupId: ID
    $pageSize: Int
    $page: Int
    $initialTime: DateTime
  ) {
    getMessages(
      channelId: $channelId
      userId: $userId
      groupId: $groupId
      pageSize: $pageSize
      page: $page
      initialTime: $initialTime
    ) {
      ...MESSAGE_FRAGMENT
      author {
        ...USER_FRAGMENT
      }
      channel {
        id
      }
      toUser {
        id
      }
      group {
        id
      }
    }
  }
  ${MESSAGE_FRAGMENT}
  ${USER_FRAGMENT}
`

export const useMessagesQuery = ({
  channelId,
  userId,
  groupId,
  pageSize,
  page,
  initialTime
}) =>
  useQuery({
    query: GET_MESSAGES,
    variables: { channelId, userId, groupId, pageSize, page, initialTime }
  })
