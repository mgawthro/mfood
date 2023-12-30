import Hall from "../models/hall.model.js";

export const getAllHalls = async (req, res) => {
    try {
        const halls = await Hall.find();
        res.json(halls);
    } catch (err) {
        res.status(400).send(err)
    }
}

export const getHallByName = async (req, res) => {
    const name = req.params.name;
    try {
        const hall = await Hall.findOne({"nameID": name});
        res.json(hall);
    } catch (err) {
        res.status(400).send(err)
    }
}

export const postHall = async (req, res) => {
    try {
        let hall = new Hall(req.body);
        let response = await hall.save();;

        res.json("Hall posted!");
    } catch (err) {
        res.status(400).send(err);
    }
}

export const updateHall = async (req, res) => {
    try {
        const hall = await Hall.findOneAndUpdate({"nameID": req.params.name}, {
            capacity: req.body.capacity,
            hours: req.body.hours,
            menu: req.body.menu
        });
        const response = await hall.save();
        res.status(200).send("hall updated!")
    } catch (err) {
        console.log(err)
        res.status(404).send("failed to update")
    }
}