import Review from "../models/review.model.js";

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(400).send(err)
    }
}

export const getReviewByID = async (req, res) => {
    const id = req.params.id;
    try {
        const review = await Review.findById(id);
        res.json(review);
    } catch (err) {
        res.status(400).send(err)
    }
}

export const postReview = async (req, res) => {
    // {dining_hall, rating, title, body, tags}
    try {
        let review = new Review(req.body);
        let response = await review.save();;

        res.json("Review posted!");
    } catch (err) {
        res.status(400).send(err);
    }
}

export const deleteReview = async (req, res) => {
    let id = req.params.id;
    try {
       const response = await Review.findByIdAndDelete(id);
       res.json(response);
    } catch (err) {
        res.status(400).send(err)
    }
}