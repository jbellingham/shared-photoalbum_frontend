import React from 'react';
import ProfilePicture, { IProfilePictureProps } from '../../shared/ProfilePicture';
import { Form, Button, Row, Col } from 'react-bootstrap';

const profilePictureProps: IProfilePictureProps = {
    width: 50,
    height: 50
}

function NewPost() {
    const [postText, setPostTest] = React.useState('');    
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostTest(event.currentTarget.value);
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) : void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            if (postText) {
                console.log("new post: " + postText);
                // props.comments.push({
                //     text: comment,
                //     likes: 0
                // })
                setPostTest("");
            }
        }
    }

    return (
        <>
            <Form>
                <Row>
                    <Col md={{span: 1}}>
                        <ProfilePicture {...profilePictureProps} />
                    </Col>
                    <Col className="status-input align-middle">
                        <Form.Control placeholder="Whats new?" value={postText} onKeyDown={onKeyDown} onChange={handleChange} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Button variant="light">Photo/Video</Button>
                    <Button variant="light">Life Event</Button>
                </Row>
            </Form>
        </>
    );
}

export default NewPost;