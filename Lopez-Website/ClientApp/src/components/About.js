import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import "./css/About.css";

export class About extends Component {
	displayName = About.name

	render() {
		return (
			<div className="content">
				<h1>About Us</h1>

				<table>
					<tbody>
					<tr>
						<td>
							<Jumbotron>
								<strong>Financing</strong>
								<hr />
							</Jumbotron>
						</td>
						<td>
							<Jumbotron>
								<strong>Towing</strong>
								<hr />
							</Jumbotron>
						</td>
					</tr>
					<tr>
						<td>
							<Jumbotron>
								<strong>Auto Repair</strong>
								<hr />
							</Jumbotron>
						</td>
						<td>
							<Jumbotron>
								<strong>Test Drives</strong>
								<hr />
							</Jumbotron>
						</td>
						</tr>
						</tbody>
				</table>
			</div>
		);
	}
}