ej.addCulture( "tn", {
	name: "tn",
	englishName: "Setswana",
	nativeName: "Setswana",
	language: "tn",
	numberFormat: {
		percent: {
			pattern: ["-%n","%n"]
		},
		currency: {
			pattern: ["$-n","$ n"],
			symbol: "R"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Sontaga","Mosupologo","Labobedi","Laboraro","Labone","Labotlhano","Matlhatso"],
				namesAbbr: ["Sont.","Mos.","Lab.","Labr.","Labn.","Labt.","Matlh."],
				namesShort: ["So","Ms","Lb","Lr","Ln","Lt","Ma"]
			},
			months: {
				names: ["Ferikgong","Tlhakole","Mopitlwe","Moranang","Motsheganong","Seetebosigo","Phukwi","Phatwe","Lwetse","Diphalane","Ngwanatsele","Sedimothole",""],
				namesAbbr: ["Fer.","Tlh.","Mop.","Mor.","Motsh.","Seet.","Phk.","Pht.","Lwetse.","Diph.","Ngwn.","Sed.",""]
			},
			AM: ["Mo Mosong","mo mosong","MO MOSONG"],
			PM: ["Mo Maitseboeng","mo maitseboeng","MO MAITSEBOENG"],
			patterns: {
				d: "dd/MM/yy",
				D: "dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dd MMMM yyyy hh:mm tt",
				F: "dd MMMM yyyy hh:mm:ss tt",
				M: "d MMMM"
			}
		}
	}
});
