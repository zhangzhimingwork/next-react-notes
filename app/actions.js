'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { addNote, updateNote, delNote } from '@/lib/redis'

export async function saveNote(noteId, title, content) {
    const data = JSON.stringify({
        title,
        content,
        updateTime: new Date()
    })

    if (noteId) {
        updateNote(noteId, data)
        revalidatePath('/', 'layout')
        redirect(`/note/${noteId}`)
    } else {
        const id = await addNote(data)
        revalidatePath('/', 'layout')
        redirect(`/note/${id}`)
    }
}

export async function removeNote(noteId) {
    delNote(noteId)
    revalidatePath('/', 'layout')
    redirect('/note')
}