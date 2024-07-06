'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import NotePreview from '@/components/NotePreview'
import { saveNote, removeNote } from '@/actions'

export default function NoteEditor({
    noteId,
    initialTitle,
    initialBody
}) {
    const { pending } = useFormStatus()
    const [title, setTitle] = useState(initialTitle)
    const [body, setBody] = useState(initialBody)
    const isDraft = !noteId

    return (
        <div className="note-editor">
            <form className="note-editor-form" autoComplete="off">
                <label className="offscreen" htmlFor="note-title-input">
                    Enter a title for your note
                </label>
                <input
                    id="note-title-input"
                    type="text"
                    name='title'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <label className="offscreen" htmlFor="note-body-input">
                    Enter the body for your note
                </label>
                <textarea
                    name='body'
                    value={body}
                    id="note-body-input"
                    onChange={(e) => setBody(e.target.value)}
                />
            </form>
            <div className="note-editor-preview">
                <form className="note-editor-menu" role="menubar">
                    <button
                        formAction={() => saveNote(noteId, title, body)}
                        className="note-editor-done"
                        disabled={pending}
                        type="submit"
                        role="menuitem"
                    >
                        <img
                            src="/checkmark.svg"
                            width="14px"
                            height="10px"
                            alt=""
                            role="presentation"
                        />
                        Done
                    </button>
                    {!isDraft && (
                        <button
                            formAction={() => removeNote(noteId)}
                            className="note-editor-delete"
                            disabled={pending}
                            role="menuitem"
                        >
                            <img
                                src="/cross.svg"
                                width="10px"
                                height="10px"
                                alt=""
                                role="presentation"
                            />
                            Delete
                        </button>
                    )}
                </form>
                <div className="label label--preview" role="status">
                    Preview
                </div>
                <h1 className="note-title">{title}</h1>
                <NotePreview>{body}</NotePreview>
            </div>
        </div>
    )
}
