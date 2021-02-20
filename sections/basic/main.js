const listRepos = async username => {
    const repos = await fetch(
        `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
    )
        .then(resp => resp.json())
        .catch(error => console.error(error));

    const markup = repos.map( repo => {
        return `
            <li>
                <a href="${repo.html_url}">${repo.name}</a>
                (⭐️ ${repo.stargazers_count})
            </li>
        `
    }).join('');

    const content = document.getElementById('repo-list');
    content.innerHTML = markup;
}

listRepos('justinotero');
