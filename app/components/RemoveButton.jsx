import { useFormStatus } from 'react-dom'

export default function RemoveButton({ isDraft, formAction }) {
    const { pending } = useFormStatus()

    return (
        <>
            {!isDraft && (
                <button
                    formAction={formAction}
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
                    {pending ? 'Deleting' : 'Delete'}
                </button>
            )}</>
    )
}