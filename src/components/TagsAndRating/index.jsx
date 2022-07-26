import '../../styles/TagsAndRating.css'
import Rating from '../Rating'
function TagsAndRating({tags,rating}){
    return(
        <div className="tags_rating">
            <div className="tags">{tags.map((tag,index) => (
                <div key={"tag"+index} className="tag">{tag}</div>
                ))}
            </div>
            <Rating rating={rating}/>
        </div>
        )
}
export default TagsAndRating