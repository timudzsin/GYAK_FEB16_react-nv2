import React, { useContext } from "react";
import { TermekContext } from "../contexts/TermekContext";
import "./Kosar.css"

export default function Kosar() {
	const { kosarLista } = useContext(TermekContext);

	return (
		<div className="Kosar">
			<h2>kosaram:</h2>
			{kosarLista.map((data, index) => {
				return <div key={index}><h3>{data.cim}</h3></div>;
			})}
		</div>
	);
}
