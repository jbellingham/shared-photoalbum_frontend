import React from 'react';
import { ICommentDto } from '../../Client';

// export interface ICommentProps {
//     text: string,
//     likes: number
// }

function Comment(props: ICommentDto) {
    return (
        <div className="d-flex flex-row">
            <p className="comment">Likes:{props.likes}<br/>{props.text}</p>
        </div>
    );
}

export default Comment;