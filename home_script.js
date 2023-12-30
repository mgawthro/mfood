const getHallData = async () => {
    const response = await fetch("http://localhost:4000/hall");
    const data = await response.json();
    return data;
}

const capacityToColor = (capacity) => {
    const c = (100 - (0.5*capacity))/100;
    const m = c-(0.59*c);
    const R = ((0.59*c)+m)*255;
    const G = ((0.59*c*0.08334)+m)*255;
    const B = m*255;
    return [R, G, B]
}


const CreateHall = (name, capacity, meal, time) => {
    const hallItem = document.createElement("div");
    hallItem.setAttribute("class", "hall-item");
    const RGB = capacityToColor(capacity);
    hallItem.setAttribute("style", `background-color:rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`);

    const hallName = document.createElement("div");
    hallName.setAttribute("class", "hall-name");
    const hallNameText = document.createTextNode(name);
    hallName.appendChild(hallNameText);

    const hallCapacity = document.createElement("div");
    hallCapacity.setAttribute("class", "hall-capacity");
    const hallCapacityText = document.createTextNode(`${capacity}%`)
    hallCapacity.appendChild(hallCapacityText);

    const hallMeal = document.createElement("div");
    hallMeal.setAttribute("class", "hall-meal");
    const hallMealText = document.createTextNode(`${meal}: 1 hour`);
    hallMeal.appendChild(hallMealText);
    

    hallItem.appendChild(hallName);
    hallItem.appendChild(hallCapacity);
    hallItem.appendChild(hallMeal);

    
    const lastdiv = document.getElementById('last-div');
    const parent = lastdiv.parentElement;

    console.log(parent);

    parent.insertBefore(hallItem, lastdiv);
}

const Refresh = async () => {
    halls = await getHallData();
    
    for (let i = 0; i < halls.length; i++) {
        hall = halls[i];
        CreateHall(hall.name, hall.capacity, "Breakfast", 30)
    }
}

