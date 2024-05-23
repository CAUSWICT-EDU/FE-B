import { useNavigate, useParams } from "react-router-dom";
import useStore from "./store";

function ReviewDetail() {
    const { id } = useParams();
    const review = useStore( (state) => state.reviews.find( (p) => p.id === id) );
    const navigate = useNavigate();

    if(!review) {
        return <div>No Review Found</div>
    }

    return (
        <div>
            <h1>{review.title}</h1>
            <p>{review.content}</p>
            <button onClick={() => navigate("./ReviewHome")}>
                Reivew Home
            </button>
        </div>
    )
}

export default ReviewDetail;