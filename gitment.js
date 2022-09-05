/** js document */

var gitment = new Gitment(
    {
        id: 'about', // 可选。默认为 location.href
        owner: 'ShuninYu',
        repo: 'shuninyu.github.io',
        oauth: {
            client_id: '89178d20e060b941ba73',
            client_secret: '6a2ad56f2ff7afe691f4cd11b91da31ad8c70e21',
        },
    }
)
gitment.render('container')