const postagem = {
    usuario: [
        {
            username: 'nanic'
        }
    ],

    posts: [
        {
            owner: 'nanic',
            content: 'Minha primeira postagem'
        }
    ],
}

function criaPost(dados) {
    postagem.posts.push({
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({ owner: 'nanic', content: 'Segunda postagem'})
console.log(postagem.posts)