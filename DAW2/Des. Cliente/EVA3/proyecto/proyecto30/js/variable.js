//Botones
const BTNSCOMODINES= document.querySelectorAll(".comodin");
const BTNSCONTROLPARAR = document.querySelectorAll('.parar');
const BTNSCONTROLCONT = document.querySelectorAll('.continuar');
const RENDIRSE= document.getElementById("rendirse");

//Comodines
let comodinMitad= false;
let comodinSiguiente= false;

//Correcion Preguntas
let correcionMarcada;
let dinero_ganado=0;
let incorrecto = 2;
let razonPerder;

//LocalStorage
const LOCALSTORAGE=window.localStorage;
const MODALREGISTROS= document.getElementById("registros");
let contadorNumeroRegistros = 0;
let registros = [];
let registroantiguofacil;
let registroantiguomedio;
let registroantiguodificil;

//Menu
const JUGAR= document.getElementById("jugar");
const NIVELES = [
    {
        nivel:'',
        descripcion: '¿Qué dificultad eliges?'
    },
    {
        nivel:'facil',
        descripcion: 'Fácil'
    },
    {
        nivel:'medio',
        descripcion: 'Medio'
    },
    {
        nivel:'dificil',
        descripcion: 'Difícil'
    }
];
const PANTALLAMENU= document.getElementById("menu");
const SELECT= document.getElementById("select");
let nivelElegido;

//Mostramos en el Navegador
const PANTALLACOMENTARIOS= document.getElementById("pantallaMensaje");
const PANTALLAJUGADAS= document.getElementById("juego");
const PANTALLAPUNTOS= document.getElementById("puntos");
const PANTALLARESULTADOPOPUP= document.getElementById("resultado");

//preguntas y respuestas
const NUMMARCADO = document.querySelectorAll('.respuesta');
let num_pregunta = 0;
let numrespuestas = -1;
let pantallaPregunta = document.getElementById("pregunta");
let pantallaRespuestaA = document.getElementById("respuestauno");
let pantallaRespuestaB = document.getElementById("respuestados");
let pantallaRespuestaC = document.getElementById("respuestatres");
let pantallaRespuestaD = document.getElementById("respuestacuatro");
let respuestas = [0,1,2,3];

//Temporizador
const PANTALLATIEMPO= document.getElementById("timer");
let cont_tiempo=30;
let indicadorIntervalo;
let stop=true;

