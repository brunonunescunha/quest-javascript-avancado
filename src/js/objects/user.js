const user = {
    userName: "",
    avatarUrl: "",
    name: "",
    followers: "",
    following: "",
    bio: "",
    repositories: [],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.bio = gitHubUser.bio
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvent(event){
        this.events = event
    }
}

export{ user }