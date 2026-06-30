const FACTOR_C_WHATSAPP = '573052933792';

// Directorio completo: incluye organizaciones marcadas con CFC=1 y CFC=0.
const unions = [
  {
    cfc: 1,
    name: "ASINTUPB",
    sector: "educacion",
    city: "Medellín, Antioquia",
    keywords: "universidad pontificia bolivariana trabajadores universidad educación superior empleados docentes administrativos asintupb",
    description: "Asociación sindical de trabajadoras y trabajadores de la Universidad Pontificia Bolivariana, orientada a la defensa del trabajo digno en educación superior.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASINTUPB.")}`
  },
  {
    cfc: 1,
    name: "SIDEPPO SAE",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sociedad de activos especiales SAE trabajadores sindicato popular pluralista democrático servidores públicos",
    description: "Organización sindical de trabajadoras y trabajadores de la Sociedad de Activos Especiales, enfocada en defensa laboral y organización democrática.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SIDEPPO SAE.")}`
  },
  {
    cfc: 1,
    name: "Sindicato gastronómico, hotelero y turístico",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "gastronomía hoteles turismo restaurantes trabajadores servicios industria gastronómica hotelera turística",
    description: "Organización sindical del sector gastronómico, hotelero y turístico, orientada a la defensa de derechos laborales en servicios.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre Sindicato gastronómico, hotelero y turístico.")}`
  },
  {
    cfc: 1,
    name: "SINTRABECÓLICAS Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "licorera fábrica licores antioquia industria bebidas producción trabajadores bebidas alcohólicas sintrabecólicas",
    description: "Organización sindical del sector industrial de bebidas alcohólicas, enfocada en negociación colectiva y defensa del trabajo digno.",
    logo: "assets/sindicatos/sintrabecolicas.jpg",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRABECÓLICAS Subdirectiva Medellín.")}`
  },
  {
    cfc: 1,
    name: "SINTRACLÍNICA Medellín",
    sector: "salud",
    city: "Medellín, Antioquia",
    keywords: "clínica medellín quirónsalud salud enfermería administración hospital trabajadores clínica medellín",
    description: "Sindicato de trabajadoras y trabajadores de la Clínica Medellín, orientado a la defensa del trabajo digno en el sector salud.",
    logo: "assets/sindicatos/sintraclinica.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACLÍNICA Medellín.")}`
  },
  {
    cfc: 1,
    name: "SINTRAINVIMA",
    sector: "publico",
    city: "Bogotá D.C. / Colombia",
    keywords: "invima salud pública medicamentos alimentos vigilancia sanitaria servidores públicos instituto nacional sintrainvima",
    description: "Sindicato nacional de trabajadoras y trabajadores del INVIMA, orientado a la defensa del empleo público y la salud pública.",
    logo: "assets/sindicatos/sintrainvima.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINVIMA.")}`
  },
  {
    cfc: 1,
    name: "SINTRAMUNE",
    sector: "publico",
    city: "Envigado, Antioquia",
    keywords: "municipio envigado entidad pública servidores públicos descentralizadas trabajadores municipales sintramune",
    description: "Sindicato de servidores públicos del Municipio de Envigado y sus entes descentralizados, orientado al fortalecimiento del empleo público.",
    logo: "assets/sindicatos/sintramune.jpg",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAMUNE.")}`
  },
  {
    cfc: 1,
    name: "SINTRASASS",
    sector: "salud",
    city: "Bogotá D.C. / Colombia",
    keywords: "salud seguridad social trabajadores salud clínica hospital sintrasass servicios complementarios colombia",
    description: "Sindicato de trabajadoras y trabajadores de la salud y la seguridad social, con presencia nacional y trabajo de fortalecimiento sindical.",
    logo: "assets/sindicatos/sintrasass-transparente.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASASS.")}`
  },
  {
    cfc: 1,
    name: "Unión Sindical Salud Comfenalco",
    sector: "salud",
    city: "Medellín, Antioquia",
    keywords: "unión sindical salud comfenalco sindicato salud caja de compensación trabajadores salud comfenalco",
    description: "Organización sindical de trabajadoras y trabajadores del sector salud vinculados a Comfenalco, orientada a la defensa del trabajo digno y la organización colectiva.",
    logo: "assets/sindicatos/union-sindical-salud-comfenalco.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre Unión Sindical Salud Comfenalco.")}`
  },
  {
    cfc: 0,
    name: "\"ASCITORAX\"",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "ascitorax asociación sindical de cirujanos de torax servicios bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre \"ASCITORAX\".")}`
  },
  {
    cfc: 0,
    name: "ACASUAREZ",
    sector: "publico",
    city: "Suárez, Cauca",
    keywords: "acasuarez asociacion de trabajadores campesinos del municipio de suarez publico cauca suárez gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Suárez, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ACASUAREZ.")}`
  },
  {
    cfc: 0,
    name: "ACEB",
    sector: "servicios",
    city: "Envigado, Antioquia",
    keywords: "aceb asociacion colombiana de empleados bancarios servicios antioquia envigado empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Envigado, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ACEB.")}`
  },
  {
    cfc: 0,
    name: "ACEB",
    sector: "servicios",
    city: "Itagui, Antioquia",
    keywords: "aceb asociacion colombiana de empleados bancarios servicios antioquia itagui empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Itagui, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ACEB.")}`
  },
  {
    cfc: 0,
    name: "ACEBYSF",
    sector: "industria",
    city: "Facatativá, Cundinamarca",
    keywords: "acebysf asociacion colombiana de empleados bancarios y del sector financiero industria cundinamarca facatativá industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ACEBYSF.")}`
  },
  {
    cfc: 0,
    name: "ACETADET",
    sector: "agro",
    city: "Granada, Meta",
    keywords: "acetadet asociacion de campesinos por el trabajo el medio ambientey la defensa del territorio region de duda agro meta granada gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Granada, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ACETADET.")}`
  },
  {
    cfc: 0,
    name: "ACM",
    sector: "salud",
    city: "Bucaramanga, Santander",
    keywords: "acm agremiacion colombiana de medicos salud santander bucaramanga gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ACM.")}`
  },
  {
    cfc: 0,
    name: "ACTIVOS",
    sector: "industria",
    city: "Manizales, Caldas",
    keywords: "activos asociacion sindical de trabajadores independientes de servicios generales industria caldas manizales industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ACTIVOS.")}`
  },
  {
    cfc: 0,
    name: "ACUDIT",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "acudit asociacion colombiana de usuarios y conductores dependientes e indiependientes del transporte automotor industria bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ACUDIT.")}`
  },
  {
    cfc: 0,
    name: "ADALAC",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "adalac asociacion de aviadores latam airlines colombia servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ADALAC.")}`
  },
  {
    cfc: 0,
    name: "AGENPROT",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "agenprot asociacion sindical de agentes profesionales de transito servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre AGENPROT.")}`
  },
  {
    cfc: 0,
    name: "AGREMIACION DE TRIPULANTES DE TRENES Subdirectiva Santa Marta",
    sector: "servicios",
    city: "Santa Marta, Magdalena",
    keywords: "agremiacion de tripulantes de trenes servicios magdalena santa marta gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre AGREMIACION DE TRIPULANTES DE TRENES Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "AGREMIACION SINDICAL DEL SECTOR DE SALUD Subdirectiva Bogotá D.C.",
    sector: "salud",
    city: "Bogotá D.C.",
    keywords: "agremiacion sindical del sector de salud salud bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre AGREMIACION SINDICAL DEL SECTOR DE SALUD Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "AGROPAP",
    sector: "publico",
    city: "Sabanalarga, Atlántico",
    keywords: "agropap asosiacion agropecuaria piedra china de aguada de pablo juridiccion municipal de sabanalarga publico atlántico sabanalarga gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Sabanalarga, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre AGROPAP.")}`
  },
  {
    cfc: 0,
    name: "ANACOV",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "anacov asociación nacional de asesores comerciales y vendedores publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ANACOV.")}`
  },
  {
    cfc: 0,
    name: "ANGELOS VIP",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "angelos vip sindicato de trabajadores independientes de oficios varios angelos vip servicios bogotá d.c. bogotá d.c. oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ANGELOS VIP.")}`
  },
  {
    cfc: 0,
    name: "ANTTE",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "antte asociación nacional de transportadores de turismo y especial publico bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ANTTE.")}`
  },
  {
    cfc: 0,
    name: "APROELECSA",
    sector: "servicios",
    city: "Montelíbano, Córdoba",
    keywords: "aproelecsa asociacion de profesionales electricistas electromecanicos y afines del san jorge servicios córdoba montelíbano gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Montelíbano, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre APROELECSA.")}`
  },
  {
    cfc: 0,
    name: "APUC SINDICAL",
    sector: "educacion",
    city: "Manizales, Caldas",
    keywords: "apuc sindical asociacion de profesores de la universidad de caldas educacion caldas manizales gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector educación con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre APUC SINDICAL.")}`
  },
  {
    cfc: 0,
    name: "ASAS",
    sector: "servicios",
    city: "Arauca",
    keywords: "asas asociacion sindical araucana de seguridad servicios arauca arauca gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Arauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASAS.")}`
  },
  {
    cfc: 0,
    name: "ASDUT",
    sector: "educacion",
    city: "Ibagué, Tolima",
    keywords: "asdut asociación sindical de docentes de la universidad del tolima educacion tolima ibagué industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector educación con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASDUT.")}`
  },
  {
    cfc: 0,
    name: "ASEBULEVAR",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "asebulevar asociacion sindical de empleados del centro comercial bulevar niza servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASEBULEVAR.")}`
  },
  {
    cfc: 0,
    name: "ASEGOBER",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "asegober asociacion sindical de servidores publicos de la gobernacion del atlantico publico atlántico barranquilla industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colec",
    description: "Organización sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASEGOBER.")}`
  },
  {
    cfc: 0,
    name: "ASENDASPOON",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "asendaspoon asociación sindical de empleados no uniformados ex das en la policía nacional publico valle del cauca cali gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASENDASPOON.")}`
  },
  {
    cfc: 0,
    name: "ASESFC",
    sector: "industria",
    city: "Mosquera, Cundinamarca",
    keywords: "asesfc asociación sindical de empleados del sector financiero colombiano industria cundinamarca mosquera industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASESFC.")}`
  },
  {
    cfc: 0,
    name: "ASESSPU",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asesspu sociacion de empleados de la superintendencia de servicios publicos domiciliarios publico bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASESSPU.")}`
  },
  {
    cfc: 0,
    name: "ASICONTUR",
    sector: "industria",
    city: "Cartagena, Bolívar",
    keywords: "asicontur asociacion sindical de x conductores de turbaco -bolivar industria bolívar cartagena industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASICONTUR.")}`
  },
  {
    cfc: 0,
    name: "ASIMUCASIN",
    sector: "publico",
    city: "Sitionuevo, Magdalena",
    keywords: "asimucasin asociación sindical de mujeres campesinas del municipio de sitio nuevo departamento del magdalena publico magdalena sitionuevo gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Sitionuevo, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASIMUCASIN.")}`
  },
  {
    cfc: 0,
    name: "ASINAGETT",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "asinagett asociacion sindical de agentes de transito y transporte unidos asinagett industria valle del cauca cali industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colect",
    description: "Organización sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASINAGETT.")}`
  },
  {
    cfc: 0,
    name: "ASINEPUSCO",
    sector: "educacion",
    city: "Neiva, Huila",
    keywords: "asinepusco asociacion sindical de empleados publicos de la universidad surcolombiana educacion huila neiva empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector educación con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASINEPUSCO.")}`
  },
  {
    cfc: 0,
    name: "ASINTRALOCATARIOS",
    sector: "publico",
    city: "Manizales, Caldas",
    keywords: "asintralocatarios la asociaci n nacional sindical nacional de trabajadores as locatarios as de propiedad o terciarios de los municipios departamento de caldas y de todos los municipios del pais publico caldas manizales industria o por rama de actividad económi",
    description: "Organización sindical del sector público con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASINTRALOCATARIOS.")}`
  },
  {
    cfc: 0,
    name: "ASINTRALOCATIVAS",
    sector: "publico",
    city: "Manzanares, Caldas",
    keywords: "asintralocativas la asociacion nacional de trabjadore as locatarios as de locales de propiedad o tercerizados de los municipios departamento de caldas y de todos los municipios del pais publico caldas manzanares industria o por rama de actividad económica dire",
    description: "Organización sindical del sector público con presencia en Manzanares, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASINTRALOCATIVAS.")}`
  },
  {
    cfc: 0,
    name: "ASINTRAMEG",
    sector: "servicios",
    city: "Montelíbano, Córdoba",
    keywords: "asintrameg asociacion sindical gremial de trabajadores del sector minero energetico servicios córdoba montelíbano gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Montelíbano, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASINTRAMEG.")}`
  },
  {
    cfc: 0,
    name: "ASIPATT",
    sector: "servicios",
    city: "Tuluá, Valle del Cauca",
    keywords: "asipatt agremiacion sindical de profesionales auxiliares técnicos y tecnologos servicios valle del cauca tuluá gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASIPATT.")}`
  },
  {
    cfc: 0,
    name: "ASITRANS",
    sector: "salud",
    city: "Medellín, Antioquia",
    keywords: "asitrans asociación sindical de trabajadores del sector salud salud antioquia medellín gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASITRANS.")}`
  },
  {
    cfc: 0,
    name: "ASOBANREP",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "asobanrep asociación de trabajadores del banco de la republica servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOBANREP.")}`
  },
  {
    cfc: 0,
    name: "ASOCABAÑA",
    sector: "servicios",
    city: "la Dorada, Caldas",
    keywords: "asocabaña sindicato de trabajadores independientes nocturnos casas de eventos casinos bares y discotecas servicios caldas la dorada gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en la Dorada, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCABAÑA.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE ACTORES Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "asociacion colombiana de actores servicios bogotá d.c. bogotá d.c. gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE ACTORES Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE AVIACION ACMA Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "asociacion colombiana de aviacion acma servicios bogotá d.c. bogotá d.c. gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE AVIACION ACMA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE AVIADORES CIVILES-SUBDIRECTIVA CALI",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "asociacion colombiana de aviadores civiles-subdirectiva cali industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE AVIADORES CIVILES-SUBDIRECTIVA CALI.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE CONTROLADORES DE TRANSITO AEREO Subdirectiva Pereira",
    sector: "servicios",
    city: "Pereira, Risaralda",
    keywords: "asociacion colombiana de controladores de transito aereo servicios risaralda pereira gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Pereira, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE CONTROLADORES DE TRANSITO AEREO Subdirectiva Pereira.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE DEFENSORES DEL MERITO PARA PROVISION DE CARGOS DEL ESTADO Subdirectiva Soacha",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "asociacion colombiana de defensores del merito para provision de cargos del estado publico cundinamarca soacha industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE DEFENSORES DEL MERITO PARA PROVISION DE CARGOS DEL ESTADO Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE ELECTRICISTAS TECNICOS EGRESADOS DEL SENA E INSTITUCIONES TECNIC... Subdirectiva Cali",
    sector: "educacion",
    city: "Cali, Valle del Cauca",
    keywords: "asociacion colombiana de electricistas tecnicos egresados del sena e instituciones tecnicas y de educacion superior del valle del cauca educacion valle del cauca cali gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociaci",
    description: "Subdirectiva sindical del sector educación con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE ELECTRICISTAS TECNICOS EGRESADOS DEL SENA E INSTITUCIONES TECNIC... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS",
    sector: "industria",
    city: "Chiquinquirá, Boyacá",
    keywords: "asociacion colombiana de empleados bancarios industria boyacá chiquinquirá industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Chiquinquirá, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS",
    sector: "industria",
    city: "Florencia, Caquetá",
    keywords: "asociacion colombiana de empleados bancarios industria caquetá florencia industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Florencia, Caquetá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS",
    sector: "servicios",
    city: "Rionegro, Antioquia",
    keywords: "asociacion colombiana de empleados bancarios servicios antioquia rionegro empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Rionegro, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS \"ACEB\" SECCIONAL ZIPAQUIRA Subdirectiva Zipaquirá",
    sector: "industria",
    city: "Zipaquirá, Cundinamarca",
    keywords: "asociacion colombiana de empleados bancarios aceb seccional zipaquira industria cundinamarca zipaquirá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Zipaquirá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS \"ACEB\" SECCIONAL ZIPAQUIRA Subdirectiva Zipaquirá.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS SECCIONAL ENVIGADO",
    sector: "servicios",
    city: "Envigado, Antioquia",
    keywords: "asociacion colombiana de empleados bancarios seccional envigado servicios antioquia envigado empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Envigado, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS SECCIONAL ENVIGADO.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS SECCIONAL ITAGUI",
    sector: "servicios",
    city: "Itagui, Antioquia",
    keywords: "asociacion colombiana de empleados bancarios seccional itagui servicios antioquia itagui empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Itagui, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS SECCIONAL ITAGUI.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACIÓN COLOMBIANA DE EMPLEADOS BANCARIOS SECCIONAL TULUA Subdirectiva Tuluá",
    sector: "industria",
    city: "Tuluá, Valle del Cauca",
    keywords: "asociación colombiana de empleados bancarios seccional tulua industria valle del cauca tuluá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACIÓN COLOMBIANA DE EMPLEADOS BANCARIOS SECCIONAL TULUA Subdirectiva Tuluá.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Envigado",
    sector: "industria",
    city: "Envigado, Antioquia",
    keywords: "asociacion colombiana de empleados bancarios industria antioquia envigado industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Envigado, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Envigado.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Fundación",
    sector: "industria",
    city: "Fundación, Magdalena",
    keywords: "asociacion colombiana de empleados bancarios industria magdalena fundación industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Fundación, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Fundación.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Guadalajara de Buga",
    sector: "industria",
    city: "Guadalajara de Buga, Valle del Cauca",
    keywords: "asociacion colombiana de empleados bancarios industria valle del cauca guadalajara de buga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Guadalajara de Buga, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Guadalajara de Buga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "asociacion colombiana de empleados bancarios industria antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Palmira",
    sector: "industria",
    city: "Palmira, Valle del Cauca",
    keywords: "asociacion colombiana de empleados bancarios industria valle del cauca palmira industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Palmira, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Palmira.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Repelón",
    sector: "industria",
    city: "Repelón, Atlántico",
    keywords: "asociacion colombiana de empleados bancarios industria atlántico repelón industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Repelón, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Repelón.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Santa Marta",
    sector: "industria",
    city: "Santa Marta, Magdalena",
    keywords: "asociacion colombiana de empleados bancarios industria magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS BANCARIOS Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS SECCIONAL BELLO",
    sector: "industria",
    city: "Bello, Antioquia",
    keywords: "asociacion colombiana de empleados de entidades financieras seccional bello industria antioquia bello industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bello, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS SECCIONAL BELLO.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Barranquilla",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "asociacion colombiana de empleados de entidades financieras industria atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Barranquilla",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "asociacion colombiana de empleados de entidades financieras industria atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACIÓN COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "asociación colombiana de empleados de entidades financieras industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACIÓN COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Buenaventura",
    sector: "industria",
    city: "Buenaventura, Valle del Cauca",
    keywords: "asociacion colombiana de empleados de entidades financieras industria valle del cauca buenaventura industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Buenaventura, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Buenaventura.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Cali",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "asociacion colombiana de empleados de entidades financieras industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "asociacion colombiana de empleados de entidades financieras industria antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Villavicencio",
    sector: "industria",
    city: "Villavicencio, Meta",
    keywords: "asociacion colombiana de empleados de entidades financieras industria meta villavicencio industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Yopal",
    sector: "industria",
    city: "Yopal, Casanare",
    keywords: "asociacion colombiana de empleados de entidades financieras industria casanare yopal industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Yopal, Casanare, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS Subdirectiva Yopal.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS-SECCIONAL ITAGUI Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "asociacion colombiana de empleados de entidades financieras-seccional itagui industria antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE EMPLEADOS DE ENTIDADES FINANCIERAS-SECCIONAL ITAGUI Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION COLOMBIANA DE MECANICOS DE AVIACION Subdirectiva Zipaquirá",
    sector: "servicios",
    city: "Zipaquirá, Cundinamarca",
    keywords: "asociacion colombiana de mecanicos de aviacion servicios cundinamarca zipaquirá gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Zipaquirá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION COLOMBIANA DE MECANICOS DE AVIACION Subdirectiva Zipaquirá.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE BANCARIOS DE COLOMBIA Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "asociacion de bancarios de colombia industria antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE BANCARIOS DE COLOMBIA Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACIÓN DE BANCARIOS DE COLOMBIA Subdirectiva Tuluá",
    sector: "industria",
    city: "Tuluá, Valle del Cauca",
    keywords: "asociación de bancarios de colombia industria valle del cauca tuluá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACIÓN DE BANCARIOS DE COLOMBIA Subdirectiva Tuluá.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE CAMPESINOS TRABAJADORES AGRICOLAS Y DEFENSORES DEL MEDIO AMBIENTE Subdirectiva Puerto Lleras",
    sector: "agro",
    city: "Puerto Lleras, Meta",
    keywords: "asociacion de campesinos trabajadores agricolas y defensores del medio ambiente agro meta puerto lleras gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector agropecuario con presencia en Puerto Lleras, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE CAMPESINOS TRABAJADORES AGRICOLAS Y DEFENSORES DEL MEDIO AMBIENTE Subdirectiva Puerto Lleras.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE CHOFERES DE MAGANGUE Subdirectiva Magangué",
    sector: "servicios",
    city: "Magangué, Bolívar",
    keywords: "asociacion de choferes de magangue servicios bolívar magangué gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Magangué, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE CHOFERES DE MAGANGUE Subdirectiva Magangué.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE DIRECTIVOS DOCENTES DE COLOMBIA Subdirectiva Bucaramanga",
    sector: "educacion",
    city: "Bucaramanga, Santander",
    keywords: "asociacion de directivos docentes de colombia educacion santander bucaramanga gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE DIRECTIVOS DOCENTES DE COLOMBIA Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE ELECTRICISTAS CONTRATISTAS DE ANTIOQUIA Subdirectiva Medellín",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "asociacion de electricistas contratistas de antioquia servicios antioquia medellín gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE ELECTRICISTAS CONTRATISTAS DE ANTIOQUIA Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE EMPLEADOS BANCARIOS",
    sector: "industria",
    city: "Cereté, Córdoba",
    keywords: "asociacion de empleados bancarios industria córdoba cereté industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Cereté, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE EMPLEADOS BANCARIOS.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE EMPLEADOS BANCARIOS SUBDIRECTIVA SECCIONAL CAUCASIA",
    sector: "industria",
    city: "Caucasia, Antioquia",
    keywords: "asociacion de empleados bancarios subdirectiva seccional caucasia industria antioquia caucasia industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Caucasia, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE EMPLEADOS BANCARIOS SUBDIRECTIVA SECCIONAL CAUCASIA.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE EMPLEADOS BANCARIOS Y AFINES Subdirectiva Montería",
    sector: "industria",
    city: "Montería, Córdoba",
    keywords: "asociacion de empleados bancarios y afines industria córdoba montería industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Montería, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE EMPLEADOS BANCARIOS Y AFINES Subdirectiva Montería.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE EMPLEADOS BANCARIOS Y AFINES Subdirectiva Sincelejo",
    sector: "industria",
    city: "Sincelejo, Sucre",
    keywords: "asociacion de empleados bancarios y afines industria sucre sincelejo industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE EMPLEADOS BANCARIOS Y AFINES Subdirectiva Sincelejo.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE EMPLEADOS DE COMPAÑIAS DE SEGUROS REASEGUROS Y FILIALES Subdirectiva Soacha",
    sector: "industria",
    city: "Soacha, Cundinamarca",
    keywords: "asociacion de empleados de compañias de seguros reaseguros y filiales industria cundinamarca soacha industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE EMPLEADOS DE COMPAÑIAS DE SEGUROS REASEGUROS Y FILIALES Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE EMPLEADOS OFICIALES DEL MUNICIPIO DE MEDELLIN Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "asociacion de empleados oficiales del municipio de medellin publico antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE EMPLEADOS OFICIALES DEL MUNICIPIO DE MEDELLIN Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE EMPLEADOS OFICIALES DEL MUNICIPIO DE MEDELLIN Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "asociacion de empleados oficiales del municipio de medellin publico antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE EMPLEADOS OFICIALES DEL MUNICIPIO DE MEDELLIN Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE INSTITUTORES DE ANTIOQUIA Subdirectiva Medellín",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "asociacion de institutores de antioquia servicios antioquia medellín gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE INSTITUTORES DE ANTIOQUIA Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE LA SUBDIRECTIVA O COMITE SECCIONAL Subdirectiva Envigado",
    sector: "industria",
    city: "Envigado, Antioquia",
    keywords: "asociacion de la subdirectiva o comite seccional industria antioquia envigado industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Envigado, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE LA SUBDIRECTIVA O COMITE SECCIONAL Subdirectiva Envigado.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACIÓN DE MAESTROS Y TRABAJADORES DE LA EDUCACION DE COLOMBIA -RIOHACHA",
    sector: "educacion",
    city: "Riohacha, la Guajira",
    keywords: "asociación de maestros y trabajadores de la educacion de colombia -riohacha educacion la guajira riohacha gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Riohacha, la Guajira, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACIÓN DE MAESTROS Y TRABAJADORES DE LA EDUCACION DE COLOMBIA -RIOHACHA.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE PEQUEÑOS COMERCIANTES",
    sector: "servicios",
    city: "Santa Rosa de Cabal, Risaralda",
    keywords: "asociacion de pequeños comerciantes servicios risaralda santa rosa de cabal gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Santa Rosa de Cabal, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE PEQUEÑOS COMERCIANTES.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE PERSONAL DE ORGANISMOS DE CONTROL DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "asociacion de personal de organismos de control de colombia servicios bogotá d.c. bogotá d.c. gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE PERSONAL DE ORGANISMOS DE CONTROL DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE PERSONAL DE ORGANISMOS DE CONTROL DE COLOMBIA Subdirectiva Turbo",
    sector: "industria",
    city: "Turbo, Antioquia",
    keywords: "asociacion de personal de organismos de control de colombia industria antioquia turbo industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Turbo, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE PERSONAL DE ORGANISMOS DE CONTROL DE COLOMBIA Subdirectiva Turbo.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE PROFESORES DE LA UNIVERSIDAD LIBRE Subdirectiva Pereira",
    sector: "educacion",
    city: "Pereira, Risaralda",
    keywords: "asociacion de profesores de la universidad libre educacion risaralda pereira gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Pereira, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE PROFESORES DE LA UNIVERSIDAD LIBRE Subdirectiva Pereira.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVICIO PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA",
    sector: "publico",
    city: "Puerto Carreño, Vichada",
    keywords: "asociacion de servicio publicos de los organos de control de colombia publico vichada puerto carreño industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Puerto Carreño, Vichada, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVICIO PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LA PERSONERIA DE MEDELLIN Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "asociacion de servidores publicos de la personeria de medellin publico antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LA PERSONERIA DE MEDELLIN Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA",
    sector: "publico",
    city: "Duitama, Boyacá",
    keywords: "asociacion de servidores publicos de los organos de control de colombia publico boyacá duitama industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Duitama, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA - SUBDIRECTIVA AN... Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "asociacion de servidores publicos de los organos de control de colombia - subdirectiva antioquia publico antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación col",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA - SUBDIRECTIVA AN... Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "asociacion de servidores publicos de los organos de control de colombia publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asociacion de servidores publicos de los organos de control de colombia publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asociacion de servidores publicos de los organos de control de colombia publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Manizales",
    sector: "publico",
    city: "Manizales, Caldas",
    keywords: "asociacion de servidores publicos de los organos de control de colombia publico caldas manizales industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Manizales.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Pasto",
    sector: "publico",
    city: "Pasto, Nariño",
    keywords: "asociacion de servidores publicos de los organos de control de colombia publico nariño pasto industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Pasto.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Turbaco",
    sector: "publico",
    city: "Turbaco, Bolívar",
    keywords: "asociacion de servidores publicos de los organos de control de colombia publico bolívar turbaco industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Turbaco, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DE LOS ORGANOS DE CONTROL DE COLOMBIA Subdirectiva Turbaco.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS DEL CONGRESO DE LA REPUBLICA DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asociacion de servidores publicos del congreso de la republica de colombia publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS DEL CONGRESO DE LA REPUBLICA DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE SERVIDORES PUBLICOS EN DEFENSA DEL TRABAJO DECENTE Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asociacion de servidores publicos en defensa del trabajo decente publico bogotá d.c. bogotá d.c. oficios varios subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE SERVIDORES PUBLICOS EN DEFENSA DEL TRABAJO DECENTE Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TECNICOS ELECTRICISTAS DE SANTANDER Subdirectiva Bucaramanga",
    sector: "servicios",
    city: "Bucaramanga, Santander",
    keywords: "asociacion de tecnicos electricistas de santander servicios santander bucaramanga gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TECNICOS ELECTRICISTAS DE SANTANDER Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES CAMPESINOS DE CAJIBIO Subdirectiva Cajibío",
    sector: "agro",
    city: "Cajibío, Cauca",
    keywords: "asociacion de trabajadores campesinos de cajibio agro cauca cajibío gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector agropecuario con presencia en Cajibío, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES CAMPESINOS DE CAJIBIO Subdirectiva Cajibío.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES CAMPESINOS DE HUILA ATCH SUBDIRECTIVA BARAYA",
    sector: "agro",
    city: "Baraya, Huila",
    keywords: "asociacion de trabajadores campesinos de huila atch subdirectiva baraya agro huila baraya gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector agropecuario con presencia en Baraya, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES CAMPESINOS DE HUILA ATCH SUBDIRECTIVA BARAYA.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES CAMPESINOS DEL HUILA ATH SUBDIRECTIVA SAN MIGUEL -LA PLATA",
    sector: "agro",
    city: "la Plata, Huila",
    keywords: "asociacion de trabajadores campesinos del huila ath subdirectiva san miguel -la plata agro huila la plata gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector agropecuario con presencia en la Plata, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES CAMPESINOS DEL HUILA ATH SUBDIRECTIVA SAN MIGUEL -LA PLATA.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES CAMPESINOS DEL TOLIMA Subdirectiva Planadas",
    sector: "agro",
    city: "Planadas, Tolima",
    keywords: "asociacion de trabajadores campesinos del tolima agro tolima planadas gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector agropecuario con presencia en Planadas, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES CAMPESINOS DEL TOLIMA Subdirectiva Planadas.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DE LA CAJA DE COMPENSACION FAMILIAR DE ANTIOQUIA",
    sector: "servicios",
    city: "la Estrella, Antioquia",
    keywords: "asociacion de trabajadores de la caja de compensacion familiar de antioquia servicios antioquia la estrella empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en la Estrella, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DE LA CAJA DE COMPENSACION FAMILIAR DE ANTIOQUIA.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACIÓN DE TRABAJADORES DE LOS FONDOS DE PENSIONES DEL SECTOR BANCARIO Y FINANCIERO Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "asociación de trabajadores de los fondos de pensiones del sector bancario y financiero industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colect",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACIÓN DE TRABAJADORES DE LOS FONDOS DE PENSIONES DEL SECTOR BANCARIO Y FINANCIERO Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DE LOS FONDOS DE PENSIONES DEL SECTOR BANCARIO Y FINANCIERO Subdirectiva Chía",
    sector: "industria",
    city: "Chía, Cundinamarca",
    keywords: "asociacion de trabajadores de los fondos de pensiones del sector bancario y financiero industria cundinamarca chía industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Chía, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DE LOS FONDOS DE PENSIONES DEL SECTOR BANCARIO Y FINANCIERO Subdirectiva Chía.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DEL ESTADO",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "asociacion de trabajadores del estado publico antioquia medellín industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DEL ESTADO.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DEL SECTOR DE SERVICIOS ORGANIZACIONALES INSTITUCIONALES Y DE... Subdirectiva Bucaramanga",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "asociacion de trabajadores del sector de servicios organizacionales institucionales y de fomento empresarial industria santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindica",
    description: "Subdirectiva sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DEL SECTOR DE SERVICIOS ORGANIZACIONALES INSTITUCIONALES Y DE... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "asociacion de trabajadores del sector financiero colombiano industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DEL SISTEMA EDUCATIVO NACIONAL UNIVERSITARIO Y DE TICS DEL APR... Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "asociacion de trabajadores del sistema educativo nacional universitario y de tics del aprendizaje publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DEL SISTEMA EDUCATIVO NACIONAL UNIVERSITARIO Y DE TICS DEL APR... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DEL SISTEMA NACIONAL DE SALUD SEGURIDAD SOCIAL Y SANEAMIENTO A... Subdirectiva Bucaramanga",
    sector: "salud",
    city: "Bucaramanga, Santander",
    keywords: "asociacion de trabajadores del sistema nacional de salud seguridad social y saneamiento ambiental salud santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación c",
    description: "Subdirectiva sindical del sector salud con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DEL SISTEMA NACIONAL DE SALUD SEGURIDAD SOCIAL Y SANEAMIENTO A... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DEL SISTEMA NACIONAL DE SALUD SEGURIDAD SOCIAL Y SANEAMIENTO A... Subdirectiva Bucaramanga",
    sector: "salud",
    city: "Bucaramanga, Santander",
    keywords: "asociacion de trabajadores del sistema nacional de salud seguridad social y saneamiento ambiental salud santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación c",
    description: "Subdirectiva sindical del sector salud con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DEL SISTEMA NACIONAL DE SALUD SEGURIDAD SOCIAL Y SANEAMIENTO A... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DEL SISTEMA NACIONAL DE TRANSPORTE Y TURISMO INTEGRAL Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "asociacion de trabajadores del sistema nacional de transporte y turismo integral publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DEL SISTEMA NACIONAL DE TRANSPORTE Y TURISMO INTEGRAL Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES DIRECTIVOS PROFESIONALES Y TECNICOS DE LAS EMPRESAS DE LA RAMA... Subdirectiva Bucaramanga",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "asociacion de trabajadores directivos profesionales y tecnicos de las empresas de la rama de actividad economica del recurso natural del petroleo los biocombustibles y sus derivados industria santander bucaramanga industria o por rama de actividad económica su",
    description: "Subdirectiva sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES DIRECTIVOS PROFESIONALES Y TECNICOS DE LAS EMPRESAS DE LA RAMA... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES INDEPENDIENTES Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "asociacion de trabajadores independientes industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES INDEPENDIENTES Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRABAJADORES INDEPENDIENTES Subdirectiva Cúcuta",
    sector: "industria",
    city: "Cúcuta, Norte de Santander",
    keywords: "asociacion de trabajadores independientes industria norte de santander cúcuta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRABAJADORES INDEPENDIENTES Subdirectiva Cúcuta.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DE TRBAJADORES DE LA EDUCACION DE LA GUAJIRA SUBDIRECTIVA MANAURE Subdirectiva Riohacha",
    sector: "educacion",
    city: "Riohacha, la Guajira",
    keywords: "asociacion de trbajadores de la educacion de la guajira subdirectiva manaure educacion la guajira riohacha gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Riohacha, la Guajira, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DE TRBAJADORES DE LA EDUCACION DE LA GUAJIRA SUBDIRECTIVA MANAURE Subdirectiva Riohacha.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION DEMOCRATICA DE EMPLEADOS DEL SECTOR BANCARIO Y FINANCIERO Subdirectiva Cali",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "asociacion democratica de empleados del sector bancario y financiero industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION DEMOCRATICA DE EMPLEADOS DEL SECTOR BANCARIO Y FINANCIERO Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION GREMIAL SINDICAL DE TRABAJADORES DE LA SALUD Subdirectiva Medellín",
    sector: "salud",
    city: "Medellín, Antioquia",
    keywords: "asociacion gremial sindical de trabajadores de la salud salud antioquia medellín gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION GREMIAL SINDICAL DE TRABAJADORES DE LA SALUD Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION LABORAL DE TRABAJADORES DE ACACIAS ALTA Subdirectiva Acacías",
    sector: "servicios",
    city: "Acacías, Meta",
    keywords: "asociacion laboral de trabajadores de acacias alta servicios meta acacías gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Acacías, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION LABORAL DE TRABAJADORES DE ACACIAS ALTA Subdirectiva Acacías.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE AGENTES DE SURAMERICANA DE SEGUROS Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "asociacion nacional de agentes de suramericana de seguros publico antioquia medellín gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE AGENTES DE SURAMERICANA DE SEGUROS Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE EMPLEADOS DE LA DEFENSORIA DEL PUEBLO Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asociacion nacional de empleados de la defensoria del pueblo publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE EMPLEADOS DE LA DEFENSORIA DEL PUEBLO Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE EMPLEADOS DE TRANSITO Y TRANSPORTE",
    sector: "publico",
    city: "Girardot, Cundinamarca",
    keywords: "asociacion nacional de empleados de transito y transporte publico cundinamarca girardot industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Girardot, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE EMPLEADOS DE TRANSITO Y TRANSPORTE.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE EMPLEADOS DE TRANSITO Y TRANSPORTE Subdirectiva Bello",
    sector: "publico",
    city: "Bello, Antioquia",
    keywords: "asociacion nacional de empleados de transito y transporte publico antioquia bello industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bello, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE EMPLEADOS DE TRANSITO Y TRANSPORTE Subdirectiva Bello.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE EMPLEADOS DE TRANSITO Y TRANSPORTE Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "asociacion nacional de empleados de transito y transporte publico bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE EMPLEADOS DE TRANSITO Y TRANSPORTE Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE EMPLEADOS DE TRANSITO Y TRANSPORTE Subdirectiva Floridablanca",
    sector: "publico",
    city: "Floridablanca, Santander",
    keywords: "asociacion nacional de empleados de transito y transporte publico santander floridablanca industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Floridablanca, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE EMPLEADOS DE TRANSITO Y TRANSPORTE Subdirectiva Floridablanca.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE EMPLEADOS DEL BANCO DE LA REPUBLICA Subdirectiva Manizales",
    sector: "publico",
    city: "Manizales, Caldas",
    keywords: "asociacion nacional de empleados del banco de la republica publico caldas manizales empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE EMPLEADOS DEL BANCO DE LA REPUBLICA Subdirectiva Manizales.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE EMPLEADOS DEL SECTOR FINANCIERO COOPERATIVO DE SEGUROS Y DE LOS FO... Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asociacion nacional de empleados del sector financiero cooperativo de seguros y de los fondos de ahorro vivienda y de pensiones publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo dig",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE EMPLEADOS DEL SECTOR FINANCIERO COOPERATIVO DE SEGUROS Y DE LOS FO... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE ENFERMERAS DE COLOMBIA SECCIONAL HUILA Subdirectiva Neiva",
    sector: "salud",
    city: "Neiva, Huila",
    keywords: "asociacion nacional de enfermeras de colombia seccional huila salud huila neiva gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE ENFERMERAS DE COLOMBIA SECCIONAL HUILA Subdirectiva Neiva.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE ENFERMERAS DE COLOMBIA Subdirectiva Cartagena",
    sector: "salud",
    city: "Cartagena, Bolívar",
    keywords: "asociacion nacional de enfermeras de colombia salud bolívar cartagena gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE ENFERMERAS DE COLOMBIA Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE TRABAJADORES ADMINISTRATIVOS CONTRATISTAS TECNICOS PROFESIONALES I... Subdirectiva Barranquilla",
    sector: "educacion",
    city: "Barranquilla, Atlántico",
    keywords: "asociacion nacional de trabajadores administrativos contratistas tecnicos profesionales instructores y docentes de colombia educacion atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno",
    description: "Subdirectiva sindical del sector educación con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE TRABAJADORES ADMINISTRATIVOS CONTRATISTAS TECNICOS PROFESIONALES I... Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LAS CERVEZAS MALTAS REFRESCOS Y BE... Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asociacion nacional de trabajadores de la industria de las cervezas maltas refrescos y bebidas publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LAS CERVEZAS MALTAS REFRESCOS Y BE... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LAS CERVEZAS MALTAS REFRESCOS Y BE... Subdirectiva Zipaquirá",
    sector: "publico",
    city: "Zipaquirá, Cundinamarca",
    keywords: "asociacion nacional de trabajadores de la industria de las cervezas maltas refrescos y bebidas publico cundinamarca zipaquirá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación c",
    description: "Subdirectiva sindical del sector público con presencia en Zipaquirá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LAS CERVEZAS MALTAS REFRESCOS Y BE... Subdirectiva Zipaquirá.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE TRABAJADORES DE LA SALUD HUMANA Y ASISTENCIA SOCIAL Subdirectiva Cartagena",
    sector: "salud",
    city: "Cartagena, Bolívar",
    keywords: "asociacion nacional de trabajadores de la salud humana y asistencia social salud bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE TRABAJADORES DE LA SALUD HUMANA Y ASISTENCIA SOCIAL Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE TRABAJADORES DE LA SEGURIDAD Subdirectiva Ibagué",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "asociacion nacional de trabajadores de la seguridad publico tolima ibagué industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE TRABAJADORES DE LA SEGURIDAD Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE TRABAJADORES DE LA SEGURIDAD Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "asociacion nacional de trabajadores de la seguridad publico meta villavicencio industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE TRABAJADORES DE LA SEGURIDAD Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE TRABAJADORES DE LAS EMPRESAS PRODUCTORAS Y DISTRIBUIDORAS DE GASEOSAS Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "asociacion nacional de trabajadores de las empresas productoras y distribuidoras de gaseosas publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación cole",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE TRABAJADORES DE LAS EMPRESAS PRODUCTORAS Y DISTRIBUIDORAS DE GASEOSAS Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL DE TRABAJADORES DEL GRUPO SALUDCOOP Y OTRAS EMPRESAS Subdirectiva Espinal",
    sector: "salud",
    city: "Espinal, Tolima",
    keywords: "asociacion nacional de trabajadores del grupo saludcoop y otras empresas salud tolima espinal industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Espinal, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL DE TRABAJADORES DEL GRUPO SALUDCOOP Y OTRAS EMPRESAS Subdirectiva Espinal.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVICIOS PUBLICOS DE LA SALUD Y LA SEGURI... Subdirectiva Medellín",
    sector: "salud",
    city: "Medellín, Antioquia",
    keywords: "asociacion nacional sindical de trabajadores y servicios publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindic",
    description: "Subdirectiva sindical del sector salud con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVICIOS PUBLICOS DE LA SALUD Y LA SEGURI... Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR...",
    sector: "salud",
    city: "Pasto, Nariño",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud nariño pasto industria o por rama de actividad económica comité seccional sindicato organización sindica",
    description: "Comité sindical del sector salud con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR....")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR...",
    sector: "salud",
    city: "San Juan Nepomuceno, Bolívar",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud bolívar san juan nepomuceno industria o por rama de actividad económica comité seccional sindicato organ",
    description: "Comité sindical del sector salud con presencia en San Juan Nepomuceno, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR....")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Barranquilla",
    sector: "salud",
    city: "Barranquilla, Atlántico",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización s",
    description: "Subdirectiva sindical del sector salud con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Caldas",
    sector: "salud",
    city: "Caldas, Antioquia",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud antioquia caldas industria o por rama de actividad económica subdirectiva sindicato organización sindica",
    description: "Subdirectiva sindical del sector salud con presencia en Caldas, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Caldas.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Cali",
    sector: "salud",
    city: "Cali, Valle del Cauca",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sin",
    description: "Subdirectiva sindical del sector salud con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Cali",
    sector: "salud",
    city: "Cali, Valle del Cauca",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sin",
    description: "Subdirectiva sindical del sector salud con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Caqueza",
    sector: "salud",
    city: "Caqueza, Cundinamarca",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud cundinamarca caqueza industria o por rama de actividad económica subdirectiva sindicato organización sin",
    description: "Subdirectiva sindical del sector salud con presencia en Caqueza, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Caqueza.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Leticia",
    sector: "salud",
    city: "Leticia, Amazonas",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud amazonas leticia industria o por rama de actividad económica subdirectiva sindicato organización sindica",
    description: "Subdirectiva sindical del sector salud con presencia en Leticia, Amazonas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Leticia.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva María la Baja",
    sector: "salud",
    city: "María la Baja, Bolívar",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud bolívar maría la baja industria o por rama de actividad económica subdirectiva sindicato organización si",
    description: "Subdirectiva sindical del sector salud con presencia en María la Baja, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva María la Baja.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Mompós",
    sector: "salud",
    city: "Mompós, Bolívar",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud bolívar mompós industria o por rama de actividad económica subdirectiva sindicato organización sindical",
    description: "Subdirectiva sindical del sector salud con presencia en Mompós, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Mompós.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Pereira",
    sector: "salud",
    city: "Pereira, Risaralda",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud risaralda pereira industria o por rama de actividad económica subdirectiva sindicato organización sindic",
    description: "Subdirectiva sindical del sector salud con presencia en Pereira, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Pereira.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Puerto Carreño",
    sector: "salud",
    city: "Puerto Carreño, Vichada",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud vichada puerto carreño industria o por rama de actividad económica subdirectiva sindicato organización s",
    description: "Subdirectiva sindical del sector salud con presencia en Puerto Carreño, Vichada, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Puerto Carreño.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Puerto Rondón",
    sector: "salud",
    city: "Puerto Rondón, Arauca",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud arauca puerto rondón industria o por rama de actividad económica subdirectiva sindicato organización sin",
    description: "Subdirectiva sindical del sector salud con presencia en Puerto Rondón, Arauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Puerto Rondón.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Soacha",
    sector: "salud",
    city: "Soacha, Cundinamarca",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud y la seguridad social integral y servicios complementarios de colombia salud cundinamarca soacha industria o por rama de actividad económica subdirectiva sindicato organización sind",
    description: "Subdirectiva sindical del sector salud con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD Y LA SEGUR... Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PÚBLICOS DE LA SALUD Y SEGURIDA... Subdirectiva Andalucía",
    sector: "salud",
    city: "Andalucía, Valle del Cauca",
    keywords: "asociacion nacional sindical de trabajadores y servidores públicos de la salud y seguridad social integral y servicios complementarios de colombia anthoc- andalucia salud valle del cauca andalucía industria o por rama de actividad económica subdirectiva sindic",
    description: "Subdirectiva sindical del sector salud con presencia en Andalucía, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PÚBLICOS DE LA SALUD Y SEGURIDA... Subdirectiva Andalucía.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD, SEGURIDAD... Subdirectiva Trujillo",
    sector: "salud",
    city: "Trujillo, Valle del Cauca",
    keywords: "asociacion nacional sindical de trabajadores y servidores publicos de la salud seguridad social integral y servicios complementarios de colombia salud valle del cauca trujillo industria o por rama de actividad económica subdirectiva sindicato organización sind",
    description: "Subdirectiva sindical del sector salud con presencia en Trujillo, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION NACIONAL SINDICAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA SALUD, SEGURIDAD... Subdirectiva Trujillo.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL ARAUCANA DE SEGURIDAD (SUBDIRECTIVA SARAVENA )",
    sector: "servicios",
    city: "Saravena, Arauca",
    keywords: "asociacion sindical araucana de seguridad subdirectiva saravena servicios arauca saravena gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Saravena, Arauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL ARAUCANA DE SEGURIDAD (SUBDIRECTIVA SARAVENA ).")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL COLOMBIANA DE SERVIDORES PUBLICOS Y DE LOS SERVICIOS PUBLICOS ASTDEMP... Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "asociacion sindical colombiana de servidores publicos y de los servicios publicos astdemp subdirectiva cundinmarca publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sin",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL COLOMBIANA DE SERVIDORES PUBLICOS Y DE LOS SERVICIOS PUBLICOS ASTDEMP... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE DOCENTES DE LA UNIVERSIDAD DE CUNDINAMARCA Subdirectiva Fusagasugá",
    sector: "educacion",
    city: "Fusagasugá, Cundinamarca",
    keywords: "asociacion sindical de docentes de la universidad de cundinamarca educacion cundinamarca fusagasugá gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Fusagasugá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE DOCENTES DE LA UNIVERSIDAD DE CUNDINAMARCA Subdirectiva Fusagasugá.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACIÓN SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO",
    sector: "industria",
    city: "Ciénaga, Magdalena",
    keywords: "asociación sindical de empleados bancarios del sector financiero colombiano industria magdalena ciénaga industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Ciénaga, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACIÓN SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO SECCIONAL VIL... Subdirectiva Villavicencio",
    sector: "industria",
    city: "Villavicencio, Meta",
    keywords: "asociacion sindical de empleados bancarios del sector financiero colombiano seccional villavicencio industria meta villavicencio industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociació",
    description: "Subdirectiva sindical del sector industrial con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO SECCIONAL VIL... Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Buenaventura",
    sector: "industria",
    city: "Buenaventura, Valle del Cauca",
    keywords: "asociacion sindical de empleados bancarios del sector financiero colombiano industria valle del cauca buenaventura industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Buenaventura, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Buenaventura.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Cartagena",
    sector: "industria",
    city: "Cartagena, Bolívar",
    keywords: "asociacion sindical de empleados bancarios del sector financiero colombiano industria bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Girardot",
    sector: "industria",
    city: "Girardot, Cundinamarca",
    keywords: "asociacion sindical de empleados bancarios del sector financiero colombiano industria cundinamarca girardot industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Girardot, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Girardot.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "asociacion sindical de empleados bancarios del sector financiero colombiano industria antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Mosquera",
    sector: "industria",
    city: "Mosquera, Cundinamarca",
    keywords: "asociacion sindical de empleados bancarios del sector financiero colombiano industria cundinamarca mosquera industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Mosquera.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Neiva",
    sector: "industria",
    city: "Neiva, Huila",
    keywords: "asociacion sindical de empleados bancarios del sector financiero colombiano industria huila neiva industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Neiva.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Santa Marta",
    sector: "industria",
    city: "Santa Marta, Magdalena",
    keywords: "asociacion sindical de empleados bancarios del sector financiero colombiano industria magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE EMPLEADOS BANCARIOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE FUNCIONARIOS DE LA AERONAUTICA CIVIL",
    sector: "servicios",
    city: "Rionegro, Antioquia",
    keywords: "asociacion sindical de funcionarios de la aeronautica civil servicios antioquia rionegro empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Rionegro, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE FUNCIONARIOS DE LA AERONAUTICA CIVIL.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE FUNCIONARIOS DE LA UNIVERSIDAD SURCOLOMBIANA Subdirectiva Neiva",
    sector: "educacion",
    city: "Neiva, Huila",
    keywords: "asociacion sindical de funcionarios de la universidad surcolombiana educacion huila neiva empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE FUNCIONARIOS DE LA UNIVERSIDAD SURCOLOMBIANA Subdirectiva Neiva.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE MONTACARGUISTAS Y OPERARIOS DE AUTOELEVADORES DE COLOMBIA Subdirectiva Zipaquirá",
    sector: "servicios",
    city: "Zipaquirá, Cundinamarca",
    keywords: "asociacion sindical de montacarguistas y operarios de autoelevadores de colombia servicios cundinamarca zipaquirá gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Zipaquirá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE MONTACARGUISTAS Y OPERARIOS DE AUTOELEVADORES DE COLOMBIA Subdirectiva Zipaquirá.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE PENITENCIARIOS Y CARCELARIOS Subdirectiva Villavicencio",
    sector: "servicios",
    city: "Villavicencio, Meta",
    keywords: "asociacion sindical de penitenciarios y carcelarios servicios meta villavicencio gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE PENITENCIARIOS Y CARCELARIOS Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE PROFESIONALES DE ECOPETROL S.A ASPEC Subdirectiva Piedecuesta",
    sector: "industria",
    city: "Piedecuesta, Santander",
    keywords: "asociacion sindical de profesionales de ecopetrol s.a aspec industria santander piedecuesta gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Piedecuesta, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE PROFESIONALES DE ECOPETROL S.A ASPEC Subdirectiva Piedecuesta.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE PROFESIONALES DE ECOPETROL S.A SUBDIRECTIVA BOGOTA Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "asociacion sindical de profesionales de ecopetrol s.a subdirectiva bogota industria bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE PROFESIONALES DE ECOPETROL S.A SUBDIRECTIVA BOGOTA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE PROFESIONALES Y ESPECIALISTAS DE COLOMBIA ASSPROTESP Subdirectiva Valledupar",
    sector: "servicios",
    city: "Valledupar, Cesar",
    keywords: "asociacion sindical de profesionales y especialistas de colombia assprotesp servicios cesar valledupar gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Valledupar, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE PROFESIONALES Y ESPECIALISTAS DE COLOMBIA ASSPROTESP Subdirectiva Valledupar.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE PROFESORES UNIVERSITARIOS SECIONAL MAGDALENA Subdirectiva Santa Marta",
    sector: "educacion",
    city: "Santa Marta, Magdalena",
    keywords: "asociacion sindical de profesores universitarios secional magdalena educacion magdalena santa marta gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE PROFESORES UNIVERSITARIOS SECIONAL MAGDALENA Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE PROFESORES UNIVERSITARIOS Subdirectiva Riohacha",
    sector: "educacion",
    city: "Riohacha, la Guajira",
    keywords: "asociacion sindical de profesores universitarios educacion la guajira riohacha gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Riohacha, la Guajira, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE PROFESORES UNIVERSITARIOS Subdirectiva Riohacha.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE SERVIDORES PUBLICOS REUBICADOS POR SALUD DEL INSTITUTO NACIONAL PE... Subdirectiva Bogotá D.C.",
    sector: "salud",
    city: "Bogotá D.C.",
    keywords: "asociacion sindical de servidores publicos reubicados por salud del instituto nacional penitenciario y carcelario salud bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE SERVIDORES PUBLICOS REUBICADOS POR SALUD DEL INSTITUTO NACIONAL PE... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE TELEOPERADORES COLOMBIA Subdirectiva Pereira",
    sector: "industria",
    city: "Pereira, Risaralda",
    keywords: "asociacion sindical de teleoperadores colombia industria risaralda pereira industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Pereira, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE TELEOPERADORES COLOMBIA Subdirectiva Pereira.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE TRABAJADORES DE ECOPETROL S.A Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "asociacion sindical de trabajadores de ecopetrol s.a industria bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE TRABAJADORES DE ECOPETROL S.A Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE TRABAJADORES DE EMTELCO SA Subdirectiva Medellín",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "asociacion sindical de trabajadores de emtelco sa servicios antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE TRABAJADORES DE EMTELCO SA Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE TRABAJADORES DE LA CONTRALORIA GENERAL DE LA REPUBLICA Subdirectiva Arauca",
    sector: "publico",
    city: "Arauca",
    keywords: "asociacion sindical de trabajadores de la contraloria general de la republica publico arauca arauca empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Arauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE TRABAJADORES DE LA CONTRALORIA GENERAL DE LA REPUBLICA Subdirectiva Arauca.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE TRABAJADORES DE LA CONTRALORIA GENERAL DE LA REPUBLICA Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "asociacion sindical de trabajadores de la contraloria general de la republica publico atlántico barranquilla empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE TRABAJADORES DE LA CONTRALORIA GENERAL DE LA REPUBLICA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DE TRABAJADORES DE SINALTRAMEMCOL E INDUSTRIAS DE ACERO IDEACE Subdirectiva Itagui",
    sector: "industria",
    city: "Itagui, Antioquia",
    keywords: "asociacion sindical de trabajadores de sinaltramemcol e industrias de acero ideace industria antioquia itagui empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Itagui, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DE TRABAJADORES DE SINALTRAMEMCOL E INDUSTRIAS DE ACERO IDEACE Subdirectiva Itagui.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL DEL SECTOR DEFENSA Subdirectiva Madrid",
    sector: "industria",
    city: "Madrid, Cundinamarca",
    keywords: "asociacion sindical del sector defensa industria cundinamarca madrid industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Madrid, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL DEL SECTOR DEFENSA Subdirectiva Madrid.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL GRANOS DE MOSTAZA DEL CORREGIMIENTO DE MOLINERO MINICIPIO DE SABANALA... Subdirectiva Sabanalarga",
    sector: "servicios",
    city: "Sabanalarga, Atlántico",
    keywords: "asociacion sindical granos de mostaza del corregimiento de molinero minicipio de sabanalarga atlantico servicios atlántico sabanalarga gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Sabanalarga, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL GRANOS DE MOSTAZA DEL CORREGIMIENTO DE MOLINERO MINICIPIO DE SABANALA... Subdirectiva Sabanalarga.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL GREMIAL DE OFICIOS ADMINISTRATIVOS Y COMPLEMENTARIOS DEL ORIENTE COLO... Subdirectiva Cúcuta",
    sector: "servicios",
    city: "Cúcuta, Norte de Santander",
    keywords: "asociacion sindical gremial de oficios administrativos y complementarios del oriente colombiano servicios norte de santander cúcuta gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL GREMIAL DE OFICIOS ADMINISTRATIVOS Y COMPLEMENTARIOS DEL ORIENTE COLO... Subdirectiva Cúcuta.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI...",
    sector: "publico",
    city: "Fusagasugá, Cundinamarca",
    keywords: "asociacion sindical unitaria de servidores publicos del sistema penitenciario y carcelario colombiano publico cundinamarca fusagasugá empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Fusagasugá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI....")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI...",
    sector: "publico",
    city: "la Mesa, Cundinamarca",
    keywords: "asociacion sindical unitaria de servidores publicos del sistema penitenciario y carcelario colombiano utp comite la mesa publico cundinamarca la mesa empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en la Mesa, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI....")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI...",
    sector: "publico",
    city: "Purificación, Tolima",
    keywords: "asociacion sindical unitaria de servidores publicos del sistema penitenciario y carcelario colombiano publico tolima purificación empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Purificación, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI....")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI...",
    sector: "publico",
    city: "Yarumal, Antioquia",
    keywords: "asociacion sindical unitaria de servidores publicos del sistema penitenciario y carcelario colombiano publico antioquia yarumal empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Yarumal, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI....")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI... Subdirectiva Bello",
    sector: "publico",
    city: "Bello, Antioquia",
    keywords: "asociacion sindical unitaria de servidores publicos del sistema penitenciario y carcelario colombiano publico antioquia bello empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bello, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI... Subdirectiva Bello.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI... Subdirectiva Soacha",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "asociacion sindical unitaria de servidores publicos del sistema penitenciario y carcelario colombiano publico cundinamarca soacha empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACION SINDICAL UNITARIA DE SERVIDORES PUBLICOS DEL SISTEMA PENITENCIARIO Y CARCELARI... Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "ASOCIACOION COLOMBIANA DE EMPLEADOS BANCARIOS SECCIONAL BELLO",
    sector: "servicios",
    city: "Bello, Antioquia",
    keywords: "asociacoion colombiana de empleados bancarios seccional bello servicios antioquia bello empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bello, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCIACOION COLOMBIANA DE EMPLEADOS BANCARIOS SECCIONAL BELLO.")}`
  },
  {
    cfc: 0,
    name: "ASOCOLCIENCIAS",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "asocolciencias asociacion de trabajadores de colciencias servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCOLCIENCIAS.")}`
  },
  {
    cfc: 0,
    name: "ASOCOLMEDI",
    sector: "salud",
    city: "Popayán, Cauca",
    keywords: "asocolmedi asociacion sindical gremial de medicos de colombia salud cauca popayán gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Popayán, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCOLMEDI.")}`
  },
  {
    cfc: 0,
    name: "ASOCORDILLERA",
    sector: "publico",
    city: "Suárez, Cauca",
    keywords: "asocordillera asociacion de trabajadores campesinos de la cordillera del municipio de suarez departamento del cauca publico cauca suárez gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Suárez, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOCORDILLERA.")}`
  },
  {
    cfc: 0,
    name: "ASODEGUA Subdirectiva Hatonuevo",
    sector: "servicios",
    city: "Hatonuevo, la Guajira",
    keywords: "asodegua servicios la guajira hatonuevo gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Hatonuevo, la Guajira, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASODEGUA Subdirectiva Hatonuevo.")}`
  },
  {
    cfc: 0,
    name: "ASODIAN",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "asodian asociacion sindical de funcionarios de la dian publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASODIAN.")}`
  },
  {
    cfc: 0,
    name: "ASOEXPRESS",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "asoexpress asociacion de trabajadores de consorcio express sas servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOEXPRESS.")}`
  },
  {
    cfc: 0,
    name: "ASOFORPAZ",
    sector: "publico",
    city: "la Unión, Nariño",
    keywords: "asoforpaz asociacion de trabajadores campesinas y campesinos del municipio de policarpa forjadores de paz publico nariño la unión gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en la Unión, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOFORPAZ.")}`
  },
  {
    cfc: 0,
    name: "ASOGAITANIA Subdirectiva Planadas",
    sector: "servicios",
    city: "Planadas, Tolima",
    keywords: "asogaitania servicios tolima planadas gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Planadas, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOGAITANIA Subdirectiva Planadas.")}`
  },
  {
    cfc: 0,
    name: "ASOGRECATH",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "asogrecath asociacion gremial de cardiologos intervencionistas servicios antioquia medellín gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOGRECATH.")}`
  },
  {
    cfc: 0,
    name: "ASOGREF",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "asogref asociacion gremial de electrofisiologia cardiovascular servicios bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOGREF.")}`
  },
  {
    cfc: 0,
    name: "ASOMES",
    sector: "publico",
    city: "la Mesa, Cundinamarca",
    keywords: "asomes asociacion nacional de trabajadores informales e independientes de cundinamarca publico cundinamarca la mesa gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en la Mesa, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOMES.")}`
  },
  {
    cfc: 0,
    name: "ASOORIENTADORES SOCIALES",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "asoorientadores sociales asociacion nacional sindical de orientadoras es sociales de colombia de empresas publicas privadas mixtas dependientes e independientes y afines publico cundinamarca soacha industria o por rama de actividad económica directiva principa",
    description: "Organización sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOORIENTADORES SOCIALES.")}`
  },
  {
    cfc: 0,
    name: "ASOPAENBO",
    sector: "servicios",
    city: "la Dorada, Caldas",
    keywords: "asopaenbo sindicato de trabajadores independientes de hoteles restaurantes cafes casas de eventos casinos bares y discotecas servicios caldas la dorada gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colec",
    description: "Organización sindical del sector servicios con presencia en la Dorada, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOPAENBO.")}`
  },
  {
    cfc: 0,
    name: "ASOPORVENIR",
    sector: "publico",
    city: "Palestina, Caldas",
    keywords: "asoporvenir asociacion sindical de trabajadores campesinos de la vereda el retiro corregimiento de arauca municipio de palestina departamento de caldas publico caldas palestina gremio directiva principal sindicato organización sindical trabajo digno asesoría s",
    description: "Organización sindical del sector público con presencia en Palestina, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOPORVENIR.")}`
  },
  {
    cfc: 0,
    name: "ASOPROPAZ",
    sector: "publico",
    city: "Ariguaní, Magdalena",
    keywords: "asopropaz asociacion de productores de paz asopropaz corregimiento de pueblo nuevo municipio de ariguani barrio san tropel publico magdalena ariguaní gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colecti",
    description: "Organización sindical del sector público con presencia en Ariguaní, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOPROPAZ.")}`
  },
  {
    cfc: 0,
    name: "ASOSIMUAN",
    sector: "servicios",
    city: "Caucasia, Antioquia",
    keywords: "asosimuan asociacion sindical de mujeres de antioquia servicios antioquia caucasia gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Caucasia, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOSIMUAN.")}`
  },
  {
    cfc: 0,
    name: "ASOSMEDIC",
    sector: "salud",
    city: "Popayán, Cauca",
    keywords: "asosmedic asociacion sindical medica del cauda salud cauca popayán gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Popayán, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOSMEDIC.")}`
  },
  {
    cfc: 0,
    name: "ASOTASAO",
    sector: "industria",
    city: "Soledad, Atlántico",
    keywords: "asotasao asociacion de taxis sao hipodromo industria atlántico soledad industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Soledad, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOTASAO.")}`
  },
  {
    cfc: 0,
    name: "ASOTEC",
    sector: "servicios",
    city: "Cartagena, Bolívar",
    keywords: "asotec asociacion de tecnicos electricistas y afines del caribe servicios bolívar cartagena gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOTEC.")}`
  },
  {
    cfc: 0,
    name: "ASOTMAMS",
    sector: "publico",
    city: "San Sebastián, Cauca",
    keywords: "asotmams asociación de trabajadores campesinos del municipio de san sebastian departamento del cauca publico cauca san sebastián gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en San Sebastián, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOTMAMS.")}`
  },
  {
    cfc: 0,
    name: "ASOTRAMEC",
    sector: "industria",
    city: "Caucasia, Antioquia",
    keywords: "asotramec asociacion de trabajadores metalmecanicos de caucasia industria antioquia caucasia industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Caucasia, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOTRAMEC.")}`
  },
  {
    cfc: 0,
    name: "ASOTRAMOTOS",
    sector: "servicios",
    city: "Cúcuta, Norte de Santander",
    keywords: "asotramotos asociación sindical gremial de trabajadores en moto y afines por cuenta propia del norte de santander servicios norte de santander cúcuta gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colecti",
    description: "Organización sindical del sector servicios con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOTRAMOTOS.")}`
  },
  {
    cfc: 0,
    name: "ASOTRAPLASDECOL",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "asotraplasdecol asociacion de trabajadores de plasticos desechables de colombia servicios antioquia medellín empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOTRAPLASDECOL.")}`
  },
  {
    cfc: 0,
    name: "ASOTTECPROSA",
    sector: "servicios",
    city: "Sabanalarga, Atlántico",
    keywords: "asottecprosa asociación de técnicos tecnologos profesionales y obreros de sabanalarga servicios atlántico sabanalarga gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Sabanalarga, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOTTECPROSA.")}`
  },
  {
    cfc: 0,
    name: "ASOTTRANDC",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "asottrandc asociacion de transportadores de transito vial de cali servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASOTTRANDC.")}`
  },
  {
    cfc: 0,
    name: "ASPAFROMAG",
    sector: "agro",
    city: "Santa Marta, Magdalena",
    keywords: "aspafromag asociaci n gremial de trabajadores campesinos y afrocolombianos del departamento del magdalena agro magdalena santa marta gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASPAFROMAG.")}`
  },
  {
    cfc: 0,
    name: "ASPEC CUN",
    sector: "servicios",
    city: "Facatativá, Cundinamarca",
    keywords: "aspec cun sindicato de empleados unidos penitenciarios servicios cundinamarca facatativá empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASPEC CUN.")}`
  },
  {
    cfc: 0,
    name: "ASSTAC",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "asstac asociacion sindical de agentes de transito de cali industria valle del cauca cali industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASSTAC.")}`
  },
  {
    cfc: 0,
    name: "AST-INPEC",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "ast-inpec sindicato nacional de trabajadores unidos de industria de la vigilancia y seguridad privada publico cundinamarca soacha industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical ne",
    description: "Organización sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre AST-INPEC.")}`
  },
  {
    cfc: 0,
    name: "ASTBC",
    sector: "industria",
    city: "San Luis, Tolima",
    keywords: "astbc asociacion de trabajadores bancarios de colombia industria tolima san luis industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en San Luis, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASTBC.")}`
  },
  {
    cfc: 0,
    name: "ASTIP",
    sector: "industria",
    city: "Barrancabermeja, Santander",
    keywords: "astip asociacion sindical de trabajadores de la industria del petroleo industria santander barrancabermeja industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Barrancabermeja, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASTIP.")}`
  },
  {
    cfc: 0,
    name: "ASTRACATOL",
    sector: "agro",
    city: "Ortega, Tolima",
    keywords: "astracatol asociación de trabajadores campesinos del tolima agro tolima ortega gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Ortega, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASTRACATOL.")}`
  },
  {
    cfc: 0,
    name: "ASTRASAMP",
    sector: "industria",
    city: "la Plata, Huila",
    keywords: "astrasamp asociacion sindical trabajadores martin de porres industria huila la plata industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en la Plata, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASTRASAMP.")}`
  },
  {
    cfc: 0,
    name: "ASTROENIN",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "astroenin asociacion sindical de trabajadores de oficios varios economia informal e independientes servicios bogotá d.c. bogotá d.c. oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASTROENIN.")}`
  },
  {
    cfc: 0,
    name: "ASTSALUD",
    sector: "salud",
    city: "Ocaña, Norte de Santander",
    keywords: "astsalud asociacion sindical de trabajadores de la salud del norte de santander y del sur del cesar salud norte de santander ocaña empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Ocaña, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ASTSALUD.")}`
  },
  {
    cfc: 0,
    name: "ATRAESFGN",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "atraesfgn asociacion de trabajadores estatales de la fiscalia general de la nacion publico bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ATRAESFGN.")}`
  },
  {
    cfc: 0,
    name: "AUCB",
    sector: "agro",
    city: "Palmar de Varela, Atlántico",
    keywords: "aucb asociacion de usuarios campesinos de burrusco agro atlántico palmar de varela gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Palmar de Varela, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre AUCB.")}`
  },
  {
    cfc: 0,
    name: "COLEGIO NACIONAL DE PERIODISTAS SECCIONAL NARIÑO Subdirectiva Pasto",
    sector: "educacion",
    city: "Pasto, Nariño",
    keywords: "colegio nacional de periodistas seccional nariño educacion nariño pasto gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COLEGIO NACIONAL DE PERIODISTAS SECCIONAL NARIÑO Subdirectiva Pasto.")}`
  },
  {
    cfc: 0,
    name: "COLEGIO NACIONAL DE PERIODISTAS Subdirectiva Villavicencio",
    sector: "educacion",
    city: "Villavicencio, Meta",
    keywords: "colegio nacional de periodistas educacion meta villavicencio gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COLEGIO NACIONAL DE PERIODISTAS Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "COLMADRES",
    sector: "servicios",
    city: "Pitalito, Huila",
    keywords: "colmadres sindicato colombiano de madres comunitarias servicios huila pitalito gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Pitalito, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COLMADRES.")}`
  },
  {
    cfc: 0,
    name: "COLMADRES SECCIONAL EL CARMEN DE BOLIVAR Subdirectiva El Carmen de Bolívar",
    sector: "servicios",
    city: "El Carmen de Bolívar, Bolívar",
    keywords: "colmadres seccional el carmen de bolivar servicios bolívar el carmen de bolívar gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en El Carmen de Bolívar, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COLMADRES SECCIONAL EL CARMEN DE BOLIVAR Subdirectiva El Carmen de Bolívar.")}`
  },
  {
    cfc: 0,
    name: "COMITE LOCAL DE ASCONTROL EN EL DEPARTAMENTO DEL AMAZONAS",
    sector: "servicios",
    city: "Leticia, Amazonas",
    keywords: "comite local de ascontrol en el departamento del amazonas servicios amazonas leticia empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Leticia, Amazonas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE LOCAL DE ASCONTROL EN EL DEPARTAMENTO DEL AMAZONAS.")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL BUCARAMANGA DEL SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN CO...",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "comite seccional bucaramanga del sindicato nacional de trabajadores de la seguridad en colombia publico santander bucaramanga industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociaci",
    description: "Comité sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL BUCARAMANGA DEL SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN CO....")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL CHAPARRAL",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "comite seccional chaparral servicios antioquia medellín empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL CHAPARRAL.")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL CHOCO",
    sector: "industria",
    city: "Quibdó, Chocó",
    keywords: "comite seccional choco industria chocó quibdó industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Quibdó, Chocó, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL CHOCO.")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL DE ASDECCOL ARCHIPIELAGO DE SAN ANDRES, PROVIDENCIA Y SANTA CATALINA",
    sector: "industria",
    city: "San Andrés, Archipielago de San Andres, Providencia y Santa Catalina",
    keywords: "comite seccional de asdeccol archipielago de san andres providencia y santa catalina industria archipielago de san andres providencia y santa catalina san andrés industria o por rama de actividad económica comité seccional sindicato organización sindical traba",
    description: "Comité sindical del sector industrial con presencia en San Andrés, Archipielago de San Andres, Providencia y Santa Catalina, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL DE ASDECCOL ARCHIPIELAGO DE SAN ANDRES, PROVIDENCIA Y SANTA CATALINA.")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL DEL MUNICIPIO DE MADRID",
    sector: "publico",
    city: "Madrid, Cundinamarca",
    keywords: "comite seccional del municipio de madrid publico cundinamarca madrid industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Madrid, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL DEL MUNICIPIO DE MADRID.")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL DEL SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO BANCOLOMBIA",
    sector: "publico",
    city: "Puerto Asís, Putumayo",
    keywords: "comite seccional del sindicato nacional de trabajadores del grupo bancolombia publico putumayo puerto asís gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Puerto Asís, Putumayo, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL DEL SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO BANCOLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL MUNICIPAL DE ANTHOC ACACIAS",
    sector: "publico",
    city: "Acacías, Meta",
    keywords: "comite seccional municipal de anthoc acacias publico meta acacías industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Acacías, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL MUNICIPAL DE ANTHOC ACACIAS.")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL UNION NACIONAL DE EMPLEADOS BANCARIOS CHIQUINQUIRA",
    sector: "publico",
    city: "Chiquinquirá, Boyacá",
    keywords: "comite seccional union nacional de empleados bancarios chiquinquira publico boyacá chiquinquirá industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Chiquinquirá, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL UNION NACIONAL DE EMPLEADOS BANCARIOS CHIQUINQUIRA.")}`
  },
  {
    cfc: 0,
    name: "COMITE SECCIONAL UNION NACIONAL DE EMPLEADOS BANCARIOS VELEZ",
    sector: "publico",
    city: "Vélez, Santander",
    keywords: "comite seccional union nacional de empleados bancarios velez publico santander vélez industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Vélez, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE SECCIONAL UNION NACIONAL DE EMPLEADOS BANCARIOS VELEZ.")}`
  },
  {
    cfc: 0,
    name: "COMITE UTP SECCIONAL DUITAMA",
    sector: "servicios",
    city: "Duitama, Boyacá",
    keywords: "comite utp seccional duitama servicios boyacá duitama empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Duitama, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COMITE UTP SECCIONAL DUITAMA.")}`
  },
  {
    cfc: 0,
    name: "COOPROPAD",
    sector: "educacion",
    city: "Palmira, Valle del Cauca",
    keywords: "coopropad asociacion sindical de coordinadores academicos de los programas y apoyo a la gestion academica profesores area operativa y personal administrativo de la universidad del valle educacion valle del cauca palmira empresa directiva principal sindicato or",
    description: "Organización sindical del sector educación con presencia en Palmira, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COOPROPAD.")}`
  },
  {
    cfc: 0,
    name: "COSSENA",
    sector: "educacion",
    city: "Bogotá D.C.",
    keywords: "cossena colectivo sindical de trabajadores y empleados del sena educacion bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector educación con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre COSSENA.")}`
  },
  {
    cfc: 0,
    name: "ETNICO A.G.A.M.O.S",
    sector: "servicios",
    city: "Bucaramanga, Santander",
    keywords: "etnico a.g.a.m.o.s etnico asociacion gremial de artesanos manos por santander servicios santander bucaramanga gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ETNICO A.G.A.M.O.S.")}`
  },
  {
    cfc: 0,
    name: "FEDERACION UNITARIA DE TRABAJADORES MINEROS ENERGETICOS METALURGICOS QUIMICOS DE LAS INDU... Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "federacion unitaria de trabajadores mineros energeticos metalurgicos quimicos de las industrias extractivas transportadoras y similares de colombia industria bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría si",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre FEDERACION UNITARIA DE TRABAJADORES MINEROS ENERGETICOS METALURGICOS QUIMICOS DE LAS INDU... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "FUERZA COMUNERA",
    sector: "publico",
    city: "Neiva, Huila",
    keywords: "fuerza comunera asociacion sindical de empleados publicos trabajadores oficiales y descentralizados del municipio de neiva publico huila neiva gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre FUERZA COMUNERA.")}`
  },
  {
    cfc: 0,
    name: "GREMIOLAC DE COLOMBIA",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "gremiolac de colombia asociacion de distribuidores de leche y sus derivados de colombia servicios bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre GREMIOLAC DE COLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "N/A",
    sector: "salud",
    city: "Tunja, Boyacá",
    keywords: "n a sindicato de medicos generales de boyaca salud boyacá tunja gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Tunja, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre N/A.")}`
  },
  {
    cfc: 0,
    name: "NO REGISTRA",
    sector: "agro",
    city: "Puerto Lleras, Meta",
    keywords: "no registra asociacion campesina y de pequeños ganaderos del bajo ariari agro meta puerto lleras gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Puerto Lleras, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre NO REGISTRA.")}`
  },
  {
    cfc: 0,
    name: "ORCONCAVELUZ",
    sector: "publico",
    city: "Usiacurí, Atlántico",
    keywords: "orconcaveluz organizacion conservacionista campesina de la vereda luriza del municipio de usicuri publico atlántico usiacurí gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Usiacurí, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ORCONCAVELUZ.")}`
  },
  {
    cfc: 0,
    name: "ORGANIZACION DE TRABAJADORES DE LAS MICROFINANZAS Subdirectiva Sopó",
    sector: "industria",
    city: "Sopó, Cundinamarca",
    keywords: "organizacion de trabajadores de las microfinanzas industria cundinamarca sopó industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Sopó, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ORGANIZACION DE TRABAJADORES DE LAS MICROFINANZAS Subdirectiva Sopó.")}`
  },
  {
    cfc: 0,
    name: "ORGANIZACION NACIONAL DE OBREROS TRABAJADORES DE LA FLORICULTURA COLOMBIANA Subdirectiva Facatativá",
    sector: "publico",
    city: "Facatativá, Cundinamarca",
    keywords: "organizacion nacional de obreros trabajadores de la floricultura colombiana publico cundinamarca facatativá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ORGANIZACION NACIONAL DE OBREROS TRABAJADORES DE LA FLORICULTURA COLOMBIANA Subdirectiva Facatativá.")}`
  },
  {
    cfc: 0,
    name: "ORGANIZACION NACIONAL DE OBREROS TRABAJADORES DE LA FLORICULTURA COLOMBIANA Subdirectiva Funza",
    sector: "publico",
    city: "Funza, Cundinamarca",
    keywords: "organizacion nacional de obreros trabajadores de la floricultura colombiana publico cundinamarca funza industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Funza, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ORGANIZACION NACIONAL DE OBREROS TRABAJADORES DE LA FLORICULTURA COLOMBIANA Subdirectiva Funza.")}`
  },
  {
    cfc: 0,
    name: "ORGANIZACIÓN SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Cali",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "organización sindical de empleados bancarios industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ORGANIZACIÓN SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "ORGANIZACIÓN SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Palmira",
    sector: "industria",
    city: "Palmira, Valle del Cauca",
    keywords: "organización sindical de empleados bancarios industria valle del cauca palmira industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Palmira, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre ORGANIZACIÓN SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Palmira.")}`
  },
  {
    cfc: 0,
    name: "OSB",
    sector: "industria",
    city: "Facatativá, Cundinamarca",
    keywords: "osb organizacion sindical bancaria industria cundinamarca facatativá industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre OSB.")}`
  },
  {
    cfc: 0,
    name: "PFW\"",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "pfw people first worldwde pfw industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre PFW\".")}`
  },
  {
    cfc: 0,
    name: "PROCURAR",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "procurar sindicato de procuradores judiciales servicios bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre PROCURAR.")}`
  },
  {
    cfc: 0,
    name: "PROMEDIASALUD",
    sector: "salud",
    city: "San Juan del Cesar, la Guajira",
    keywords: "promediasalud agremiacion sindical de profesionales médicos y asistenciales en salud salud la guajira san juan del cesar gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en San Juan del Cesar, la Guajira, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre PROMEDIASALUD.")}`
  },
  {
    cfc: 0,
    name: "PROSALUD",
    sector: "salud",
    city: "Facatativá, Cundinamarca",
    keywords: "prosalud sindicato grupo multidiciplinario de profesionales de la salud salud cundinamarca facatativá gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre PROSALUD.")}`
  },
  {
    cfc: 0,
    name: "RENOVACION SINDICAL CAMPESINA",
    sector: "agro",
    city: "El Paujil, Caquetá",
    keywords: "renovacion sindical campesina asociacion sindical de campesinos y trabajadores del caqueta agro caquetá el paujil gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en El Paujil, Caquetá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre RENOVACION SINDICAL CAMPESINA.")}`
  },
  {
    cfc: 0,
    name: "RENOVACION SINDICAL CAMPESINA",
    sector: "agro",
    city: "El Paujil, Caquetá",
    keywords: "renovacion sindical campesina asociacion sindical de campesinos y trabadores del caqueta agro caquetá el paujil gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en El Paujil, Caquetá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre RENOVACION SINDICAL CAMPESINA.")}`
  },
  {
    cfc: 0,
    name: "RENOVACION SINDICAL CAMPESINA DEL SUR DEL TOLIMA",
    sector: "agro",
    city: "Ataco, Tolima",
    keywords: "renovacion sindical campesina del sur del tolima asociacion sindical de campesinos y trabajadores del sur del tolima agro tolima ataco gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Ataco, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre RENOVACION SINDICAL CAMPESINA DEL SUR DEL TOLIMA.")}`
  },
  {
    cfc: 0,
    name: "SABOC",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "saboc sindicato de anestesiologos de bogota y cundinamarca servicios bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SABOC.")}`
  },
  {
    cfc: 0,
    name: "SALON MANIZALEZ",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "salon manizalez sindicatos de trabajadores independientes de oficios varios salon manizales servicios bogotá d.c. bogotá d.c. oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SALON MANIZALEZ.")}`
  },
  {
    cfc: 0,
    name: "SERPUAMAZONAS",
    sector: "publico",
    city: "Leticia, Amazonas",
    keywords: "serpuamazonas sindicato de servidores públicos del amazonas publico amazonas leticia industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Leticia, Amazonas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SERPUAMAZONAS.")}`
  },
  {
    cfc: 0,
    name: "SERVICIO VIDA Y CONFIANZA ORGANIZACIÓN SINDICAL Subdirectiva Armenia",
    sector: "servicios",
    city: "Armenia, Quindio",
    keywords: "servicio vida y confianza organización sindical servicios quindio armenia oficios varios subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Armenia, Quindio, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SERVICIO VIDA Y CONFIANZA ORGANIZACIÓN SINDICAL Subdirectiva Armenia.")}`
  },
  {
    cfc: 0,
    name: "SERVIDARY",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "servidary servidary organizacion sindical servicios bogotá d.c. bogotá d.c. oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SERVIDARY.")}`
  },
  {
    cfc: 0,
    name: "SERVINTERNACIONAL",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "servinternacional servinternacional organizacion sindical publico bogotá d.c. bogotá d.c. oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SERVINTERNACIONAL.")}`
  },
  {
    cfc: 0,
    name: "SIBANCOL",
    sector: "industria",
    city: "Facatativá, Cundinamarca",
    keywords: "sibancol sindicato bancario colombiano industria cundinamarca facatativá industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SIBANCOL.")}`
  },
  {
    cfc: 0,
    name: "SIBDIRECTIVA CESAR Subdirectiva Valledupar",
    sector: "servicios",
    city: "Valledupar, Cesar",
    keywords: "sibdirectiva cesar servicios cesar valledupar empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Valledupar, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SIBDIRECTIVA CESAR Subdirectiva Valledupar.")}`
  },
  {
    cfc: 0,
    name: "SIFACT",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sifact sindicato de farmaceutas y trabajadores de droguerias y farmacias cruz verde servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SIFACT.")}`
  },
  {
    cfc: 0,
    name: "SIGNO",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "signo sindicato gremial nacional de optometria publico bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SIGNO.")}`
  },
  {
    cfc: 0,
    name: "SIMEB",
    sector: "salud",
    city: "Tunja, Boyacá",
    keywords: "simeb sindicato medico especialistas de boyaca salud boyacá tunja gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Tunja, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SIMEB.")}`
  },
  {
    cfc: 0,
    name: "SIMECAFE",
    sector: "salud",
    city: "Armenia, Quindio",
    keywords: "simecafe sindicato medico del eje cafetero salud quindio armenia gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Armenia, Quindio, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SIMECAFE.")}`
  },
  {
    cfc: 0,
    name: "SIMECOL",
    sector: "salud",
    city: "Ipiales, Nariño",
    keywords: "simecol sindicato de medicos especialistas clinicos y quirurgicos del suroccidente colombiano salud nariño ipiales gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SIMECOL.")}`
  },
  {
    cfc: 0,
    name: "SINAEBYF",
    sector: "publico",
    city: "Facatativá, Cundinamarca",
    keywords: "sinaebyf sindicato nacional de empleados bancarios y del sector financiero publico cundinamarca facatativá industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINAEBYF.")}`
  },
  {
    cfc: 0,
    name: "SINAGEDT",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sinagedt sindicato de agentes de transito servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINAGEDT.")}`
  },
  {
    cfc: 0,
    name: "SINALBAT",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sinalbat sindicato nacional de trabajadores de la agroindustria y comercialización de productos agroalimentarios tabaco y cigarrilo publico antioquia medellín industria o por rama de actividad económica directiva principal sindicato organización sindical traba",
    description: "Organización sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALBAT.")}`
  },
  {
    cfc: 0,
    name: "SINALCO",
    sector: "publico",
    city: "Funza, Cundinamarca",
    keywords: "sinalco sindicato nacional de conductores sinalco guardia camionera publico cundinamarca funza gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Funza, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALCO.")}`
  },
  {
    cfc: 0,
    name: "SINALTRACAMACOMVI",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "sinaltracamacomvi sindicato nacional de trabajadores de la camara de comercio de villavicencio publico meta villavicencio empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALTRACAMACOMVI.")}`
  },
  {
    cfc: 0,
    name: "SINALTRAENFIN",
    sector: "publico",
    city: "Facatativá, Cundinamarca",
    keywords: "sinaltraenfin sindicato nacional de trabajadores de entidades financieras publico cundinamarca facatativá industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALTRAENFIN.")}`
  },
  {
    cfc: 0,
    name: "SINALTRAINTELECTUALCOLOMBIA",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sinaltraintelectualcolombia sindicato nacional de empleados y trabajadores de la propiedad intelectual publico valle del cauca cali industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical",
    description: "Organización sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALTRAINTELECTUALCOLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "SINALTRAPESCOL",
    sector: "salud",
    city: "Soledad, Atlántico",
    keywords: "sinaltrapescol sindicato nacional de trabajadores privados publicos profesionales especialistas del sector de la salud en colombia salud atlántico soledad industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo d",
    description: "Organización sindical del sector salud con presencia en Soledad, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALTRAPESCOL.")}`
  },
  {
    cfc: 0,
    name: "SINALTRAPROAGROCOÑ",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sinaltraproagrocoñ sindicato nacional de trabajadores adama andina b.v sucursal colombia publico atlántico barranquilla empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALTRAPROAGROCOÑ.")}`
  },
  {
    cfc: 0,
    name: "SINALTRAPUPRIVIENS",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sinaltrapupriviens sindicato nacional de trabajadores publicos y privados vigilantes de entidades publicas privadas mixtas y similares publico atlántico barranquilla industria o por rama de actividad económica directiva principal sindicato organización sindica",
    description: "Organización sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALTRAPUPRIVIENS.")}`
  },
  {
    cfc: 0,
    name: "SINALTRARIO",
    sector: "agro",
    city: "Madrid, Cundinamarca",
    keywords: "sinaltrario sindicato de trabajadores de flores del rio s.a finca alborada agro cundinamarca madrid empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Madrid, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALTRARIO.")}`
  },
  {
    cfc: 0,
    name: "SINALTRASF",
    sector: "publico",
    city: "Mosquera, Cundinamarca",
    keywords: "sinaltrasf sindicato nacional de trabajadores del sector financiero publico cundinamarca mosquera industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINALTRASF.")}`
  },
  {
    cfc: 0,
    name: "SINATRINHI",
    sector: "publico",
    city: "Barrancabermeja, Santander",
    keywords: "sinatrinhi sindicato nacional de trabajadores de la industria de los hidrocarburos publico santander barrancabermeja industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación col",
    description: "Organización sindical del sector público con presencia en Barrancabermeja, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINATRINHI.")}`
  },
  {
    cfc: 0,
    name: "SINCARINDE",
    sector: "servicios",
    city: "Ipiales, Nariño",
    keywords: "sincarinde sindicato de carretilleros independientes frontera sur de ipiales nariño servicios nariño ipiales gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINCARINDE.")}`
  },
  {
    cfc: 0,
    name: "SINDEARMBOG PENINTENCIARIO",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindearmbog penintenciario sindicato de empleados de personal administrativo de las reclusiones y de funcionarios del sistema penintenciario servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría si",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDEARMBOG PENINTENCIARIO.")}`
  },
  {
    cfc: 0,
    name: "SINDEHU - USCTRAB",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindehu - usctrab sindicato nacional de defensores de derechos humanos - usctrab publico bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDEHU - USCTRAB.")}`
  },
  {
    cfc: 0,
    name: "SINDEMPUB",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindempub sindicato departamental de empleados publicos publico atlántico barranquilla industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDEMPUB.")}`
  },
  {
    cfc: 0,
    name: "SINDEP",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindep sindicato departamental de empleados de empleados públicos publico santander bucaramanga empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDEP.")}`
  },
  {
    cfc: 0,
    name: "SINDIBARES",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindibares sindicato de trabajadores independientes de los bares de bogota servicios bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDIBARES.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO BANCARIO COLOMBIANO Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato bancario colombiano industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO BANCARIO COLOMBIANO Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO COLOMBIANO DE MADRES COMUNITARIAS",
    sector: "servicios",
    city: "Riosucio, Caldas",
    keywords: "sindicato colombiano de madres comunitarias servicios caldas riosucio gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Riosucio, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO COLOMBIANO DE MADRES COMUNITARIAS.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE AGRICULTORES DE CURITI Subdirectiva Curití",
    sector: "agro",
    city: "Curití, Santander",
    keywords: "sindicato de agricultores de curiti agro santander curití gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector agropecuario con presencia en Curití, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE AGRICULTORES DE CURITI Subdirectiva Curití.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE ANESTESIOLOGOS DE BOGOTA Y CUNDINAMARCA Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de anestesiologos de bogota y cundinamarca servicios bogotá d.c. bogotá d.c. gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE ANESTESIOLOGOS DE BOGOTA Y CUNDINAMARCA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE COMERCIALIZADORES DE MERCANCIAS VARIAS DE LA EX PROVINCIA DE OBANDO Subdirectiva Ipiales",
    sector: "servicios",
    city: "Ipiales, Nariño",
    keywords: "sindicato de comercializadores de mercancias varias de la ex provincia de obando servicios nariño ipiales gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE COMERCIALIZADORES DE MERCANCIAS VARIAS DE LA EX PROVINCIA DE OBANDO Subdirectiva Ipiales.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE COMERCIANTES DE FRUTAS DE IPIALES",
    sector: "servicios",
    city: "Ipiales, Nariño",
    keywords: "sindicato de comerciantes de frutas de ipiales servicios nariño ipiales gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE COMERCIANTES DE FRUTAS DE IPIALES.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE CONCRETEROS NACIONAL Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindicato de concreteros nacional publico bolívar cartagena empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE CONCRETEROS NACIONAL Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE DEFENSORES DE FAMILIA DEL INSTITUTO COLOMBIANO DE BIENESTAR FAMILIAR Subdirectiva Medellín",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "sindicato de defensores de familia del instituto colombiano de bienestar familiar servicios antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE DEFENSORES DE FAMILIA DEL INSTITUTO COLOMBIANO DE BIENESTAR FAMILIAR Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS DEL CONGRESO DE LA REPUBLICA Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de empleados del congreso de la republica servicios bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS DEL CONGRESO DE LA REPUBLICA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PENITENCIARIOS Subdirectiva Facatativá",
    sector: "servicios",
    city: "Facatativá, Cundinamarca",
    keywords: "sindicato de empleados penitenciarios servicios cundinamarca facatativá gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PENITENCIARIOS Subdirectiva Facatativá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PUBLICOS DE LA UNIDAD ADMINISTRATIVA ESPECIAL DE REHABILITACION Y... Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato de empleados publicos de la unidad administrativa especial de rehabilitacion y mantenimiento vial de bogota distrito capital publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociac",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PUBLICOS DE LA UNIDAD ADMINISTRATIVA ESPECIAL DE REHABILITACION Y... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PUBLICOS DEL SENA Subdirectiva Cartagena",
    sector: "educacion",
    city: "Cartagena, Bolívar",
    keywords: "sindicato de empleados publicos del sena educacion bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PUBLICOS DEL SENA Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PUBLICOS DEL SENA Subdirectiva Florencia",
    sector: "educacion",
    city: "Florencia, Caquetá",
    keywords: "sindicato de empleados publicos del sena educacion caquetá florencia industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Florencia, Caquetá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PUBLICOS DEL SENA Subdirectiva Florencia.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PUBLICOS DEL SENA Subdirectiva Popayán",
    sector: "educacion",
    city: "Popayán, Cauca",
    keywords: "sindicato de empleados publicos del sena educacion cauca popayán industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Popayán, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PUBLICOS DEL SENA Subdirectiva Popayán.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PUBLICOS PROFESIONALES DE LA ALCALDIA DE PASTO",
    sector: "publico",
    city: "Pasto, Nariño",
    keywords: "sindicato de empleados publicos profesionales de la alcaldia de pasto publico nariño pasto empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PUBLICOS PROFESIONALES DE LA ALCALDIA DE PASTO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PUBLICOS Y TRABAJADORES OFICIALES DE LOS MUNICIPIOS DEL NORTE Y BA... Subdirectiva Santa Rosa de Osos",
    sector: "publico",
    city: "Santa Rosa de Osos, Antioquia",
    keywords: "sindicato de empleados publicos y trabajadores oficiales de los municipios del norte y bajo cauca del departamento de antioquia colombia publico antioquia santa rosa de osos industria o por rama de actividad económica subdirectiva sindicato organización sindic",
    description: "Subdirectiva sindical del sector público con presencia en Santa Rosa de Osos, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PUBLICOS Y TRABAJADORES OFICIALES DE LOS MUNICIPIOS DEL NORTE Y BA... Subdirectiva Santa Rosa de Osos.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PUBLICOS Y TRABAJADORES OFICIALES DE LOS MUNICIPIOS DEL NORTE Y BA... Subdirectiva Santa Rosa de Osos",
    sector: "publico",
    city: "Santa Rosa de Osos, Antioquia",
    keywords: "sindicato de empleados publicos y trabajadores oficiales de los municipios del norte y bajo cauca del departamento de antioquia colombia publico antioquia santa rosa de osos industria o por rama de actividad económica subdirectiva sindicato organización sindic",
    description: "Subdirectiva sindical del sector público con presencia en Santa Rosa de Osos, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PUBLICOS Y TRABAJADORES OFICIALES DE LOS MUNICIPIOS DEL NORTE Y BA... Subdirectiva Santa Rosa de Osos.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS PUBLICOS Y TRABAJADORES OFICIALES DE LOS MUNICIPIOS DEL NORTE Y BA... Subdirectiva Santa Rosa de Osos",
    sector: "publico",
    city: "Santa Rosa de Osos, Antioquia",
    keywords: "sindicato de empleados publicos y trabajadores oficiales de los municipios del norte y bajo cauca del departamento de antioquia colombia publico antioquia santa rosa de osos industria o por rama de actividad económica subdirectiva sindicato organización sindic",
    description: "Subdirectiva sindical del sector público con presencia en Santa Rosa de Osos, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS PUBLICOS Y TRABAJADORES OFICIALES DE LOS MUNICIPIOS DEL NORTE Y BA... Subdirectiva Santa Rosa de Osos.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS UNIDOS PENITENCIARIOS",
    sector: "servicios",
    city: "Aguachica, Cesar",
    keywords: "sindicato de empleados unidos penitenciarios servicios cesar aguachica gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Aguachica, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS UNIDOS PENITENCIARIOS.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS UNIDOS PENITENCIARIOS SECCIONAL BUENAVENTURA",
    sector: "servicios",
    city: "Buenaventura, Valle del Cauca",
    keywords: "sindicato de empleados unidos penitenciarios seccional buenaventura servicios valle del cauca buenaventura gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Buenaventura, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS UNIDOS PENITENCIARIOS SECCIONAL BUENAVENTURA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS UNIDOS PENITENCIARIOS Subdirectiva Barranquilla",
    sector: "servicios",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de empleados unidos penitenciarios servicios atlántico barranquilla gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS UNIDOS PENITENCIARIOS Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS Y TRABAJADORES AL SERVICIO DEL ESTADO DEL DEPARTAMENTO DEL ATLANTICO Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de empleados y trabajadores al servicio del estado del departamento del atlantico publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación cole",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS Y TRABAJADORES AL SERVICIO DEL ESTADO DEL DEPARTAMENTO DEL ATLANTICO Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS Y TRABAJADORES DEL SENA Subdirectiva Barranquilla",
    sector: "educacion",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de empleados y trabajadores del sena educacion atlántico barranquilla empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS Y TRABAJADORES DEL SENA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS Y TRABAJADORES DEL SENA Subdirectiva Floridablanca",
    sector: "educacion",
    city: "Floridablanca, Santander",
    keywords: "sindicato de empleados y trabajadores del sena educacion santander floridablanca empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Floridablanca, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS Y TRABAJADORES DEL SENA Subdirectiva Floridablanca.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE EMPLEADOS Y TRABAJADORES DISTRITALES Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de empleados y trabajadores distritales servicios bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE EMPLEADOS Y TRABAJADORES DISTRITALES Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE ESTIBADORES CENTRO DE ACOPIO DE IPIALES NARIÑO COLOMBIA",
    sector: "servicios",
    city: "Ipiales, Nariño",
    keywords: "sindicato de estibadores centro de acopio de ipiales nariño colombia servicios nariño ipiales gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE ESTIBADORES CENTRO DE ACOPIO DE IPIALES NARIÑO COLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE FOTOGRAFOS DEL CORREGIMIENTO DE LAS LAJAS Y SU ZONA DE INFLUENCIA DEL MUNICI... Subdirectiva Ipiales",
    sector: "publico",
    city: "Ipiales, Nariño",
    keywords: "sindicato de fotografos del corregimiento de las lajas y su zona de influencia del municipio de ipiales publico nariño ipiales gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE FOTOGRAFOS DEL CORREGIMIENTO DE LAS LAJAS Y SU ZONA DE INFLUENCIA DEL MUNICI... Subdirectiva Ipiales.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE FUNCIONARIOS AL SERVICIO DE EMCALI EICE ESP",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de funcionarios al servicio de emcali eice esp servicios valle del cauca cali empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE FUNCIONARIOS AL SERVICIO DE EMCALI EICE ESP.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE FUNCIONARIOS DE CARRERA ADMINISTRATIVA DEL INSTITUTO DE LA PARTICIPACION Y A... Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de funcionarios de carrera administrativa del instituto de la participacion y accion comunal distrital servicios bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE FUNCIONARIOS DE CARRERA ADMINISTRATIVA DEL INSTITUTO DE LA PARTICIPACION Y A... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE INDUSTRIA DE ENTES PUBLICOS Y LAS AREAS METROPOLITANAS DE COLOMBIA Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de industria de entes publicos y las areas metropolitanas de colombia publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE INDUSTRIA DE ENTES PUBLICOS Y LAS AREAS METROPOLITANAS DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE LA RAMA DE TRABAJADORES DE TRANSPORTES Y VALORES VIGILANCIA SEGURIDAD Y SIMI... Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato de la rama de trabajadores de transportes y valores vigilancia seguridad y similares industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociació",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE LA RAMA DE TRABAJADORES DE TRANSPORTES Y VALORES VIGILANCIA SEGURIDAD Y SIMI... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE LOS TRABAJADORES DEL SECTOR EDUCATIVO DE SANTANDER",
    sector: "servicios",
    city: "Encino, Santander",
    keywords: "sindicato de los trabajadores del sector educativo de santander servicios santander encino gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Encino, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE LOS TRABAJADORES DEL SECTOR EDUCATIVO DE SANTANDER.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE LOS TRABAJADORES DEL TRANSPORTE AEREO COLOMBIANO SUBDIRECTIVA BARRANQUILLA",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de los trabajadores del transporte aereo colombiano subdirectiva barranquilla industria atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colect",
    description: "Subdirectiva sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE LOS TRABAJADORES DEL TRANSPORTE AEREO COLOMBIANO SUBDIRECTIVA BARRANQUILLA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE LOS TRABAJADORES DEL TRANSPORTE AEREO COLOMBIANO Subdirectiva Cali",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de los trabajadores del transporte aereo colombiano industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE LOS TRABAJADORES DEL TRANSPORTE AEREO COLOMBIANO Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE LOS TRABAJADORES DEL TRANSPORTE AEREO Subdirectiva Chía",
    sector: "industria",
    city: "Chía, Cundinamarca",
    keywords: "sindicato de los trabajadores del transporte aereo industria cundinamarca chía industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Chía, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE LOS TRABAJADORES DEL TRANSPORTE AEREO Subdirectiva Chía.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE OPERADORES DE SCHLUMBERGER SURENCO SA Subdirectiva Barrancabermeja",
    sector: "servicios",
    city: "Barrancabermeja, Santander",
    keywords: "sindicato de operadores de schlumberger surenco sa servicios santander barrancabermeja empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Barrancabermeja, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE OPERADORES DE SCHLUMBERGER SURENCO SA Subdirectiva Barrancabermeja.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE PEQUEÑOS COMERCIANTES DE MERCANCIAS VARIAS Subdirectiva Ipiales",
    sector: "servicios",
    city: "Ipiales, Nariño",
    keywords: "sindicato de pequeños comerciantes de mercancias varias servicios nariño ipiales gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE PEQUEÑOS COMERCIANTES DE MERCANCIAS VARIAS Subdirectiva Ipiales.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE PROFESORES DE LA FUNDACION UNIVERSIDAD AUTONOMA DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "educacion",
    city: "Bogotá D.C.",
    keywords: "sindicato de profesores de la fundacion universidad autonoma de colombia educacion bogotá d.c. bogotá d.c. gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE PROFESORES DE LA FUNDACION UNIVERSIDAD AUTONOMA DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE PSICOLOGOS Y PSICOLOGAS DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de psicologos y psicologas de colombia servicios bogotá d.c. bogotá d.c. gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE PSICOLOGOS Y PSICOLOGAS DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE RAMA DE TRABAJADORES DE LA VIGILANCIA ESCOLTAS Y SIMILARES",
    sector: "industria",
    city: "Villavicencio, Meta",
    keywords: "sindicato de rama de trabajadores de la vigilancia escoltas y similares industria meta villavicencio industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE RAMA DE TRABAJADORES DE LA VIGILANCIA ESCOLTAS Y SIMILARES.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE RAMA DE TRABAJADORES DE LA VIGILANCIA ESCOLTAS Y SIMILARES Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato de rama de trabajadores de la vigilancia escoltas y similares industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE RAMA DE TRABAJADORES DE LA VIGILANCIA ESCOLTAS Y SIMILARES Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE RAMA DE TRABAJADORES DE LA VIGILANCIA, ESCOLTAS Y SIMILARES",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato de rama de trabajadores de la vigilancia escoltas y similares industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE RAMA DE TRABAJADORES DE LA VIGILANCIA, ESCOLTAS Y SIMILARES.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE RAMA DE TRABAJADORES DE TRANSPORTES DE VALORES, VIGILANCIA, SEGURIDAD Y SIMI... Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato de rama de trabajadores de transportes de valores vigilancia seguridad y similares industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE RAMA DE TRABAJADORES DE TRANSPORTES DE VALORES, VIGILANCIA, SEGURIDAD Y SIMI... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE SERVIDORES PUBLICOS DE COLOMBIA A NIVEL NACIONAL DEPARTAMENTAL Y MUNICIPAL Y... Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindicato de servidores publicos de colombia a nivel nacional departamental y municipal y sus institutos centralizados y descentralizada empresas industriales comerciales empresas sociales del estados o de servicios publicos estatales a nivel nacional departam",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE SERVIDORES PUBLICOS DE COLOMBIA A NIVEL NACIONAL DEPARTAMENTAL Y MUNICIPAL Y... Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE SERVIDORES PUBLICOS DE COLOMBIA A NIVEL NACIONAL DEPARTAMENTAL Y MUNICIPAL Y... Subdirectiva Yopal",
    sector: "publico",
    city: "Yopal, Casanare",
    keywords: "sindicato de servidores publicos de colombia a nivel nacional departamental y municipal y sus institutos centralizados y descentralizada empresas industriales comerciales empresas sociales del estados o de servicios publicos estatales a nivel nacional departam",
    description: "Subdirectiva sindical del sector público con presencia en Yopal, Casanare, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE SERVIDORES PUBLICOS DE COLOMBIA A NIVEL NACIONAL DEPARTAMENTAL Y MUNICIPAL Y... Subdirectiva Yopal.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE SERVIDORES PUBLICOS DE COLOMBIA Subdirectiva Pradera",
    sector: "publico",
    city: "Pradera, Valle del Cauca",
    keywords: "sindicato de servidores publicos de colombia publico valle del cauca pradera industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Pradera, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE SERVIDORES PUBLICOS DE COLOMBIA Subdirectiva Pradera.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE SERVIDORES PUBLICOS DE LA CONTRALORIA DE BOGOTA D.C Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato de servidores publicos de la contraloria de bogota d.c publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE SERVIDORES PUBLICOS DE LA CONTRALORIA DE BOGOTA D.C Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE SERVIDORES PUBLICOS DE LA PERSONERIA CONTRALORIA GENERAL CONCEJO Y NIVEL CEN... Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de servidores publicos de la personeria contraloria general concejo y nivel central del municipio de santiago de cali publico valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE SERVIDORES PUBLICOS DE LA PERSONERIA CONTRALORIA GENERAL CONCEJO Y NIVEL CEN... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE SERVIDORES PUBLICOS DEL ESTADO COLOMBIANO.",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato de servidores publicos del estado colombiano. publico cundinamarca soacha industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE SERVIDORES PUBLICOS DEL ESTADO COLOMBIANO..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE SERVIDORES PUBLICOS DEL MINISTERIO DE SALUD Y PROTECCION SOCIAL Subdirectiva Bogotá D.C.",
    sector: "salud",
    city: "Bogotá D.C.",
    keywords: "sindicato de servidores publicos del ministerio de salud y proteccion social salud bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE SERVIDORES PUBLICOS DEL MINISTERIO DE SALUD Y PROTECCION SOCIAL Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE SERVIDORES PUBLICOS DEL MUNICIPIO DE RIONEGRO ANTIOQUIA Y SUS ENTES DESCENTR...",
    sector: "publico",
    city: "Rionegro, Antioquia",
    keywords: "sindicato de servidores publicos del municipio de rionegro antioquia y sus entes descentralizados publico antioquia rionegro industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación co",
    description: "Subdirectiva sindical del sector público con presencia en Rionegro, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE SERVIDORES PUBLICOS DEL MUNICIPIO DE RIONEGRO ANTIOQUIA Y SUS ENTES DESCENTR....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES CON VEHICULO DE TRACCION ANIMAL DEL DEPARTAMENTO DE NARIÑO Subdirectiva Pasto",
    sector: "servicios",
    city: "Pasto, Nariño",
    keywords: "sindicato de trabajadores con vehiculo de traccion animal del departamento de nariño servicios nariño pasto gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES CON VEHICULO DE TRACCION ANIMAL DEL DEPARTAMENTO DE NARIÑO Subdirectiva Pasto.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE AMERICAN PIPE AND CONSTRUCTION INTERNATIONAL Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores de american pipe and construction international servicios bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE AMERICAN PIPE AND CONSTRUCTION INTERNATIONAL Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE BANCAMIA SUBDIRECTIVA YOPAL-CASANARE",
    sector: "industria",
    city: "Yopal, Casanare",
    keywords: "sindicato de trabajadores de bancamia subdirectiva yopal-casanare industria casanare yopal industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Yopal, Casanare, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE BANCAMIA SUBDIRECTIVA YOPAL-CASANARE.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE BASE DE ENKA DE COLOMBIA SA Subdirectiva Girardota",
    sector: "servicios",
    city: "Girardota, Antioquia",
    keywords: "sindicato de trabajadores de base de enka de colombia sa servicios antioquia girardota empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Girardota, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE BASE DE ENKA DE COLOMBIA SA Subdirectiva Girardota.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE COLFONDOS SA Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores de colfondos sa servicios bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE COLFONDOS SA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE COLGATE PALMOLIVE CIA Subdirectiva Cali",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de trabajadores de colgate palmolive cia servicios valle del cauca cali empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE COLGATE PALMOLIVE CIA Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE COLOMBINA Subdirectiva Zarzal",
    sector: "industria",
    city: "Zarzal, Valle del Cauca",
    keywords: "sindicato de trabajadores de colombina industria valle del cauca zarzal industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Zarzal, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE COLOMBINA Subdirectiva Zarzal.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE COMFAMILIAR ATLANTICO Subdirectiva Barranquilla",
    sector: "servicios",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de trabajadores de comfamiliar atlantico servicios atlántico barranquilla empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE COMFAMILIAR ATLANTICO Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE COMFAMILIAR DEL HUILA",
    sector: "servicios",
    city: "Neiva, Huila",
    keywords: "sindicato de trabajadores de comfamiliar del huila servicios huila neiva empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE COMFAMILIAR DEL HUILA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE COMFAMILIAR DEL HUILA Subdirectiva Neiva",
    sector: "industria",
    city: "Neiva, Huila",
    keywords: "sindicato de trabajadores de comfamiliar del huila industria huila neiva industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE COMFAMILIAR DEL HUILA Subdirectiva Neiva.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE EDATEL Subdirectiva Medellín",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "sindicato de trabajadores de edatel servicios antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE EDATEL Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE EMPRESA RIOPAILA CASTILLA S.A Subdirectiva Florida",
    sector: "servicios",
    city: "Florida, Valle del Cauca",
    keywords: "sindicato de trabajadores de empresa riopaila castilla s.a servicios valle del cauca florida empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Florida, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE EMPRESA RIOPAILA CASTILLA S.A Subdirectiva Florida.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE EMPRESAS DE ENERGIA ELECTRICA DE LA REPUBLICA DE COLOMBIA Subdirectiva Cartagena",
    sector: "industria",
    city: "Cartagena, Bolívar",
    keywords: "sindicato de trabajadores de empresas de energia electrica de la republica de colombia industria bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE EMPRESAS DE ENERGIA ELECTRICA DE LA REPUBLICA DE COLOMBIA Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS",
    sector: "servicios",
    city: "Lorica, Córdoba",
    keywords: "sindicato de trabajadores de entidades financieras servicios córdoba lorica empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Lorica, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS SUBDIRECTIVA ARMENIA",
    sector: "servicios",
    city: "Armenia, Quindio",
    keywords: "sindicato de trabajadores de entidades financieras subdirectiva armenia servicios quindio armenia empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Armenia, Quindio, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS SUBDIRECTIVA ARMENIA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Cali",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de trabajadores de entidades financieras industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Lorica",
    sector: "servicios",
    city: "Lorica, Córdoba",
    keywords: "sindicato de trabajadores de entidades financieras servicios córdoba lorica empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Lorica, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Lorica.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Manizales",
    sector: "servicios",
    city: "Manizales, Caldas",
    keywords: "sindicato de trabajadores de entidades financieras servicios caldas manizales empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Manizales.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Medellín",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "sindicato de trabajadores de entidades financieras servicios antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Montería",
    sector: "industria",
    city: "Montería, Córdoba",
    keywords: "sindicato de trabajadores de entidades financieras industria córdoba montería industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Montería, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Montería.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS-SECCIONAL CUCUTA Subdirectiva Cúcuta",
    sector: "industria",
    city: "Cúcuta, Norte de Santander",
    keywords: "sindicato de trabajadores de entidades financieras-seccional cucuta industria norte de santander cúcuta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE ENTIDADES FINANCIERAS-SECCIONAL CUCUTA Subdirectiva Cúcuta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA CAJA DE COMPENSACION FAMILIAR COMFENALCO SECCIONAL SANTANDER Subdirectiva Bucaramanga",
    sector: "servicios",
    city: "Bucaramanga, Santander",
    keywords: "sindicato de trabajadores de la caja de compensacion familiar comfenalco seccional santander servicios santander bucaramanga empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA CAJA DE COMPENSACION FAMILIAR COMFENALCO SECCIONAL SANTANDER Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA CORPORACION CLUB CAMPESTRE DE CALI",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de trabajadores de la corporacion club campestre de cali servicios valle del cauca cali empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA CORPORACION CLUB CAMPESTRE DE CALI.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA EMPRESA AGUAS DE FACATATIVA ACUEDUCTO ALCANTARILLADO ASEO... Subdirectiva Facatativá",
    sector: "servicios",
    city: "Facatativá, Cundinamarca",
    keywords: "sindicato de trabajadores de la empresa aguas de facatativa acueducto alcantarillado aseo y servicios complementarios eaf sas esp servicios cundinamarca facatativá empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación",
    description: "Subdirectiva sindical del sector servicios con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA EMPRESA AGUAS DE FACATATIVA ACUEDUCTO ALCANTARILLADO ASEO... Subdirectiva Facatativá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA EMPRESA MUNICIPAL DE ACUEDUCTO ALCANTARILLADO Y ASEO DE F... Subdirectiva Funza",
    sector: "publico",
    city: "Funza, Cundinamarca",
    keywords: "sindicato de trabajadores de la empresa municipal de acueducto alcantarillado y aseo de funza emaaf esp publico cundinamarca funza empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Funza, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA EMPRESA MUNICIPAL DE ACUEDUCTO ALCANTARILLADO Y ASEO DE F... Subdirectiva Funza.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA ENERGIA DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores de la energia de colombia industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA ENERGIA DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA INDUSTRIA ALMACENES DE CADENA Y CENTROS COMERCIALES Subdirectiva Cali",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de trabajadores de la industria almacenes de cadena y centros comerciales industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA INDUSTRIA ALMACENES DE CADENA Y CENTROS COMERCIALES Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA INDUSTRIA DEL VIDRIO Y AFINES DE COLOMBIA Subdirectiva Sabaneta",
    sector: "industria",
    city: "Sabaneta, Antioquia",
    keywords: "sindicato de trabajadores de la industria del vidrio y afines de colombia industria antioquia sabaneta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Sabaneta, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA INDUSTRIA DEL VIDRIO Y AFINES DE COLOMBIA Subdirectiva Sabaneta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA INDUSTRIA DEL VIDRIO Y AFINES DE COLOMBIA Subdirectiva Sabaneta",
    sector: "industria",
    city: "Sabaneta, Antioquia",
    keywords: "sindicato de trabajadores de la industria del vidrio y afines de colombia industria antioquia sabaneta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Sabaneta, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA INDUSTRIA DEL VIDRIO Y AFINES DE COLOMBIA Subdirectiva Sabaneta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA INDUSTRIA ENERGÉTICA Subdirectiva Barranquilla",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de trabajadores de la industria energética industria atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA INDUSTRIA ENERGÉTICA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA INDUSTRIA ENERGETICA Subdirectiva Envigado",
    sector: "industria",
    city: "Envigado, Antioquia",
    keywords: "sindicato de trabajadores de la industria energetica industria antioquia envigado industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Envigado, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA INDUSTRIA ENERGETICA Subdirectiva Envigado.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA INDUSTRIA NACIONAL DE VAJILLAS CORONA AFINES Y DERIVADOS... Subdirectiva Caldas",
    sector: "publico",
    city: "Caldas, Antioquia",
    keywords: "sindicato de trabajadores de la industria nacional de vajillas corona afines y derivados de productos ceramicos y porcelana publico antioquia caldas empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Caldas, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA INDUSTRIA NACIONAL DE VAJILLAS CORONA AFINES Y DERIVADOS... Subdirectiva Caldas.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA INDUSTRIA PLASTICA DE COLOMBIA SECCIONAL LA ESTRELLA2/04/...",
    sector: "industria",
    city: "la Estrella, Antioquia",
    keywords: "sindicato de trabajadores de la industria plastica de colombia seccional la estrella2 04 2017 industria antioquia la estrella industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación c",
    description: "Subdirectiva sindical del sector industrial con presencia en la Estrella, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA INDUSTRIA PLASTICA DE COLOMBIA SECCIONAL LA ESTRELLA2/04/....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA INDUSTRIA TRANSFORMADORA DEL CAUCHO PLASTICO POLIETILENO... Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "sindicato de trabajadores de la industria transformadora del caucho plastico polietileno poliuretano sinteticos partes y derivados de estos procesos industria antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización si",
    description: "Subdirectiva sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA INDUSTRIA TRANSFORMADORA DEL CAUCHO PLASTICO POLIETILENO... Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA RAMA DE ACTIVIDAD ASEGURADORA Subdirectiva Zipaquirá",
    sector: "industria",
    city: "Zipaquirá, Cundinamarca",
    keywords: "sindicato de trabajadores de la rama de actividad aseguradora industria cundinamarca zipaquirá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Zipaquirá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA RAMA DE ACTIVIDAD ASEGURADORA Subdirectiva Zipaquirá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LA SOCIEDAD DE ACUEDUCTOS Y ALCANTARILLADOS DEL VALLE DEL CA...",
    sector: "servicios",
    city: "Sevilla, Valle del Cauca",
    keywords: "sindicato de trabajadores de la sociedad de acueductos y alcantarillados del valle del cauca sa esp servicios valle del cauca sevilla gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Sevilla, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LA SOCIEDAD DE ACUEDUCTOS Y ALCANTARILLADOS DEL VALLE DEL CA....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LAS INSTITUCIONES PUBLICAS DEDICADAS A LA EDUCACION Y ATENCI...",
    sector: "educacion",
    city: "Puerto Asís, Putumayo",
    keywords: "sindicato de trabajadores de las instituciones publicas dedicadas a la educacion y atencion de la niñez sintrahoincol seccional putumayo educacion putumayo puerto asís empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical neg",
    description: "Comité sindical del sector educación con presencia en Puerto Asís, Putumayo, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LAS INSTITUCIONES PUBLICAS DEDICADAS A LA EDUCACION Y ATENCI....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LAS ORGANIZACIONES NO GUBERNAMENTALES Y SOCIALES COMITE SECC...",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "sindicato de trabajadores de las organizaciones no gubernamentales y sociales comite seccional bucaramanga industria santander bucaramanga industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindi",
    description: "Comité sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LAS ORGANIZACIONES NO GUBERNAMENTALES Y SOCIALES COMITE SECC....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE LAS ORGANIZACIONES NO GUBERNAMENTALES Y SOCIALES COMITE SECC...",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "sindicato de trabajadores de las organizaciones no gubernamentales y sociales comite seccional bucaramanga industria santander bucaramanga industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindi",
    description: "Comité sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE LAS ORGANIZACIONES NO GUBERNAMENTALES Y SOCIALES COMITE SECC....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE OFICIOS VARIOS Subdirectiva Zarzal",
    sector: "servicios",
    city: "Zarzal, Valle del Cauca",
    keywords: "sindicato de trabajadores de oficios varios servicios valle del cauca zarzal oficios varios subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Zarzal, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE OFICIOS VARIOS Subdirectiva Zarzal.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE PROPLAS Subdirectiva Medellín",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "sindicato de trabajadores de proplas servicios antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE PROPLAS Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DE SALUD Y AMBIENTE DE SANTANDER Subdirectiva Bucaramanga",
    sector: "salud",
    city: "Bucaramanga, Santander",
    keywords: "sindicato de trabajadores de salud y ambiente de santander salud santander bucaramanga empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DE SALUD Y AMBIENTE DE SANTANDER Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL BANCO GNB SUDAMERIS",
    sector: "servicios",
    city: "Cartagena, Bolívar",
    keywords: "sindicato de trabajadores del banco gnb sudameris servicios bolívar cartagena empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL BANCO GNB SUDAMERIS.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL BANCO GNB SUDAMERIS \"SINTRAGNB\" COMITE SECCIONAL MEDELLIN",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "sindicato de trabajadores del banco gnb sudameris sintragnb comite seccional medellin servicios antioquia medellín empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL BANCO GNB SUDAMERIS \"SINTRAGNB\" COMITE SECCIONAL MEDELLIN.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL BENEMERITO CUERPO DEBOMBEROS VOLUNTARIOS DE CALI SINTRA BOM...",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de trabajadores del benemerito cuerpo debomberos voluntarios de cali sintra bomcali servicios valle del cauca cali empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL BENEMERITO CUERPO DEBOMBEROS VOLUNTARIOS DE CALI SINTRA BOM....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL INPEC Subdirectiva Ibagué",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "sindicato de trabajadores del inpec publico tolima ibagué empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL INPEC Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL INSTITUTO GEOGRAFICO AGUSTIN CODAZZI",
    sector: "servicios",
    city: "Villavicencio, Meta",
    keywords: "sindicato de trabajadores del instituto geografico agustin codazzi servicios meta villavicencio gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL INSTITUTO GEOGRAFICO AGUSTIN CODAZZI.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL LICEO FRANCES LOUIS PASTEUR Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores del liceo frances louis pasteur servicios bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL LICEO FRANCES LOUIS PASTEUR Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL MUNICIPIO DE CARTAGO",
    sector: "publico",
    city: "Cartago, Valle del Cauca",
    keywords: "sindicato de trabajadores del municipio de cartago publico valle del cauca cartago empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cartago, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL MUNICIPIO DE CARTAGO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL MUNICIPIO DE GUADALAJARA DE BUGA",
    sector: "publico",
    city: "Guadalajara de Buga, Valle del Cauca",
    keywords: "sindicato de trabajadores del municipio de guadalajara de buga publico valle del cauca guadalajara de buga empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Guadalajara de Buga, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL MUNICIPIO DE GUADALAJARA DE BUGA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores del sector financiero colombiano industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL SISTEMA NACIONAL AMBIENTAL - SUBDIRECTIVA SECCIONAL TUNJA",
    sector: "publico",
    city: "Tunja, Boyacá",
    keywords: "sindicato de trabajadores del sistema nacional ambiental - subdirectiva seccional tunja publico boyacá tunja empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Tunja, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL SISTEMA NACIONAL AMBIENTAL - SUBDIRECTIVA SECCIONAL TUNJA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL SISTEMA NACIONAL AMBIENTAL Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato de trabajadores del sistema nacional ambiental publico antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL SISTEMA NACIONAL AMBIENTAL Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL SISTEMA NACIONAL AMBIENTAL Subdirectiva Palmira",
    sector: "publico",
    city: "Palmira, Valle del Cauca",
    keywords: "sindicato de trabajadores del sistema nacional ambiental publico valle del cauca palmira empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Palmira, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL SISTEMA NACIONAL AMBIENTAL Subdirectiva Palmira.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES DEL SISTEMA NACIONAL AMBIENTAL Subdirectiva San Marcos",
    sector: "publico",
    city: "San Marcos, Sucre",
    keywords: "sindicato de trabajadores del sistema nacional ambiental publico sucre san marcos empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en San Marcos, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES DEL SISTEMA NACIONAL AMBIENTAL Subdirectiva San Marcos.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES DE LA ENTIDAD PROMOTORA DE SALUD DEL REGIMEN SUBSIDIA... Subdirectiva Bogotá D.C.",
    sector: "salud",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores oficiales de la entidad promotora de salud del regimen subsidiado eps convida salud bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES DE LA ENTIDAD PROMOTORA DE SALUD DEL REGIMEN SUBSIDIA... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LA GOBERNACION Y LOS MUNICIPI... Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato de trabajadores oficiales y empleados publicos de la gobernacion y los municipios de colombia subdirectiva cali publico valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesor",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LA GOBERNACION Y LOS MUNICIPI... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LA GOBERNACION Y LOS MUNICIPI... Subdirectiva Tuluá",
    sector: "publico",
    city: "Tuluá, Valle del Cauca",
    keywords: "sindicato de trabajadores oficiales y empleados publicos de la gobernacion y los municipios de colombia publico valle del cauca tuluá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negoc",
    description: "Subdirectiva sindical del sector público con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LA GOBERNACION Y LOS MUNICIPI... Subdirectiva Tuluá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LOS MUNICIPIOS DEL DEPARTAMEN... Subdirectiva San Vicente",
    sector: "publico",
    city: "San Vicente, Antioquia",
    keywords: "sindicato de trabajadores oficiales y empleados publicos de los municipios del departamento de antioquia publico antioquia san vicente industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical nego",
    description: "Subdirectiva sindical del sector público con presencia en San Vicente, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LOS MUNICIPIOS DEL DEPARTAMEN... Subdirectiva San Vicente.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LOS MUNICIPIOS DEL DEPARTAMEN... Subdirectiva Santafé de Antioquia",
    sector: "publico",
    city: "Santafé de Antioquia, Antioquia",
    keywords: "sindicato de trabajadores oficiales y empleados publicos de los municipios del departamento de antioquia publico antioquia santafé de antioquia industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sind",
    description: "Subdirectiva sindical del sector público con presencia en Santafé de Antioquia, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LOS MUNICIPIOS DEL DEPARTAMEN... Subdirectiva Santafé de Antioquia.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LOS MUNICIPIOS Y ENTES DESCEN... Subdirectiva Amalfi",
    sector: "publico",
    city: "Amalfi, Antioquia",
    keywords: "sindicato de trabajadores oficiales y empleados publicos de los municipios y entes descentralizados de colombia publico antioquia amalfi industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical ne",
    description: "Subdirectiva sindical del sector público con presencia en Amalfi, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LOS MUNICIPIOS Y ENTES DESCEN... Subdirectiva Amalfi.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DEL ESTADO COLOMBIANO DEPARTAMEN... Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores oficiales y empleados publicos del estado colombiano departamentos y municipios institutos centralizados y descentralizados publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organizació",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DEL ESTADO COLOMBIANO DEPARTAMEN... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DEL ESTADO COLOMBIANO DEPARTAMEN... Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores oficiales y empleados publicos del estado colombiano departamentos y municipios institutos centralizados y descentralizados publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organizació",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DEL ESTADO COLOMBIANO DEPARTAMEN... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DEL ESTADO COLOMBIANO DEPARTAMEN... Subdirectiva Espinal",
    sector: "publico",
    city: "Espinal, Tolima",
    keywords: "sindicato de trabajadores oficiales y empleados publicos del estado colombiano departamentos y municipios institutos centralizados y descentralizados publico tolima espinal industria o por rama de actividad económica subdirectiva sindicato organización sindica",
    description: "Subdirectiva sindical del sector público con presencia en Espinal, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DEL ESTADO COLOMBIANO DEPARTAMEN... Subdirectiva Espinal.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES PENITENCIARIOS DE COLOMBIA",
    sector: "servicios",
    city: "Duitama, Boyacá",
    keywords: "sindicato de trabajadores penitenciarios de colombia servicios boyacá duitama empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector servicios con presencia en Duitama, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES PENITENCIARIOS DE COLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES PENITENCIARIOS DE COLOMBIA - SECCIONAL CUNDINAMRCA Subdirectiva Villa de San Diego de Ubate",
    sector: "servicios",
    city: "Villa de San Diego de Ubate, Cundinamarca",
    keywords: "sindicato de trabajadores penitenciarios de colombia - seccional cundinamrca servicios cundinamarca villa de san diego de ubate empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Villa de San Diego de Ubate, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES PENITENCIARIOS DE COLOMBIA - SECCIONAL CUNDINAMRCA Subdirectiva Villa de San Diego de Ubate.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES PENITENCIARIOS DE COLOMBIA Subdirectiva Ocaña",
    sector: "servicios",
    city: "Ocaña, Norte de Santander",
    keywords: "sindicato de trabajadores penitenciarios de colombia servicios norte de santander ocaña empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Ocaña, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES PENITENCIARIOS DE COLOMBIA Subdirectiva Ocaña.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES PENITENCIARIOS DE COLOMBIA Subdirectiva Pasto",
    sector: "servicios",
    city: "Pasto, Nariño",
    keywords: "sindicato de trabajadores penitenciarios de colombia servicios nariño pasto empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES PENITENCIARIOS DE COLOMBIA Subdirectiva Pasto.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS SECCIONAL VALLEDUPAR",
    sector: "servicios",
    city: "Valledupar, Cesar",
    keywords: "sindicato de trabajadores penitenciarios y carcelarios seccional valledupar servicios cesar valledupar empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Valledupar, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS SECCIONAL VALLEDUPAR.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES PETROLEROS DE ECOPETROL SA Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores petroleros de ecopetrol sa industria bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES PETROLEROS DE ECOPETROL SA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE CONCRETOS ARGOS S.A SUBDIRECTIVA SECCIONAL SOLEDAD",
    sector: "servicios",
    city: "Soledad, Atlántico",
    keywords: "sindicato de trabajadores y empleados de concretos argos s.a subdirectiva seccional soledad servicios atlántico soledad empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Soledad, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE CONCRETOS ARGOS S.A SUBDIRECTIVA SECCIONAL SOLEDAD.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACIÓN",
    sector: "educacion",
    city: "Armenia, Quindio",
    keywords: "sindicato de trabajadores y empleados de la educación educacion quindio armenia industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector educación con presencia en Armenia, Quindio, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACIÓN.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACION",
    sector: "educacion",
    city: "Fusagasugá, Cundinamarca",
    keywords: "sindicato de trabajadores y empleados de la educacion educacion cundinamarca fusagasugá industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector educación con presencia en Fusagasugá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACION.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACION NACIONAL Subdirectiva Barranquilla",
    sector: "educacion",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de trabajadores y empleados de la educacion nacional educacion atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACION NACIONAL Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACION Subdirectiva Tuluá",
    sector: "educacion",
    city: "Tuluá, Valle del Cauca",
    keywords: "sindicato de trabajadores y empleados de la educacion educacion valle del cauca tuluá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACION Subdirectiva Tuluá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACION Subdirectiva Yopal",
    sector: "educacion",
    city: "Yopal, Casanare",
    keywords: "sindicato de trabajadores y empleados de la educacion educacion casanare yopal industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Yopal, Casanare, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA EDUCACION Subdirectiva Yopal.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA FLEXOGRAFIA Y PLASTICOS DE LA COSTA Subdirectiva Barranquilla",
    sector: "servicios",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato de trabajadores y empleados de la flexografia y plasticos de la costa servicios atlántico barranquilla empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA FLEXOGRAFIA Y PLASTICOS DE LA COSTA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA SALUD Y LA SEGURIDAD SOCIAL DEL MAGDALENA Subdirectiva Santa Marta",
    sector: "salud",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato de trabajadores y empleados de la salud y la seguridad social del magdalena salud magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE LA SALUD Y LA SEGURIDAD SOCIAL DEL MAGDALENA Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE SERVICIOS PUBLICOS CORPORACIONES AUTONOMAS INSTI... Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindicato de trabajadores y empleados de servicios publicos corporaciones autonomas instituciones descentralizadas y territoriales de colombia publico bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical tr",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE SERVICIOS PUBLICOS CORPORACIONES AUTONOMAS INSTI... Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE SERVICIOS PUBLICOS CORPORACIONES AUTONOMAS INSTI... Subdirectiva Piedecuesta",
    sector: "publico",
    city: "Piedecuesta, Santander",
    keywords: "sindicato de trabajadores y empleados de servicios publicos corporaciones autonomas instituciones descentralizadas y territoriales de colombia publico santander piedecuesta industria o por rama de actividad económica subdirectiva sindicato organización sindica",
    description: "Subdirectiva sindical del sector público con presencia en Piedecuesta, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE SERVICIOS PUBLICOS CORPORACIONES AUTONOMAS INSTI... Subdirectiva Piedecuesta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DE SERVICIOS PUBLICOS CORPORACIONES AUTONOMAS INSTI... Subdirectiva Santa Rosa de Cabal",
    sector: "publico",
    city: "Santa Rosa de Cabal, Risaralda",
    keywords: "sindicato de trabajadores y empleados de servicios publicos corporaciones autonomas instituciones descentralizadas y territoriales de colombia publico risaralda santa rosa de cabal industria o por rama de actividad económica subdirectiva sindicato organización",
    description: "Subdirectiva sindical del sector público con presencia en Santa Rosa de Cabal, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DE SERVICIOS PUBLICOS CORPORACIONES AUTONOMAS INSTI... Subdirectiva Santa Rosa de Cabal.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS DEL SERVICIO PUBLICO DE ASEO DE AGUAS DE BOGOTA SA... Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores y empleados del servicio publico de aseo de aguas de bogota sa esp dc publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS DEL SERVICIO PUBLICO DE ASEO DE AGUAS DE BOGOTA SA... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS PUBLICOS DEL MUNICIPIO DE CANDELARIA",
    sector: "publico",
    city: "Candelaria, Atlántico",
    keywords: "sindicato de trabajadores y empleados publicos del municipio de candelaria publico atlántico candelaria empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Candelaria, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS PUBLICOS DEL MUNICIPIO DE CANDELARIA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores y empleados universitarios de colombia industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y FUNCIONARIOS PROVISIONALES DEL SISTEMA PENITENCIARIO Y CARCEL... Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato de trabajadores y funcionarios provisionales del sistema penitenciario y carcelario servicios bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y FUNCIONARIOS PROVISIONALES DEL SISTEMA PENITENCIARIO Y CARCEL... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y SERVIDORES DE LA SALUD DEL DEPARTAMENTO DEL CAUCA STSC Subdirectiva Popayán",
    sector: "salud",
    city: "Popayán, Cauca",
    keywords: "sindicato de trabajadores y servidores de la salud del departamento del cauca stsc salud cauca popayán industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Popayán, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y SERVIDORES DE LA SALUD DEL DEPARTAMENTO DEL CAUCA STSC Subdirectiva Popayán.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE TRABAJADORES Y TRABAJADORAS AGROPECUARIOS Subdirectiva Santander de Quilichao",
    sector: "agro",
    city: "Santander de Quilichao, Cauca",
    keywords: "sindicato de trabajadores y trabajadoras agropecuarios agro cauca santander de quilichao gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector agropecuario con presencia en Santander de Quilichao, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE TRABAJADORES Y TRABAJADORAS AGROPECUARIOS Subdirectiva Santander de Quilichao.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE VENDEDORES AMBULANTES Y ESTACIONARIOS DEL CORREGIMIENTO DE URIBE Subdirectiva Bugalagrande",
    sector: "servicios",
    city: "Bugalagrande, Valle del Cauca",
    keywords: "sindicato de vendedores ambulantes y estacionarios del corregimiento de uribe servicios valle del cauca bugalagrande gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bugalagrande, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE VENDEDORES AMBULANTES Y ESTACIONARIOS DEL CORREGIMIENTO DE URIBE Subdirectiva Bugalagrande.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE VENDEDORES DE LA PLAZA DE MERCADO SATELITE EL TEJAR Subdirectiva Pasto",
    sector: "servicios",
    city: "Pasto, Nariño",
    keywords: "sindicato de vendedores de la plaza de mercado satelite el tejar servicios nariño pasto gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE VENDEDORES DE LA PLAZA DE MERCADO SATELITE EL TEJAR Subdirectiva Pasto.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DE ZAPATEROS PRIMERO DE MAYO Subdirectiva Ipiales",
    sector: "servicios",
    city: "Ipiales, Nariño",
    keywords: "sindicato de zapateros primero de mayo servicios nariño ipiales gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DE ZAPATEROS PRIMERO DE MAYO Subdirectiva Ipiales.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DEL MAGISTERIO DE NARIÑO Subdirectiva Pasto",
    sector: "educacion",
    city: "Pasto, Nariño",
    keywords: "sindicato del magisterio de nariño educacion nariño pasto gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DEL MAGISTERIO DE NARIÑO Subdirectiva Pasto.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DEL MINISTERIO DE TRABAJO, MINISTERIO DE SALUD Y PROTECCION SOCIAL, ENTIDADES A...",
    sector: "salud",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato del ministerio de trabajo ministerio de salud y proteccion social entidades adscritas y vinculadas sinaltraseguridad social salud magdalena santa marta industria o por rama de actividad económica comité seccional sindicato organización sindical traba",
    description: "Comité sindical del sector salud con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DEL MINISTERIO DE TRABAJO, MINISTERIO DE SALUD Y PROTECCION SOCIAL, ENTIDADES A....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DEL SECTOR PENITENCIARIO SECCIONAL CUNDINAMARCA Subdirectiva Soacha",
    sector: "servicios",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato del sector penitenciario seccional cundinamarca servicios cundinamarca soacha empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DEL SECTOR PENITENCIARIO SECCIONAL CUNDINAMARCA Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO DEPARTAMENTAL DE TRABAJADORES DE LAS CAJAS DE COMPENSACION FAMILIAR",
    sector: "industria",
    city: "Floridablanca, Santander",
    keywords: "sindicato departamental de trabajadores de las cajas de compensacion familiar industria santander floridablanca industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Floridablanca, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO DEPARTAMENTAL DE TRABAJADORES DE LAS CAJAS DE COMPENSACION FAMILIAR.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO ITAGUISEÑO DE EMPLEADOS",
    sector: "industria",
    city: "Itagui, Antioquia",
    keywords: "sindicato itaguiseño de empleados industria antioquia itagui industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Itagui, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO ITAGUISEÑO DE EMPLEADOS.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO MEDICOS UNIDOS DE COLOMBIA Subdirectiva Pasto",
    sector: "salud",
    city: "Pasto, Nariño",
    keywords: "sindicato medicos unidos de colombia salud nariño pasto industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO MEDICOS UNIDOS DE COLOMBIA Subdirectiva Pasto.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO MIXTO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LOS ENTES TERRITORIALES... Subdirectiva Ibagué",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "sindicato mixto de trabajadores oficiales y empleados publicos de los entes territoriales municipales y departamentales del sector central y descentralizado del departamento del tolima publico tolima ibagué empresa subdirectiva sindicato organización sindical",
    description: "Subdirectiva sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO MIXTO DE TRABAJADORES OFICIALES Y EMPLEADOS PUBLICOS DE LOS ENTES TERRITORIALES... Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE EMPLEADOS DE LA DIRECCION DE IMPUESTOS Y ADUANAS NACIONALES",
    sector: "publico",
    city: "Riohacha, la Guajira",
    keywords: "sindicato nacional de empleados de la direccion de impuestos y aduanas nacionales publico la guajira riohacha empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Riohacha, la Guajira, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE EMPLEADOS DE LA DIRECCION DE IMPUESTOS Y ADUANAS NACIONALES.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE EMPLEADOS DE LA DIRECCION DE IMPUESTOS Y ADUANAS NACIONALES Subdirectiva Montería",
    sector: "publico",
    city: "Montería, Córdoba",
    keywords: "sindicato nacional de empleados de la direccion de impuestos y aduanas nacionales publico córdoba montería empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Montería, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE EMPLEADOS DE LA DIRECCION DE IMPUESTOS Y ADUANAS NACIONALES Subdirectiva Montería.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE EMPLEADOS DE LA REGISTRADURIA NACIONAL DEL ESTADO CIVIL",
    sector: "publico",
    city: "Arauca",
    keywords: "sindicato nacional de empleados de la registraduria nacional del estado civil publico arauca arauca empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Arauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE EMPLEADOS DE LA REGISTRADURIA NACIONAL DEL ESTADO CIVIL.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE EMPLEADOS DE MEDICINA LEGAL Y CIENCIAS FORENSES Subdirectiva Ibagué",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "sindicato nacional de empleados de medicina legal y ciencias forenses publico tolima ibagué empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE EMPLEADOS DE MEDICINA LEGAL Y CIENCIAS FORENSES Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE EMPLEADOS DEL GREMIO DE LA SALUD DE COLOMBIA Subdirectiva Barranquilla",
    sector: "salud",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de empleados del gremio de la salud de colombia salud atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE EMPLEADOS DEL GREMIO DE LA SALUD DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE EMPLEADOS Y TRABAJADORES DE LA FISCALIA GENERAL DE LA NACION Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de empleados y trabajadores de la fiscalia general de la nacion publico santander bucaramanga empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE EMPLEADOS Y TRABAJADORES DE LA FISCALIA GENERAL DE LA NACION Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE FUNCIONARIOS PENITENCIARIOS Y CARCELARIOS DE COLOMBIA Subdirectiva Soacha",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato nacional de funcionarios penitenciarios y carcelarios de colombia publico cundinamarca soacha empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE FUNCIONARIOS PENITENCIARIOS Y CARCELARIOS DE COLOMBIA Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE INDUSTRIA DE TRABAJADORES QUE PRESTAN SUS SERVICIOS EN EMPRESAS DE...",
    sector: "publico",
    city: "Pereira, Risaralda",
    keywords: "sindicato nacional de industria de trabajadores que prestan sus servicios en empresas de explotacion del negocio de transporte de valores actividades conexas seguridad privada en movilidad fija movil escoltas y similares al igual que el personal de logistica y",
    description: "Comité sindical del sector público con presencia en Pereira, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE INDUSTRIA DE TRABAJADORES QUE PRESTAN SUS SERVICIOS EN EMPRESAS DE....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE INDUSTRIA DE TRABAJADORES QUE PRESTAN SUS SERVICIOS EN EMPRESAS DE... Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato nacional de industria de trabajadores que prestan sus servicios en empresas de explotacion del negocio de transporte de valores actividades conexas seguridad privada en modalidad fija movil escoltas y similares al igual que el personal de logistica y",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE INDUSTRIA DE TRABAJADORES QUE PRESTAN SUS SERVICIOS EN EMPRESAS DE... Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE INDUSTRIA DE VIGILANCIA SEGURIDAD PRIVADA Y VALORES",
    sector: "publico",
    city: "Facatativá, Cundinamarca",
    keywords: "sindicato nacional de industria de vigilancia seguridad privada y valores publico cundinamarca facatativá industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE INDUSTRIA DE VIGILANCIA SEGURIDAD PRIVADA Y VALORES.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA INDUSTRIA DE PRODUCTOS DESTINADOS A LA ALIMENTACION BEBIDAS AFIN... Subdirectiva Turbaco",
    sector: "publico",
    city: "Turbaco, Bolívar",
    keywords: "sindicato nacional de la industria de productos destinados a la alimentacion bebidas afines y similares publico bolívar turbaco industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación",
    description: "Subdirectiva sindical del sector público con presencia en Turbaco, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA INDUSTRIA DE PRODUCTOS DESTINADOS A LA ALIMENTACION BEBIDAS AFIN... Subdirectiva Turbaco.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL",
    sector: "salud",
    city: "Ipiales, Nariño",
    keywords: "sindicato nacional de la salud y seguridad social salud nariño ipiales industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector salud con presencia en Ipiales, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL SINDESS SUBDIRECTIVA ARBELÁEZ CUNDINAMARCA Subdirectiva Arbeláez",
    sector: "salud",
    city: "Arbeláez, Cundinamarca",
    keywords: "sindicato nacional de la salud y seguridad social sindess subdirectiva arbeláez cundinamarca salud cundinamarca arbeláez industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colect",
    description: "Subdirectiva sindical del sector salud con presencia en Arbeláez, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL SINDESS SUBDIRECTIVA ARBELÁEZ CUNDINAMARCA Subdirectiva Arbeláez.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva Carepa",
    sector: "salud",
    city: "Carepa, Antioquia",
    keywords: "sindicato nacional de la salud y seguridad social salud antioquia carepa industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Carepa, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva Carepa.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva Curumaní",
    sector: "salud",
    city: "Curumaní, Cesar",
    keywords: "sindicato nacional de la salud y seguridad social salud cesar curumaní industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Curumaní, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva Curumaní.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva Salamina",
    sector: "salud",
    city: "Salamina, Caldas",
    keywords: "sindicato nacional de la salud y seguridad social salud caldas salamina industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Salamina, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva Salamina.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva San José del Guaviare",
    sector: "salud",
    city: "San José del Guaviare, Guaviare",
    keywords: "sindicato nacional de la salud y seguridad social salud guaviare san josé del guaviare industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en San José del Guaviare, Guaviare, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva San José del Guaviare.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva Tuluá",
    sector: "salud",
    city: "Tuluá, Valle del Cauca",
    keywords: "sindicato nacional de la salud y seguridad social salud valle del cauca tuluá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA SALUD Y SEGURIDAD SOCIAL Subdirectiva Tuluá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LA VIA FERREA DEL ORDEN ADMINISTRATIVO Y OPERATIVO VINCULADAS A FER... Subdirectiva Aracataca",
    sector: "publico",
    city: "Aracataca, Magdalena",
    keywords: "sindicato nacional de la via ferrea del orden administrativo y operativo vinculadas a ferrocarriles del norte de colombia s.a fenoco s.a o las entidades vinculads o que la remplacen fusionen escindan o liquiden por contratos laborales civiles o comerciales del",
    description: "Subdirectiva sindical del sector público con presencia en Aracataca, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LA VIA FERREA DEL ORDEN ADMINISTRATIVO Y OPERATIVO VINCULADAS A FER... Subdirectiva Aracataca.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LOS TRABAJADORES DE LA INDUSTRIA DE LA CONSTRUCCION AFINES Y SIMILARES Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindicato nacional de los trabajadores de la industria de la construccion afines y similares publico bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiv",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LOS TRABAJADORES DE LA INDUSTRIA DE LA CONSTRUCCION AFINES Y SIMILARES Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LOS TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS AFINES Y DEMAS EN... Subdirectiva Santa Marta",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato nacional de los trabajadores de la industria de los alimentos afines y demas en colombia publico magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociació",
    description: "Subdirectiva sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LOS TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS AFINES Y DEMAS EN... Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE LOS TRABAJADORES DE LA INDUSTRIA DE LOS OFICIOS Y LAS ACTIVIDADES S... Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato nacional de los trabajadores de la industria de los oficios y las actividades siderurgicas metalurgicas metalmecanicas afines y complementarias publico antioquia medellín gremio subdirectiva sindicato organización sindical trabajo digno asesoría sind",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE LOS TRABAJADORES DE LA INDUSTRIA DE LOS OFICIOS Y LAS ACTIVIDADES S... Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE PERSONAL VINCULADO A LA UNIDAD NACIONAL DE PROTECCION Y DEMAS EMPLE... Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de personal vinculado a la unidad nacional de proteccion y demas empleados vinculados a la rama de la actividad economica de la seguridad y proteccion zona 4 oriente santanderes magdalena medio arauca publico santander bucaramanga industria",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE PERSONAL VINCULADO A LA UNIDAD NACIONAL DE PROTECCION Y DEMAS EMPLE... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE PERSONAL VINCULADO A LA UNIDAD NACIONAL DE PROTECCION Y DEMAS EMPLE... Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato nacional de personal vinculado a la unidad nacional de proteccion y demas empleados vinculados a la rama de la actividad economica de la seguridad y proteccion publico valle del cauca cali industria o por rama de actividad económica subdirectiva sind",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE PERSONAL VINCULADO A LA UNIDAD NACIONAL DE PROTECCION Y DEMAS EMPLE... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE PRIMER GRADO DE EMPRESA DE LOS TRABAJADORES QUE PRESTAN SUS SERVICI... Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato nacional de primer grado de empresa de los trabajadores que prestan sus servicios en la empresa transportadora de valores prosegur de colombia s.a publico valle del cauca cali empresa subdirectiva sindicato organización sindical trabajo digno asesorí",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE PRIMER GRADO DE EMPRESA DE LOS TRABAJADORES QUE PRESTAN SUS SERVICI... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE PROFESIONALES DE LA SEGURIDAD",
    sector: "publico",
    city: "Orito, Putumayo",
    keywords: "sindicato nacional de profesionales de la seguridad publico putumayo orito industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Orito, Putumayo, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE PROFESIONALES DE LA SEGURIDAD.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE PROFESIONALES DE LA SEGURIDAD Subdirectiva Ibagué",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "sindicato nacional de profesionales de la seguridad publico tolima ibagué industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE PROFESIONALES DE LA SEGURIDAD Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE PROFESIONALES DE LA SEGURIDAD Subdirectiva Santa Marta",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato nacional de profesionales de la seguridad publico magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE PROFESIONALES DE LA SEGURIDAD Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE PROFESIONALES DE LA SEGURIDAD Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "sindicato nacional de profesionales de la seguridad publico meta villavicencio industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE PROFESIONALES DE LA SEGURIDAD Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS (E) AL CUIDADO DE LA INFANCIA Y ADOLESCENTES DEL SISTE... Subdirectiva Puerto Asís",
    sector: "publico",
    city: "Puerto Asís, Putumayo",
    keywords: "sindicato nacional de trabajadoras e al cuidado de la infancia y adolescentes del sistema nacional del bienestar familiar publico putumayo puerto asís gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Puerto Asís, Putumayo, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS (E) AL CUIDADO DE LA INFANCIA Y ADOLESCENTES DEL SISTE... Subdirectiva Puerto Asís.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N...",
    sector: "publico",
    city: "Montería, Córdoba",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico córdoba montería empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Montería, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Achí",
    sector: "publico",
    city: "Achí, Bolívar",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional del bienestar familiar publico bolívar achí gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Achí, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Achí.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico valle del cauca cali gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico valle del cauca cali gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Candelaria",
    sector: "publico",
    city: "Candelaria, Valle del Cauca",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico valle del cauca candelaria gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Candelaria, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Candelaria.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico bolívar cartagena gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Guaranda",
    sector: "publico",
    city: "Guaranda, Sucre",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico sucre guaranda gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Guaranda, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Guaranda.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva la Dorada",
    sector: "publico",
    city: "la Dorada, Caldas",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico caldas la dorada gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en la Dorada, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva la Dorada.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Majagual",
    sector: "publico",
    city: "Majagual, Sucre",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional del bienestar familiar publico sucre majagual gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Majagual, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Majagual.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Pereira",
    sector: "publico",
    city: "Pereira, Risaralda",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico risaralda pereira gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Pereira, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Pereira.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Pradera",
    sector: "publico",
    city: "Pradera, Valle del Cauca",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico valle del cauca pradera gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Pradera, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Pradera.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Pueblo Nuevo",
    sector: "publico",
    city: "Pueblo Nuevo, Córdoba",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico córdoba pueblo nuevo gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Pueblo Nuevo, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Pueblo Nuevo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Puerto Caicedo",
    sector: "publico",
    city: "Puerto Caicedo, Putumayo",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico putumayo puerto caicedo gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Puerto Caicedo, Putumayo, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Puerto Caicedo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva San Agustín",
    sector: "publico",
    city: "San Agustín, Huila",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional del bienestar familiar publico huila san agustín gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en San Agustín, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva San Agustín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Santa Ana",
    sector: "publico",
    city: "Santa Ana, Magdalena",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico magdalena santa ana gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Ana, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Santa Ana.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Santa Rosa del Sur",
    sector: "publico",
    city: "Santa Rosa del Sur, Bolívar",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescencia del sistema nacional de bienestar familiar publico bolívar santa rosa del sur gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Rosa del Sur, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENCIA DEL SISTEMA N... Subdirectiva Santa Rosa del Sur.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENTE EN EL SISTEMA... Subdirectiva San Pablo",
    sector: "publico",
    city: "San Pablo, Bolívar",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescente en el sistema nacional de bienestar familiar publico bolívar san pablo gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en San Pablo, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENTE EN EL SISTEMA... Subdirectiva San Pablo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENTES DEL SISTEMA N... Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato nacional de trabajadoras al cuidado de la infancia y adolescentes del sistema nacional de bienestar familiar publico bogotá d.c. bogotá d.c. gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORAS AL CUIDADO DE LA INFANCIA Y ADOLESCENTES DEL SISTEMA N... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES AGROALIMENTARIO DE COLOMBIA Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores agroalimentario de colombia publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES AGROALIMENTARIO DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES AGROALIMENTARIOS DE COLOMBIA Subdirectiva Santa Marta",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato nacional de trabajadores agroalimentarios de colombia publico magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES AGROALIMENTARIOS DE COLOMBIA Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES CONDUCTORES DEL TRANSPORTE AUTOMOTOR Subdirectiva Floridablanca",
    sector: "publico",
    city: "Floridablanca, Santander",
    keywords: "sindicato nacional de trabajadores conductores del transporte automotor publico santander floridablanca industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Floridablanca, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES CONDUCTORES DEL TRANSPORTE AUTOMOTOR Subdirectiva Floridablanca.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE BIMBO",
    sector: "publico",
    city: "Itagui, Antioquia",
    keywords: "sindicato nacional de trabajadores de bimbo publico antioquia itagui industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Itagui, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE BIMBO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE CARTON DE COLOMBIA Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato nacional de trabajadores de carton de colombia publico antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE CARTON DE COLOMBIA Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE CONCRETO ARGOS Subdirectiva Soledad",
    sector: "publico",
    city: "Soledad, Atlántico",
    keywords: "sindicato nacional de trabajadores de concreto argos publico atlántico soledad empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Soledad, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE CONCRETO ARGOS Subdirectiva Soledad.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE EMPRESAS OPERADORAS CONTRATISTAS SUBCONTRATISTAS DE... Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "sindicato nacional de trabajadores de empresas operadoras contratistas subcontratistas de servicios y actividades de la industria del petroleo petroquimica y similares publico meta villavicencio industria o por rama de actividad económica subdirectiva sindicat",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE EMPRESAS OPERADORAS CONTRATISTAS SUBCONTRATISTAS DE... Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato nacional de trabajadores de entidades financieras publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE ENTIDADES FINANCIERAS Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE INDUSTRIA DE VIGILANCIA Y SEGURIDAD PRIVADA Y VALORES",
    sector: "publico",
    city: "Valledupar, Cesar",
    keywords: "sindicato nacional de trabajadores de industria de vigilancia y seguridad privada y valores publico cesar valledupar industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colect",
    description: "Comité sindical del sector público con presencia en Valledupar, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE INDUSTRIA DE VIGILANCIA Y SEGURIDAD PRIVADA Y VALORES.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE INTERCONEXION ELECTRICA S A",
    sector: "publico",
    city: "Sabaneta, Antioquia",
    keywords: "sindicato nacional de trabajadores de interconexion electrica s a publico antioquia sabaneta empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Sabaneta, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE INTERCONEXION ELECTRICA S A.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA AGROINDUSTRIA DE LA CAÑA DE AZUCAR DE LA AZUCAR... Subdirectiva Pradera",
    sector: "publico",
    city: "Pradera, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores de la agroindustria de la caña de azucar de la azucar y afines y similares publico valle del cauca pradera industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindic",
    description: "Subdirectiva sindical del sector público con presencia en Pradera, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA AGROINDUSTRIA DE LA CAÑA DE AZUCAR DE LA AZUCAR... Subdirectiva Pradera.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA AGROINDUSTRIA Y COMERCIALIZACION DE PRODUCTOS AG... Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la agroindustria y comercializacion de productos agroalimentarios tabaco y cigarrillos publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno a",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA AGROINDUSTRIA Y COMERCIALIZACION DE PRODUCTOS AG... Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA AGROINDUSTRIA Y LA COMERCIALIZACION DE PRODUCTOS... Subdirectiva Mosquera",
    sector: "publico",
    city: "Mosquera, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la agroindustria y la comercializacion de productos alimentarios publico cundinamarca mosquera industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negoci",
    description: "Subdirectiva sindical del sector público con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA AGROINDUSTRIA Y LA COMERCIALIZACION DE PRODUCTOS... Subdirectiva Mosquera.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA COMPAÑIA TRANSPORTADORA DE VALORES PROSEGUR DE C...",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato nacional de trabajadores de la compañia transportadora de valores prosegur de colombia s.a. publico antioquia medellín empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA COMPAÑIA TRANSPORTADORA DE VALORES PROSEGUR DE C....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA CORPORACION COLOMBIANA DE INVESTIGACION AGROPECU... Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de trabajadores de la corporacion colombiana de investigacion agropecuaria publico santander bucaramanga empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA CORPORACION COLOMBIANA DE INVESTIGACION AGROPECU... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA CORPORACION UNIVERSITARIA MINUTO DE DIOS SECCION... Subdirectiva Girardot",
    sector: "publico",
    city: "Girardot, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la corporacion universitaria minuto de dios seccional girardot publico cundinamarca girardot empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Girardot, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA CORPORACION UNIVERSITARIA MINUTO DE DIOS SECCION... Subdirectiva Girardot.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA EMPRESA EMPAQUES INDUSTRIALES DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato nacional de trabajadores de la empresa empaques industriales de colombia publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA EMPRESA EMPAQUES INDUSTRIALES DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA EMPRESA EMPAQUES INDUSTRIALES DE COLOMBIA Subdirectiva Palmira",
    sector: "publico",
    city: "Palmira, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores de la empresa empaques industriales de colombia publico valle del cauca palmira empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Palmira, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA EMPRESA EMPAQUES INDUSTRIALES DE COLOMBIA Subdirectiva Palmira.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA EMPRESA MUTUAL PARA EL DESARROLLO INTEGRAL DE LA... Subdirectiva Tunja",
    sector: "salud",
    city: "Tunja, Boyacá",
    keywords: "sindicato nacional de trabajadores de la empresa mutual para el desarrollo integral de la salud subdirectiva seccional departamental boyaca salud boyacá tunja empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación cole",
    description: "Subdirectiva sindical del sector salud con presencia en Tunja, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA EMPRESA MUTUAL PARA EL DESARROLLO INTEGRAL DE LA... Subdirectiva Tunja.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA EMPRESA TRANSPORTEMPO SAS Subdirectiva Sogamoso",
    sector: "publico",
    city: "Sogamoso, Boyacá",
    keywords: "sindicato nacional de trabajadores de la empresa transportempo sas publico boyacá sogamoso empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Sogamoso, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA EMPRESA TRANSPORTEMPO SAS Subdirectiva Sogamoso.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA FE PUBLICA Subdirectiva Cúcuta",
    sector: "publico",
    city: "Cúcuta, Norte de Santander",
    keywords: "sindicato nacional de trabajadores de la fe publica publico norte de santander cúcuta empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA FE PUBLICA Subdirectiva Cúcuta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA FE PUBLICA Subdirectiva Montería",
    sector: "publico",
    city: "Montería, Córdoba",
    keywords: "sindicato nacional de trabajadores de la fe publica publico córdoba montería empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Montería, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA FE PUBLICA Subdirectiva Montería.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA HACIENDA PUBLICA SUBDIRECTIVA SINCELEJO",
    sector: "publico",
    city: "Sincelejo, Sucre",
    keywords: "sindicato nacional de trabajadores de la hacienda publica subdirectiva sincelejo publico sucre sincelejo industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA HACIENDA PUBLICA SUBDIRECTIVA SINCELEJO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA IEMPRESA INDUSTRIA COLOMBIANA DE CAFE Subdirectiva Santa Marta",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato nacional de trabajadores de la iempresa industria colombiana de cafe publico magdalena santa marta empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA IEMPRESA INDUSTRIA COLOMBIANA DE CAFE Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA AGROPECUARIA SECCIONAL TULUA Subdirectiva Tuluá",
    sector: "publico",
    city: "Tuluá, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores de la industria agropecuaria seccional tulua publico valle del cauca tuluá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA AGROPECUARIA SECCIONAL TULUA Subdirectiva Tuluá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA AGROPECUARIA Subdirectiva Puerto López",
    sector: "publico",
    city: "Puerto López, Meta",
    keywords: "sindicato nacional de trabajadores de la industria agropecuaria publico meta puerto lópez industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Puerto López, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA AGROPECUARIA Subdirectiva Puerto López.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE BEBIDAS ALIMENTOS SISTEMA AGROALIME... Subdirectiva Montería",
    sector: "publico",
    city: "Montería, Córdoba",
    keywords: "sindicato nacional de trabajadores de la industria de bebidas alimentos sistema agroalimentario afines y similares en colombia publico córdoba montería industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno aseso",
    description: "Subdirectiva sindical del sector público con presencia en Montería, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE BEBIDAS ALIMENTOS SISTEMA AGROALIME... Subdirectiva Montería.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE BEBIDAS ALIMENTOS SISTEMA AGROALIME... Subdirectiva Yumbo",
    sector: "publico",
    city: "Yumbo, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores de la industria de bebidas alimentos sistema agroalimentario afines y similares en colombia publico valle del cauca yumbo industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno",
    description: "Subdirectiva sindical del sector público con presencia en Yumbo, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE BEBIDAS ALIMENTOS SISTEMA AGROALIME... Subdirectiva Yumbo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE HILADOS TEJIDOS TEXTILES CONFECCION... Subdirectiva Copacabana",
    sector: "publico",
    city: "Copacabana, Antioquia",
    keywords: "sindicato nacional de trabajadores de la industria de hilados tejidos textiles confecciones fibras sinteticas naturales y afines publico antioquia copacabana industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno",
    description: "Subdirectiva sindical del sector público con presencia en Copacabana, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE HILADOS TEJIDOS TEXTILES CONFECCION... Subdirectiva Copacabana.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE HILADOS TEJIDOS TEXTILES CONFECCION... Subdirectiva Girardota",
    sector: "publico",
    city: "Girardota, Antioquia",
    keywords: "sindicato nacional de trabajadores de la industria de hilados tejidos textiles confecciones fibras sinteticas naturales y afines publico antioquia girardota industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno",
    description: "Subdirectiva sindical del sector público con presencia en Girardota, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE HILADOS TEJIDOS TEXTILES CONFECCION... Subdirectiva Girardota.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LA CARNE Subdirectiva Saravena",
    sector: "publico",
    city: "Saravena, Arauca",
    keywords: "sindicato nacional de trabajadores de la industria de la carne publico arauca saravena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Saravena, Arauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LA CARNE Subdirectiva Saravena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LA CERAMICA Subdirectiva San Vicente",
    sector: "publico",
    city: "San Vicente, Antioquia",
    keywords: "sindicato nacional de trabajadores de la industria de la ceramica publico antioquia san vicente industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en San Vicente, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LA CERAMICA Subdirectiva San Vicente.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LA CONSTRUCCION Y OBRAS PUBLICAS Subdirectiva Puerto Rondón",
    sector: "publico",
    city: "Puerto Rondón, Arauca",
    keywords: "sindicato nacional de trabajadores de la industria de la construccion y obras publicas publico arauca puerto rondón industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Puerto Rondón, Arauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LA CONSTRUCCION Y OBRAS PUBLICAS Subdirectiva Puerto Rondón.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LA VIGILANCIA Y SEGURIDAD PRIVADA Subdirectiva Soacha",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la industria de la vigilancia y seguridad privada publico cundinamarca soacha industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LA VIGILANCIA Y SEGURIDAD PRIVADA Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS Y AFINES Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la industria de los alimentos y afines publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS Y AFINES Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS Y AFINES Subdirectiva Ciénaga",
    sector: "publico",
    city: "Ciénaga, Magdalena",
    keywords: "sindicato nacional de trabajadores de la industria de los alimentos y afines publico magdalena ciénaga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ciénaga, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS Y AFINES Subdirectiva Ciénaga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS Y AFINES Subdirectiva Santa Marta",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato nacional de trabajadores de la industria de los alimentos y afines publico magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS Y AFINES Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS Y BEBIDAS CERVECERA M... Subdirectiva Apartadó",
    sector: "publico",
    city: "Apartadó, Antioquia",
    keywords: "sindicato nacional de trabajadores de la industria de los alimentos y bebidas cervecera maltera jugos refrescos aguas y gaseosas de colombia publico antioquia apartadó industria o por rama de actividad económica subdirectiva sindicato organización sindical tra",
    description: "Subdirectiva sindical del sector público con presencia en Apartadó, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE LOS ALIMENTOS Y BEBIDAS CERVECERA M... Subdirectiva Apartadó.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE PRODUCTOS GRASOS Y ALIMENTICIOS SEC...",
    sector: "publico",
    city: "Caldas, Antioquia",
    keywords: "sindicato nacional de trabajadores de la industria de productos grasos y alimenticios seccional caldas antioquia publico antioquia caldas industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindic",
    description: "Comité sindical del sector público con presencia en Caldas, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE PRODUCTOS GRASOS Y ALIMENTICIOS SEC....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE PRODUCTOS GRASOS Y ALIMENTICIOS SEC...",
    sector: "publico",
    city: "Pamplona, Norte de Santander",
    keywords: "sindicato nacional de trabajadores de la industria de productos grasos y alimenticios seccional pamplona publico norte de santander pamplona industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sin",
    description: "Comité sindical del sector público con presencia en Pamplona, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE PRODUCTOS GRASOS Y ALIMENTICIOS SEC....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE PRODUCTOS GRASOS Y ALIMENTICIOS Subdirectiva Chía",
    sector: "publico",
    city: "Chía, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la industria de productos grasos y alimenticios publico cundinamarca chía industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Chía, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE PRODUCTOS GRASOS Y ALIMENTICIOS Subdirectiva Chía.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE PRODUCTOS GRASOS Y ALIMENTICIOS Subdirectiva Soacha",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la industria de productos grasos y alimenticios publico cundinamarca soacha industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DE PRODUCTOS GRASOS Y ALIMENTICIOS Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL ACERO Subdirectiva Funza",
    sector: "publico",
    city: "Funza, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la industria del acero publico cundinamarca funza industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Funza, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL ACERO Subdirectiva Funza.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CARBON Subdirectiva Ciénaga",
    sector: "publico",
    city: "Ciénaga, Magdalena",
    keywords: "sindicato nacional de trabajadores de la industria del carbon publico magdalena ciénaga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ciénaga, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CARBON Subdirectiva Ciénaga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CARBON Subdirectiva Ciénaga",
    sector: "publico",
    city: "Ciénaga, Magdalena",
    keywords: "sindicato nacional de trabajadores de la industria del carbon publico magdalena ciénaga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ciénaga, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CARBON Subdirectiva Ciénaga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CEMENTO CONCRETO AFINES Y SIMILARES",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato nacional de trabajadores de la industria del cemento concreto afines y similares publico magdalena santa marta industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación co",
    description: "Comité sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CEMENTO CONCRETO AFINES Y SIMILARES.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CEMENTO CONCRETO AFINES Y SIMILARES Subdirectiva Cajicá",
    sector: "publico",
    city: "Cajicá, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la industria del cemento concreto afines y similares publico cundinamarca cajicá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiv",
    description: "Subdirectiva sindical del sector público con presencia en Cajicá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CEMENTO CONCRETO AFINES Y SIMILARES Subdirectiva Cajicá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CEMENTO CONCRETO AFINES Y SIMILARES Subdirectiva Ibagué",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "sindicato nacional de trabajadores de la industria del cemento concreto afines y similares publico tolima ibagué industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CEMENTO CONCRETO AFINES Y SIMILARES Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CULTIVO Y PROCESAMIENTO DE ACEITES... Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de trabajadores de la industria del cultivo y procesamiento de aceites y vegetales publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negocia",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CULTIVO Y PROCESAMIENTO DE ACEITES... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CULTIVO Y PROCESAMIENTO DE ACEITES... Subdirectiva San Alberto",
    sector: "publico",
    city: "San Alberto, Cesar",
    keywords: "sindicato nacional de trabajadores de la industria del cultivo y procesamiento de aceites y vegetales publico cesar san alberto industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación",
    description: "Subdirectiva sindical del sector público con presencia en San Alberto, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL CULTIVO Y PROCESAMIENTO DE ACEITES... Subdirectiva San Alberto.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL METAL METALMECANICA METALURGICA SI... Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la industria del metal metalmecanica metalurgica siderurgia y afines publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical n",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL METAL METALMECANICA METALURGICA SI... Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL TABACO EN COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato nacional de trabajadores de la industria del tabaco en colombia publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA DEL TABACO EN COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA GASTRONOMICA HOTELERA Y TURISTICA DE C...",
    sector: "publico",
    city: "Mosquera, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la industria gastronomica hotelera y turistica de colombia sinthol seccional mosquera publico cundinamarca mosquera industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno",
    description: "Comité sindical del sector público con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA GASTRONOMICA HOTELERA Y TURISTICA DE C....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA LECHERA Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato nacional de trabajadores de la industria lechera publico antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA LECHERA Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA AGROQUIMICA GASES RAMAS AFINES... Subdirectiva Barrancabermeja",
    sector: "publico",
    city: "Barrancabermeja, Santander",
    keywords: "sindicato nacional de trabajadores de la industria quimica agroquimica gases ramas afines y derivados publico santander barrancabermeja industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical neg",
    description: "Subdirectiva sindical del sector público con presencia en Barrancabermeja, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA AGROQUIMICA GASES RAMAS AFINES... Subdirectiva Barrancabermeja.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA AGROQUIMICA GASES RAMAS AFINES... Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la industria quimica agroquimica gases ramas afines y derivados publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negoci",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA AGROQUIMICA GASES RAMAS AFINES... Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA GASES Y MEDICINA DE COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato nacional de trabajadores de la industria quimica gases y medicina de colombia publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colecti",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA GASES Y MEDICINA DE COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la industria quimica y o farmaceutica de colombia publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiv",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la industria quimica y o farmaceutica de colombia publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiv",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la industria quimica y o farmaceutica de colombia publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiv",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la industria quimica y o farmaceutica de colombia publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiv",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Cajicá",
    sector: "publico",
    city: "Cajicá, Cundinamarca",
    keywords: "sindicato nacional de trabajadores de la industria quimica y o farmaceutica de colombia publico cundinamarca cajicá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cajicá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA INDUSTRIA QUIMICA Y/O FARMACEUTICA DE COLOMBIA Subdirectiva Cajicá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA ORGANIZACION SANITAS INTERNACIONAL Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la organizacion sanitas internacional publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA ORGANIZACION SANITAS INTERNACIONAL Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA PROCURADURIA GENERAL DE LA NACION Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato nacional de trabajadores de la procuraduria general de la nacion publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA PROCURADURIA GENERAL DE LA NACION Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA PROCURADURIA GENERAL DE LA NACION Subdirectiva Quibdó",
    sector: "publico",
    city: "Quibdó, Chocó",
    keywords: "sindicato nacional de trabajadores de la procuraduria general de la nacion publico chocó quibdó empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Quibdó, Chocó, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA PROCURADURIA GENERAL DE LA NACION Subdirectiva Quibdó.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA PRODUCCION DISTRIBUCION Y CONSUMO DE ALIMENTOS B... Subdirectiva Barrancabermeja",
    sector: "publico",
    city: "Barrancabermeja, Santander",
    keywords: "sindicato nacional de trabajadores de la produccion distribucion y consumo de alimentos bebidas y demas servicios que se presten en clubes hoteles restaurantes y similares de colombia publico santander barrancabermeja industria o por rama de actividad económic",
    description: "Subdirectiva sindical del sector público con presencia en Barrancabermeja, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA PRODUCCION DISTRIBUCION Y CONSUMO DE ALIMENTOS B... Subdirectiva Barrancabermeja.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA SALUD DE COLOMBIA Subdirectiva Barranquilla",
    sector: "salud",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la salud de colombia salud atlántico barranquilla gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA SALUD DE COLOMBIA Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA",
    sector: "publico",
    city: "Pasto, Nariño",
    keywords: "sindicato nacional de trabajadores de la seguridad en colombia publico nariño pasto industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA SUBDIRECTIVA BARRANQUILLA",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores de la seguridad en colombia subdirectiva barranquilla publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colecti",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA SUBDIRECTIVA BARRANQUILLA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato nacional de trabajadores de la seguridad en colombia publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de trabajadores de la seguridad en colombia publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA SUBDIRECTIVA HUILA Subdirectiva Neiva",
    sector: "publico",
    city: "Neiva, Huila",
    keywords: "sindicato nacional de trabajadores de la seguridad en colombia subdirectiva huila publico huila neiva industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA SUBDIRECTIVA HUILA Subdirectiva Neiva.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA Subdirectiva Ibagué",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "sindicato nacional de trabajadores de la seguridad en colombia publico tolima ibagué industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA SUBDIRECTIVA Subdirectiva Florencia",
    sector: "publico",
    city: "Florencia, Caquetá",
    keywords: "sindicato nacional de trabajadores de la seguridad en colombia subdirectiva publico caquetá florencia industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Florencia, Caquetá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA SEGURIDAD EN COLOMBIA SUBDIRECTIVA Subdirectiva Florencia.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA VIGILANCIA ESCOLTA Y SIMILARES Subdirectiva Tuluá",
    sector: "publico",
    city: "Tuluá, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores de la vigilancia escolta y similares publico valle del cauca tuluá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA VIGILANCIA ESCOLTA Y SIMILARES Subdirectiva Tuluá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LA VIGILANCIA PRIVADA Y AFINES Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores de la vigilancia privada y afines publico valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LA VIGILANCIA PRIVADA Y AFINES Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE LAS CAJAS DE COMPENSACION FAMILIAR Subdirectiva Rionegro",
    sector: "publico",
    city: "Rionegro, Antioquia",
    keywords: "sindicato nacional de trabajadores de las cajas de compensacion familiar publico antioquia rionegro industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Rionegro, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE LAS CAJAS DE COMPENSACION FAMILIAR Subdirectiva Rionegro.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE NOTARIADO Y REGISTRO Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de trabajadores de notariado y registro publico santander bucaramanga empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE NOTARIADO Y REGISTRO Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE RAMA SERVICIOS DE INDUSTRIA DEL TRANSPORTE Y LOGIST... Subdirectiva Manizales",
    sector: "publico",
    city: "Manizales, Caldas",
    keywords: "sindicato nacional de trabajadores de rama servicios de industria del transporte y logistica de colombia publico caldas manizales industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociaci",
    description: "Subdirectiva sindical del sector público con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE RAMA SERVICIOS DE INDUSTRIA DEL TRANSPORTE Y LOGIST... Subdirectiva Manizales.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE RAMA SERVICIOS DE INDUSTRIA DEL TRANSPORTE Y LOGIST... Subdirectiva Popayán",
    sector: "publico",
    city: "Popayán, Cauca",
    keywords: "sindicato nacional de trabajadores de rama servicios de industria del transporte y logistica de colombia publico cauca popayán industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación",
    description: "Subdirectiva sindical del sector público con presencia en Popayán, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE RAMA SERVICIOS DE INDUSTRIA DEL TRANSPORTE Y LOGIST... Subdirectiva Popayán.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE SODIMAC COLOMBIA S.A. HOME CENTER Subdirectiva Valledupar",
    sector: "publico",
    city: "Valledupar, Cesar",
    keywords: "sindicato nacional de trabajadores de sodimac colombia s.a. home center publico cesar valledupar empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Valledupar, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE SODIMAC COLOMBIA S.A. HOME CENTER Subdirectiva Valledupar.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DE SUPERTIENDAS Y DROGUERIAS OLIMPICA S.A",
    sector: "publico",
    city: "Ciénaga, Magdalena",
    keywords: "sindicato nacional de trabajadores de supertiendas y droguerias olimpica s.a publico magdalena ciénaga empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Ciénaga, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DE SUPERTIENDAS Y DROGUERIAS OLIMPICA S.A.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL CAMPO COLOMBIANO Subdirectiva Candelaria",
    sector: "publico",
    city: "Candelaria, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores del campo colombiano publico valle del cauca candelaria gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Candelaria, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL CAMPO COLOMBIANO Subdirectiva Candelaria.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL CAMPO COLOMBIANO Subdirectiva Palmira",
    sector: "publico",
    city: "Palmira, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores del campo colombiano publico valle del cauca palmira gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Palmira, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL CAMPO COLOMBIANO Subdirectiva Palmira.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO BANCOLOMBIA",
    sector: "publico",
    city: "Guadalajara de Buga, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores del grupo bancolombia publico valle del cauca guadalajara de buga gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Guadalajara de Buga, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO BANCOLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO BANCOLOMBIA",
    sector: "publico",
    city: "Sincelejo, Sucre",
    keywords: "sindicato nacional de trabajadores del grupo bancolombia publico sucre sincelejo gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO BANCOLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO BANCOLOMBIA Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindicato nacional de trabajadores del grupo bancolombia publico bolívar cartagena gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO BANCOLOMBIA Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO",
    sector: "publico",
    city: "Guadalajara de Buga, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores del grupo exito publico valle del cauca guadalajara de buga empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Guadalajara de Buga, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO",
    sector: "publico",
    city: "Tunja, Boyacá",
    keywords: "sindicato nacional de trabajadores del grupo exito publico boyacá tunja empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Tunja, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO S. A Subdirectiva Dosquebradas",
    sector: "publico",
    city: "Dosquebradas, Risaralda",
    keywords: "sindicato nacional de trabajadores del grupo exito s. a publico risaralda dosquebradas empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Dosquebradas, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO S. A Subdirectiva Dosquebradas.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO S.A. COMITE SECCIONAL DUITAMA",
    sector: "publico",
    city: "Duitama, Boyacá",
    keywords: "sindicato nacional de trabajadores del grupo exito s.a. comite seccional duitama publico boyacá duitama empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Duitama, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO S.A. COMITE SECCIONAL DUITAMA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO Subdirectiva Buenaventura",
    sector: "publico",
    city: "Buenaventura, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores del grupo exito publico valle del cauca buenaventura empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Buenaventura, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL GRUPO EXITO Subdirectiva Buenaventura.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL INSTITUTO DE SEGUROS SOCIALES Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato nacional de trabajadores del instituto de seguros sociales publico antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL INSTITUTO DE SEGUROS SOCIALES Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL INSTITUTO DE SEGUROS SOCIALES Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato nacional de trabajadores del instituto de seguros sociales publico antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL INSTITUTO DE SEGUROS SOCIALES Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO",
    sector: "publico",
    city: "Itagui, Antioquia",
    keywords: "sindicato nacional de trabajadores del sistema agroalimentario publico antioquia itagui industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Itagui, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO SANTA MARTA",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sindicato nacional de trabajadores del sistema agroalimentario santa marta publico magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO SANTA MARTA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO SUBDIRECTIA Subdirectiva Roldanillo",
    sector: "publico",
    city: "Roldanillo, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores del sistema agroalimentario subdirectia publico valle del cauca roldanillo industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Roldanillo, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO SUBDIRECTIA Subdirectiva Roldanillo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de trabajadores del sistema agroalimentario publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato nacional de trabajadores del sistema agroalimentario publico antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO Subdirectiva Palmira",
    sector: "publico",
    city: "Palmira, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores del sistema agroalimentario publico valle del cauca palmira industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Palmira, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AGROALIMENTARIO Subdirectiva Palmira.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AMBIENTE-SUBDIRECTIVA SECCIONAL TUNJA",
    sector: "publico",
    city: "Tunja, Boyacá",
    keywords: "sindicato nacional de trabajadores del sistema ambiente-subdirectiva seccional tunja publico boyacá tunja empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Tunja, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA AMBIENTE-SUBDIRECTIVA SECCIONAL TUNJA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA DE TRANSPORTE MASIVO TERRESTRE Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores del sistema de transporte masivo terrestre publico valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA DE TRANSPORTE MASIVO TERRESTRE Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA DEL SUBSIDIO FAMILIAR, LA COMPENSACION Y L... Subdirectiva Tunja",
    sector: "salud",
    city: "Tunja, Boyacá",
    keywords: "sindicato nacional de trabajadores del sistema del subsidio familiar la compensacion y la seguridad social integral salud boyacá tunja industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical nego",
    description: "Subdirectiva sindical del sector salud con presencia en Tunja, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES DEL SISTEMA DEL SUBSIDIO FAMILIAR, LA COMPENSACION Y L... Subdirectiva Tunja.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES ESTATALES Subdirectiva Venadillo",
    sector: "publico",
    city: "Venadillo, Tolima",
    keywords: "sindicato nacional de trabajadores estatales publico tolima venadillo gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Venadillo, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES ESTATALES Subdirectiva Venadillo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES FUNCIONARIOS Y SERVIDORES PUBLICOS DE LOS MINISTERIOS... Subdirectiva Ibagué",
    sector: "salud",
    city: "Ibagué, Tolima",
    keywords: "sindicato nacional de trabajadores funcionarios y servidores publicos de los ministerios de salud y proteccion social ministerio de trabajo uae-fondo nacional de estupefacientes superintendencia nacional de salud y demas entidades adscritas vinculadas y contro",
    description: "Subdirectiva sindical del sector salud con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES FUNCIONARIOS Y SERVIDORES PUBLICOS DE LOS MINISTERIOS... Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES METALURGICOS MECANICOS METALMECANICOS SIDERURGICOS MIN... Subdirectiva Tuta",
    sector: "publico",
    city: "Tuta, Boyacá",
    keywords: "sindicato nacional de trabajadores metalurgicos mecanicos metalmecanicos siderurgicos mineros del material electrico y electronico publico boyacá tuta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesor",
    description: "Subdirectiva sindical del sector público con presencia en Tuta, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES METALURGICOS MECANICOS METALMECANICOS SIDERURGICOS MIN... Subdirectiva Tuta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES METALURGICOS, MACANICOS, METALMECANICOS, SIDERURGICOS... Subdirectiva Mosquera",
    sector: "publico",
    city: "Mosquera, Cundinamarca",
    keywords: "sindicato nacional de trabajadores metalurgicos macanicos metalmecanicos siderurgicos meneros de material electrico y electronico publico cundinamarca mosquera industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo dig",
    description: "Subdirectiva sindical del sector público con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES METALURGICOS, MACANICOS, METALMECANICOS, SIDERURGICOS... Subdirectiva Mosquera.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES MUNICIPALES Y DISTRITALES DE COLOMBIA Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de trabajadores municipales y distritales de colombia publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES MUNICIPALES Y DISTRITALES DE COLOMBIA Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "sindicato nacional de trabajadores penitenciarios y carcelarios publico meta villavicencio empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES UNIDOS DE INDUSTRIA DE LA VIGILANCIA Y SEGURIDAD PRIVADA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato nacional de trabajadores unidos de industria de la vigilancia y seguridad privada publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación col",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES UNIDOS DE INDUSTRIA DE LA VIGILANCIA Y SEGURIDAD PRIVADA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES UNIDOS DE INDUSTRIA DE LA VIGILANCIA Y SEGURIDAD PRIVADA Subdirectiva Soacha",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato nacional de trabajadores unidos de industria de la vigilancia y seguridad privada publico cundinamarca soacha industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colecti",
    description: "Subdirectiva sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES UNIDOS DE INDUSTRIA DE LA VIGILANCIA Y SEGURIDAD PRIVADA Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato nacional de trabajadores y empleados universitarios de colombia publico valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindicato nacional de trabajadores y empleados universitarios de colombia publico bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Ibagué",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "sindicato nacional de trabajadores y empleados universitarios de colombia publico tolima ibagué industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Ibagué.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Quibdó",
    sector: "publico",
    city: "Quibdó, Chocó",
    keywords: "sindicato nacional de trabajadores y empleados universitarios de colombia publico chocó quibdó industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Quibdó, Chocó, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y EMPLEADOS UNIVERSITARIOS DE COLOMBIA Subdirectiva Quibdó.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL COMITE S...",
    sector: "publico",
    city: "Quibdó, Chocó",
    keywords: "sindicato nacional de trabajadores y servidores publicos de la proteccion social comite seccional choco publico chocó quibdó industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociació",
    description: "Comité sindical del sector público con presencia en Quibdó, Chocó, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL COMITE S....")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato nacional de trabajadores y servidores publicos de la proteccion social publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL Subdirectiva Cúcuta",
    sector: "publico",
    city: "Cúcuta, Norte de Santander",
    keywords: "sindicato nacional de trabajadores y servidores publicos de la proteccion social publico norte de santander cúcuta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL Subdirectiva Cúcuta.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL SUS ENTI... Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de trabajadores y servidores publicos de la proteccion social sus entidades adscritas vinculadas y o las entidades que las reemplacen escindan y liquiden publico santander bucaramanga industria o por rama de actividad económica subdirectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL SUS ENTI... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL SUS ENTI... Subdirectiva Soacha",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato nacional de trabajadores y servidores publicos de la proteccion social sus entidades adscritas vinculadas y o las entidades que las reemplacen escindan y liquiden publico cundinamarca soacha industria o por rama de actividad económica subdirectiva si",
    description: "Subdirectiva sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL SUS ENTI... Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL SUS ENTI... Subdirectiva Valledupar",
    sector: "publico",
    city: "Valledupar, Cesar",
    keywords: "sindicato nacional de trabajadores y servidores publicos de la proteccion social sus entidades adscritas vinculadas y o las entidades que las reemplacen escindan y liquiden publico cesar valledupar industria o por rama de actividad económica subdirectiva sindi",
    description: "Subdirectiva sindical del sector público con presencia en Valledupar, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECCION SOCIAL SUS ENTI... Subdirectiva Valledupar.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECION SOCIAL SUBDIRECT... Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindicato nacional de trabajadores y servidores publicos de la protecion social subdirectiva bolivar publico bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y SERVIDORES PUBLICOS DE LA PROTECION SOCIAL SUBDIRECT... Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y TRABAJADORAS AGROPECUARIOS Subdirectiva la Plata",
    sector: "publico",
    city: "la Plata, Huila",
    keywords: "sindicato nacional de trabajadores y trabajadoras agropecuarios publico huila la plata gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en la Plata, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y TRABAJADORAS AGROPECUARIOS Subdirectiva la Plata.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y TRABAJADORAS AGROPECUARIOS SUBDIRECTIVA SINCÉ Subdirectiva San Luis de Sincé",
    sector: "publico",
    city: "San Luis de Sincé, Sucre",
    keywords: "sindicato nacional de trabajadores y trabajadoras agropecuarios subdirectiva sincé publico sucre san luis de sincé gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en San Luis de Sincé, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y TRABAJADORAS AGROPECUARIOS SUBDIRECTIVA SINCÉ Subdirectiva San Luis de Sincé.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE TRABAJADORES Y TRABAJADORAS DEL INSTITUTO DE VIGILANCIA DE MEDICAME... Subdirectiva Bucaramanga",
    sector: "salud",
    city: "Bucaramanga, Santander",
    keywords: "sindicato nacional de trabajadores y trabajadoras del instituto de vigilancia de medicamentos y alimentos salud santander bucaramanga empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE TRABAJADORES Y TRABAJADORAS DEL INSTITUTO DE VIGILANCIA DE MEDICAME... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DE UNIDAD DE COMERCIANTES MENORES Subdirectiva Pereira",
    sector: "publico",
    city: "Pereira, Risaralda",
    keywords: "sindicato nacional de unidad de comerciantes menores publico risaralda pereira gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Pereira, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DE UNIDAD DE COMERCIANTES MENORES Subdirectiva Pereira.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO NACIONAL DEL SISTEMA PENITENCIARIO Y CARCELARIO ACACIAS Subdirectiva Acacías",
    sector: "publico",
    city: "Acacías, Meta",
    keywords: "sindicato nacional del sistema penitenciario y carcelario acacias publico meta acacías industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Acacías, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO NACIONAL DEL SISTEMA PENITENCIARIO Y CARCELARIO ACACIAS Subdirectiva Acacías.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO POR LA DEFENSA DE LA EDUCACION Y LA PAZ Subdirectiva Cali",
    sector: "educacion",
    city: "Cali, Valle del Cauca",
    keywords: "sindicato por la defensa de la educacion y la paz educacion valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO POR LA DEFENSA DE LA EDUCACION Y LA PAZ Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO RED DE TRABAJADORES AL SERVICIO DE LA EMPRESAS QUE CONFORMAN LOS GRUPO PRISA Y... Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "sindicato red de trabajadores al servicio de la empresas que conforman los grupo prisa y ser y demas medios de comunicacion y publicidad industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO RED DE TRABAJADORES AL SERVICIO DE LA EMPRESAS QUE CONFORMAN LOS GRUPO PRISA Y... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO REGIONAL DE TRABAJADORES DEL AREA DE LA SALUD Subdirectiva Sincelejo",
    sector: "salud",
    city: "Sincelejo, Sucre",
    keywords: "sindicato regional de trabajadores del area de la salud salud sucre sincelejo gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO REGIONAL DE TRABAJADORES DEL AREA DE LA SALUD Subdirectiva Sincelejo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO TRABAJADORES ASOCIADOS DE HOSPITALES Subdirectiva Sincelejo",
    sector: "salud",
    city: "Sincelejo, Sucre",
    keywords: "sindicato trabajadores asociados de hospitales salud sucre sincelejo gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector salud con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO TRABAJADORES ASOCIADOS DE HOSPITALES Subdirectiva Sincelejo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNICO DE TRABAJADORES DE ORGANISMOS DE CONTROL DE LA COSTA CARIBE Subdirectiva Cartagena",
    sector: "industria",
    city: "Cartagena, Bolívar",
    keywords: "sindicato unico de trabajadores de organismos de control de la costa caribe industria bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNICO DE TRABAJADORES DE ORGANISMOS DE CONTROL DE LA COSTA CARIBE Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNICO DE TRABAJADORES DE ORGANISMOS DE CONTROL DE LA COSTA CARIBE Subdirectiva Cartagena",
    sector: "industria",
    city: "Cartagena, Bolívar",
    keywords: "sindicato unico de trabajadores de organismos de control de la costa caribe industria bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNICO DE TRABAJADORES DE ORGANISMOS DE CONTROL DE LA COSTA CARIBE Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNICO NACIONAL DE MOTOTRABADORES DE COLOMBIA SUBDIRECTIVA ZARZAL",
    sector: "publico",
    city: "Zarzal, Valle del Cauca",
    keywords: "sindicato unico nacional de mototrabadores de colombia subdirectiva zarzal publico valle del cauca zarzal gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Zarzal, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNICO NACIONAL DE MOTOTRABADORES DE COLOMBIA SUBDIRECTIVA ZARZAL.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNIDO DE SERVIDORES PUBLICOS PENITENCIARIOS Y CARCELARIOS Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato unido de servidores publicos penitenciarios y carcelarios publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNIDO DE SERVIDORES PUBLICOS PENITENCIARIOS Y CARCELARIOS Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNIDO DE SERVIDORES PUBLICOS PENITENCIARIOS Y CARCELARIOS Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sindicato unido de servidores publicos penitenciarios y carcelarios publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNIDO DE SERVIDORES PUBLICOS PENITENCIARIOS Y CARCELARIOS Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Acacías",
    sector: "servicios",
    city: "Acacías, Meta",
    keywords: "sindicato unido de trabajadores penitenciarios y carcelarios servicios meta acacías empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Acacías, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Acacías.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Armenia",
    sector: "servicios",
    city: "Armenia, Quindio",
    keywords: "sindicato unido de trabajadores penitenciarios y carcelarios servicios quindio armenia empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Armenia, Quindio, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Armenia.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Itagui",
    sector: "servicios",
    city: "Itagui, Antioquia",
    keywords: "sindicato unido de trabajadores penitenciarios y carcelarios servicios antioquia itagui empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Itagui, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Itagui.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Soacha",
    sector: "servicios",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato unido de trabajadores penitenciarios y carcelarios servicios cundinamarca soacha empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Y DE LA USPEC UNIDAD DE SERV... Subdirectiva Girardot",
    sector: "servicios",
    city: "Girardot, Cundinamarca",
    keywords: "sindicato unido de trabajadores penitenciarios y carcelarios y de la uspec unidad de servicios penitenciarios y carcelarios servicios cundinamarca girardot empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colecti",
    description: "Subdirectiva sindical del sector servicios con presencia en Girardot, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Y DE LA USPEC UNIDAD DE SERV... Subdirectiva Girardot.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Y DE LA USPEC UNIDAD DE SERV... Subdirectiva Quibdó",
    sector: "servicios",
    city: "Quibdó, Chocó",
    keywords: "sindicato unido de trabajadores penitenciarios y carcelarios y de la uspec unidad de servicios penitenciarios y carcelarios servicios chocó quibdó empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Quibdó, Chocó, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNIDO DE TRABAJADORES PENITENCIARIOS Y CARCELARIOS Y DE LA USPEC UNIDAD DE SERV... Subdirectiva Quibdó.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNION DE MOTORISTAS Y TRABAJADORES DE LA INDUSTRIA DEL TRANSPORTE AUTOMOTOR DE... Subdirectiva Bucaramanga",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "sindicato union de motoristas y trabajadores de la industria del transporte automotor de colombia industria santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociaci",
    description: "Subdirectiva sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNION DE MOTORISTAS Y TRABAJADORES DE LA INDUSTRIA DEL TRANSPORTE AUTOMOTOR DE... Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNION DE TRABAJADORES ENFERMOS DE GENERAL MOTORS COLMOTORES Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sindicato union de trabajadores enfermos de general motors colmotores servicios bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNION DE TRABAJADORES ENFERMOS DE GENERAL MOTORS COLMOTORES Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNION NACIONAL DE TRABAJADORES EN ORGANISMOS DE CONTROL Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sindicato union nacional de trabajadores en organismos de control publico atlántico barranquilla gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNION NACIONAL DE TRABAJADORES EN ORGANISMOS DE CONTROL Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA EDUCACION DEL CAUCA Subdirectiva Cajibío",
    sector: "educacion",
    city: "Cajibío, Cauca",
    keywords: "sindicato unitario de trabajadores de la educacion del cauca educacion cauca cajibío gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Cajibío, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA EDUCACION DEL CAUCA Subdirectiva Cajibío.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA EDUCACION DEL CAUCA Subdirectiva Guachené",
    sector: "educacion",
    city: "Guachené, Cauca",
    keywords: "sindicato unitario de trabajadores de la educacion del cauca educacion cauca guachené gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Guachené, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA EDUCACION DEL CAUCA Subdirectiva Guachené.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA EDUCACION DEL CAUCA Subdirectiva Inzá",
    sector: "educacion",
    city: "Inzá, Cauca",
    keywords: "sindicato unitario de trabajadores de la educacion del cauca educacion cauca inzá gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Inzá, Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA EDUCACION DEL CAUCA Subdirectiva Inzá.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Clemencia",
    sector: "industria",
    city: "Clemencia, Bolívar",
    keywords: "sindicato unitario de trabajadores de la industria de materiales para construccion industria bolívar clemencia industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Clemencia, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Clemencia.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Clemencia",
    sector: "industria",
    city: "Clemencia, Bolívar",
    keywords: "sindicato unitario de trabajadores de la industria de materiales para construccion industria bolívar clemencia industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Clemencia, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Clemencia.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Galapa",
    sector: "industria",
    city: "Galapa, Atlántico",
    keywords: "sindicato unitario de trabajadores de la industria de materiales para construccion industria atlántico galapa industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Galapa, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Galapa.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Nobsa",
    sector: "industria",
    city: "Nobsa, Boyacá",
    keywords: "sindicato unitario de trabajadores de la industria de materiales para construccion industria boyacá nobsa industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Nobsa, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Nobsa.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Soacha",
    sector: "industria",
    city: "Soacha, Cundinamarca",
    keywords: "sindicato unitario de trabajadores de la industria de materiales para construccion industria cundinamarca soacha industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION SUTIMAC Subdirectiva Maceo",
    sector: "industria",
    city: "Maceo, Antioquia",
    keywords: "sindicato unitario de trabajadores de la industria de materiales para construccion sutimac industria antioquia maceo industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Maceo, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO DE TRABAJADORES DE LA INDUSTRIA DE MATERIALES PARA CONSTRUCCION SUTIMAC Subdirectiva Maceo.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO",
    sector: "publico",
    city: "Fosca, Cundinamarca",
    keywords: "sindicato unitario nacional de trabajadores del estado publico cundinamarca fosca industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Fosca, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO",
    sector: "publico",
    city: "Viotá, Cundinamarca",
    keywords: "sindicato unitario nacional de trabajadores del estado publico cundinamarca viotá industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Viotá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO",
    sector: "publico",
    city: "Viotá, Cundinamarca",
    keywords: "sindicato unitario nacional de trabajadores del estado publico cundinamarca viotá industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Viotá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO Subdirectiva la Mesa",
    sector: "publico",
    city: "la Mesa, Cundinamarca",
    keywords: "sindicato unitario nacional de trabajadores del estado publico cundinamarca la mesa industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en la Mesa, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO Subdirectiva la Mesa.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO Subdirectiva la Unión",
    sector: "publico",
    city: "la Unión, Nariño",
    keywords: "sindicato unitario nacional de trabajadores del estado publico nariño la unión industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en la Unión, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO Subdirectiva la Unión.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO Subdirectiva Manizales",
    sector: "publico",
    city: "Manizales, Caldas",
    keywords: "sindicato unitario nacional de trabajadores del estado publico caldas manizales industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO Subdirectiva Manizales.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO Subdirectiva Pasto",
    sector: "publico",
    city: "Pasto, Nariño",
    keywords: "sindicato unitario nacional de trabajadores del estado publico nariño pasto industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO Subdirectiva Pasto.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO SUBDIRECTIVA SECCIONAL SAN ETANISL... Subdirectiva San Estanislao",
    sector: "publico",
    city: "San Estanislao, Bolívar",
    keywords: "sindicato unitario nacional de trabajadores del estado subdirectiva seccional san etanislao de kostka bolivar publico bolívar san estanislao industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindica",
    description: "Subdirectiva sindical del sector público con presencia en San Estanislao, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO SUBDIRECTIVA SECCIONAL SAN ETANISL... Subdirectiva San Estanislao.")}`
  },
  {
    cfc: 0,
    name: "SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO- COMITE SECCIONAL DE CAQUEZA",
    sector: "publico",
    city: "Caqueza, Cundinamarca",
    keywords: "sindicato unitario nacional de trabajadores del estado- comite seccional de caqueza publico cundinamarca caqueza industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Caqueza, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATO UNITARIO NACIONAL DE TRABAJADORES DEL ESTADO- COMITE SECCIONAL DE CAQUEZA.")}`
  },
  {
    cfc: 0,
    name: "SINDICATOS DE ESCOLTAS DE COLOMBIA Subdirectiva Montería",
    sector: "industria",
    city: "Montería, Córdoba",
    keywords: "sindicatos de escoltas de colombia industria córdoba montería industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Montería, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATOS DE ESCOLTAS DE COLOMBIA Subdirectiva Montería.")}`
  },
  {
    cfc: 0,
    name: "SINDICATOS DE TRABAJADORES DE SETAS COLOMBIANA SA Subdirectiva Yarumal",
    sector: "servicios",
    city: "Yarumal, Antioquia",
    keywords: "sindicatos de trabajadores de setas colombiana sa servicios antioquia yarumal empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Yarumal, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATOS DE TRABAJADORES DE SETAS COLOMBIANA SA Subdirectiva Yarumal.")}`
  },
  {
    cfc: 0,
    name: "SINDICATOS DE TRABAJADORES DEL INPEC",
    sector: "publico",
    city: "Cúcuta, Norte de Santander",
    keywords: "sindicatos de trabajadores del inpec publico norte de santander cúcuta empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATOS DE TRABAJADORES DEL INPEC.")}`
  },
  {
    cfc: 0,
    name: "SINDICATOS DE TRABAJADORES DEL INPEC Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "sindicatos de trabajadores del inpec publico meta villavicencio empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDICATOS DE TRABAJADORES DEL INPEC Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "SINDINPOLIURRURA DE CARTAGENA",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sindinpoliurrura de cartagena sindicato de inspectores de policia urbano rurales y funcionarios de cartagena de indias publico bolívar cartagena gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDINPOLIURRURA DE CARTAGENA.")}`
  },
  {
    cfc: 0,
    name: "SINEMTPUC",
    sector: "publico",
    city: "Valledupar, Cesar",
    keywords: "sinemtpuc sindicato empleados publicos y trabajadores oficiales del departamento cesar publico cesar valledupar industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiv",
    description: "Organización sindical del sector público con presencia en Valledupar, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINEMTPUC.")}`
  },
  {
    cfc: 0,
    name: "SINENTERCOL",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sinentercol sindicato de empleados del consejo municipal de cali y entidades del orden territorial de colombia publico valle del cauca cali industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría s",
    description: "Organización sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINENTERCOL.")}`
  },
  {
    cfc: 0,
    name: "SINESCAPEP",
    sector: "publico",
    city: "Palmira, Valle del Cauca",
    keywords: "sinescapep sindicato nacional de escoltas capacitados en proteccion especial a personas publico valle del cauca palmira gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Palmira, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINESCAPEP.")}`
  },
  {
    cfc: 0,
    name: "SINFRUPOC",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sinfrupoc sindicato de funcionarios provisionales y del cuerpo de custodia servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINFRUPOC.")}`
  },
  {
    cfc: 0,
    name: "SINGANORS",
    sector: "servicios",
    city: "Cúcuta, Norte de Santander",
    keywords: "singanors sindicato trabajadores de la gasolina por cuenta propia de norte de santander singanors servicios norte de santander cúcuta oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINGANORS.")}`
  },
  {
    cfc: 0,
    name: "SINGEBEL COLOMBIA",
    sector: "servicios",
    city: "Tocancipá, Cundinamarca",
    keywords: "singebel colombia sindicato general de trabajadores belstar sa singebel colombia servicios cundinamarca tocancipá empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Tocancipá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINGEBEL COLOMBIA.")}`
  },
  {
    cfc: 0,
    name: "SINMEDAS",
    sector: "salud",
    city: "Leticia, Amazonas",
    keywords: "sinmedas sindicato medico del amazonas salud amazonas leticia gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Leticia, Amazonas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINMEDAS.")}`
  },
  {
    cfc: 0,
    name: "SINPECO SUBDIRECTIVA BOGOTA Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sinpeco subdirectiva bogota publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINPECO SUBDIRECTIVA BOGOTA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "SINPRO Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "sinpro industria antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINPRO Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINPROTECSALUD",
    sector: "salud",
    city: "Aguachica, Cesar",
    keywords: "sinprotecsalud sindicato de y trabajadores profesionales técnicos y de oficios varios de la salud salud cesar aguachica oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Aguachica, Cesar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINPROTECSALUD.")}`
  },
  {
    cfc: 0,
    name: "SINPROTRANSTONCHALA",
    sector: "servicios",
    city: "Cúcuta, Norte de Santander",
    keywords: "sinprotranstonchala sindicato de propietarios de busetas de trans tonchala servicios norte de santander cúcuta empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINPROTRANSTONCHALA.")}`
  },
  {
    cfc: 0,
    name: "SINSEPTOL",
    sector: "publico",
    city: "Ibagué, Tolima",
    keywords: "sinseptol sindicato de servidores públicos del tolima publico tolima ibagué industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINSEPTOL.")}`
  },
  {
    cfc: 0,
    name: "SINTEPQA",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sintepqa sindicato unitario nacional de trabajadores de las empresas de productos quimicos empresas y afines publico atlántico barranquilla industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría s",
    description: "Organización sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTEPQA.")}`
  },
  {
    cfc: 0,
    name: "SINTRA ETV",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "sintra etv sindicato nacional de trabajadores y empleados publicos de los programas etv y afines publico meta villavicencio industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociac",
    description: "Organización sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRA ETV.")}`
  },
  {
    cfc: 0,
    name: "SINTRAACALB",
    sector: "servicios",
    city: "Buenaventura, Valle del Cauca",
    keywords: "sintraacalb sindicato de trabajadores de acueducto y alcantarillado y servicios varios de buenavntura servicios valle del cauca buenaventura empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Buenaventura, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAACALB.")}`
  },
  {
    cfc: 0,
    name: "SINTRAALFAGRES",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sintraalfagres sindicato de trabajadores de alfagres s.a. servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAALFAGRES.")}`
  },
  {
    cfc: 0,
    name: "SINTRAAMST",
    sector: "agro",
    city: "Armenia, Quindio",
    keywords: "sintraamst sindicato de trabajadores del agro movimiento sin tierra agro quindio armenia gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Armenia, Quindio, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAAMST.")}`
  },
  {
    cfc: 0,
    name: "SINTRAANDIVALLE Subdirectiva Cali",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "sintraandivalle industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAANDIVALLE Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SINTRAARVATO",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "sintraarvato sindicato nacional de trabajadores arvato publico santander bucaramanga industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAARVATO.")}`
  },
  {
    cfc: 0,
    name: "SINTRAAVAL",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "sintraaval sindicato de los trabajadores del grupo aval industria atlántico barranquilla industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAAVAL.")}`
  },
  {
    cfc: 0,
    name: "SINTRABALBOA",
    sector: "salud",
    city: "Medellín, Antioquia",
    keywords: "sintrabalboa sindicato de gremio de los trabajadores de la salud sintrabalboa salud antioquia medellín gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRABALBOA.")}`
  },
  {
    cfc: 0,
    name: "SINTRABANCOS",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "sintrabancos sindicato de industria de trabajadores bancarios de la costa industria atlántico barranquilla industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRABANCOS.")}`
  },
  {
    cfc: 0,
    name: "SINTRACADAMSDELEZ",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sintracadamsdelez sindicato de trabajadores de mondelez colombia s.a.s servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACADAMSDELEZ.")}`
  },
  {
    cfc: 0,
    name: "SINTRACADELEZ",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sintracadelez sindicato de trabajadores de la empresa cadbury adams de colombia s.a. servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACADELEZ.")}`
  },
  {
    cfc: 0,
    name: "SINTRACAMPOA",
    sector: "agro",
    city: "Orito, Putumayo",
    keywords: "sintracampoa sindicato de trabajadores campesinos amazónicos de orito agro putumayo orito gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector agropecuario con presencia en Orito, Putumayo, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACAMPOA.")}`
  },
  {
    cfc: 0,
    name: "SINTRACAUGPP",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sintracaugpp sindicato de empleados de carrera administrativa de la unidad administrativa especial de gestión pensional y contribuciones parafiscales de la protección social servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización s",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACAUGPP.")}`
  },
  {
    cfc: 0,
    name: "SINTRACEC",
    sector: "servicios",
    city: "Pamplona, Norte de Santander",
    keywords: "sintracec sindicato de trabajadores asociados-conductores-empleados de cotranal servicios norte de santander pamplona empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Pamplona, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACEC.")}`
  },
  {
    cfc: 0,
    name: "SINTRACEDMUN",
    sector: "publico",
    city: "Neiva, Huila",
    keywords: "sintracedmun sindicato de celadores y trabajadores del municipio de neiva publico huila neiva empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACEDMUN.")}`
  },
  {
    cfc: 0,
    name: "SINTRACOB",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sintracob sindicato de trabajadores de la contraloria de bogota publico bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACOB.")}`
  },
  {
    cfc: 0,
    name: "SINTRACOL",
    sector: "salud",
    city: "Medellín, Antioquia",
    keywords: "sintracol sindicato de gremio de los trabajadores de la salud colombiana salud antioquia medellín gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRACOMFH",
    sector: "servicios",
    city: "Neiva, Huila",
    keywords: "sintracomfh sindicato de trabajadores de comfamiliar huila servicios huila neiva empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACOMFH.")}`
  },
  {
    cfc: 0,
    name: "SINTRACOMTUR",
    sector: "publico",
    city: "Turbo, Antioquia",
    keywords: "sintracomtur sindicato de empleados y trabajadores oficiales comprometidos con el municipio de turbo publico antioquia turbo industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negocia",
    description: "Organización sindical del sector público con presencia en Turbo, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACOMTUR.")}`
  },
  {
    cfc: 0,
    name: "SINTRACONCRENAL",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sintraconcrenal sindicato de trabajadores concretos nacional publico bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACONCRENAL.")}`
  },
  {
    cfc: 0,
    name: "SINTRACONTECOL",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "sintracontecol sindicato de industria de trabajadores empleados operadores y conductores de la rama de transporte terrestre de colombia industria atlántico barranquilla industria o por rama de actividad económica directiva principal sindicato organización sind",
    description: "Organización sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRACONTECOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRADEPSANDER",
    sector: "salud",
    city: "Bucaramanga, Santander",
    keywords: "sintradepsander sindicato de empleados publicos y trabajadores oficiales del departamento de santander salud santander bucaramanga industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical n",
    description: "Organización sindical del sector salud con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRADEPSANDER.")}`
  },
  {
    cfc: 0,
    name: "SINTRAEDUCOL",
    sector: "educacion",
    city: "Sincelejo, Sucre",
    keywords: "sintraeducol sindicato nacional de trabajadores de la educacion de colombia educacion sucre sincelejo gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector educación con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAEDUCOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRAEMED",
    sector: "publico",
    city: "Soledad, Atlántico",
    keywords: "sintraemed sindicato de trabajadores y empleados del municipio de soledad y entes descentralizados publico atlántico soledad empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Soledad, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAEMED.")}`
  },
  {
    cfc: 0,
    name: "SINTRAEMERMEDICA - USCTRAB",
    sector: "salud",
    city: "Bogotá D.C.",
    keywords: "sintraemermedica - usctrab sindicato nacional de trabajadores y usuarios de la salud y emergencias medicas de la union sindical colombiana del trabajo - usctrab salud bogotá d.c. bogotá d.c. industria o por rama de actividad económica directiva principal sindi",
    description: "Organización sindical del sector salud con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAEMERMEDICA - USCTRAB.")}`
  },
  {
    cfc: 0,
    name: "SINTRAESTADO",
    sector: "publico",
    city: "Carepa, Antioquia",
    keywords: "sintraestado sindicato de empleados y trabajadores oficiales del sector central y territorial del estado colombiano publico antioquia carepa industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría",
    description: "Organización sindical del sector público con presencia en Carepa, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAESTADO.")}`
  },
  {
    cfc: 0,
    name: "SINTRAESTATALES SUBDIRECTIVA ITUANGO",
    sector: "servicios",
    city: "Ituango, Antioquia",
    keywords: "sintraestatales subdirectiva ituango servicios antioquia ituango gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Ituango, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAESTATALES SUBDIRECTIVA ITUANGO.")}`
  },
  {
    cfc: 0,
    name: "SINTRAETV",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "sintraetv sindicato nacional de trabajadores y empleados publicos de los programas etv y afines publico meta villavicencio industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociaci",
    description: "Organización sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAETV.")}`
  },
  {
    cfc: 0,
    name: "SINTRAFDP",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sintrafdp sindicato de trabajadores del ferrocarril del pacifico servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAFDP.")}`
  },
  {
    cfc: 0,
    name: "SINTRAFINANCIEROCOL",
    sector: "industria",
    city: "Mosquera, Cundinamarca",
    keywords: "sintrafinancierocol sindicato de industria de las entidades del sector financiero y afines industria cundinamarca mosquera industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociaci",
    description: "Organización sindical del sector industrial con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAFINANCIEROCOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRAFISCALIA",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sintrafiscalia sindicato nacional de servidores publicos de la fiscalia general de la nacion publico magdalena santa marta empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAFISCALIA.")}`
  },
  {
    cfc: 0,
    name: "SINTRAGER",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sintrager sindicato de trabajadores de diaco s.a. servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAGER.")}`
  },
  {
    cfc: 0,
    name: "SINTRAGROPECUARIOS",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sintragropecuarios sindicato nacional de trabajadores y trabajadoras agropecuarios publico bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAGROPECUARIOS.")}`
  },
  {
    cfc: 0,
    name: "SINTRAHHAE",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "sintrahhae sindicato de trabajadores de la empresa consorcio aguas de aburra h.h.a. servicios antioquia medellín empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAHHAE.")}`
  },
  {
    cfc: 0,
    name: "SINTRAHOCOL",
    sector: "industria",
    city: "Neiva, Huila",
    keywords: "sintrahocol sindicato de trabajadores de hocol s.a. industria huila neiva industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Neiva, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAHOCOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRAHUV",
    sector: "salud",
    city: "Cali, Valle del Cauca",
    keywords: "sintrahuv sindicato de trabajadores y empleados del hospital universitario del valle salud valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAHUV.")}`
  },
  {
    cfc: 0,
    name: "SINTRAIDUPLASCOL",
    sector: "publico",
    city: "la Estrella, Antioquia",
    keywords: "sintraiduplascol sindicato nacional de la industria plastica de colombia seccional la estrella publico antioquia la estrella industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negocia",
    description: "Organización sindical del sector público con presencia en la Estrella, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAIDUPLASCOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRAIME Subdirectiva Medellín",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "sintraime industria antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAIME Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINCOMAF SUBDIRECTIVA CENTRO DE DISTRIBUCION MALAMBO",
    sector: "servicios",
    city: "Malambo, Atlántico",
    keywords: "sintraincomaf subdirectiva centro de distribucion malambo servicios atlántico malambo empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Malambo, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINCOMAF SUBDIRECTIVA CENTRO DE DISTRIBUCION MALAMBO.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINDUALIMENTOS",
    sector: "publico",
    city: "Mosquera, Cundinamarca",
    keywords: "sintraindualimentos sindicato nacional de los trabajadores de la industria alimentaria publico cundinamarca mosquera industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación col",
    description: "Organización sindical del sector público con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINDUALIMENTOS.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINDUCOM",
    sector: "industria",
    city: "Floridablanca, Santander",
    keywords: "sintrainducom sindicato de trabajadores de la industri de las comunicaciones actividades afines o conexas industria santander floridablanca industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría s",
    description: "Organización sindical del sector industrial con presencia en Floridablanca, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINDUCOM.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINDUSCAFE Subdirectiva Santa Marta",
    sector: "industria",
    city: "Santa Marta, Magdalena",
    keywords: "sintrainduscafe industria magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINDUSCAFE Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINDUSTRIALES",
    sector: "industria",
    city: "la Dorada, Caldas",
    keywords: "sintraindustriales sindicato de profesionales tecnicos y trabajadores empiricos de operarios industriales antioqueños industria caldas la dorada industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno aseso",
    description: "Organización sindical del sector industrial con presencia en la Dorada, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINDUSTRIALES.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINFORMALES DE COLOMBIA M-19",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sintrainformales de colombia m-19 sindicato nacional de trabajadores informales ambulantes y estacionarios de santa fe de bogota m -19 publico bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical n",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINFORMALES DE COLOMBIA M-19.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINMACONST",
    sector: "industria",
    city: "Mosquera, Cundinamarca",
    keywords: "sintrainmaconst sindicato de trabajadores de la industria y materiales de la construccion industria cundinamarca mosquera industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociació",
    description: "Organización sindical del sector industrial con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINMACONST.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINMETA",
    sector: "servicios",
    city: "Villavicencio, Meta",
    keywords: "sintrainmeta sindicato de trabajadores independientes de oficios varios del meta servicios meta villavicencio gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINMETA.")}`
  },
  {
    cfc: 0,
    name: "SINTRAINTERASEO",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sintrainteraseo sindicato nacional de trabajadores del servicio de aseo y afines publico magdalena santa marta industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAINTERASEO.")}`
  },
  {
    cfc: 0,
    name: "SINTRAKCAG",
    sector: "servicios",
    city: "Barbosa, Antioquia",
    keywords: "sintrakcag sindicato de trabajadores de kimberly clark antioquia global ltda servicios antioquia barbosa empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Barbosa, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAKCAG.")}`
  },
  {
    cfc: 0,
    name: "SINTRAKIMBERLY CLARK BARBOSA",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "sintrakimberly clark barbosa sindicato de trabajadores de colombia kimberly copapel s.a servicios antioquia medellín empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAKIMBERLY CLARK BARBOSA.")}`
  },
  {
    cfc: 0,
    name: "SINTRALBUNDY",
    sector: "servicios",
    city: "Mosquera, Cundinamarca",
    keywords: "sintralbundy sindicato de trabajadores de bundy colombia s.a. servicios cundinamarca mosquera empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRALBUNDY.")}`
  },
  {
    cfc: 0,
    name: "SINTRAMACE",
    sector: "servicios",
    city: "Maicao, la Guajira",
    keywords: "sintramace sindicato de los trabajadores de mecanicos asociados s.a. en el cerrejon servicios la guajira maicao empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Maicao, la Guajira, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAMACE.")}`
  },
  {
    cfc: 0,
    name: "SINTRAMACO",
    sector: "publico",
    city: "San Andres de Tumaco, Nariño",
    keywords: "sintramaco sindicato de trabajadores ofiales y empleados publicos de la alcaldia de tumaco publico nariño san andres de tumaco empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en San Andres de Tumaco, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAMACO.")}`
  },
  {
    cfc: 0,
    name: "SINTRAMEN",
    sector: "educacion",
    city: "Bogotá D.C.",
    keywords: "sintramen sindicato de trabajadores del ministerio de educacion nacional educacion bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector educación con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAMEN.")}`
  },
  {
    cfc: 0,
    name: "SINTRAMIA - SANTANDER",
    sector: "industria",
    city: "Floridablanca, Santander",
    keywords: "sintramia - santander sindicato de trabajadores de bancamia en santander industria santander floridablanca industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Floridablanca, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAMIA - SANTANDER.")}`
  },
  {
    cfc: 0,
    name: "SINTRAMIDAS",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sintramidas sindicato de trabajadores midas intens servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAMIDAS.")}`
  },
  {
    cfc: 0,
    name: "SINTRAMIGRACOL",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sintramigracol sindicato nacional de trabajadores unidadad ministrativa especial migracion colombia publico bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAMIGRACOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRANALPROAGRO",
    sector: "publico",
    city: "Tuluá, Valle del Cauca",
    keywords: "sintranalproagro sindicato nacional de productores agropecuarios publico valle del cauca tuluá industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRANALPROAGRO.")}`
  },
  {
    cfc: 0,
    name: "SINTRANSA",
    sector: "servicios",
    city: "San Estanislao, Bolívar",
    keywords: "sintransa sindicato de trabajadores de san estanislao servicios bolívar san estanislao empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en San Estanislao, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRANSA.")}`
  },
  {
    cfc: 0,
    name: "SINTRANSPORTES",
    sector: "publico",
    city: "Manizales, Caldas",
    keywords: "sintransportes sindicato nacional de trabajadores as empleados as conductores as del sector del trasporte publico estatal o privado y de todo orden o de economía mixta municipal departamental y nacional publico caldas manizales industria o por rama de activida",
    description: "Organización sindical del sector público con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRANSPORTES.")}`
  },
  {
    cfc: 0,
    name: "SINTRANSVLLE",
    sector: "servicios",
    city: "Florida, Valle del Cauca",
    keywords: "sintransvlle sindicato de transportadores del valle servicios valle del cauca florida gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Florida, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRANSVLLE.")}`
  },
  {
    cfc: 0,
    name: "SINTRAO.N.G BIO-ECOARTE",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sintrao.n.g bio-ecoarte sindicato nacional de trabajadores defensores de la cultura la vida y el medio ambiente dependientes independientes y similares publico antioquia medellín gremio directiva principal sindicato organización sindical trabajo digno asesoría",
    description: "Organización sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAO.N.G BIO-ECOARTE.")}`
  },
  {
    cfc: 0,
    name: "SINTRAOFIEMPU",
    sector: "publico",
    city: "Cota, Cundinamarca",
    keywords: "sintraofiempu sindicato de trabajadores oficiales y empleados públicos publico cundinamarca cota empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Cota, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAOFIEMPU.")}`
  },
  {
    cfc: 0,
    name: "SINTRAOFUT",
    sector: "educacion",
    city: "Ibagué, Tolima",
    keywords: "sintraofut sindicato de trabajadores oficiales de la universidad del tolima educacion tolima ibagué oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector educación con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAOFUT.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPARPCA",
    sector: "servicios",
    city: "Cartagena, Bolívar",
    keywords: "sintraparpca sindicato de trabajadores de los parqueaderos del centro comercial de cartagena servicios bolívar cartagena empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPARPCA.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPECCALI",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sintrapeccali sindicato de trabajadores del sistema penitenciario y carcelario de cali servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPECCALI.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPECOL",
    sector: "publico",
    city: "Yopal, Casanare",
    keywords: "sintrapecol sindicato nacional de trabajadores petroleros de colombia publico casanare yopal empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Yopal, Casanare, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPECOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPECUN HUILA",
    sector: "servicios",
    city: "Pitalito, Huila",
    keywords: "sintrapecun huila sindicato unido de trabajadores penitenciarios y carcelarios y de la uspec unidad de servicios penitenciarios y carcelarios del departamento del huila servicios huila pitalito gremio directiva principal sindicato organización sindical trabajo",
    description: "Organización sindical del sector servicios con presencia en Pitalito, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPECUN HUILA.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPERENCO Subdirectiva Yopal",
    sector: "servicios",
    city: "Yopal, Casanare",
    keywords: "sintraperenco servicios casanare yopal empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Yopal, Casanare, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPERENCO Subdirectiva Yopal.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPRESIALI",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "sintrapresiali sindicato de trabajadores y prestadores de servicios a la rama de la actividad económica de la industria alimenticia publico atlántico barranquilla industria o por rama de actividad económica directiva principal sindicato organización sindical t",
    description: "Organización sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPRESIALI.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPROFENAR",
    sector: "salud",
    city: "Pasto, Nariño",
    keywords: "sintraprofenar sindicato de profesionales del hospital universitario departamental de nariño ese salud nariño pasto empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Pasto, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPROFENAR.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPROVI",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sintraprovi sindicato de trabajadores provisionales de cali servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPROVI.")}`
  },
  {
    cfc: 0,
    name: "SINTRAPUMAR",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "sintrapumar sindicato de trabajadores del transporte de servicio publico de la ciudad de santa marta publico magdalena santa marta industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical n",
    description: "Organización sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAPUMAR.")}`
  },
  {
    cfc: 0,
    name: "SINTRASALUD-CCFR",
    sector: "salud",
    city: "Pereira, Risaralda",
    keywords: "sintrasalud-ccfr sindicato de trabajadores y de la salud caja de compensacion familiar de risaralda salud risaralda pereira empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Pereira, Risaralda, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASALUD-CCFR.")}`
  },
  {
    cfc: 0,
    name: "SINTRASCOL",
    sector: "publico",
    city: "Duitama, Boyacá",
    keywords: "sintrascol sindicato nacional de conductores y trabajadores objeto de especial proteccion de colombia publico boyacá duitama gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Duitama, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASCOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRASEAL",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "sintraseal sindicato nacional de trabajadores del sector alimenticio publico bolívar cartagena industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASEAL.")}`
  },
  {
    cfc: 0,
    name: "SINTRASECOL",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "sintrasecol sindicato nacional de trabajadores de la seguridad en colombia publico cundinamarca soacha industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASECOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRASEFINCOL",
    sector: "industria",
    city: "Mosquera, Cundinamarca",
    keywords: "sintrasefincol sindicato de trabajadores del sector financiero colombiano industria cundinamarca mosquera industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASEFINCOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRASERPVALLEC",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "sintraserpvallec sindicato de trabajadores y empleados publicos del valle del cauca publico valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASERPVALLEC.")}`
  },
  {
    cfc: 0,
    name: "SINTRASERTRA",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "sintrasertra sindicato ncional de industria de los trabajadores del servicio del transporte y conexos industria antioquia medellín industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical n",
    description: "Organización sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASERTRA.")}`
  },
  {
    cfc: 0,
    name: "SINTRASERVIAFINES",
    sector: "publico",
    city: "Manizales, Caldas",
    keywords: "sintraserviafines sindicato nacional de trabajdores de servicios de actividades de apoyo o empresas publicas y privadas tales como transporte empresarial call center asesorias servicios locativos aseo cafeteria y afines publico caldas manizales industria o por",
    description: "Organización sindical del sector público con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRASERVIAFINES.")}`
  },
  {
    cfc: 0,
    name: "SINTRATELCO",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "sintratelco sindicato de trabajadores de las tic y conexos industria antioquia medellín industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRATELCO.")}`
  },
  {
    cfc: 0,
    name: "SINTRATELECENTER",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sintratelecenter sindicato de trabajadores de telecenter panamericana servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRATELECENTER.")}`
  },
  {
    cfc: 0,
    name: "SINTRATOCOPORO LENGERKE USCTRAB",
    sector: "servicios",
    city: "Betulia, Santander",
    keywords: "sintratocoporo lengerke usctrab asociacion sindical del trabajo sintratocoporo lengerke usctrab servicios santander betulia oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Betulia, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRATOCOPORO LENGERKE USCTRAB.")}`
  },
  {
    cfc: 0,
    name: "SINTRATRANSPORTES",
    sector: "publico",
    city: "Manizales, Caldas",
    keywords: "sintratransportes sindicato nacional de trabajadores as empleados as conductores as del sector del transporte publico estatal o privado y de todo orden o de economia mixta municipal departamental y nacional. publico caldas manizales industria o por rama de act",
    description: "Organización sindical del sector público con presencia en Manizales, Caldas, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRATRANSPORTES.")}`
  },
  {
    cfc: 0,
    name: "SINTRATUBOSA",
    sector: "servicios",
    city: "Yumbo, Valle del Cauca",
    keywords: "sintratubosa sindicato de trabajadores de tubosa servicios valle del cauca yumbo empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Yumbo, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRATUBOSA.")}`
  },
  {
    cfc: 0,
    name: "SINTRAUNIDOS FCECEP",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "sintraunidos fcecep sintraunidos fcecep servicios valle del cauca cali empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAUNIDOS FCECEP.")}`
  },
  {
    cfc: 0,
    name: "SINTRAUNION",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "sintraunion sindicato de trabajadores y empleados del servicio publico de aseo de la empresa aguas de bogota d.c. publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno ases",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAUNION.")}`
  },
  {
    cfc: 0,
    name: "SINTRAUNSACOL",
    sector: "salud",
    city: "Sincelejo, Sucre",
    keywords: "sintraunsacol sindicato de trabajadores unidos por la salud de colombia salud sucre sincelejo gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAUNSACOL.")}`
  },
  {
    cfc: 0,
    name: "SINTRAUNSALUD",
    sector: "salud",
    city: "Sincelejo, Sucre",
    keywords: "sintraunsalud sindicato de trabajadores unidos por la salud salud sucre sincelejo gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAUNSALUD.")}`
  },
  {
    cfc: 0,
    name: "SINTRAVERIFYLAB",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "sintraverifylab sindicato de trabajadores de la empresa verifylab sas servicios bogotá d.c. bogotá d.c. empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRAVERIFYLAB.")}`
  },
  {
    cfc: 0,
    name: "SINTRENAL COMITE MUNICIPAL SOACHA",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "sintrenal comite municipal soacha publico cundinamarca soacha industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINTRENAL COMITE MUNICIPAL SOACHA.")}`
  },
  {
    cfc: 0,
    name: "SISAD",
    sector: "salud",
    city: "Tuluá, Valle del Cauca",
    keywords: "sisad sindicato industrial para la salud salud valle del cauca tuluá industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Tuluá, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SISAD.")}`
  },
  {
    cfc: 0,
    name: "SITCOMFA",
    sector: "servicios",
    city: "Sincelejo, Sucre",
    keywords: "sitcomfa saindicato de trabajadores de la caja de compensación familiar de sucre servicios sucre sincelejo empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SITCOMFA.")}`
  },
  {
    cfc: 0,
    name: "SITRAOVAPETROL",
    sector: "industria",
    city: "la Plata, Huila",
    keywords: "sitraovapetrol sindicato de trabajadores de oficios varios en la industria petrolera industria huila la plata gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en la Plata, Huila, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SITRAOVAPETROL.")}`
  },
  {
    cfc: 0,
    name: "SITRARECUPERAR",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sitrarecuperar sindicato nacional de trabajadores de recuperar publico antioquia medellín empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SITRARECUPERAR.")}`
  },
  {
    cfc: 0,
    name: "SOCIACION DE TRABAJADORES CAMPESINOS DEL DEPARTAMENTO DE NARIÑO Subdirectiva Ancuyá",
    sector: "agro",
    city: "Ancuyá, Nariño",
    keywords: "sociacion de trabajadores campesinos del departamento de nariño agro nariño ancuyá gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector agropecuario con presencia en Ancuyá, Nariño, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SOCIACION DE TRABAJADORES CAMPESINOS DEL DEPARTAMENTO DE NARIÑO Subdirectiva Ancuyá.")}`
  },
  {
    cfc: 0,
    name: "SUBDIRECTIVA CARTAGENA",
    sector: "industria",
    city: "Cartagena, Bolívar",
    keywords: "subdirectiva cartagena industria bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUBDIRECTIVA CARTAGENA.")}`
  },
  {
    cfc: 0,
    name: "SUBDIRECTIVA DEL VALLE DEL CAUCA DE PERSONAL VINCULADO A LA UNIDAD NACIONAL DE PROTECCION... Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "subdirectiva del valle del cauca de personal vinculado a la unidad nacional de proteccion y demas empleados vinculados a la rama de la actividad economica de la seguridad y proteccion publico valle del cauca cali industria o por rama de actividad económica sub",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUBDIRECTIVA DEL VALLE DEL CAUCA DE PERSONAL VINCULADO A LA UNIDAD NACIONAL DE PROTECCION... Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "SUBDIRECTIVA PRUEBA25102017 Subdirectiva Momil",
    sector: "industria",
    city: "Momil, Córdoba",
    keywords: "subdirectiva prueba25102017 industria córdoba momil industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Momil, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUBDIRECTIVA PRUEBA25102017 Subdirectiva Momil.")}`
  },
  {
    cfc: 0,
    name: "SUBDIRECTIVA SECCIONAL DEL MUNICIPIO DE SAN JUAN DE RIOSECO Subdirectiva San Juan de Río Seco",
    sector: "publico",
    city: "San Juan de Río Seco, Cundinamarca",
    keywords: "subdirectiva seccional del municipio de san juan de rioseco publico cundinamarca san juan de río seco industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en San Juan de Río Seco, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUBDIRECTIVA SECCIONAL DEL MUNICIPIO DE SAN JUAN DE RIOSECO Subdirectiva San Juan de Río Seco.")}`
  },
  {
    cfc: 0,
    name: "SUBDIRECTIVA SECCIONAL PEDREGAL COPED MEDELLIN Subdirectiva Medellín",
    sector: "servicios",
    city: "Medellín, Antioquia",
    keywords: "subdirectiva seccional pedregal coped medellin servicios antioquia medellín gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUBDIRECTIVA SECCIONAL PEDREGAL COPED MEDELLIN Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "SUBDIRECTIVA SECCIONAL SAN CARLOS DE SINTRAISAGEN",
    sector: "servicios",
    city: "San Carlos, Antioquia",
    keywords: "subdirectiva seccional san carlos de sintraisagen servicios antioquia san carlos empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en San Carlos, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUBDIRECTIVA SECCIONAL SAN CARLOS DE SINTRAISAGEN.")}`
  },
  {
    cfc: 0,
    name: "SUMATE",
    sector: "industria",
    city: "Zipaquirá, Cundinamarca",
    keywords: "sumate sindicato union de trabajadores de la industria mecanica meltalmecanica metalurgica minera de las autopartes de la tecnologia de punta electrica electronica electromecanica de la energia electrica sinderurgica y afines industria cundinamarca zipaquirá i",
    description: "Organización sindical del sector industrial con presencia en Zipaquirá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUMATE.")}`
  },
  {
    cfc: 0,
    name: "SUNTRASEVIEACOL",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "suntrasevieacol sindicato unitario nacional de trabajadores de la seguridad vigilancia empresas a fines de colombia publico bolívar cartagena industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría",
    description: "Organización sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUNTRASEVIEACOL.")}`
  },
  {
    cfc: 0,
    name: "SUPER PRUEBA25102017",
    sector: "industria",
    city: "Cerrito, Santander",
    keywords: "super prueba25102017 prueba25102017 industria santander cerrito industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Cerrito, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUPER PRUEBA25102017.")}`
  },
  {
    cfc: 0,
    name: "SUTENS",
    sector: "educacion",
    city: "Tibú, Norte de Santander",
    keywords: "sutens sindicato unitario de trabajadores de la educación norte de santander educacion norte de santander tibú gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector educación con presencia en Tibú, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUTENS.")}`
  },
  {
    cfc: 0,
    name: "TAIXIBIRIS SINDICATO",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "taixibiris sindicato sindicato gremial de taxistas de colombia servicios bogotá d.c. bogotá d.c. gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre TAIXIBIRIS SINDICATO.")}`
  },
  {
    cfc: 0,
    name: "TRAINFOS",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "trainfos asociacion sindical de profesionales prestadores de servicios y productores publico bogotá d.c. bogotá d.c. oficios varios directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre TRAINFOS.")}`
  },
  {
    cfc: 0,
    name: "UBN",
    sector: "publico",
    city: "Mosquera, Cundinamarca",
    keywords: "ubn union bancaria nacional publico cundinamarca mosquera industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UBN.")}`
  },
  {
    cfc: 0,
    name: "UCOBANYSF",
    sector: "industria",
    city: "Mosquera, Cundinamarca",
    keywords: "ucobanysf union colombiana de empleados bancarios y del sector financiero industria cundinamarca mosquera industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UCOBANYSF.")}`
  },
  {
    cfc: 0,
    name: "UCOLTRACENTER",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "ucoltracenter union colombiana de trabajadores de call center industria santander bucaramanga industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UCOLTRACENTER.")}`
  },
  {
    cfc: 0,
    name: "UGECHO",
    sector: "servicios",
    city: "Quibdó, Chocó",
    keywords: "ugecho union gremial de especialistas del choco servicios chocó quibdó gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Quibdó, Chocó, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UGECHO.")}`
  },
  {
    cfc: 0,
    name: "UGENFECHO",
    sector: "salud",
    city: "Quibdó, Chocó",
    keywords: "ugenfecho union gremial de enfermeras y enfermeros del choco salud chocó quibdó gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Quibdó, Chocó, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UGENFECHO.")}`
  },
  {
    cfc: 0,
    name: "UGGOC",
    sector: "servicios",
    city: "Montería, Córdoba",
    keywords: "uggoc union gremial de ginecologos y obstretas de cordoba servicios córdoba montería gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Montería, Córdoba, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UGGOC.")}`
  },
  {
    cfc: 0,
    name: "UGPC",
    sector: "servicios",
    city: "Cali, Valle del Cauca",
    keywords: "ugpc union gremial de psiquiatras de colombia servicios valle del cauca cali gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UGPC.")}`
  },
  {
    cfc: 0,
    name: "UNASE",
    sector: "publico",
    city: "Soacha, Cundinamarca",
    keywords: "unase union nacional de trabajadores del sector de la vigilancia y seguridad en colombia publico cundinamarca soacha industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación col",
    description: "Organización sindical del sector público con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNASE.")}`
  },
  {
    cfc: 0,
    name: "UNIBAL",
    sector: "industria",
    city: "Ibagué, Tolima",
    keywords: "unibal union de trabajadores de la empresa ibaguereña de acueducto y alcantarillado ibal s a e s p oficial industria tolima ibagué industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical n",
    description: "Organización sindical del sector industrial con presencia en Ibagué, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNIBAL.")}`
  },
  {
    cfc: 0,
    name: "UNIDAD NACIONAL SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Barranquilla",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "unidad nacional sindical de empleados bancarios publico atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNIDAD NACIONAL SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "UNIDAD NACIONAL SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Bucaramanga",
    sector: "publico",
    city: "Bucaramanga, Santander",
    keywords: "unidad nacional sindical de empleados bancarios publico santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNIDAD NACIONAL SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "UNIDAD NACIONAL SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "unidad nacional sindical de empleados bancarios publico valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNIDAD NACIONAL SINDICAL DE EMPLEADOS BANCARIOS Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "UNIMEDIS",
    sector: "salud",
    city: "Sincelejo, Sucre",
    keywords: "unimedis union gremial de medicos de sucre salud sucre sincelejo gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector salud con presencia en Sincelejo, Sucre, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNIMEDIS.")}`
  },
  {
    cfc: 0,
    name: "UNION BANCARIA COLOMBIANA Subdirectiva Facatativá",
    sector: "industria",
    city: "Facatativá, Cundinamarca",
    keywords: "union bancaria colombiana industria cundinamarca facatativá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION BANCARIA COLOMBIANA Subdirectiva Facatativá.")}`
  },
  {
    cfc: 0,
    name: "UNION BANCARIA NACIONAL Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "union bancaria nacional publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION BANCARIA NACIONAL Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "UNION DE SERVICIOS DEL CUERPO TECNICO DE INVESTIGACION DE LA FISCALIA GENERAL DE LA NACION Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "union de servicios del cuerpo tecnico de investigacion de la fiscalia general de la nacion publico meta villavicencio empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE SERVICIOS DEL CUERPO TECNICO DE INVESTIGACION DE LA FISCALIA GENERAL DE LA NACION Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "UNION DE SERVIDORES DEL CUERPO TECNICO DE INVESTIGACION DE LA FISCALIA GENERAL DE LA NACION Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "union de servidores del cuerpo tecnico de investigacion de la fiscalia general de la nacion publico antioquia medellín empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE SERVIDORES DEL CUERPO TECNICO DE INVESTIGACION DE LA FISCALIA GENERAL DE LA NACION Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "UNION DE SERVIDORES DEL CUERPO TECNICO DE INVESTIGACION Y LA FISCALIA GENERAL DE LA NACIO... Subdirectiva Tunja",
    sector: "publico",
    city: "Tunja, Boyacá",
    keywords: "union de servidores del cuerpo tecnico de investigacion y la fiscalia general de la nacion subdirectiva seccional boyaca publico boyacá tunja empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Tunja, Boyacá, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE SERVIDORES DEL CUERPO TECNICO DE INVESTIGACION Y LA FISCALIA GENERAL DE LA NACIO... Subdirectiva Tunja.")}`
  },
  {
    cfc: 0,
    name: "UNION DE TOREROS DE COLOMBIA SECCION PICADORES Y BANDERILLEROS DE TOROS Subdirectiva Bogotá D.C.",
    sector: "servicios",
    city: "Bogotá D.C.",
    keywords: "union de toreros de colombia seccion picadores y banderilleros de toros servicios bogotá d.c. bogotá d.c. gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE TOREROS DE COLOMBIA SECCION PICADORES Y BANDERILLEROS DE TOROS Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "UNION DE TRABAJADORAS AFROCOLOMBIANAS DEL SERVICIO DOMESTICO Subdirectiva Cartagena",
    sector: "servicios",
    city: "Cartagena, Bolívar",
    keywords: "union de trabajadoras afrocolombianas del servicio domestico servicios bolívar cartagena gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE TRABAJADORAS AFROCOLOMBIANAS DEL SERVICIO DOMESTICO Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "UNION DE TRABAJADORES DE LA INDUSTRIA ENERGETICA NACIONAL Y DE SERVICIOS PUBLICOS Subdirectiva Chía",
    sector: "publico",
    city: "Chía, Cundinamarca",
    keywords: "union de trabajadores de la industria energetica nacional y de servicios publicos publico cundinamarca chía industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Chía, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE TRABAJADORES DE LA INDUSTRIA ENERGETICA NACIONAL Y DE SERVICIOS PUBLICOS Subdirectiva Chía.")}`
  },
  {
    cfc: 0,
    name: "UNION DE TRABAJADORES DEL SECTOR FINANCIERO Subdirectiva Chía",
    sector: "industria",
    city: "Chía, Cundinamarca",
    keywords: "union de trabajadores del sector financiero industria cundinamarca chía industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Chía, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE TRABAJADORES DEL SECTOR FINANCIERO Subdirectiva Chía.")}`
  },
  {
    cfc: 0,
    name: "UNION DE TRABAJADORES Y TRABAJADORAS DE G4S COLOMBIA Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "union de trabajadores y trabajadoras de g4s colombia industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE TRABAJADORES Y TRABAJADORAS DE G4S COLOMBIA Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "UNION DE TRABAJADORES Y TRABAJADORAS DE G4S COLOMBIA Subdirectiva Cali",
    sector: "industria",
    city: "Cali, Valle del Cauca",
    keywords: "union de trabajadores y trabajadoras de g4s colombia industria valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION DE TRABAJADORES Y TRABAJADORAS DE G4S COLOMBIA Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "UNION GENERAL DE TRABAJADORES DEL TRANSPORTE EN COLOMBIA Subdirectiva Madrid",
    sector: "industria",
    city: "Madrid, Cundinamarca",
    keywords: "union general de trabajadores del transporte en colombia industria cundinamarca madrid industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Madrid, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION GENERAL DE TRABAJADORES DEL TRANSPORTE EN COLOMBIA Subdirectiva Madrid.")}`
  },
  {
    cfc: 0,
    name: "UNION GENERAL DE TRABAJADORES INDEPENDIENTES Y DE LA ECONOMIA INFORMAL UGTI Subdirectiva Tame",
    sector: "servicios",
    city: "Tame, Arauca",
    keywords: "union general de trabajadores independientes y de la economia informal ugti servicios arauca tame gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Tame, Arauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION GENERAL DE TRABAJADORES INDEPENDIENTES Y DE LA ECONOMIA INFORMAL UGTI Subdirectiva Tame.")}`
  },
  {
    cfc: 0,
    name: "UNION GREMIAL DE PSIQUIATRAS DE COLOMBIA SUBDIRECTIVA BUCARAMANGA",
    sector: "servicios",
    city: "Bucaramanga, Santander",
    keywords: "union gremial de psiquiatras de colombia subdirectiva bucaramanga servicios santander bucaramanga gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION GREMIAL DE PSIQUIATRAS DE COLOMBIA SUBDIRECTIVA BUCARAMANGA.")}`
  },
  {
    cfc: 0,
    name: "UNION NACIONAL DE BOMBEROS VOLUNTARIOS AERONAUTICOS OFICIALES Subdirectiva Zipaquirá",
    sector: "publico",
    city: "Zipaquirá, Cundinamarca",
    keywords: "union nacional de bomberos voluntarios aeronauticos oficiales publico cundinamarca zipaquirá industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Zipaquirá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION NACIONAL DE BOMBEROS VOLUNTARIOS AERONAUTICOS OFICIALES Subdirectiva Zipaquirá.")}`
  },
  {
    cfc: 0,
    name: "UNIÓN NACIONAL DE EMPLEADOS BANCARIOS",
    sector: "publico",
    city: "Mosquera, Cundinamarca",
    keywords: "unión nacional de empleados bancarios publico cundinamarca mosquera industria o por rama de actividad económica comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector público con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNIÓN NACIONAL DE EMPLEADOS BANCARIOS.")}`
  },
  {
    cfc: 0,
    name: "UNION NACIONAL DE EMPLEADOS BANCARIOS SECCIONAL MEDELLIN Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "union nacional de empleados bancarios seccional medellin publico antioquia medellín industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION NACIONAL DE EMPLEADOS BANCARIOS SECCIONAL MEDELLIN Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "UNION NACIONAL DE EMPLEADOS BANCARIOS Subdirectiva Cartagena",
    sector: "publico",
    city: "Cartagena, Bolívar",
    keywords: "union nacional de empleados bancarios publico bolívar cartagena industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION NACIONAL DE EMPLEADOS BANCARIOS Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "UNION NACIONAL DE EMPLEADOS BANCARIOS Subdirectiva Mosquera",
    sector: "publico",
    city: "Mosquera, Cundinamarca",
    keywords: "union nacional de empleados bancarios publico cundinamarca mosquera industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Mosquera, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION NACIONAL DE EMPLEADOS BANCARIOS Subdirectiva Mosquera.")}`
  },
  {
    cfc: 0,
    name: "UNION NACIONAL DE TRABAJADORES DE RAMA Y SERVICIOS DEL TRANSPORTE DE COLOMBIA Subdirectiva Santa Marta",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "union nacional de trabajadores de rama y servicios del transporte de colombia publico magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION NACIONAL DE TRABAJADORES DE RAMA Y SERVICIOS DEL TRANSPORTE DE COLOMBIA Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "UNION NACIONAL DE TRABAJADORES DE RAMA Y SERVICIOS DEL TRANSPORTE DE COLOMBIA Subdirectiva Santa Marta",
    sector: "publico",
    city: "Santa Marta, Magdalena",
    keywords: "union nacional de trabajadores de rama y servicios del transporte de colombia publico magdalena santa marta industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION NACIONAL DE TRABAJADORES DE RAMA Y SERVICIOS DEL TRANSPORTE DE COLOMBIA Subdirectiva Santa Marta.")}`
  },
  {
    cfc: 0,
    name: "UNION NACIONAL DE TRABAJADORES DEL TRANSPORTE EN COLOMBIA Subdirectiva Yumbo",
    sector: "publico",
    city: "Yumbo, Valle del Cauca",
    keywords: "union nacional de trabajadores del transporte en colombia publico valle del cauca yumbo industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Yumbo, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION NACIONAL DE TRABAJADORES DEL TRANSPORTE EN COLOMBIA Subdirectiva Yumbo.")}`
  },
  {
    cfc: 0,
    name: "UNION PORTUARIA DE COLOMBIA Subdirectiva Cartagena",
    sector: "servicios",
    city: "Cartagena, Bolívar",
    keywords: "union portuaria de colombia servicios bolívar cartagena gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector servicios con presencia en Cartagena, Bolívar, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION PORTUARIA DE COLOMBIA Subdirectiva Cartagena.")}`
  },
  {
    cfc: 0,
    name: "UNION PORTUARIA DE LOS TRABAJADORES ACTIVOS Y PENSIONADOS DE LOS TRABAJADORES DE LOS PUER... Subdirectiva Barranquilla",
    sector: "servicios",
    city: "Barranquilla, Atlántico",
    keywords: "union portuaria de los trabajadores activos y pensionados de los trabajadores de los puertos maritimos fluviales aereos y zonas adujaneras servicios atlántico barranquilla gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical nego",
    description: "Subdirectiva sindical del sector servicios con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION PORTUARIA DE LOS TRABAJADORES ACTIVOS Y PENSIONADOS DE LOS TRABAJADORES DE LOS PUER... Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE DIRECTIVOS DE LA EDUCACION",
    sector: "educacion",
    city: "Santa Marta, Magdalena",
    keywords: "union sindical de directivos de la educacion educacion magdalena santa marta gremio comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector educación con presencia en Santa Marta, Magdalena, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE DIRECTIVOS DE LA EDUCACION.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE DIRECTIVOS DE LA EDUCACION Subdirectiva Barranquilla",
    sector: "educacion",
    city: "Barranquilla, Atlántico",
    keywords: "union sindical de directivos de la educacion educacion atlántico barranquilla gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE DIRECTIVOS DE LA EDUCACION Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE DIRECTIVOS DE LA EDUCACION Subdirectiva Riohacha",
    sector: "educacion",
    city: "Riohacha, la Guajira",
    keywords: "union sindical de directivos de la educacion educacion la guajira riohacha gremio subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector educación con presencia en Riohacha, la Guajira, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE DIRECTIVOS DE LA EDUCACION Subdirectiva Riohacha.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE EMPLEADOS DEL ESTADO - DIAN Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "union sindical de empleados del estado - dian publico meta villavicencio industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE EMPLEADOS DEL ESTADO - DIAN Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE EMPLEADOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Bogotá D.C.",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "union sindical de empleados del sector financiero colombiano industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE EMPLEADOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE EMPLEADOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Soacha",
    sector: "industria",
    city: "Soacha, Cundinamarca",
    keywords: "union sindical de empleados del sector financiero colombiano industria cundinamarca soacha industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Soacha, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE EMPLEADOS DEL SECTOR FINANCIERO COLOMBIANO Subdirectiva Soacha.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE EMPLEADOS DEL SECTOR FINANCIERO Subdirectiva Barranquilla",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "union sindical de empleados del sector financiero industria atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE EMPLEADOS DEL SECTOR FINANCIERO Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE SECTOR FINANCIERO COLOMBIANO SUBDIRECTIVA BUCARAMANGA",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "union sindical de sector financiero colombiano subdirectiva bucaramanga industria santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE SECTOR FINANCIERO COLOMBIANO SUBDIRECTIVA BUCARAMANGA.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE TRABAJADORES BANCARIOS Y DEL SECTOR FINANCIERO Subdirectiva Funza",
    sector: "industria",
    city: "Funza, Cundinamarca",
    keywords: "union sindical de trabajadores bancarios y del sector financiero industria cundinamarca funza industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Funza, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE TRABAJADORES BANCARIOS Y DEL SECTOR FINANCIERO Subdirectiva Funza.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE TRABAJADORES DE LA EMPRESA ALPINA PRODUCTOS ALIMENTICIOS SA",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "union sindical de trabajadores de la empresa alpina productos alimenticios sa industria atlántico barranquilla empresa comité seccional sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Comité sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE TRABAJADORES DE LA EMPRESA ALPINA PRODUCTOS ALIMENTICIOS SA.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE TRABAJADORES DE LAS COMUNICACIONES Subdirectiva Barranquilla",
    sector: "industria",
    city: "Barranquilla, Atlántico",
    keywords: "union sindical de trabajadores de las comunicaciones industria atlántico barranquilla industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE TRABAJADORES DE LAS COMUNICACIONES Subdirectiva Barranquilla.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE TRABAJADORES DE LAS COMUNICACIONES Subdirectiva Bucaramanga",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "union sindical de trabajadores de las comunicaciones industria santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE TRABAJADORES DE LAS COMUNICACIONES Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE TRABAJADORES DEL ESTADO Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "union sindical de trabajadores del estado publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE TRABAJADORES DEL ESTADO Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL DE TRABAJADORES OFICIALES Y EMPLEADOS PÚBLICOS DEL MUNICIPIO DE PUERTO WIL... Subdirectiva Puerto Wilches",
    sector: "publico",
    city: "Puerto Wilches, Santander",
    keywords: "union sindical de trabajadores oficiales y empleados públicos del municipio de puerto wilches publico santander puerto wilches empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Puerto Wilches, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL DE TRABAJADORES OFICIALES Y EMPLEADOS PÚBLICOS DEL MUNICIPIO DE PUERTO WIL... Subdirectiva Puerto Wilches.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL NACIONAL DE TRABAJADORES DE LA INDUSTRIA NACIONAL DE GASEOSAS S.A Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "union sindical nacional de trabajadores de la industria nacional de gaseosas s.a publico meta villavicencio empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL NACIONAL DE TRABAJADORES DE LA INDUSTRIA NACIONAL DE GASEOSAS S.A Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL NACIONAL DE TRABAJADORES DE LA INDUSTRIA NACIONAL DE GASEOSAS SECCIONAL BO... Subdirectiva Bogotá D.C.",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "union sindical nacional de trabajadores de la industria nacional de gaseosas seccional bogota publico bogotá d.c. bogotá d.c. empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL NACIONAL DE TRABAJADORES DE LA INDUSTRIA NACIONAL DE GASEOSAS SECCIONAL BO... Subdirectiva Bogotá D.C..")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL NACIONAL DE TRABAJADORES DE LA INDUSTRIA NACIONAL DE GASEOSAS Subdirectiva Villavicencio",
    sector: "publico",
    city: "Villavicencio, Meta",
    keywords: "union sindical nacional de trabajadores de la industria nacional de gaseosas publico meta villavicencio empresa subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL NACIONAL DE TRABAJADORES DE LA INDUSTRIA NACIONAL DE GASEOSAS Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL OBRERA DE LA INDUSTRIA DEL PETROLEO Subdirectiva Bucaramanga",
    sector: "industria",
    city: "Bucaramanga, Santander",
    keywords: "union sindical obrera de la industria del petroleo industria santander bucaramanga industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Bucaramanga, Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL OBRERA DE LA INDUSTRIA DEL PETROLEO Subdirectiva Bucaramanga.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL OBRERA DE LA INDUSTRIA DEL PETROLEO Subdirectiva Purificación",
    sector: "industria",
    city: "Purificación, Tolima",
    keywords: "union sindical obrera de la industria del petroleo industria tolima purificación industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Purificación, Tolima, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL OBRERA DE LA INDUSTRIA DEL PETROLEO Subdirectiva Purificación.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL OBRERA DE LA INDUSTRIA DEL PETROLEO Subdirectiva Villavicencio",
    sector: "industria",
    city: "Villavicencio, Meta",
    keywords: "union sindical obrera de la industria del petroleo industria meta villavicencio industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Villavicencio, Meta, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL OBRERA DE LA INDUSTRIA DEL PETROLEO Subdirectiva Villavicencio.")}`
  },
  {
    cfc: 0,
    name: "UNION SINDICAL OBRERA DE LA INDUSTRIA DEL PETROLEO Subdirectiva Yondó",
    sector: "industria",
    city: "Yondó, Antioquia",
    keywords: "union sindical obrera de la industria del petroleo industria antioquia yondó industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector industrial con presencia en Yondó, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNION SINDICAL OBRERA DE LA INDUSTRIA DEL PETROLEO Subdirectiva Yondó.")}`
  },
  {
    cfc: 0,
    name: "UNISINDECOR",
    sector: "publico",
    city: "Cúcuta, Norte de Santander",
    keywords: "unisindecor unión sindical de servidores públicos de corponor publico norte de santander cúcuta empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector público con presencia en Cúcuta, Norte de Santander, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UNISINDECOR.")}`
  },
  {
    cfc: 0,
    name: "UPT",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "upt union popular de trabajadores industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UPT.")}`
  },
  {
    cfc: 0,
    name: "USEC",
    sector: "industria",
    city: "Bogotá D.C.",
    keywords: "usec unión sindical de servidores estatales de colombia industria bogotá d.c. bogotá d.c. industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre USEC.")}`
  },
  {
    cfc: 0,
    name: "USITRAPROQUIPA S.A.",
    sector: "industria",
    city: "Usiacurí, Atlántico",
    keywords: "usitraproquipa s.a. union sindical de trabajadores de productos quimicos panamericanos s.a. industria atlántico usiacurí empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Usiacurí, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre USITRAPROQUIPA S.A..")}`
  },
  {
    cfc: 0,
    name: "USMIS",
    sector: "industria",
    city: "Medellín, Antioquia",
    keywords: "usmis union sindical minera del suroreste antioqueño industria antioquia medellín industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Medellín, Antioquia, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre USMIS.")}`
  },
  {
    cfc: 0,
    name: "USNATPOP",
    sector: "publico",
    city: "Barranquilla, Atlántico",
    keywords: "usnatpop union sindical nacional de personal tecnico tecnologo profesional y de oficios varios del sector privado y publico publico atlántico barranquilla gremio directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación co",
    description: "Organización sindical del sector público con presencia en Barranquilla, Atlántico, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre USNATPOP.")}`
  },
  {
    cfc: 0,
    name: "UST",
    sector: "servicios",
    city: "Facatativá, Cundinamarca",
    keywords: "ust union sindical de trabajadores de domesa de colombia servicios cundinamarca facatativá empresa directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector servicios con presencia en Facatativá, Cundinamarca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UST.")}`
  },
  {
    cfc: 0,
    name: "UTEN SECCIONAL ELECTRICA Y DE SERVICIOS PUBLICOS Subdirectiva Cali",
    sector: "publico",
    city: "Cali, Valle del Cauca",
    keywords: "uten seccional electrica y de servicios publicos publico valle del cauca cali industria o por rama de actividad económica subdirectiva sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Subdirectiva sindical del sector público con presencia en Cali, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UTEN SECCIONAL ELECTRICA Y DE SERVICIOS PUBLICOS Subdirectiva Cali.")}`
  },
  {
    cfc: 0,
    name: "UTENH",
    sector: "publico",
    city: "Bogotá D.C.",
    keywords: "utenh union de trabajadores de la industria energetica nacional de hidrocarburos publico bogotá d.c. bogotá d.c. industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colecti",
    description: "Organización sindical del sector público con presencia en Bogotá D.C., orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UTENH.")}`
  },
  {
    cfc: 0,
    name: "UTRAG4S",
    sector: "industria",
    city: "Bolívar, Valle del Cauca",
    keywords: "utrag4s union de trabajadores y trabajadoras de g4s industria valle del cauca bolívar industria o por rama de actividad económica directiva principal sindicato organización sindical trabajo digno asesoría sindical negociación colectiva",
    description: "Organización sindical del sector industrial con presencia en Bolívar, Valle del Cauca, orientada a la defensa del trabajo digno, la representación colectiva y el diálogo social.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre UTRAG4S.")}`
  },
  {
    cfc: 0,
    name: "SINDESENA",
    sector: "educacion",
    city: "Colombia",
    keywords: "sena educación formación profesional instructores aprendices servidores sindicato del sena público asesoría sindical negociación colectiva",
    description: "Sindicato del SENA orientado a la defensa de los derechos laborales, la formación pública y el diálogo social.",
    logo: "assets/sindicatos/sindesena.jpeg",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SINDESENA.")}`
  },
  {
    cfc: 0,
    name: "SUNET Subdirectiva Medellín",
    sector: "publico",
    city: "Medellín, Antioquia",
    keywords: "sindicato unitario nacional trabajadores estado sunet subdirectiva medellín servidores públicos estado sector público asesoría sindical negociación colectiva",
    description: "SUNET Subdirectiva Medellín: organización sindical del sector estatal orientada a la unidad, la organización y la defensa del empleo público.",
    logo: "assets/sindicatos/sunet.jpeg",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre SUNET Subdirectiva Medellín.")}`
  },
  {
    cfc: 0,
    name: "Sindicato por crear o fortalecer",
    sector: "servicios",
    city: "Colombia",
    keywords: "crear sindicato fortalecer sindicato afiliación organización sindical asesoría sindical negociación colectiva trabajadores servicios generales bpo vigilancia aseo call center",
    description: "Si en tu empresa no hay sindicato, CFC puede orientarte sobre organización, afiliación y rutas jurídicas para crear o fortalecer la acción colectiva.",
    logo: "assets/logo-redondo-cfc.png",
    contact: `https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent("Hola, quiero orientación sobre Sindicato por crear o fortalecer.")}`
  }
];


