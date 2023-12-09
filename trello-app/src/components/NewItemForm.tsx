import { useState } from "react"
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles"

interface NewItemFormProps {
    onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState('')

    const handleEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(text)
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleEnter}
            />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}