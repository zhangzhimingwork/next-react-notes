import { getNote } from '@/lib/redis'
import Note from '@/components/Note'

export default async function Page({ params }) {
    const noteId = params.id

    // 为了让 Suspense 的效果更明显
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await sleep(1000);
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
        <Note note={note} />
    )

}