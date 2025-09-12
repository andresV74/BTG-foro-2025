import type { TSpeaker } from '@/types/speaker';

import speakerImg1 from '@/assets/img-speaker-1@2x.webp';
import speakerImg2 from '@/assets/img-Roberto-Sallouti.webp';

export const speakersData: TSpeaker[] = [
	{
		color: 'bg-blue-5',
		image: speakerImg1,
		name: 'Luis\nFernando\nMejía',
		position_1: 'Director Ejecutivo',
		position_2: 'Fedesarrollo',
		description: "Con más de 12 años de experiencia en economía aplicada, Alejandro ha trabajado como asesor para organismos multilaterales y gobiernos en América Latina. Ha liderado proyectos de evaluación de políticas públicas, crecimiento económico y sostenibilidad fiscal. Es Magíster en Economía Aplicada de la Universidad de los Andes y ha sido consultor para el Banco Interamericano de Desarrollo y el Ministerio de Hacienda de Colombia. Su enfoque combina el rigor técnico con una visión práctica para generar mpacto en la toma de decisiones. Actualmente es Consultor Senior en Estrategia y Finanzas Públicas, acompañando a diferentes países en el diseño de modelos económicos que fomentan la competitividad y la inclusión social."
	},
	{
		color: 'bg-blue-6',
		image: speakerImg2,
		name: 'Roberto\nSallouti',
		position_1: 'Director Ejecutivo',
		position_2: 'BTG Pactual',
		description: "Roberto Sallouti es director ejecutivo y miembro del consejo de administración de BTG Pactual. También es presidente de los consejos de administración de Inteli y Banco Pan, miembro del consejo de administración de V.tal y miembro del consejo asesor de la Wharton School y Parceiros da Educação.\n\nSallouti es licenciado en Economía por la Wharton School de la Universidad de Pensilvania. Se incorporó a BTG Pactual en 1994 y se convirtió en socio en 1998. Comenzó su carrera en renta fija, se convirtió en director de operaciones en 2008 y en director ejecutivo en 2015.\n\nComo filántropo, Sallouti ha dedicado sus esfuerzos a la educación, siendo reconocido por su colaboración con la Brazil Foundation y la Cámara Legislativa de São Paulo. Es cofundador de Inteli (Instituto de Tecnología y Liderazgo), una universidad sin ánimo de lucro comprometida con el desarrollo de los futuros líderes tecnológicos de Brasil, ha apoyado diversas iniciativas educativas para estudiantes de escuelas públicas y ha concedido becas en Wharton, Graded e Inteli."
	}
]