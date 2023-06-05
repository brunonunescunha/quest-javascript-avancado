import { linkApiGitHub } from "../variable.js"

async function getUser(userName) {
    const reponse = await fetch(`${linkApiGitHub}/${userName}`)
    return await reponse.json()
}

export { getUser }