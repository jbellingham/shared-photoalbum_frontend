import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import ProfilePicture, { IProfilePictureProps } from '../../shared/ProfilePicture';
import { useStore } from '../../../stores/StoreContext';

const profilePictureProps: IProfilePictureProps = {
    width: 50,
    height: 50
}

function NewPost() {
    const { postStore } = useStore();
    const [postText, setPostTest] = React.useState('');    
    
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostTest(event.currentTarget.value);
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) : void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            if (postText) {
                postStore.createPost({id: "", text: postText, linkUrl: "", comments: []})
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