import React from "react";

var Tweet = React.createClass({
	handleClick(e) {
		//console.log(e.target.textContent);
		this.props.removeTweet(this.props.tweet.id);
	},
	render () {
		return (
			<li onClick={this.handleClick}>
				{this.props.tweet.text}
			</li>
		);
	}
}),


export default Tweet;