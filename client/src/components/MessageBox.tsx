import React from 'react'

interface Props {
    variant: string
    message: string
}

const MessageBox: React.FC<Props> = (props: any) => {
    return (
        <div className={`alert alert-${ props.variant || 'info'}`}>
            {props.message}
        </div>
    )
}

export default MessageBox