const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const accordion = document.querySelector('[data-accordion]');
if (accordion) {
  accordion.addEventListener('click', (event) => {
    const trigger = event.target.closest('.accordion-trigger');
    if (!trigger) return;

    const item = trigger.closest('.accordion-item');
    const isOpen = item.classList.contains('is-open');

    accordion.querySelectorAll('.accordion-item').forEach((entry) => {
      entry.classList.remove('is-open');
      entry.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
}

const sectorFilter = document.querySelector('#sectorFilter');
const cityFilter = document.querySelector('#cityFilter');
const keywordFilter = document.querySelector('#keywordFilter');
const unionResults = document.querySelector('#unionResults');

function normalize(text) {
  return String(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function renderUnions() {
  if (!unionResults || !sectorFilter || !cityFilter || !keywordFilter) return;

  const sector = sectorFilter.value;
  const city = normalize(cityFilter.value || '');
  const keyword = normalize(keywordFilter.value || '');

  const filtered = unions.filter((union) => {
    const matchesSector = sector === 'todos' || union.sector === sector;
    const cityText = normalize(union.city);
    const searchText = normalize(`${union.name} ${union.description} ${union.keywords} ${union.city}`);
    const matchesCity = !city || cityText.includes(city) || searchText.includes(city);
    const matchesKeyword = !keyword || searchText.includes(keyword);
    return matchesSector && matchesCity && matchesKeyword;
  });

  if (!filtered.length) {
    unionResults.innerHTML = `
      <div class="no-results">
        <h3>No encontramos coincidencias exactas.</h3>
        <p>Escríbenos y revisamos tu caso: puede existir un sindicato por empresa, por industria, por oficio o una ruta para organizar uno nuevo.</p>
        <a class="text-link" href="https://wa.me/${FACTOR_C_WHATSAPP}" target="_blank" rel="noopener">Pedir orientación →</a>
      </div>
    `;
    return;
  }

  unionResults.innerHTML = filtered.map((union) => `
    <article class="union-card">
      <span class="badge">${union.sector}</span>
      <div class="union-card-header">
        <img class="union-card-logo" src="${union.logo}" alt="Logo ${union.name}" loading="lazy" />
        <h3>${union.name}</h3>
      </div>
      <p>${union.description}</p>
      <footer>
        <span>${union.city}</span>
        <a href="${union.contact}" target="_blank" rel="noopener">Orientarme →</a>
      </footer>
    </article>
  `).join('');
}

[sectorFilter, cityFilter, keywordFilter].forEach((control) => {
  if (control) control.addEventListener('input', renderUnions);
});
renderUnions();

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#contactName')?.value.trim() || 'Sin nombre';
    const info = document.querySelector('#contactInfo')?.value.trim() || 'Sin dato de contacto';
    const message = document.querySelector('#contactMessage')?.value.trim() || 'Quiero recibir orientación de Corporación Factor C.';
    const text = `Hola Corporación Factor C. Mi nombre es ${name}. Mi contacto es ${info}. Necesito: ${message}`;
    window.open(`https://wa.me/${FACTOR_C_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
