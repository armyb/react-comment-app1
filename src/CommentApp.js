import React,{Component,PropTypes} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    static propTypes = {
        data:PropTypes.any,
        saveData:PropTypes.func.isRequired
    }
    
    constructor(props){
        super(props);
        this.state = {comments:props.data}
    }
    
    handleSubmitComment(comment){
        const comments = this.state.comments;
        
        comments.push(comment);
        this.setState({
            comments
        })
        this.props.saveData(comments)
    }
    handleDeleteComment (index){
        const comments = this.state.comments;
        comments.splice(index,1);
        this.setState({comments});
        this.props.saveData(comments);
    }
    render(){
        return(
            
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp;