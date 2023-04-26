// Please do not change the name of this function
function getTweetData(tweet) {
  const counts = [];
  const tweetArray = tweet.split(" ");
  const tweetObject = {
    tags: [],
    mentions: [],
    tagCount: 0,
    mentionCount: 0,
    length: tweet.length
  };

  for (let i = 0; i < tweetArray.length; i++) {
    if (tweetArray[i][0] === "@") {
      if (counts[tweetArray[i]] == undefined) {
        counts[tweetArray[i]] = 1;
        tweetObject.mentions = [tweetArray[i]];
        tweetObject.mentionCount += 1;
      }
    }
    if (tweetArray[i][0] === "#") {
      if (counts[tweetArray[i]] == undefined) {
        counts[tweetArray[i]] = 1;
        tweetObject.tags = [tweetArray[i]];
        tweetObject.tagCount += 1;
      }
    }
  }

  return tweetObject;
}

module.exports = getTweetData;
