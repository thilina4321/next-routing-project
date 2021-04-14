const Comment = (props) => {
    const {comment, email, number} = props
    return (
        <div>
            <span> {number} </span>
            <span> .  </span>
            <span> {comment} </span>
            <span> --- </span>
            <span> {email} </span>
        </div>
    )
}

export default Comment
