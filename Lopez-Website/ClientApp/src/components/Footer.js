﻿import React, { Component } from "react";
import "./css/Footer.css";

export class Footer extends Component {
	displayName = Footer.name;

	render() {
		return (
			<div className="footer">
				<hr />
				<p>Lopez Auto Sales</p>
				<p>515 Albert St</p>
				<p>Emporia, KS, 66801</p>
				<a href="tel:6202086250">
					<p>(620)208-6250</p>
				</a>
				<a href="mailto:lopezautosales@outlook.com">
					<p>lopezautosales@outlook.com</p>
				</a>
			</div>
		);
	}
}