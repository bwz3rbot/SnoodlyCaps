const snoowrap = require('../config/snoo-config').snoowrap
const snoostorm = require('snoostorm')
const jsonFileExporter = require('../utils/jsonFileExporter')
const {
    RedditUser
} = require('snoowrap')


const submissionList = []
// const test = function () {

//     const submissions = new snoostorm.SubmissionStream(snoowrap, {
//         subreddit: "All",
//         limit: 10,
//         pollTime: 2000
//     })


//     submissions.on('item', (submission) => {
//         submissionList.push(submission.id)

//     })

//     while (submissionList.length > 5) {
//         console.log(submissionList)
//     }

// }

const test = function () {
    snoowrap.getHot('',{
        limit: 1
    }).then(hotPosts => {
        jsonFileExporter.stringifyThenSave('HotPosts',hotPosts)
        
    })
}



module.exports.test = test