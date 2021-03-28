import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import { useDrag } from 'react-dnd'
import { DragItemTypes } from '@/lib/DragItemTypes'
import ReactPlayer from 'react-player'
import UserAvatar from '@/components/avatars/UserAvatar'
import ServerAvatar from '@/components/avatars/ServerAvatar'
import ServerPopup from '@/components/popups/ServerPopup'
import UserPopup from '@/components/popups/UserPopup'
import { useMutation } from 'urql'
import { CREATE_POST_VOTE, REMOVE_POST_VOTE } from '@/graphql/mutations'
import { fullDate, shortDate } from '@/lib/timeUtils'
import {
  IconChat,
  IconChevronDown,
  IconChevrownUp,
  IconDotsHorizontal,
  IconLinkChain,
  IconLinkWeb,
  IconPin,
  IconUserToServerArrow,
  IconText,
  IconVote
} from '@/lib/Icons'
// import { useContextMenuTrigger } from 'react-context-menu-wrapper'
import { mergeRefs } from '@/lib/mergeRefs'
import { useTranslation } from 'react-i18next'
import { ContextMenuType } from '@/components/context-menus/ContextMenuType'

export default memo(function Post({
  post,
  showServerName = true,
  forceExpand = false,
  className = '',
  measure
}) {
  const [_createVoteRes, createVote] = useMutation(CREATE_POST_VOTE)
  const [_removeVoteRes, removeVote] = useMutation(REMOVE_POST_VOTE)

  const variables = { postId: post.id }
  const toggleVote = () => {
    if (post.isVoted) createVote(variables)
    else removeVote(variables)
  }

  const hasEmbed =
    post.text || post.linkUrl || (post.imageUrls && post.imageUrls.length > 0)

  const [{ opacity }, dragRef] = useDrag({
    type: DragItemTypes.Post,
    item: post,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  })

  const [expanded, setExpanded] = useState(false)

  // TODO
  const contextMenuRef = null /*useContextMenuTrigger({
    menuId: ContextMenuType.Post,
    data: { post }
  })*/

  const { t } = useTranslation()

  return (
    <article
      ref={mergeRefs(contextMenuRef, dragRef)}
      style={{ opacity }}
      className={`${className} cursor-pointer relative transition dark:hover:bg-gray-775 pt-3 px-4 pb-1.5 dark:border-gray-700 border-b`}
    >
      <div className="flex w-full">
        <div className="pr-4">
          <div className={`relative w-24 h-16 flex-shrink-0`}>
            <div
              className="h-full w-full rounded dark:bg-gray-650 bg-gray-200 inline-flex items-center justify-center text-tertiary bg-cover bg-center bg-no-repeat"
              style={
                post.thumbnailUrl || post.logoUrl
                  ? {
                      backgroundImage: `url(${
                        post.thumbnailUrl || post.logoUrl
                      })`
                    }
                  : {}
              }
            >
              {!(post.thumbnailUrl || post.logoUrl) &&
                (post.linkUrl ? (
                  <IconLinkWeb className="w-8 h-8" />
                ) : (
                  <IconText className="w-8 h-8" />
                ))}
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-wrap items-center text-13 font-medium text-tertiary pb-1">
            {post.isPinned && (
              <Tippy content={t('post.pinnedTo', { server: post.server })}>
                <div className="mr-1.5">
                  <IconPin className="h-5 w-5 text-accent" />
                </div>
              </Tippy>
            )}
            <UserPopup user={post.author}>
              <UserAvatar
                user={post.author}
                className="mr-1.5 cursor-pointer"
                size={5}
              />
            </UserPopup>
            <UserPopup user={post.author}>
              <span className="hover:underline cursor-pointer text-accent">
                {post.author.name}
              </span>
            </UserPopup>
            {showServerName && (
              <>
                <IconUserToServerArrow className="w-4 h-4 text-tertiary mx-1" />
                <ServerPopup server={post.server}>
                  <ServerAvatar
                    server={post.server}
                    size={5}
                    className="mr-1.5"
                  />
                </ServerPopup>
                <ServerPopup server={post.server}>
                  <span className="hover:underline cursor-pointer">
                    {post.server.name}
                  </span>
                </ServerPopup>
              </>
            )}
            &nbsp;&middot;&nbsp;
            <Tippy content={fullDate(post.createdAt)}>
              <span>{shortDate(post.createdAt)}</span>
            </Tippy>
            &nbsp;&middot;&nbsp;
            <span className="lowercase">
              ({post.linkUrl && post.domain}
              {!post.linkUrl &&
                post.imageUrls &&
                post.imageUrls.length > 0 &&
                t('post.type.image')}
              {!post.linkUrl &&
                (!post.imageUrls || post.imageUrls.length === 0) &&
                t('post.type.link')}
              )
            </span>
          </div>
          <Link to={post.relativeUrl} className="text-secondary text-base">
            {post.title}
          </Link>

          {!forceExpand && (
            <div className="pt-0.5 -ml-2">
              <div className="space-x-1 flex items-center">
                <div
                  onClick={e => {
                    e.stopPropagation()
                    toggleVote()
                  }}
                  className={`action-chip ${
                    post.isVoted ? 'text-red-400' : 'text-tertiary'
                  }`}
                >
                  <IconVote className="w-4 h-4" />
                  <div className="ml-1.5">{post.voteCount}</div>
                </div>

                <div className={`action-chip text-tertiary`}>
                  <IconChat className="w-5 h-5 mr-1.5" />
                  {post.commentCount}
                </div>

                {hasEmbed && (
                  <Tippy
                    placement="right"
                    content={expanded ? t('post.collapse') : t('post.expand')}
                  >
                    <div
                      className={`mr-1.5 p-1 inline-block items-center cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition text-tertiary`}
                      onClick={e => {
                        e.stopPropagation()
                        e.preventDefault()
                        setExpanded(!expanded)
                        measure()
                      }}
                    >
                      {expanded ? (
                        <IconChevrownUp className="w-5 h-5" />
                      ) : (
                        <IconChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </Tippy>
                )}
                <div className="inline-flex items-center cursor-pointer text-mid p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  <IconDotsHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {hasEmbed && (forceExpand || expanded) && (
        <div className="py-2 space-y-2 flex flex-col">
          {post.linkUrl && (
            <>
              {ReactPlayer.canPlay(post.linkUrl) ? (
                <div className="aspect-h-9 aspect-w-16 ">
                  <ReactPlayer
                    className="react-player"
                    url={post.linkUrl}
                    width="100%"
                    height="100%"
                  />
                </div>
              ) : (
                <>
                  {post.meta && post.meta.title ? (
                    <a
                      href={post.linkUrl}
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                      className="mt-2 block rounded-md border dark:border-gray-700 transition"
                      onClick={e => e.stopPropagation()}
                    >
                      <div className="flex items-start">
                        <div className="w-24 h-24 relative flex-shrink-0 rounded-l-md">
                          {post.thumbnailUrl || post.logoUrl ? (
                            <img
                              alt=""
                              src={post.thumbnailUrl || post.logoUrl}
                              className="rounded-l-md object-cover h-full w-full"
                            />
                          ) : (
                            <div className="flex w-24 h-24 rounded-l-md border-r border-gray-200 dark:border-gray-800">
                              <IconLinkChain className="w-8 h-8 m-auto text-tertiary" />
                            </div>
                          )}
                        </div>

                        <div
                          className={`flex flex-col px-3 py-2 cursor-pointer h-24`}
                        >
                          <div className="font-medium line-clamp-1 text-secondary text-base">
                            {post.meta && post.meta.title
                              ? post.meta.title
                              : post.linkUrl}
                          </div>

                          <div className="text-xs font-medium text-tertiary line-clamp-1 mt-1">
                            {post.meta && post.meta.description
                              ? post.meta.description
                              : ''}
                          </div>

                          <div className="mt-auto flex items-center pt-3">
                            {post.logoUrl && (
                              <div className="inline-block w-4 h-4 mr-3">
                                <img
                                  alt={post.domain}
                                  src={post.logoUrl}
                                  className="w-4 h-4 object-cover"
                                />
                              </div>
                            )}
                            <div className="inline-block text-tertiary text-xs line-clamp-1">
                              {post.domain}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <a
                      to={post.linkUrl}
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      className="text-sm text-accent cursor-pointer hover:underline border dark:border-gray-700 p-2.5 rounded-md"
                    >
                      {post.linkUrl}
                    </a>
                  )}
                </>
              )}
            </>
          )}

          {post.imageUrls.length > 0 && (
            <div className="relative max-w-screen-sm">
              <img
                alt=""
                src={post.imageUrls[0]}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {post.text && (
            <div
              dangerouslySetInnerHTML={{ __html: post.text }}
              className="prose prose-sm dark:prose-dark max-w-none border dark:border-gray-700 p-2.5 rounded-md"
            />
          )}
        </div>
      )}
    </article>
  )
})
