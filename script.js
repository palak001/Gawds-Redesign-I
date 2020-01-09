$(document).ready(function() {
    let url = "https://api.github.com/orgs/gawdsnitkkr/members";
    
    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    $.getJSON(url)
    .then(disMembers);
 
    function disMembers(members){
        members.forEach(member => {
        disMember(member);
        });
    }


    function disMember(member){
        const followers_url = member.followers_url;
        const ul = $('#avatar').get(0);
        //or const ul = document.getElementById('#avatar');
        let li = createNode('li');
        let img = createNode('img');
        let div = createNode('div');
        let a = createNode('a');
        let h3 = createNode('h3');
        let h4 = createNode('h4');
        var username = member.login;
        img.src = member.avatar_url;
        a.href = member.html_url;
        h3.innerText = `${username}`;
        let followers_count;
        $.getJSON(followers_url)
            .then(response => {
                followers_count = response.length;
                h4.innerText = `Followers : ${followers_count}`;
            });

        append(a, h3);
        append(a, h4);
        append(div, a);
        append(li, img);
        append(li, div);
        append(ul, li);

    }

});

