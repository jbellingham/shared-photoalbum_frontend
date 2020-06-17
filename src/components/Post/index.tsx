import React, { ReactElement } from 'react'
import { Card, Form } from 'react-bootstrap'
import image from '../../static/images/image-1.jpg'
import Comment from './Comment'
import { IPostDto, CommentDto } from '../../Client'
import { useStore } from '../../stores/StoreContext'

function Post(props: IPostDto): ReactElement {
    const [comment, setComment] = React.useState('')
    const { commentStore } = useStore()

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setComment(event.currentTarget.value)
    }

    const onKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>): Promise<void> => {
        if (event.key === 'Enter') {
            event.preventDefault()
            event.stopPropagation()
            if (comment) {
                await commentStore.createComment(new CommentDto({ text: comment }))
                setComment('')
            }
        }
    }

    return (
        <Card className="post-container">
            <Card.Header>{props.text}</Card.Header>
            {image && props.linkUrl && <Card.Img src={image}></Card.Img>}
            <Card.Footer className="text-center">
                {props.comments && (
                    <div className="comments-container">
                        {props.comments.map((comment) => (
                            <Comment {...comment} key={comment.id} />
                        ))}
                    </div>
                )}
                <Form>
                    <Form.Control
                        placeholder="Write a comment..."
                        value={comment}
                        onKeyDown={onKeyDown}
                        onChange={handleChange}
                    />
                </Form>
            </Card.Footer>
        </Card>
    )
}

export default Post
