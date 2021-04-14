import Comment from "./commentItem"
import classes from './commentList.module.css'

const CommentList = (props) => {
    const {comments} = props
    return (
        <div className={classes.comments} >
            <h3> Welcome to the comment section..... </h3>
            {comments.map((comment, index)=> <Comment
                 number={index+1}
                 comment={comment.comment}
                 key={comment.comment} email={comment.email} /> )}
            
        </div>

    )
}

export default CommentList
