import React from 'react'
import Post, { IPostProps } from '../Post';
import { Row, Col } from 'react-bootstrap';
import NewPost from './NewPost';

let posts: IPostProps[] = [{
        id: 1,
        text: "This is a post",
        title: "Post title",
        linkUrl: "www.jessebellingham.com",
        comments: []
    }, {
        id: 2,
        text: "This is another post",
        title: "Post title the second",
        linkUrl: "www.jessebellingham.com",
        comments: []
    }
]

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Row >
                <Col md={{ span: 4, offset: 4 }}>
                    <NewPost />
                </Col>
            </Row>
            {
                posts.map(post => {
                    return <Row key={post.id} >
                        <Col md={{ span: 4, offset: 4 }}>
                            <Post {...post} />
                        </Col>
                    </Row>
                })
            }
        </div>
    );
}

export default Dashboard;