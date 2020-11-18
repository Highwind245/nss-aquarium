const fishCollection = [
    {
        name: "Gillbert",
        species: "Piranha Fish",
        length: "9.8 Inches",
        home: "Amazon River",
        food: "Insects, fish, crustaceans, worms, carrion, seeds and other plant material",
        image: "./images/Gillbert.png"
    }
    ,
    {
        name: "Funny Man",
        species: "Clownfish",
        length: "4.3 Inches",
        home: "Pacific Ocean",
        food: "Algea, zooplankton, worms and small crustaceans",
        image: "./images/Funnyman.jpg"
    }
    ,
    {
        name: "Bart",
        species: "Dwark Lanternshark",
        length: "6.7 Inches",
        home: "Columbia",
        food: "crustaceans",
        image: "./images/Bart.jpg"
    }
];

export const useFish = () => {
    return fishCollection;
};