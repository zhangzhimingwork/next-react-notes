import React, { Suspense } from 'react'
import Link from 'next/link'
import { getAllNotes } from '@/lib/redis.js'
import SidebarNoteList from './SidebarNoteList'
import EditButton from './EditButton'
import SidebarNoteListSkeleton from './SidebarNoteListSkeleton'

export default async function Sidebar() {
  const notes = await getAllNotes()
  return (
    <>
      <section className='col sidebar'>
        <Link href={'/'} className='link--unstyled'>
          <section className='sidebar-header'>
            <img
              className='logo'
              src='/logo.svg'
              width='22px'
              height='20px'
              alt=''
              role='presentation'
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className='sidebar-menu' role='menubar'>
          {<EditButton notes={notes}>NEW</EditButton>}
          {/* SideSearchField */}
        </section>
        <nav>
          <Suspense fallback={<SidebarNoteListSkeleton />}>
            <SidebarNoteList notes={notes} />
          </Suspense>
        </nav>
      </section>
    </>
  )
}
