import React from 'react'
import Post from '../Post';
import { Row, Col } from 'react-bootstrap';
import NewPost from './NewPost';
import { useStore } from '../../stores/StoreContext';
import { observer } from 'mobx-react';


const Dashboard = observer(() => {
    const { postStore } = useStore();
    const posts = postStore.getPosts;
    debugger

    return (
        <div className="dashboard-container">
            <Row >
                <Col md={{ span: 4, offset: 4 }}>
                    <NewPost />
                </Col>
            </Row>
            {
                posts && posts.map(post => {
                    return <Row key={post.id} >
                        <Col md={{ span: 4, offset: 4 }}>
                            <Post {...post} />
                        </Col>
                    </Row>
                })
            }
        </div>
    );
})

export default Dashboard;