//Base de Datos con las preguntas
const BDPREGUNTAS = [
    {
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;ntas islas componen el grupo de las Islas V&iacute;rgenes de los Estados Unidos?',
        respuestas: ['15 ','8 ','10 ','3 '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil',
        pregunta: '&iquest; En qu&eacute; pa&iacute;s de Europa se encuentra el misterioso Lago de Ness&#63;',
        respuestas: ['Finlandia ','Escocia ','Austria','Dinamarca'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'medio',
        pregunta: '&iquest; En qu&eacute; pa&iacute;s se encuentra el r&iacute;o Arkansas?',
        respuestas: ['Francia ','Paraguay ','Finlandia ','Estados Unidos '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil',
        pregunta: '&iquest; Cual es la profesi&oacute;n de Mario Bross?',
        respuestas: ['Ladr&oacute;n de bancos ','Bombero ','Fontanero ','Ladr&oacute;n de champi&ntilde;ones '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil',
        pregunta: 'En la serie de los Simpsons &iquest;cuantos hijos tienen Homer y Marge?',
        respuestas: ['Ninguno ','5 ','1 ','3 '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'medio',
        pregunta: '&iquest;Sobre qu&eacute; oc&eacute;ano se encuentran las islas Maldivas?',
        respuestas: ['Atl&aacute;ntico ','Glacial &Aacute;rtico ','Pac&iacute;fico ','&Iacute;ndico '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;En que cordillera se encuentra el monte Everest?',
        respuestas: ['Himalaya ','Pamir ','Decc&aacute;n ','Cherski '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cual de estos r&iacute;os europeos no desemboca en la vertiente atl&aacute;ntica?',
        respuestas: ['Danubio  ','Tajo ','Sena ','Rin '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;l de estos tipos de climas no se encuentra entre los m&aacute;s habituales en Europa?',
        respuestas: ['Oce&aacute;nico ','Mediterr&aacute;neo ','Ecuatorial ','Continental '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Que tipo de climas predominan en el norte del continente americano?',
        respuestas: ['C&aacute;lidos ','Templados ','Fr&iacute;os ','Des&eacute;rticos '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{ 
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;l es la capital de Irlanda?',
        respuestas: ['Mascat ','Argel ','Dubl&iacute;n ','Koror '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;l es el pa&iacute;s m&aacute;s peque&ntilde;o de Centroam&eacute;rica?',
        respuestas: ['Nicaragua','Panam&aacute;','El Salvador ','Honduras '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacuteles son los colores de la bandera de Letonia?',
        respuestas: ['Azul y negro ','Amarillo y  verde ','Azul, verde y negro ','Rojo y blanco '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;En qu&eacute; continente se encuentra el r&iacute;o Tocantins?',
        respuestas: ['Am&eacute;rica ','Europa ','Asia ','&Aacute;frica '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;ntos a&ntilde;os duro la guerra de los 100 a&ntilde;os?',
        respuestas: ['116 a&ntilde;os','100 a&ntilde;os','97 a&ntilde;os ','100 meses '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;ndo termin&oacute; la segunda guerra mundial?',
        respuestas: ['1943 ','1944 ','1945 ','1946 '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Un tri&aacute;ngulo equil&aacute;tero se caracteriza por tener...?',
        respuestas: ['Sus tres lados son iguales ','Dos de sus lados son iguales ','Tener un &aacutengulo de 90 grados ','Ninguno de sus &aacutengulos presenta los mismos grados '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;C&oacute;mo se llamaban en la mitolog&iacute;a griega las divinidades inspiradoras de las artes?',
        respuestas: ['Erinias ','Musas ','Parcas ','Moiras '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: 'Napole&oacute;n Bonaparte nombr&oacute; a su hermano Jos&eacute; I rey &iquest;de qu&eacute; pa&iacute;s?',
        respuestas: ['Inglaterra ','Italia ','B&eacute;lgica ','Espa&ntilde;a '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Qui&eacute;n fue el m&aacute;s poderoso rey de la tribu de los Hunos?',
        respuestas: ['Aecio ','Mundzuk ','Elac ','Atila '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Qu&eacute; fue la niebla asesina?',
        respuestas: ['Una leyenda escocesa ','Un fen&oacute;meno atmosf&eacute;rico Norteamericano ','Un producto de la contaminaci&oacute;n que mat&oacute; a 12.000 personas ','Un grupo de rock de los 60 bastante pol&eacute;mico '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;l era el nombre del d&eacute;cimo fara&oacute;n de la dinast&iacute;a XVIII de Egipto, esposo de Nefertiti?',
        respuestas: ['Tutankam&oacute;n','Rams&eacute;s II','Akenat&oacute;n ','Amenhotep III '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{ 
        nivel:'medio', 
        pregunta: '&iquest;Qui&eacute;nes eran los shogunes?',
        respuestas: ['Se&ntilde;ores feudales europeos ','Los escritores del libro &quot;El arte de la guerra&quot; ','Grandes soldados del imperio Chino de 1687 ','Dictadores militares en el Jap&oacute;n medieval '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;ntas personas fueron ejecutadas en los juicios de Salem en 1692?',
        respuestas: ['20 ','30 ','50 ','100'],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;De que tipo de reptiles surgieron los mam&iacute;feros?',
        respuestas: ['Tecodontos ','Dinosaurios ','Ter&aacute;psidos ','An&aacute;psidos '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: 'El elemento presente en todos los compuestos org&aacute;nicos es el...',
        respuestas: ['Carbono ','Nitr&oacute;geno ','F&oacute;sforo ','Oxigeno '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Qu&eacute; pierde el que sufre de anosmia?',
        respuestas: ['Audici&oacute;n ','Visi&oacute;n ','La voz ','Olfato '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Qu&eacute; instrumento mide la presi&oacute;n atmosf&eacute;rica?',
        respuestas: ['Pluvi&oacute;metro ','Higr&oacute;metro ','Bar&oacute;metro ','Bar&oacute;grafo '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Qu&eacute; funci&oacute;n tienen los marcapasos?',
        respuestas: ['Acelerar el ritmo card&iacute;aco ','Reducir el ritmo card&iacute;aco','Contabilizar los latidos del coraz&oacute;n ','Reducir la presi&oacute;n en las arterias '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Qu&eacute; pesa m&aacute;s&#8218; el coraz&oacute;n de un hombre o el de una mujer?',
        respuestas: ['Pesan igual','El de un hombre ','El de una mujer ','Depende de la edad '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: 'El coraz&oacute;n es miogen&eacute;tico &iquest;qu&eacute; significa eso?',
        respuestas: ['Que est&aacute; dentro del sistema card&iacute;aco ','Que se autogenera ','Que se excita a si mismo ','Que tiene varias cavidades '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;C&oacute;mo se llama la arteria m&aacute;s grande del cuerpo humano?',
        respuestas: ['Car&oacute;tida ','Yugular ','Aorta ','Card&iacute;aco '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Qu&eacute; tipo de m&uacute;sculo es el b&iacute;ceps?',
        respuestas: ['Esquel&eacute;tico estriado ','Esquel&eacute;tico liso ','Liso ','Card&iacute;aco '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;l es el hueso m&aacute;s largo en el cuerpo humano?',
        respuestas: ['H&uacute;mero ','Peron&eacute; ','Tibia ','F&eacute;mur '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Debajo de que &aacute;rbol se encontraba Newton cuando, seg&uacute;n la leyenda, descubri&oacute; la ley de la gravedad?',
        respuestas: ['Peral ','Manzano ','Cerezo ','Melocotonero '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'facil',
        pregunta: '&iquest;Qu&eacute; han de tener dos objetos para que entre ellos exista gravedad?',
        respuestas: ['Fuerza ','Aceleraci&oacute;n ','Masa ','Energ&iacute;a '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;l es la intensidad de la gravedad en la Tierra a nivel del mar?',
        respuestas: ['98 m/s&sup2; ','9,8 km/s&sup2; ','9,8 m/s&sup2; ','0,98 m/s&sup2; '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;l es el planeta m&aacute;s grande del sistema solar?',
        respuestas: ['Saturno ','J&uacute;piter ','Urano ','Neptuno '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: 'Las estrellas agrupadas forman...',
        respuestas: ['Sat&eacute;lites ','Sistemas ','Universos ','Constelaciones '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'dificil', 
        pregunta: '&iquest;Cu&aacute;nto pesa el cerebro de un ser humano adulto?',
        respuestas: ['2.5 Kg ','2 Kg ','1.5 Kg ','1 Kg '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;ntos dientes permanentes tiene un ser humano adulto?',
        respuestas: ['30 ','32 ','35 ','26 '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: 'Aproximadamente &iquest;cu&aacute;ntos pelos tenemos en la cabeza?',
        respuestas: ['Entre 300.000 y 400.000 ','Entre 50.000 y 100.000 ','Entre 100.000 y 200.000 ','Entre 200.000 y 300.000 '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;ntos metros miden los intestinos?',
        respuestas: ['Entre 8 y 9 ','Entre 5 y 6 ','Entre 9 y 10 ','Entre 7 y 8 '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;ntos huesos hay en el cuerpo humano?',
        respuestas: ['220 ','187 ','201 ','206 '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;ntas veces se calcula que latir&aacute; el coraz&oacute;n a lo largo de toda la vida de un humano?',
        respuestas: ['1.000 millones de veces ','2.000 millones de veces ','3.000 millones de veces ','4.000 millones de veces '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: 'En el sistema de puntos ol&iacute;mpicos &iquest;cu&aacute;ntos puntos se concede por cada medalla de bronce obtenida en una prueba?',
        respuestas: ['4 ','3 ','10 ','5 '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;l es el &uacute;nico deporte acu&aacute;tico que estuvo presente en todos los Juegos Ol&iacute;mpicos?',
        respuestas: ['Nataci&oacute;n ','Salto ','Waterpolo ','Nataci&oacute;n sincronizada '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;l de los siguientes deportes NO se disputa en los Juegos Ol&iacute;mpicos?',
        respuestas: ['Vela ','BMX ','Triatl&oacute;n ','Hockey sobre hielo '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cul &aacute;es la ciudad griega que dio inicio al transporte de la antorcha ol&iacute;mpica?',
        respuestas: ['Esparta ','Atenas ','Olimpia ','Creta '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;En qu&eacute; continente nunca se ha realizado una edici&oacute;n de los Juegos Ol&iacute;mpicos?',
        respuestas: ['Asia ','Ocean&iacute;a ','Am&eacute;rica ','&Aacute;frica '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;l fue el s&iacute;mbolo de Katniss Everdeen en &quot;Los juegos del hambre&quot;',
        respuestas: ['Cisne ','Leona ','&Aacute;guila  ','Sinsajo '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;C&oacute;mo se llama el actor protagonista de &quot;Solo en casa&quot;?',
        respuestas: ['Keanu Reeves ','Johnny Depp ','Macaulay Culkin ','Leonardo DiCaprio '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;A qui&eacute;n se considera el Rey del Pop?',
        respuestas: ['Michael Jackson','Justin Bieber ','Zayn Malik ','Zac Efron '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;De qu&eacute; pel&iacute;cula es el pr&iacute;ncipe azul?',
        respuestas: ['Cenicienta ','Sirenita ','Bella Durmiente ','Mul&aacute;n'],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Qu&eacute; pel&iacute;cula navide&ntilde;a incluye un cameo de Donald Trump?',
        respuestas: ['Solo en casa ','Solo en casa 2: Perdido en Nueva York ','Richie Rich ','Una pandilla de pillos '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;l es el animal nacional de Escocia?',
        respuestas: ['Caballo ','Lobo ','Unicornio ','Vaca '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;les son los nombres de las cuatro casas de Hogwarts?',
        respuestas: ['Gryffindor, Ravenclaw, Hufflepuff y Slytherin','Gryffin, Cuervo, Elefante y Serpiente ','Norte, Este, Oeste y Sur ','Rojo, azul, verde y naranja '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio',
        pregunta: '&iquest;Qu&eacute; pa&iacute;s produce m&aacute;s caf&eacute; en el mundo?',
        respuestas: ['Colombia ','Indonesia ','Brasil ','Vietnam '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;A qu&eacute; sabe el Cointreau?',
        respuestas: ['Albahaca ','Lim&oacute;n ','Vainilla ','Naranja'],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;C&oacute;mo se llamaba el b&uacute;ho mascota de Harry Potter?',
        respuestas: ['Errol ','Hedwig ','Crookshanks ','Scabbers '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest; Qui&eacute;n tiene m&aacute;s seguidores en Instagram?',
        respuestas: ['Selena Gomez','Taylor Swift ','Cristiano Ronaldo ','LiSA '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;C&oacute;mo se llama el mat&oacute;n de Phineas y Ferb?',
        respuestas: ['Buford ','Doofenshmirtz ','Baljeet ','Ferb '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: 'En la serie de Phineas y Ferb &iquest;qu&eacute; construyen en el primer d&iacute;a de vacaciones?',
        respuestas: ['Un perro mec&aacute;nico','Crean el Invierano','Una monta&ntilde;a rusa ','Copias rob&oacute;ticas de s&iacute; mismos'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;C&oacute;mo se llama el &oacute;rgano que utilizan los peces para respirar?',
        respuestas: ['Pulmones ','Cola ','Escalas ','Agallas '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Qu&eacute; deporte se considera el pasatiempo americano?',
        respuestas: ['Boxeo ','B&eacute;isbol ','Baloncesto ','Golf '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;C&aacute;mo se llamaba la primera pel&iacute;cula de perros de la historia?',
        respuestas: ['Cats and Dogs ','Lassie Come Home ','Hotels for Dogs ','Alpha '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;C&oacute;mo se llama el hombre que est&aacute; detr&aacute;s de Mr. Bean?',
        respuestas: ['Rowan Atkinson ','James Corden ','Rowan Smyth ','Macaulay Culkin '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;ntas pel&iacute;culas componen la serie de &quot;Indiana Jones&quot;?',
        respuestas: ['3 ','5 ','4 ','2 '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;ntos volcanes activos hay en el mundo?',
        respuestas: ['1450 ','1400 ','1360 ','1350 '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;l es la isla m&aacute;s grande del mundo?',
        respuestas: ['Australia ','Filipinas ','Groenlandia ','Rusia '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;ntas patas tiene una ara&ntilde;a?',
        respuestas: ['6','7','8','9'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Qu&eacute; famosa banda brit&aacute;nica escribi&oacute; y cant&oacute; la canci&oacute;n &quot;Yellow Submarine&quot;?',
        respuestas: ['Beatles ','Backstreet Boys ','Los Carpinteros ','NSYNC '],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Qu&eacute; estado norteamericano no ha sufrido nunca un terremoto?',
        respuestas: ['Florida ','Carolina del Norte ','Dakota del Sur ','Ninguno '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;l es el animal m&aacute;s venenoso?',
        respuestas: ['Serpiente ','Ranas ','Medusa ','Ara&ntilde;a'],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;nto tiempo duran las c&eacute;lulas cerebrales?',
        respuestas: ['3 d&iacute;as','2 meses ','3 a&ntilde;os ','Toda una vida '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{ 
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;l es el lugar m&aacute;s profundo del mundo?',
        respuestas: ['Salto del &Aacute;ngel ','Lago Baikal ','Fosa de las Marianas ','Mar Egeo '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;A qu&eacute; continente pertenece Grecia?',
        respuestas: ['Asia ','Europa ','Australia ','&Aacute;frica '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Qu&eacute; nombre de ciudad est&aacute; presente en todos los continentes?',
        respuestas: ['Nueva York ','Mil&aacute;n ','Roma ','Sydney '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Qu&eacute; animal es la mamba negra?',
        respuestas: ['Gusano ','Serpiente ','Jaguar ','Cuervo '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;ntos meses hasta que una ballena pre&ntilde;ada d&eacute; a luz?',
        respuestas: ['9 meses','4 meses','16 meses','36 meses'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;l es el animal m&aacute;s grande del mundo?',
        respuestas: ['Elefante africano ','Ballena azul ant&aacute;rtica ','Calamar colosal ','Jirafa'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;nto tiempo pueden dormir los caracoles a la vez?',
        respuestas: ['30 horas ','15 horas ','8 horas ','36 horas '],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;ntas hormigas hay por cada humano en el mundo?',
        respuestas: ['100','1.6 millones','1.000','100.000'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;D&oacute;nde se encuentra el coraz&oacute;n del camar&oacute;n?',
        respuestas: ['En su pecho','En su cabeza','En sus colas','En sus piernas'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Qu&eacute; animal es el &uacute;nico animal que no pudo saltar?',
        respuestas: ['Cerdos ','Ballenas ','Jirafas ','Elefantes '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;ntos cerebros tiene una sanguijuela?',
        respuestas: ['33','32','34','35'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;De qu&eacute; color es la sangre de un gusano del man&iacute;?',
        respuestas: ['Rosa','P&uacute;rpura','Rojo','Verde'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Qu&eacute; animal puede vivir durante semanas sin cabeza o cerebro?',
        respuestas: ['Ara&ntilde;a ','Hormigas ','Cucaracha ','Saltamontes'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Qu&eacute; animal no necesita beber agua durante toda su vida?',
        respuestas: ['Camello ','Peque&ntilde;a rata canguro','B&uacute;ho ','Elefante'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;l es el nombre real de "Chucky" en Child’s Play?',
        respuestas: ['George Lee Ray','Charlie Ray','Charles Lee Ray','Henry Ray'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;En qu&eacute; pel&iacute;cula se vio por primera vez la mu&ntilde;eca Anabelle?',
        respuestas: ['The Conjuring','Friday the 13th ','Chucky','Insidious'],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;l fue el primer refresco que se llev&oacute; al espacio?',
        respuestas: ['Pepsi','Fanta','Coca Cola','Snapple'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;nto pesa el disfraz de Chewbacca?',
        respuestas: ['3,60 kg','7,70kg ','2,70 kg ','6,80 kg'],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;C&oacute;mo se llama la peque&ntilde;a pieza de pl&aacute;stico al final de un cord&oacute;n de zapato?',
        respuestas: ['Cuerda ','Cobertura ','Encaje ','Herrete '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Para qu&eacute; pa&iacute;s jug&oacute; David Beckham?',
        respuestas: ['Espa&ntilde;a','Brasil','EE.UU','Inglaterra'],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Qu&eacute; personaje de Disney de La Sirenita canta la canci&oacute;n B&eacute;sala?',
        respuestas: ['Flounder','Sebasti&aacute;n','&Uacute;rsula','Pr&iacute;ncipe Eric'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;En qu&eacute; pa&iacute;s esta Praga?',
        respuestas: ['Espa&ntilde;a','Brasil','Rep&uacute;blica Checa','Inglaterra'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Qu&eacute; servicio de correo electr&oacute;nico es propiedad de Microsoft?',
        respuestas: ['Outlook','Yahoo Mail','Gmail','iCloud Mail'],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;l era el antiguo nombre de una barra de Snickers antes de que cambiara en 1990?',
        respuestas: ['Race','Marathon','Smile','Sprint'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'facil', 
        pregunta: '&iquest;Cu&aacute;l es el planeta m&aacute;s peque&ntilde;o de nuestro sistema solar?',
        respuestas: ['Tierra','Venus','Marte','Mercurio'],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Qui&eacute;n fue el jefe de estado en Jap&oacute;n durante la Segunda Guerra Mundial?',
        respuestas: ['Emperador Hirohito','Emperador Mutsuhito','Emperador Akihito','Emperador Yoshihito'],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil', 
        pregunta: '&iquest;Cu&aacute;l es el segundo nombre de Chandler en la comedia Friends?',
        respuestas: ['Arthur','Bing','Muriel','John'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Cu&aacute;nto mide una piscina ol&iacute;mpica?',
        respuestas: ['25 metros','50 metros','60 metros','40 metros'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'medio', 
        pregunta: '&iquest;Alrededor de cu&aacute;ntas papilas gustativas tiene la lengua humana de promedio?',
        respuestas: ['100','1.000','10.000','100.000'],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Cu&aacute;l fue la primera pel&iacute;cula animada de largometraje que se lanz&oacute;?',
        respuestas: ['Pocahontas','Blanca Nieves y los siete enanitos','Peque&ntilde;a sirena','Cenicienta'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto']
    },{
        nivel:'dificil',
        pregunta: '&iquest;Por qu&eacute; pel&iacute;cula obtuvo Tom Hanks su primera nominaci&oacute;n al Oscar?',
        respuestas: ['Quisiera ser grande','Forrest Gump','Apolo 13','Tienes un e-mail'],
        contestacion:['Correcto','Incorrecto','Incorrecto','Incorrecto']
    }
]