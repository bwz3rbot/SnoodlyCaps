const snoowrap = require('../config/snoo-config').snoowrap
const snoostorm = require('snoostorm')
const jsonFileExporter = require('../utils/jsonFileExporter')

const generateOdds = function () {
    return Math.floor((Math.random() * 1000) + 1)
}

const studlyCap = function (string) {

    let letters = []
    for (i = 0; i < string.length; i++) {
        letters.push(string[i])

    }

    // a
    // b
    // c
    // d
    // e

    let returnString = ""
    for (i = 0; i < letters.length; i++) {
        if (i % 2) {
            letters[i] = letters[i].toUpperCase()
        }

        returnString += letters[i]

    }

    // a
    // B
    // c
    // D
    // e

    returnString += "!!!"

    return returnString


}

const commentsList = []
const test = function () {

    comments = new snoostorm.CommentStream(snoowrap, {
        subreddit: 'askreddit',
        limit: 100,
        pollTime: 2000
    })

    comments.on("item", function (comment) {
        let odds = generateOdds()
        console.log('ODDS ARE :: ' + odds)
        if (odds > 100) {
            console.log('STUDLYCAPPING!')
            let name
            snoowrap.getComment(comment.id).author.name.then(function(author){
                name = author
                console.log(studlyCap(name))

            })
            
            // snoowrap.getComment(comment.id).reply(studlyCap(name))

        }
        console.log('not studlycapping.')



    })


}




module.exports.test = test