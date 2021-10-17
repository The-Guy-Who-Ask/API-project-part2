var mata = ''
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        mata = JSON.parse(this.responseText)
        console.log(mata)
        let dogImage = ''
        let main = mata.data
        console.log(main)
        let container = document.getElementsByClassName('container')[0]
        for (let i = 0; i < main.length; i++) {
            let post_id = main[i].id
            console.log(post_id)
            
            let user_id = main[i].user_id
            console.log(user_id)

            let head = main[i].title
            console.log(head)
            
            let main_container = main[i].body
            console.log(main_container)
            
            let ele = document.createElement('div')
            let html = `<span id="post${post_id}">post #${post_id}</span>
            <h1>${head}</h1>
            <article>${main_container}</article>
            <p>created by <span><a href="https://husain-ujjaini.github.io/API-project/index.html#user${user_id}">user#${user_id}</a></span></p>`
            ele.innerHTML = html
            container.appendChild(ele)
        }
        }
        }
xhttp.open("GET", `https://gorest.co.in/public/v1/posts`, true);
xhttp.send();