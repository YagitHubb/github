class GitHub{
    constructor(){
        this.client_id = 'ffce92df77b6866e8a04';
        this.client_secret = '81c18935a9be074fde324d2b294c8846edd7d325';
        this.repos_count =5;
        this.repos_sort = 'create: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
    
        return{
            profile,
            repos
        };
    }
    
}