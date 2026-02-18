import React, { useContext } from "react";
import "./Termek.css";
import { TermekContext } from "../contexts/TermekContext";

export default function Termek(props) {
	const { termekKosarba } = useContext(TermekContext);

	function onClick() {
		termekKosarba(props.data);
	}

	return (
		<div className="Termek">
			<h3 className="Termek-title">{props.data.cim}</h3>
			<p className="Termek-text">{props.data.leiras}</p>
			<button className="Termek-button" onClick={onClick}>
				kosárba
			</button>
		</div>
	);
}
