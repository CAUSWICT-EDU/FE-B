import React from 'react';
import useStore from './store';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function SetReview() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const addReview = useStore( (state) => state.addReview);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // 무엇인지 찾아보기
        const id = addReview(title, content);
        navigate (`/review/${id}`);
    };

    return (
        <div>
            <h1>Write New Review</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input 
                    type='text'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label>Content</label>
                    <textarea 
                    value={content}
                    onChange = {(e) => setContent(e.target.value)}
                    required
                    ></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SetReview;