import React, { useContext } from "react";
import Termek from "./Termek";
import "./Termekek.css";
import { TermekContext } from "../contexts/TermekContext";

export default function Termekek() {
	const { termekList } = useContext(TermekContext);

	return (
		<div className="Termekek">
			{termekList.map((mapData, index) => {
				return <Termek key={index} data={mapData} />;
			})}
		</div>
	);
}
