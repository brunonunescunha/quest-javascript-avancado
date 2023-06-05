import { linkApiGitHub, quantityPerPage } from "../variable.js"

async function getRepo(userName) {
    const reponse = await fetch(`${linkApiGitHub}/${userName}/repos?per_page=${quantityPerPage}`)
    return await reponse.json()
}

export { getRepo }