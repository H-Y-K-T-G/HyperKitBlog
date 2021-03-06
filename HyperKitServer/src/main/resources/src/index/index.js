import entryFragment from '../entryFragment';

$(async () => {
    let main = $("main");
    if(Net.getQuery()["q"]){
        Net.get("/blog/search/?q=" + Net.getQuery()["q"]).then((blogInfo) => {
            let entries = blogInfo.data;
            console.log(entries);
            console.log(":");
            entries.forEach(async entry => {
                let id = entry.id;
                let title = entry.title;
                let content = entry.content;
                let author = (await getUserInfo(entry.authorId)).nick;
                let updated = entry.updated;
                let fragment = entryFragment(id, title, content, author, updated);
                main.append(fragment);
            });
        });
    } else {
        Net.get("/blog/").then((blogInfo) => {
            let entries = blogInfo.data.content;
            console.log(entries);
            console.log(":");
            entries.forEach(async entry => {
                let id = entry.id;
                let title = entry.title;
                let content = entry.content;
                let author = (await getUserInfo(entry.authorId)).nick;
                let updated = entry.updated;
                let fragment = entryFragment(id, title, content, author, updated);
                main.append(fragment);
            });
        });
    }

});