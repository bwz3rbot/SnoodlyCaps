const snoowrap = require('../config/snoo-config').snoowrap
const snoostorm = require('snoostorm')
const generateOdds = function () {
    return Math.floor((Math.random() * 2000) + 1)
}
const getDateTime = function () {
    let date = new Date().toISOString().
    replace(/T/, ' ').
    replace(/\..+/, '')
    return date
}
const studlyCap = function (string) {
    let letters = []
    for (i = 0; i < string.length; i++) {
        letters.push(string[i])
    }
    let returnString = ""
    for (i = 0; i < letters.length; i++) {
        if (i % 2) {
            letters[i] = letters[i].toUpperCase()
        }
        if (!(i % 2)) {
            letters[i] = letters[i].toLowerCase()
        }
        returnString += letters[i]
    }
    returnString += "!!!"
    return returnString
}
let amountScanned = 0;
let numCapped = 0;
const run = function () {
    let time = getDateTime()
    console.log("\n******************************************\n")
    console.log(`SnoodlyCap is running! ${time} \n Press Ctrl+C to Exit \n Contact /u/Bwz3r if you have any questions or would like to request a bot!\n`)
    console.log("******************************************\n")
    comments = new snoostorm.CommentStream(snoowrap, {
        subreddit: 'all',
        limit: 100,
        pollTime: 20000
    })
    comments.on("item", function (comment) {
        amountScanned++
        let odds = generateOdds()
        if (odds > 1999) {

            let name
            snoowrap.getComment(comment.id).author.name.then(function (author) {
                console.log(`****************************************** \n ${time}`)
                numCapped = numCapped + 1
                console.log(`total amount scanned: ${amountScanned} \n nUmBeR oF cOmMeNtS sNoOdLyCaPpEd: ${numCapped}`)
                name = author
                cappedName = studlyCap(name)
                console.log(cappedName)
                snoowrap.getComment(comment.id).reply(cappedName)
                console.log("******************************************")
            })
        }
    })
}
module.exports = {
    run: run
}