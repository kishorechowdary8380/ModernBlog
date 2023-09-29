import {Link} from "react-router-dom";
const BlogList = ({blogs, title}) => { /* in the place the arguments(blogs, title, handleDelete) we can directly write props.props is a object that stores all data comming from parent component(home.js) */
                              /* here we took data in object and stored into this component variable. instead of creating new variable here, we can aslo write these variables directly in the place of props like const BlogList=({blogs, title}) this also will works */
    // const blogs=props.blogs; 
    // const title=props.title;
    // const handleDelete=props.handleDelete;
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>  {/* not single or bouble colons "" or '' , use backcolons `` 
              
              */}
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
              </Link>
            </div>   
          )) } 
        </div> 
     );
}
 
export default BlogList; 