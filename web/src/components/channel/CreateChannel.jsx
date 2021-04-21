import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useHasServerPermissions } from '@/hooks/useHasServerPermissions'
import { ServerPermission } from '@/graphql/hooks'
import SidebarLabel from '@/components/ui/sidebar/SidebarLabel'
import Dialog from '@/components/ui/dialog/Dialog'
import DialogTitle from '@/components/ui/dialog/DialogTitle'
import { IconChannel } from '@/components/ui/icons/Icons'
import Button from '@/components/ui/Button'
import Switch from '@/components/ui/Switch'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { CurrentUserDocument, useCreateChannelMutation } from '@/graphql/hooks'

export default function CreateChannel({ serverId }) {
  const { t } = useTranslation()

  const [canManageChannels] = useHasServerPermissions({
    serverId,
    permissions: [ServerPermission.ManageChannels]
  })

  const [isOpen, setIsOpen] = useState(false)
  const [isPrivate, setIsPrivate] = useState(false)

  const { handleSubmit, register, reset } = useForm()

  useEffect(() => {
    if (!isOpen) return
    reset()
    setIsPrivate(false)
  }, [isOpen, setIsPrivate, reset])

  const { push } = useHistory()

  const [createChannel, { loading }] = useCreateChannelMutation({
    update(cache, { data: { createChannel } }) {
      const data = cache.readQuery({ query: CurrentUserDocument })
      data.user.servers
        .find(server => server.id === serverId)
        ?.channels.unshift(createChannel)
      cache.writeQuery({ query: CurrentUserDocument, data })
    }
  })

  const onSubmit = ({ name }) => {
    createChannel({
      variables: { input: { name, serverId, isPrivate } }
    }).then(({ data: { createChannel } }) => {
      setIsOpen(false)
      push(`/server/${serverId}/channel/${createChannel.id}`)
    })
  }

  if (!canManageChannels)
    return <SidebarLabel>{t('channel.title')}</SidebarLabel>

  return (
    <>
      <SidebarLabel
        onClick={() => setIsOpen(true)}
        plusLabel={t('channel.create')}
      >
        Channels
      </SidebarLabel>

      <Dialog
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        closeOnOverlayClick
      >
        <div
          className="rounded-lg dark:bg-gray-750 p-4 max-w-md w-full"
          onClick={e => e.stopPropagation()}
        >
          <DialogTitle className="title mb-4">
            {t('channel.create')}
          </DialogTitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 w-full">
              <label className="label" htmlFor="name">
                Channel Name
              </label>

              <div className="relative">
                <input
                  {...register('name', {
                    required: true,
                    maxLength: 100,
                    pattern: /[a-z0-9_-]+/g
                  })}
                  maxLength={100}
                  className="textbox pl-9 pr-3 lowercase"
                  spellCheck={false}
                  autoCapitalize="none"
                  id="name"
                  onChange={e => {
                    if (e.target.value === ' ' || e.target.value === '-')
                      e.target.value = ''
                    e.target.value = e.target.value
                      .toLowerCase()
                      .replace(' ', '-')
                    if (e.target.value.endsWith('--'))
                      e.target.value = e.target.value.substring(
                        0,
                        e.target.value.length - 1
                      )
                    e.target.value = e.target.value.replace(/[^a-z0-9_-]+/g, '')
                  }}
                />

                <div className="absolute left-0 top-0 bottom-0 flex items-center w-10 justify-center pointer-events-none">
                  <IconChannel className="w-5 h-5 text-tertiary" />
                </div>
              </div>
            </div>

            <Button loading={loading}>{t('continue')}</Button>

            <div className="pt-4">
              <Switch
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              >
                {t('channel.togglePrivate')}
              </Switch>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  )
}
