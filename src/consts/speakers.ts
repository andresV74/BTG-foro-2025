import type { TSpeaker } from '@/types/speaker';

import speakerImg1 from '@/assets/img-Roberto-Sallouti.webp';
import speakerImg2 from '@/assets/img-Michael-Stott.webp';

export const speakersData: TSpeaker[] = [
	{
		color: 'bg-blue-5',
		title: 'Estrategias para un crecimiento sostenible',
		image: speakerImg1,
		name: 'Roberto\nSallouti',
		position_1: 'CEO',
		position_2: 'BTG Pactual',
		description: "CEO de BTG Pactual\n\nCuenta con más de 30 años de trayectoria en el sector financiero. Economista de la Wharton School de la Universidad de Pennsylvania. Ingresó a BTG Pactual en 1994 y en 2008 fue nombrado COO, liderando las divisiones de Renta Fija locales e internacionales.\n\nDesde 2015 es CEO del banco, posición desde la cual ha consolidado a BTG Pactual como una de las instituciones más influyentes de América Latina, impulsando la innovación y la expansión global. También hace parte de su Consejo de Administración, donde contribuye a definir la estrategia corporativa con énfasis en sostenibilidad y crecimiento."
	},
		{
		color: 'bg-blue-6',
		title: 'Estrategias para un crecimiento sostenido',
		image: speakerImg2,
		name: 'Michael\nStott',
		position_1: 'Editor para América Latina',
		position_2: 'Financial Times',
		description: "Editor para América Latina del Financial Times, con sede en Brasil.\n\nPeriodista con amplia trayectoria internacional, inició en Reuters como corresponsal en Alemania, Brasil, Colombia y México, y luego como jefe de la oficina en Moscú y editor regional para Europa, Medio Oriente y África.\n\nDesde 2014 en el Financial Times, ha ocupado roles de liderazgo como editor de noticias del Reino Unido y managing editor del Nikkei Asian Review en Tokio, donde lideró su transformación digital.\n\nEspecializado en política, negocios y geopolítica, escribe columnas sobre América Latina y modera foros internacionales. Es graduado en Lenguas Modernas de la Universidad de Cambridge y domina español, portugués, francés, alemán y ruso."
	},
]