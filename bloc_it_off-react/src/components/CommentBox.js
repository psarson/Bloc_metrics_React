import React from 'react'
import CommentList from './CommentList' 
import CommentForm from './CommentForm'   

class CommentBox extends React.Component {
    render() {
        return (
        <div className="CommentBox">
            <h1>This is the To Do Box!</h1> 
                <CommentList />  
                <CommentForm /> 
        </div>        
        );
    }
} 

export default CommentBox;  