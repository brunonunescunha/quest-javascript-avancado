import { getUser } from "./service/user.js"
import { getRepo } from "./service/repositories.js"
import { getEvent } from "./service/event.js"
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { validateEmptyInput } from "./validateEmptyInput.js"

const btnSearch = document.getElementById("btn-search")
const searchBar  = document.getElementById("input-search")


btnSearch.addEventListener("click", () => {
    const userName = searchBar.value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

searchBar.addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEntrerKeyPressed = key === 13

    if(isEntrerKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName) {
    const userReponse = await getUser(userName)
    const repositoriesResponse = await getRepo(userName)
    const eventReponse = await getEvent(userName)

    if(userReponse.message === "Not Found"){
        screen.userNotFound()
        return
    }
   
    user.setInfo(userReponse)
    user.setRepositories(repositoriesResponse)
    user.setEvent(eventReponse)
    screen.renderUser(user)

}