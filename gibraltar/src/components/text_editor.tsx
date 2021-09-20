import React, { useState, useMemo } from 'react'
import { BaseEditor, createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact, ReactEditor } from 'slate-react'
import { withHistory } from 'slate-history'


type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

const PlainTextExample = () => {
    const [value, setValue] = useState<Descendant[]>([{
        type: 'paragraph',
        children: [
            { text: 'This is editable plain text, just like a <textarea>!' },
        ],
    },])
    const editor = useMemo(() => withHistory(withReact(createEditor() as ReactEditor)), [])
    return (
        <Slate editor={editor} value={value} onChange={value => setValue(value)}>
            <Editable
                onKeyDown={event => {
                    console.log(event.key)
                }}

            />
        </Slate>
    )
}



export default PlainTextExample