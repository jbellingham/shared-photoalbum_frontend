import React from 'react'
import { Card, Form } from 'react-bootstrap';
import image from "../../static/images/image-1.jpg"
import Comment, { ICommentProps } from './Comment';

export interface IPostProps {
    id: string,
    linkUrl: string,
    text: string,
    comments: ICommentProps[]
}

function Post(props: IPostProps) {
    const [comment, setComment] = React.useState('');
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.currentTarget.value);
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) : void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            if (comment) {
                props.comments.push({
                    text: comment,
                    likes: 0
                })
                setComment("");
            }
        }
    }

    return (
        <Card className="post-container">
            <Card.Header>{props.text}</Card.Header>
            {image && props.linkUrl &&
                <Card.Img src={image}></Card.Img>
            }
            <Card.Footer className="text-center">
                {props.comments &&
                    <div className="comments-container">
                        {props.comments.map(comment => <Comment {...comment} />)}
                    </div>
                    }
                <Form >
                    <Form.Control placeholder="Write a comment..." value={comment} onKeyDown={onKeyDown} onChange={handleChange} />
                </Form>
            </Card.Footer>
        </Card>
    );
}

export default Post;