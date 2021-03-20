import React from 'react'
import Header from '@/components/headers/base/Header'
import { IconAt, IconPin } from '@/lib/Icons'
import Tippy from '@tippyjs/react'

export default function DmHeader({ user }) {
  return (
    <Header>
      <div className="flex items-center text-secondary font-medium text-base">
        <IconAt className="w-5 h-5 mr-3 text-tertiary" />
        {!!user && (
          <>
            {user?.name ?? ''}
            <div
              className={`ml-3 w-2.5 h-2.5 rounded-full ${
                user?.isOnline ? 'bg-green-500' : 'bg-gray-600'
              }`}
            />
          </>
        )}
      </div>
      <div className="ml-auto pr-6">
        <Tippy content="Pinned Messages">
          <div className="highlightable">
            <IconPin className="w-5 h-5" />
          </div>
        </Tippy>
      </div>
    </Header>
  )
}
