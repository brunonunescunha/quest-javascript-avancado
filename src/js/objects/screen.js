const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl} alt="Foto do perfil do usuário"/> 
                                        <div class="dados">
                                            <h1>${user.name ?? "Não possui nome cadastrado 😥"}</h1>
                                            <ul>
                                                <li>
                                                    <i class="fas fa-users"></i>
                                                    <p>seguidores ${user.followers}</p>
                                                </li>
                                                <li>
                                                    <i class="fas fa-user"></i>
                                                    <p>seguindo ${user.following}</p>
                                                </li>
                                            </ul>
                                            <p>${user.bio ?? "Não possui bio cadastrado 😥"}</p>  
                                        </div>          
                                     </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => {
            repositoriesItens += `<li>
                                <a href="${repo.html_url}" target="_blank">${repo.name}
                                    <ul>
                                        <li><p>🍴  ${repo.forks}</p></li>
                                        <li><p>⭐ ${repo.stargazers_count}</p></li>
                                        <li><p>👀 ${repo.watchers}</p></li>
                                        <li><p>👨‍💻 ${repo.language}</p></li>
                                    </ul>
                                </a>
                             </li>`

        })
            if (user.repositories.length > 0) {
                this.userProfile.innerHTML += `<div class="repositorio">
                                               <h2>Repositórios</h2>
                                               <ul>${repositoriesItens}</ul>
                                           </div>`
            }
        let eventItens = ""
        user.events.forEach(event => {

            if (event.type === "PushEvent") {
                eventItens += `<li>
                          <a href="https://github.com/${event.repo.name}" target="_blank">
                          <p class="name-event">${event.repo.name}</p>
                             <p class="commit-event"> - ${event.payload.commits[0].message}</p>
                          </a>
                       </li>`
            }

            if (event.type === "CreateEvent") {
                eventItens += `<li>
                          <a href="https://github.com/${event.repo.name}" target="_blank">
                               <p class="name-event">${event.repo.name}</p>
                               <p class="commit-event">- Este repositório não tem comentários</p>
                          </a>
                       </li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="event">
                                               <h2>Últimos Eventos</h2>
                                               <ul>${eventItens}</ul>
                                           </div>`
        }

    },
    userNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    } 

}

export { screen }