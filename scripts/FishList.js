import { mostHolyFish } from "./FishDataProvider.js"
import { soldierFish } from "./FishDataProvider.js"
import { nonHolyFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"


export const FishList = () => {

    const contentElement = document.querySelector("#outputContainer")
    const holyFish = mostHolyFish()
    const SoldierFish = soldierFish()
    const unholyFish = nonHolyFish()


    for (const fish of holyFish) {
        let fishHTMLRepresentations = Fish(fish)
        contentElement.innerHTML += `
            ${fishHTMLRepresentations}
    `
    }
    for (const fish of SoldierFish) {
        let fishHTMLRepresentations = Fish(fish)
        contentElement.innerHTML += `
            ${fishHTMLRepresentations}
    `
    }
    for (const fish of unholyFish) {
        let fishHTMLRepresentations = Fish(fish)
        contentElement.innerHTML += `
            ${fishHTMLRepresentations}
    `
    }

}