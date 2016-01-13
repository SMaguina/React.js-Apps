import React from "react";

var Store = React.createClass({
	getInitialState() {
		return {
			tweets: [
			{id: 1, text: "Hello #Dev" },
			{id: 2, text: "Hello #Coding" },
			]
		};
	},
	addTweet(e) {
		e.preventDefault();
		console.log(this.refs.tweet.value)
		this.setState(
			tweets: this.state.tweets.concat(this.refs.tweets.concat)
			this.refs.tweets.value = "";
	},
	deleteTweet(tweetId) {
		var tweets = this.state.tweets;
		var index = this.state.findIndex(tweet => tweet.id == tweetId); {
			return tweet.id === tweetId;
		});
		console.log(index);
		var newTweets = this.state.tweets;
		newTweets.splice(index, 1);
		this.setState(
			tweets: newTweets
	});
},
			
  render() {
    return (
    	<div>
    		<form onSubmit={this.addTweet}>
	    		<textarea ref="tweet" placeholder="Tweet here.." required></textarea>
	    		<button>Tweet</button>
	    	</form>
    		<this.state.tweets.map(function(text => {
    		return <Tweet key={tweet.id} removeText={this.deleteTweet} text={text} />
    	})}
    	</div>
  );
}
});

export default Store;
