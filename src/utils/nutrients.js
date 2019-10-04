const request = require('request')


function nutrients(query, callback) {

    const auth = '&app_id=36d57938&app_key=e5a665921fbedd69857eaedbc25170bf'
    // const auth = '&app_id=36d57938&app_key=e5a665921fbedd69857eaedbc25170pf'            // fake auth
    const url = 'https://api.edamam.com/api/food-database/parser?ingr='+ query + auth
    // const url = 'https://api.edanam.com/api/food-database/parser?ingr='+ query + auth   // fake url

    request({url, json: true}, (err, {body}) => {

        if (err){
            callback( 'food service not available' )
        } else if (body.status) {
            callback(body.message)
        } else {
            callback(err, body.parsed[0].food)
        }
    })
    
}

module.exports = nutrients
