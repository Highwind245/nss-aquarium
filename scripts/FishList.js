
import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"


export const FishList = () => {

    const contentElement = document.querySelector("#outputContainer")
    const fishes = useFish()


    for (const fish of fishes) {
        let fishHTMLRepresentations = Fish(fish)
        contentElement.innerHTML += `
            ${fishHTMLRepresentations}
    `
    }

}