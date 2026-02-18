import React, { useContext } from "react";
import { TermekContext } from "../contexts/TermekContext";
import "./Kosar.css";

export default function Kosar() {
	const { kosarLista } = useContext(TermekContext);

	return (
		<div className="Kosar">
			<h2>Kosár:</h2>
			<div className="Kosar-tartalom">
				{kosarLista.map((data, index) => {
					return <h3 key={index}>{data.cim}</h3>;
				})}
			</div>
		</div>
	);
}
