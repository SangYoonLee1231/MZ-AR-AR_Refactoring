import React, { useState } from 'react';
import axios from "axios";

function LikeButton({ postId, postLikes }) {
    const [count, setCount] = useState(postLikes);
    const [liked, setLiked] = useState(false);
    const SERVER = process.env.REACT_APP_SERVER;

    const handleClick = async () => {
        if (!liked) {
            try {
                await axios.put(`${SERVER}/posts/${postId}/like`); // postId는 현재 게시글의 ID입니다.
                setCount(count + 1);
                setLiked(true);
            } catch (error) {
                console.error("An error occurred while liking the post:", error);
            }
        } else {
            // 여기에 이미 좋아요를 누른 상태에서 무엇을 할지 로직을 추가할 수 있습니다.
        }
    };

    return (
        <div className="center">
            <p>좋아요 개수: {count}</p>
            <button className="like-button-style" onClick={handleClick} disabled={liked}>
                {liked ? '이미 좋아요를 누르셨습니다!' : 'LIKE'}
            </button>
        </div>
    );
}

export default LikeButton;
