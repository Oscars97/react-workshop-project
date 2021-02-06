import React from "react";
import PropTypes from "prop-types";
const Information = props => {
	return (
		<section>
			<h1>{props.title}</h1>
			<p>Info about me</p>
		</section>
	);
};

Information.propTypes = {
	title: PropTypes.string
};
export default Information;
