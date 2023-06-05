import { linkApiGitHub, quantityPerPage } from "../variable.js"

async function getEvent(userName) {
    const reponse = await fetch(`${linkApiGitHub}/${userName}/events?per_page=${quantityPerPage}`)
    return await reponse.json()
}

export { getEvent }