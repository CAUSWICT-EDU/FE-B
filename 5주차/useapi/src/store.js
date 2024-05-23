import create from "zustand"

const useStore = create ( (set) => ({
    reviews: [],
    addReview: (title, content) => {
        const id = Math.random().toString(36).substr(2, 9)
        set( (state) => ({
            reviews: [...state.reviews, {id, title, content}],
        }));
        return id;
    }
}))

export default useStore;