import { createContext, useContext, useState } from "react";

export const TermekContext = createContext();

export const TermekProvider = ({ children }) => {
	const termekList = [
		{ cim: "lufi", leiras: "Ez egy lufi :D" },
		{ cim: "ceruzahegyező", leiras: "Ez egy ceruzahegyező :)" },
		{ cim: "atombomba", leiras: "Ez egy atombomba." },
		{ cim: "füzet", leiras: "Ez egy füzet :)" },
		{ cim: "ceruza", leiras: "Ez egy ceruza :)" },
		{
			cim: "folyékony nitrogén",
			leiras: "Ez egy folyékony nitrogén hordó.",
		},
		{ cim: "kokain", leiras: "Ez kokain :D" },
	];

    const [kosarLista, setKosarLista] = useState([]);

	function termekKosarba(data) {
		setKosarLista([...kosarLista, data]);
	}

	return (
		<TermekContext.Provider
			value={{ termekList, termekKosarba, kosarLista }}
		>
			{children}
		</TermekContext.Provider>
	);
};
