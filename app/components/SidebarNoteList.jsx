import SiderbarNoteItem from './SidebarNoteItem'

export default async function SidebarNoteList({ notes }) {
    const arr = Object.entries(notes);

    if (arr.length == 0) {
        return <div className="notes-empty">
            {'No notes created yet!'}
        </div>
    }

    return <ul className="notes-list">
        {arr.sort(([a], [b]) => a - b)
            .map(([noteId, note]) => {
                return (
                    <li key={noteId}>
                        <SiderbarNoteItem noteId={noteId} note={JSON.parse(note)} />
                    </li>
                )
            })}
    </ul>
}
