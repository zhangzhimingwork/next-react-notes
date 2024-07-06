import { getNote } from '@/lib/redis'
import Note from '@/components/Note'

export default async function Page({ params }) {
    const noteId = params.id
    const note = await getNote(noteId)

    if (!note) {
        return (
            <div className='note--empty-state'>
                <span className='note-text--empty-state'>
                    Click a note on the left to view something! 🥺
                </span>
            </div>
        )
    }

    return (
        <Note noteId={noteId} note={note} />
    )

}