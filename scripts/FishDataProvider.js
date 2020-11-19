const fishCollection = [
    {
        name: "Gillbert",
        species: "Piranha Fish",
        length: 9,
        home: "Amazon River",
        food: "Insects, fish, crustaceans, worms, carrion, seeds and other plant material",
        image: "./images/Gillbert.png"
    }
    ,
    {
        name: "Funny Man",
        species: "Clownfish",
        length: 5,
        home: "Pacific Ocean",
        food: "Algea, zooplankton, worms and small crustaceans",
        image: "./images/Funnyman.jpg"
    }
    ,
    {
        name: "Bart",
        species: "Dwark Lanternshark",
        length: 26,
        home: "Columbia",
        food: "crustaceans",
        image: "./images/Bart.jpg"
    }
];

export const useFish = () => {
    return fishCollection;
};

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (length of fishCollection) {
        if (length.length % 3 === 0) {
            holyFish.push(length)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (length of fishCollection) {
        if (length.length % 5 === 0 && length.length % 3 !== 0) {
            soldiers.push(length)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (length of fishCollection) {
        if (length.length % 3 !== 0 && length.length % 5 !== 0) {
            regularFish.push(length)
        }
    }
    return regularFish
}

console.log(mostHolyFish(fishCollection))
console.log(soldierFish(fishCollection))
console.log(nonHolyFish(fishCollection))