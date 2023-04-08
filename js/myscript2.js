const users = [{
    "id": 1,
    "login": "mojombo",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "created_at": "2007-10-20T05:24:19Z",
    "name": "Tom Preston-Werner",
    "location": "San Francisco",
    "twitter_username": "mojombo",
    "blog": "http://tom.preston-werner.com",
    "public_repos": 63,
    "followers": 22827,
    "following": 11
},
{
    "id": 46,
    "login": "bmizerany",
    "avatar_url": "https://avatars.githubusercontent.com/u/46?v=4",
    "created_at": "2008-01-24T04:44:30Z",
    "name": "Blake Mizerany",
    "location": null,
    "twitter_username": null,
    "blog": "",
    "public_repos": 162,
    "followers": 1314,
    "following": 26
},
{
    "id": 45,
    "login": "mojodna",
    "avatar_url": "https://avatars.githubusercontent.com/u/45?v=4",
    "created_at": "2008-01-24T04:40:22Z",
    "name": "Seth Fitzsimmons",
    "location": "Bend, OR",
    "twitter_username": "mojodna",
    "blog": "http://mojodna.net/",
    "public_repos": 314,
    "followers": 534,
    "following": 114
},
{
    "id": 37,
    "login": "jamesgolick",
    "avatar_url": "https://avatars.githubusercontent.com/u/37?v=4",
    "created_at": "2008-01-19T22:52:30Z",
    "name": "James Golick",
    "location": "New York",
    "twitter_username": null,
    "blog": "http://jamesgolick.com",
    "public_repos": 110,
    "followers": 613,
    "following": 30
},
{
    "id": 18,
    "login": "wayneeseguin",
    "avatar_url": "https://avatars.githubusercontent.com/u/18?v=4",
    "created_at": "2008-01-13T06:02:21Z",
    "name": "Wayne E. Seguin",
    "location": "Buffalo, NY",
    "twitter_username": null,
    "blog": "",
    "public_repos": 98,
    "followers": 715,
    "following": 17
}
];
  
  
  const searchInput = document.getElementById("search");  
  const searchButton = document.getElementById("submit");
  const resultsContainer = document.getElementById("results");
  
  function searchUsers() {
    let query = document.getElementById("search").value;    
  
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    
    if (filteredUsers.length === 0) {
      resultsContainer.textContent =
        "No hay usuarios que cumplan con el criterio de búsqueda";
      return;
    }
    const first = [];
    first[0] = filteredUsers[0];
    const createdRaw = first.map(user => user.created_at);    
    const date = new Date(createdRaw);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const created = (year + "-" + month + "-" + day);

    const resultsHtml = first.map(user => `
<div class="mycard">
  <div class="myuser-card ">
  <h2 class="myround">${user.twitter_username}</h2>
  <div>
    <img id="avatar" src=${user.avatar_url} width="115px" height="115px" border-radius="5px">
  </div>            
<div class="myround">
    ${created}  
</div> 
</div>
<div class="myadditional">
<h2>${user.name}</h2>
<div class="mycity-twitter">
    <div>
      <span class="material-symbols-outlined">location_on</span>
      ${user.location}
    </div>
    <div>
      <img src="img/twitter.png" width="15px" height="15px">
      @${user.twitter_username}
    </div>
</div>
<span class="material-symbols-outlined">wifi</span>
${user.blog}
<div class="myrepos-followers">
    <div>
        <div>REPOS</div>
        <div><span class="material-symbols-outlined">pacemaker</span></div>
        <div>${user.public_repos}</div>
    </div>
    <div>
        <div>FOLLOWERS  </div>
        <div><span class="material-symbols-outlined">groups</span></div>
        <div>${user.followers}</div>
    </div>
    <div>
        <div>FOLLOWING</div>
        <div><span class="material-symbols-outlined">group</span></div> 
        <div>${user.following}</div>
    </div>
</div>
</div>
`).join("");
    resultsContainer.innerHTML = resultsHtml;
  }
  searchButton.addEventListener("click", () => {
    let query = searchInput.value.trim();
    searchUsers(query);
  });
  
/*${user.created_at}*/
  
  