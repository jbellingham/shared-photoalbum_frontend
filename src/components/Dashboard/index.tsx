import React from 'react'
import Post, { IPostProps } from '../Post';
import { Row } from 'react-bootstrap';

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
            {
                posts.map(post => {
                    return <Row className="justify-content-md-center" key={post.id} >
                            <Post {...post} />
                        </Row>
                })
            }
        </div>
    );
}

export default Dashboard;