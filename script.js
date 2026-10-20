/* ====== CONFIGURAZIONE ======
   Sostituisci il numero con il tuo WhatsApp (prefisso incluso, senza + e senza spazi). */
const WHATSAPP = "390000000000";

const BRANDS = ["Amiri", "Bape", "Balenciaga", "Celine", "Palm Angels", "Louis Vuitton", "Moncler", "Off White", "Gucci", "Corteiz", "Zanotti", "Essentials", "Hermès", "Burberry", "New Era"];
/* Nome mostrato al posto del nome interno del brand */
const BRAND_LABEL = { Bape: "A Bathing Ape" };
const labelBrand = b => BRAND_LABEL[b] || b;
const CATS = ["Jacket", "Hoodie", "T-shirt", "Jeans", "Shorts", "Sweatpants", "Accessories", "Cap"];

/* ====== FOTO ======
   Le foto stanno in img/ e si chiamano "styling (1).jpeg" ... "styling (66).jpeg".
   Cambia TOTALE se aggiungi altre foto, ESTENSIONE se non sono .jpeg (es. "jpg", "png"). */
const TOTALE = 67;
const ESTENSIONE = "jpeg";

/* ====== BRAND PER NUMERO DI FOTO ======
   [da, a, brand]: ogni foto prende il brand del suo intervallo. */
const INTERVALLI = [
  [1, 26, "Amiri"],
  [27, 43, "Bape"],
  [44, 47, "Moncler"],
  [48, 49, "Celine"],
  [50, 51, "Palm Angels"],
  [52, 54, "Louis Vuitton"],
  [55, 55, "Palm Angels"],
  [56, 56, "Balenciaga"],
  [57, 57, "Amiri"],
  [58, 58, "Off White"]
];
const brandDi = n => (INTERVALLI.find(([da, a]) => n >= da && n <= a) || [])[2] || "";

/* ====== DETTAGLI DEI CAPI   ======
   La chiave e' il numero della foto: 1 = "styling (1)". brand = uno dei BRANDS, cat = una delle CATS.
   Ogni foto ha la sua riga con brand, categoria, nome e descrizione. */
const DETTAGLI = {
  1: { brand: "Amiri", cat: "Hoodie", name: "Track jacket nera con profili bianchi", desc: "Giacca sportiva nera con collo alto, zip frontale e profili bianchi a contrasto. Logo ricamato in corsivo sul petto." },
  2: { brand: "Amiri", cat: "Hoodie", name: "Felpa con cappuccio bianca, logo MA", desc: "Felpa bianca con cappuccio, tasca a marsupio e logo MA stampato sul petto." },
  3: { brand: "Amiri", cat: "Hoodie", name: "Felpa nera Hollywood 1976", desc: "Felpa nera con cappuccio e grafica calligrafica Hollywood 1976 bianca sul petto." },
  4: { brand: "Amiri", cat: "T-shirt", name: "Polo in maglia nera ricamata", desc: "Polo a maniche corte in maglia traforata, con bottoni, bande bianche e ricami decorativi sul davanti." },
  5: { brand: "Amiri", cat: "T-shirt", name: "T-shirt nera logo corsivo", desc: "T-shirt nera con scritta ricamata in corsivo sul petto e piccolo monogramma sul fondo." },
  6: { brand: "Amiri", cat: "T-shirt", name: "T-shirt nera Chateau Hollywood", desc: "T-shirt nera con ricamo in corsivo bianco sul petto, taglio comodo." },
  7: { brand: "Amiri", cat: "T-shirt", name: "T-shirt nera logo MA", desc: "T-shirt nera girocollo con grande monogramma MA bianco sul petto." },
  8: { brand: "Amiri", cat: "Hoodie", name: "Felpa zip nera con patch", desc: "Felpa nera con cappuccio, doppia zip argento, cordini con puntali metallici e patch sul petto." },
  9: { brand: "Amiri", cat: "T-shirt", name: "T-shirt nera Hollywood 1976", desc: "T-shirt nera con grafica calligrafica Hollywood 1976 bianca sul petto." },
  10: { brand: "Amiri", cat: "T-shirt", name: "T-shirt nera con logo strass", desc: "T-shirt nera oversize con logo in corsivo realizzato con strass sul petto." },
  11: { brand: "Amiri", cat: "T-shirt", name: "T-shirt bianca Hollywood 1976", desc: "T-shirt bianca con grafica calligrafica Hollywood 1976 nera sul petto." },
  12: { brand: "Amiri", cat: "T-shirt", name: "T-shirt bianca Hollywood, CA", desc: "T-shirt bianca con scritta nera in stampatello sul petto, linea pulita." },
  13: { brand: "Amiri", cat: "Shorts", name: "Shorts neri logo MA", desc: "Shorts neri in felpa con coulisse, puntali metallici e logo MA sulla gamba." },
  14: { brand: "Amiri", cat: "Shorts", name: "Shorts in maglia bandana", desc: "Shorts in maglia con fantasia bandana bianca e nera e bordi a righe sul fondo." },
  15: { brand: "Amiri", cat: "Shorts", name: "Shorts in maglia monogramma beige", desc: "Shorts in maglia color crema con fantasia a monogrammi neri, coulisse in vita." },
  16: { brand: "Amiri", cat: "Sweatpants", name: "Pantaloni felpa neri", desc: "Pantaloni neri in felpa con coulisse, linea dritta e piccolo logo sulla gamba." },
  17: { brand: "Amiri", cat: "Sweatpants", name: "Pantaloni in maglia bandana", desc: "Pantaloni in maglia con fantasia bandana bianca e nera, bordo a righe e coulisse sul fondo." },
  18: { brand: "Amiri", cat: "Jeans", name: "Jeans neri bootcut", desc: "Jeans neri lavaggio scuro con taglio leggermente svasato sul fondo." },
  19: { brand: "Amiri", cat: "Jeans", name: "Jeans neri skinny con strappi", desc: "Jeans neri skinny con toppe e strappi sulle ginocchia." },
  20: { brand: "Amiri", cat: "Jeans", name: "Jeans grigio scuro strappati", desc: "Jeans skinny grigio scuro con lavaggio sbiadito e strappi sulle ginocchia." },
  21: { brand: "Amiri", cat: "Jeans", name: "Jeans neri con toppe", desc: "Jeans neri skinny con toppe applicate sulle gambe e scritta sulla coscia." },
  22: { brand: "Amiri", cat: "Jeans", name: "Jeans blu strappati", desc: "Jeans blu medio con lavaggio vissuto, strappi e toppe sulle ginocchia." },
  23: { brand: "Amiri", cat: "Jeans", name: "Jeans azzurri strappati", desc: "Jeans skinny azzurro chiaro con strappi e rattoppi sulle ginocchia." },
  24: { brand: "Amiri", cat: "Accessories", name: "Borsa a tracolla nera Arts District", desc: "Borsa a tracolla nera con grande stampa bianca Amiri Arts District e dettagli metallici." },
  25: { brand: "Amiri", cat: "Accessories", name: "Cintura con fibbia monogramma", desc: "Cintura grigio scuro con motivo a monogrammi e fibbia MA argento." },
  26: { brand: "Amiri", cat: "Accessories", name: "Cappello in lana nero", desc: "Berretto in maglia a coste nero con piccola placca MA sul risvolto." },
  27: { brand: "Bape", cat: "Hoodie", name: "Felpa zip Shark camo nera", desc: "Felpa con cappuccio e zip integrale, fantasia camouflage nera e grafica squalo sul cappuccio." },
  28: { brand: "Bape", cat: "Hoodie", name: "Felpa zip Shark camo viola", desc: "Felpa con cappuccio e zip integrale, camouflage viola e grafica squalo sul cappuccio." },
  29: { brand: "Bape", cat: "T-shirt", name: "T-shirt nera Ape Head splash", desc: "T-shirt nera con grande Ape Head bianco effetto schizzo sul petto." },
  30: { brand: "Bape", cat: "T-shirt", name: "T-shirt nera Ape Head camo viola", desc: "T-shirt nera con grande Ape Head in camouflage viola sul petto." },
  31: { brand: "Bape", cat: "T-shirt", name: "T-shirt bianca Ape Head", desc: "T-shirt bianca con grande Ape Head nero e scritta By a Bathing Ape." },
  32: { brand: "Bape", cat: "T-shirt", name: "T-shirt bianca Bathing Ape", desc: "T-shirt bianca con scritta Bathing Ape viola sul petto." },
  33: { brand: "Bape", cat: "T-shirt", name: "T-shirt Shark camo viola", desc: "T-shirt in camouflage viola con grafica squalo e zip sul davanti." },
  34: { brand: "Bape", cat: "T-shirt", name: "Canotta camo rosa", desc: "Canotta con fantasia camouflage rosa e scritta Bathing Ape sul petto." },
  35: { brand: "Bape", cat: "T-shirt", name: "Canotta camo azzurra", desc: "Canotta con fantasia camouflage azzurra e scritta Bathing Ape sul petto." },
  36: { brand: "Bape", cat: "T-shirt", name: "Canotta camo verde", desc: "Canotta con fantasia camouflage verde e scritta Bathing Ape sul petto." },
  37: { brand: "Bape", cat: "Shorts", name: "Shorts Shark camo rosa", desc: "Shorts con camouflage rosa e grafica squalo sul davanti." },
  38: { brand: "Bape", cat: "Shorts", name: "Shorts Shark camo azzurri", desc: "Shorts con camouflage azzurro e grafica squalo sul davanti." },
  39: { brand: "Bape", cat: "Shorts", name: "Shorts Shark camo verdi", desc: "Shorts con camouflage verde e grafica squalo sul davanti." },
  40: { brand: "Bape", cat: "Sweatpants", name: "Pantaloni camo grigi", desc: "Pantaloni sportivi con fantasia camouflage grigia e fondo elastico." },
  41: { brand: "Bape", cat: "Accessories", name: "Cintura Bape con strass", desc: "Cintura viola con grande fibbia Bape in strass." },
  42: { brand: "Bape", cat: "Accessories", name: "Zaino Baby Milo", desc: "Zainetto a forma di peluche Baby Milo con felpa camouflage e catenelle." },
  43: { brand: "Bape", cat: "Accessories", name: "Borsa a tracolla Baby Milo", desc: "Borsa a tracolla rotonda con il volto di Baby Milo e tracolla nera." },
  44: { brand: "Moncler", cat: "Jacket", name: "Piumino nero lucido con cappuccio", desc: "Piumino nero lucido con cappuccio, zip frontale e polsini a coste." },
  45: { brand: "Moncler", cat: "Jacket", name: "Gilet piumino nero", desc: "Gilet imbottito nero con cappuccio, zip frontale e logo Moncler sul petto." },
  46: { brand: "Moncler", cat: "Accessories", name: "Cappello in lana panna", desc: "Berretto in lana a coste color panna con patch Moncler." },
  47: { brand: "Moncler", cat: "Accessories", name: "Cappello in lana nero", desc: "Berretto in lana a coste nero con patch Moncler." },
  48: { brand: "Celine", cat: "Hoodie", name: "Felpa zip nera con scritta", desc: "Felpa nera con zip integrale, cappuccio e scritta Celine bianca rovesciata." },
  49: { brand: "Celine", cat: "Sweatpants", name: "Pantaloni felpa neri Celine", desc: "Pantaloni neri in felpa con coulisse chiara e scritta Celine sul davanti." },
  50: { brand: "Palm Angels", cat: "Hoodie", name: "Track jacket nera con bande bianche", desc: "Giacca sportiva nera con zip frontale, bande bianche sulle maniche e logo sul petto." },
  51: { brand: "Palm Angels", cat: "Sweatpants", name: "Pantaloni track neri con bande", desc: "Pantaloni sportivi neri con bande laterali chiare e logo sul fianco." },
  52: { brand: "Louis Vuitton", cat: "Accessories", name: "Cintura nera fibbia LV", desc: "Cintura nera con fibbia LV argento." },
  53: { brand: "Louis Vuitton", cat: "Accessories", name: "Cintura bianca fibbia LV", desc: "Cintura bianca con motivo monogram e fibbia LV argento." },
  54: { brand: "Louis Vuitton", cat: "Accessories", name: "Cappello monogram grigio e nero", desc: "Berretto in maglia con motivo monogram e risvolto a righe nero e grigio." },
  55: { brand: "Palm Angels", cat: "Shorts", name: "Shorts track neri con bande bianche", desc: "Shorts sportivi neri con elastico in vita, bande bianche laterali e logo Palm Angels sul davanti." },
  56: { brand: "Balenciaga", cat: "T-shirt", name: "T-shirt nera logo corsivo", desc: "T-shirt nera con scritta Balenciaga in corsivo bianco sul petto e orli leggermente consumati." },
  32.5: { brand: "Bape", cat: "T-shirt", name: "T-shirt bianca Bape Ape Head azzurro", desc: "T-shirt bianca con scritta Bape e Ape Head azzurro sul petto; dietro grande grafica A Bathing Ape azzurra." },
  45.5: { brand: "Moncler", cat: "Jacket", name: "Gilet piumino argento Snow Angels", desc: "Gilet imbottito argento metallizzato con cappuccio nero lucido, patch Moncler sul petto e grande patch Snow Angels dietro." },
  45.6: { brand: "Moncler", cat: "Jacket", name: "Piumino fucsia lucido con cappuccio", desc: "Piumino fucsia lucido con cappuccio, zip frontale, tasche con zip e patch Moncler sulla manica." },
  51.5: { brand: "Palm Angels", cat: "T-shirt", name: "T-shirt nera Palm Angels Paris sprayed", desc: "T-shirt nera oversize con logo Palm Angels Paris effetto spray bianco sul petto." },
  54.5: { brand: "Louis Vuitton", cat: "Accessories", color: "Beige", name: "Borsa Keepall monogram con dettagli fucsia", desc: "Borsa da viaggio in tela monogram con manici, tracolla e targhetta fucsia." },
  58: { brand: "Off White", cat: "T-shirt", name: "Longsleeve nera Off-White", desc: "Maglia nera a maniche lunghe con piccolo logo Off-White sul petto e grandi frecce diagonali bianche sulle maniche." },
  24.5: { brand: "Amiri", cat: "Jacket", name: "Piumino nero con ossa bianche, corto", desc: "Piumino corto nero a colletto alto con zip frontale, scritta Amiri ricamata sul petto e grandi ossa bianche sulle maniche." },
  28.5: { brand: "Bape", cat: "Hoodie", name: "Felpa zip camo nera con cappuccio", desc: "Felpa con cappuccio e zip integrale, fantasia camouflage nera e grigia, logo Bape sul petto." },
  45.7: { brand: "Moncler", cat: "Jacket", name: "Gilet piumino nero lucido", desc: "Gilet imbottito nero lucido con colletto alto, chiusura frontale, tasche con zip e patch Moncler sul petto." },
  50.5: { brand: "Palm Angels", cat: "Hoodie", name: "Track jacket rosa con bande verdi", desc: "Giacca sportiva rosa con zip frontale, bande verde fluo sulle maniche e logo Palm Angels sul petto; dietro grande grafica gelato con teschio." },
  51.1: { brand: "Palm Angels", cat: "Sweatpants", name: "Pantaloni track gialli", desc: "Pantaloni sportivi gialli con elastico in vita, linea dritta e logo Palm Angels sul fianco." },
  59: { brand: "New Era", cat: "Accessories", name: "Berretto in lana grigio Supreme con strass", desc: "Berretto in maglia grigio chiaro con risvolto, scritta Supreme sul risvolto e strass sparsi su tutta la superficie." },
  60: { brand: "Corteiz", cat: "Accessories", name: "Berretto bianco Corteiz", desc: "Berretto in maglia bianco con grande logo Corteiz nero stampato sul davanti." },
  61: { brand: "Corteiz", cat: "Jeans", name: "Jeans neri lavaggio scuro con cuciture a contrasto", desc: "Jeans neri con cuciture chiare a contrasto sulle gambe; dietro tasche con logo C e stella ricamati." },
  62: { brand: "Zanotti", cat: "Hoodie", name: "Felpa nera con cappuccio e logo", desc: "Felpa nera con cappuccio, tasca a marsupio e logo Zanotti ricamato sul petto." },
  63: { brand: "New Era", cat: "Cap", name: "Cappello White Sox nero con strass", desc: "Cappello nero New Era con logo Sox in strass e decorazioni scintillanti su tutta la calotta; dietro grande croce in strass." },
  63.1: { brand: "New Era", cat: "Cap", name: "Cappello New York Yankees paisley", desc: "Cappello nero New Era con logo NY bianco, decori paisley sulla calotta e sulla visiera; dietro grande motivo paisley." },
  63.2: { brand: "New Era", cat: "Cap", name: "Cappello Angels nero", desc: "Cappello nero New Era con logo Angels bianco sul davanti e logo MLB sul retro." },
  63.3: { brand: "New Era", cat: "Cap", name: "Cappello Angels panna e arancio", desc: "Cappello New Era in velluto a coste panna con logo Angels ricamato e visiera arancio; dietro logo MLB." },
  64: { brand: "Gucci", cat: "Accessories", color: "Beige", name: "Borsello GG Supreme", desc: "Borsello da cintura in tela GG beige e marrone con tracolla nera." },
  43.1: { brand: "Bape", cat: "Accessories", name: "Zaino peluche Baby Milo marrone", desc: "Zainetto a forma di peluche Baby Milo marrone con muso arancio e spallacci neri regolabili." },
  50.6: { brand: "Palm Angels", cat: "Sweatpants", name: "Pantaloni track rosa con bande verdi", desc: "Pantaloni sportivi rosa con elastico in vita, bande verde fluo laterali, scritta Palm Angels sulla gamba e piccolo teschio ricamato." },
  51.2: { brand: "Palm Angels", cat: "Sweatpants", name: "Pantaloni track blu con monogramma rosso", desc: "Pantaloni sportivi blu navy con fantasia gotica rossa su tutta la superficie, elastico in vita e logo Palm Angels sulla gamba." },
  51.3: { brand: "Palm Angels", cat: "Hoodie", name: "Track jacket blu con monogramma rosso", desc: "Giacca sportiva blu navy con fantasia gotica rossa, zip frontale, colletto e polsini a coste e bande rosse sulle maniche." },
  51.4: { brand: "Palm Angels", cat: "Hoodie", name: "Track jacket nera con fantasia geometrica", desc: "Giacca sportiva nera con fantasia geometrica a rombi, zip frontale, collo alto, bande bianche sulle maniche e logo Palm Angels sul petto." },
  51.6: { brand: "Palm Angels", cat: "Accessories", name: "Orsetto in peluche Palm Angels", desc: "Orsetto in peluche beige seduto, con le lettere P e A in gotico nero sulle piante dei piedi." },
  54.1: { brand: "Louis Vuitton", cat: "T-shirt", name: "T-shirt nera Vuitton 00 stile football", desc: "T-shirt nera con scollo a V, monogram tono su tono, grande numero 00 arancio con scritta Vuitton e bande arancio sulle maniche; dietro stesso numero 00." },
  54.2: { brand: "Louis Vuitton", cat: "T-shirt", name: "Camicia monogram blu a fiori", desc: "Camicia a maniche corte con colletto aperto e fantasia monogram abbinata a grandi fiori, in tonalita blu e bianco." },
  54.3: { brand: "Louis Vuitton", cat: "Jacket", name: "Giacca monogram nera e beige sbiadita", desc: "Giacca in tessuto monogram nero con effetto sbiadito beige sul fondo e sulle maniche, chiusura a bottoni e taschino sul petto." },
  54.4: { brand: "Louis Vuitton", cat: "Jeans", name: "Jeans monogram neri e beige sbiaditi", desc: "Jeans a gamba larga con fantasia monogram nera e effetto sbiadito beige sulla parte alta." },
  54.6: { brand: "Louis Vuitton", cat: "Accessories", color: "Beige", name: "Borsa a tracolla monogram con catena arancio", desc: "Borsa rigida in tela monogram marrone con zip frontale e catena nera e arancio fluo." },
  54.7: { brand: "Louis Vuitton", cat: "Accessories", color: "Azzurro", name: "Borsa Speedy turchese con pochette", desc: "Borsa Speedy in tela monogram turchese con manici e tracolla in pelle color cuoio, completa di pochette abbinata." },
  55.1: { brand: "Palm Angels", cat: "Shorts", name: "Shorts track neri con bande rosa", desc: "Shorts sportivi neri con elastico in vita, bande rosa laterali e logo Palm Angels sul davanti." },
  55.2: { brand: "Palm Angels", cat: "Shorts", name: "Shorts track blu con monogramma rosso", desc: "Shorts sportivi blu navy con fantasia gotica rossa, bande rosse e bianche laterali e logo Palm Angels sul davanti." },
  60.1: { brand: "Corteiz", cat: "Accessories", name: "Berretto nero Corteiz scritta gialla", desc: "Berretto in maglia nero con grande scritta Corteiz in corsivo giallo sul davanti." },
  61.1: { brand: "Essentials", cat: "T-shirt", name: "T-shirt nera NBA Essentials", desc: "T-shirt nera girocollo con scritta NBA Essentials bianca sul petto e taglio comodo." },
  61.2: { brand: "Corteiz", cat: "T-shirt", name: "T-shirt nera Corteiz tricolore", desc: "T-shirt nera con grande scritta Corteiz in corsivo con i colori verde, bianco e rosso sul petto." },
  61.3: { brand: "Corteiz", cat: "T-shirt", name: "T-shirt nera Corteiz riquadri bianchi", desc: "T-shirt nera con scritta Corteiz in riquadri bianchi e neri sul petto." },
  64.1: { brand: "Gucci", cat: "Cap", name: "Cappello GG Supreme maxi beige", desc: "Cappello da baseball in tela GG maxi beige e marrone con bordo della visiera in pelle marrone." },
  64.2: { brand: "Gucci", cat: "Cap", name: "Cappello GG nero", desc: "Cappello da baseball nero in tela GG tono su tono con visiera rigida." },
  65: { brand: "Essentials", cat: "Hoodie", name: "Felpa grigia con cappuccio Essentials", desc: "Felpa grigio melange oversize con cappuccio e scritta Essentials Fear of God sul petto; dietro grande scritta Essentials Fear of God." },
  66: { brand: "Hermès", cat: "Accessories", name: "Cintura nera fibbia H", desc: "Cintura nera in pelle con fibbia H argento." },
  50.7: { brand: "Palm Angels", cat: "Jacket", name: "Giacca di jeans nera Palm Angels", desc: "Giacca di jeans nera con lavaggio sbiadito, bottoni argento e due taschini sul petto; dietro scritta Palm Angels bianca con Die Punk rosso effetto spray." },
  "51.2.1": { brand: "Palm Angels", cat: "Sweatpants", name: "Pantaloni track leopardati con bande panna", desc: "Pantaloni sportivi con fantasia leopardata marrone, elastico in vita, bande laterali panna e nere e logo Palm Angels sul davanti." },
  "51.4.1": { brand: "Palm Angels", cat: "Hoodie", name: "Track jacket tartan rossa con bande bianche", desc: "Giacca sportiva con fantasia tartan rossa e nera, zip frontale bianca, collo e polsini neri a coste, bande bianche sulle maniche e logo Palm Angels sul petto." },
  54.8: { brand: "Louis Vuitton", cat: "Accessories", name: "Zaino monogram blu navy con logo rosso", desc: "Zaino in tela monogram blu navy con grande logo LV rosso fluo sulla tasca frontale, cerniera arancio e spallacci neri." },
  54.9: { brand: "Louis Vuitton", cat: "Accessories", name: "Borsa a tracolla bianca LV x NBA", desc: "Borsa a tracolla in tela monogram bianca tono su tono con profili rossi, patch NBA sul davanti e tracolla blu." },
  "55.2.1": { brand: "Palm Angels", cat: "Shorts", name: "Shorts track rosa con bande verdi", desc: "Shorts sportivi rosa con elastico in vita, bande verde fluo laterali e logo Palm Angels sul davanti." },
  64.3: { brand: "Gucci", cat: "Accessories", name: "Borsa a tracolla GG nera con nastro Web", desc: "Borsa a tracolla in tela GG nera tono su tono con zip frontale, dettagli in pelle nera e tracolla a righe blu e rosse." },
  3.1: { brand: "Amiri", cat: "Hoodie", name: "Felpa nera con cappuccio logo MA", desc: "Felpa nera con cappuccio, tasca a marsupio e logo MA bianco sul petto; dietro grande scritta Amiri bianca." },
  7.1: { brand: "Amiri", cat: "T-shirt", name: "T-shirt nera logo Amiri tono su tono", desc: "T-shirt nera girocollo con grande logo Amiri grigio scuro tono su tono sul petto e piccolo monogramma MA sul fondo." },
  12.1: { brand: "Amiri", cat: "T-shirt", name: "T-shirt bianca Arts District", desc: "T-shirt bianca oversize con piccola stampa nera Amiri Arts District sul petto." },
  28.1: { brand: "Bape", cat: "Hoodie", name: "Felpa zip Shark camo azzurra", desc: "Felpa con cappuccio e zip integrale, camouflage azzurro e grafica squalo sul cappuccio." },
  28.3: { brand: "Bape", cat: "Hoodie", name: "Felpa zip Shark camo verde", desc: "Felpa con cappuccio e zip integrale, camouflage verde con fondo beige e grafica squalo sul cappuccio." },
  28.4: { brand: "Bape", cat: "Hoodie", name: "Felpa zip Shark camo rosa", desc: "Felpa con cappuccio e zip integrale, camouflage rosa e rosso e grafica squalo sul cappuccio." },
  32.6: { brand: "Bape", cat: "T-shirt", name: "T-shirt bianca A Bathing Ape College", desc: "T-shirt bianca con grande scritta A Bathing Ape viola e Ape Head azzurro camouflage sul petto." },
  39.1: { brand: "Bape", cat: "Shorts", name: "Shorts Shark camo viola", desc: "Shorts in felpa con camouflage viola, elastico in vita e grande grafica squalo sul davanti." },
  45.8: { brand: "Moncler", cat: "Jacket", name: "Gilet piumino rosso con inserti beige", desc: "Gilet imbottito rosso con colletto alto, inserti beige sulle spalle, zip frontale, tasche con zip e patch Moncler sul petto." },
  "54.10": { brand: "Louis Vuitton", cat: "Accessories", color: "Nero", name: "Borsa a tracolla monogram nera e grigia con pochette", desc: "Borsa a tracolla in tela monogram grigio scuro con zip frontale, tracolla nera e pochette staccabile abbinata." },
  54.11: { brand: "Louis Vuitton", cat: "Accessories", color: "Blu", name: "Borsa a tracolla monogram blu navy con pochette", desc: "Borsa a tracolla in pelle blu navy con fantasia monogram effetto acquerello e pochette staccabile abbinata." },
  66.1: { brand: "Hermès", cat: "Accessories", name: "Cintura nera fibbia H oro", desc: "Cintura nera in pelle con fibbia H oro." },
  67: { brand: "Burberry", cat: "Shorts", name: "Shorts check beige con logo TB", desc: "Shorts con fantasia check beige, coulisse in vita e logo TB applicato sulla gamba." }
};

/* ====== FOTO DEL RETRO ======
   Numeri dei capi che hanno anche la foto "styling (N) back.jpeg". */
const BACKS = [1, 2, 3, 3.1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 28.3, 29, 30, 32.5, 33, 45.5, 50.5, 61, 63, 63.1, 63.2, 63.3, 54.1, 65, 50.7];

/* ====== ORDINE NEL CATALOGO ======
   Numeri delle foto nell'ordine in cui compaiono. Le foto non elencate vanno in fondo, in ordine di numero.
   24.5 = piumino Amiri con ossa (primo degli Amiri), 55 = shorts Palm Angels (fra la giacca 50 e i pantaloni 51). */
const ORDINE = [24.5, 1, 2, 3, 3.1, 4, 5, 6, 7, 7.1, 8, 9, 10, 11, 12, 12.1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, 28.1, 28.3, 28.4, 28.5, 29, 30, 31, 32, 32.5, 32.6, 33, 34, 35, 36, 37, 38, 39, 39.1, 40, 41, 42, 43, 43.1, 44, 45, 45.5, 45.6, 45.7, 45.8, 46, 47, 48, 49,
  50, 50.5, 50.7, 51.3, 51.4, "51.4.1", 51.5, 55, 55.1, 55.2, "55.2.1", 51, 51.1, 50.6, 51.2, "51.2.1", 51.6,
  52, 53, 54, 54.1, 54.2, 54.3, 54.4, 54.5, 54.6, 54.7, 54.8, 54.9, "54.10", 54.11, 56, 58,
  64, 64.1, 64.2, 64.3, 61, 61.2, 61.3, 60, 60.1, 62, 61.1, 65, 66, 66.1, 67, 63, 63.1, 63.2, 63.3, 59];
/* Foto escluse dal catalogo (57 = doppione del piumino Amiri con ossa, tenuto come 24.5) */
const ESCLUSI = [57];
const NUMERI = [...ORDINE, ...Array.from({ length: TOTALE }, (_, i) => i + 1).filter(n => !ORDINE.includes(n))]
  .filter(n => parseFloat(n) <= TOTALE && !ESCLUSI.includes(n));

/* ====== COLORE ======
   Il colore si legge dal nome (poi dalla descrizione): vale la prima parola di colore che compare.
   Per forzarlo aggiungi color: "Nero" (o altro gruppo di COLORI) nella riga del capo in DETTAGLI. */
const COLORI = ["Nero", "Bianco", "Grigio", "Argento", "Beige", "Rosa", "Fucsia", "Rosso", "Viola", "Blu", "Azzurro", "Verde", "Giallo"];
const PAROLE_COLORE = [
  ["Nero", /\bner[oaie]\b/i], ["Bianco", /\bbianc[oaih]/i], ["Grigio", /\bgrigi[oae]?\b/i], ["Argento", /\bargent/i],
  ["Beige", /\b(panna|crema|beige|marrone)\b/i], ["Rosa", /\bros[ae]\b/i], ["Fucsia", /\bfucsia\b/i], ["Rosso", /\bross[aoei]\b/i], ["Viola", /\bviol/i],
  ["Blu", /\bblu\b/i], ["Azzurro", /\bazzurr/i], ["Verde", /\bverd/i], ["Giallo", /\bgiall/i]
];
const coloreIn = txt => {
  let best = null;
  PAROLE_COLORE.forEach(([nome, re]) => {
    const m = txt.match(re);
    if (m && (!best || m.index < best.i)) best = { nome, i: m.index };
  });
  return best ? best.nome : "";
};
const coloreDi = (name, desc) => coloreIn(name) || coloreIn(desc) || "Altro";

/* ====== TAGLIE ======
   La taglia e' scritta nel nome del file: "styling (1) S.jpeg" = taglia S. Chiave = numero della foto.
   Cintura = numero (es. 85, 110). Cappelli = misura scritta nel file come "7 1-8" (il trattino sostituisce la frazione) e mostrata come "7 1:8". I capi senza taglia (borse, cappelli, ecc.) non compaiono qui e il file e' "styling (N).jpeg".
   Se cambi il nome di una foto aggiorna anche questa lista. */
const SIZES = {
  "1": "S", "2": "M", "3": "M", "3.1": "M", "4": "M", "5": "S", "6": "M", "7": "M",
  "7.1": "M", "8": "M", "9": "M", "10": "M", "11": "M", "12": "M", "12.1": "M", "13": "S",
  "14": "S", "15": "S", "16": "S", "17": "S", "18": "S", "19": "S", "20": "S", "21": "S",
  "22": "S", "23": "S", "24.5": "M", "25": "85", "27": "M", "28": "M", "28.1": "M", "28.3": "M",
  "28.4": "M", "28.5": "M", "29": "L", "30": "M", "31": "L", "32": "M", "32.5": "M", "32.6": "M",
  "33": "M", "34": "S", "35": "S", "36": "S", "37": "S", "38": "S", "39": "S", "39.1": "S",
  "40": "M", "41": "85", "44": "M", "45": "S", "45.5": "XL", "45.6": "XL", "45.7": "M", "45.8": "XL",
  "48": "S", "49": "XS", "50": "M", "50.5": "L", "50.6": "L", "50.7": "XL", "51": "XL", "51.1": "L",
  "51.2": "XL", "51.2.1": "XL", "51.3": "XL", "51.4": "XL", "51.4.1": "XL", "51.5": "M", "52": "85", "53": "85",
  "54.1": "XL", "54.2": "XL", "54.3": "XL", "54.4": "XL", "55": "S", "55.1": "XL", "55.2": "XL", "55.2.1": "XL",
  "56": "M", "58": "M", "61": "L", "61.1": "L", "61.2": "M", "61.3": "M", "62": "M", "65": "M",
  "63": "7 1-8", "63.1": "7 1-8", "63.2": "7 1-8", "63.3": "7 1-8",
  "66": "110", "66.1": "110",
  "67": "L"
};
const tagliaDi = n => SIZES[String(n)] || "";
/* Taglia mostrata: "7 1-8" diventa "7" + spazio + "1:8" (il 7 staccato dalla frazione, i due punti al posto del trattino) */
const tagliaHtml = s => s.replace(/^(\d+)\s+(\d+)-(\d+)$/, '$1<i class="sz-gap"></i>$2:$3');

const PRODUCTS_RAW = NUMERI.map(n => {
  const d = DETTAGLI[n] || {};
  return {
    brand: d.brand || brandDi(n),
    cat: d.cat || "",
    name: d.name || `Capo ${n}`,
    desc: d.desc || "Scrivici per taglia, colore e disponibilita.",
    color: d.color || coloreDi(d.name || "", d.desc || ""),
    size: tagliaDi(n),
    img: encodeURI(`img/styling (${n})${tagliaDi(n) ? " " + tagliaDi(n) : ""}.${ESTENSIONE}`) + "?v=9",
    back: BACKS.includes(n) ? encodeURI(`img/styling (${n}) back.${ESTENSIONE}`) + "?v=9" : ""
  };
});

/* Ordine del catalogo: prima per tipo di capo, dentro ogni tipo per marca, dentro ogni marca per colore.
   Per cinture, cuffie, cappelli e borse il tipo si capisce da nome e descrizione. */
const TIPI = ["Jacket", "Hoodie", "T-shirt", "Jeans", "Sweatpants", "Shorts", "Belt", "Beanie", "Cap", "Bag"];
const tipoDi = p => {
  const t = `${p.name} ${p.desc}`;
  if (p.cat === "Accessories" || p.cat === "Cap") {
    if (/borsa|borsello|zaino/i.test(t)) return "Bag";
    if (/cintura/i.test(t)) return "Belt";
    if (/berretto/i.test(t)) return "Beanie";
    return p.cat === "Cap" ? "Cap" : "Altro";
  }
  return p.cat;
};
const rangoColore = p => { const i = COLORI.indexOf(p.color); return i < 0 ? COLORI.length : i; };
const rangoTipo = p => { const i = TIPI.indexOf(tipoDi(p)); return i < 0 ? TIPI.length : i; };

/* I brand escono nell'ordine in cui compaiono in ORDINE, i capi restano nell'ordine scelto. */
const ORDINE_BRAND = [...new Set(PRODUCTS_RAW.map(p => p.brand))];
const PRODUCTS = PRODUCTS_RAW
  .map((p, i) => ({ p, i }))
  .sort((a, b) => rangoTipo(a.p) - rangoTipo(b.p) || ORDINE_BRAND.indexOf(a.p.brand) - ORDINE_BRAND.indexOf(b.p.brand) || rangoColore(a.p) - rangoColore(b.p) || a.i - b.i)
  .map(x => x.p);

const $ = id => document.getElementById(id);
const grid = $("grid"), filters = $("filters"), count = $("count"), modal = $("modal");
const drawer = $("drawer"), overlay = $("overlay"), burger = $("burger");
let brand = "Tutti", cat = "Tutti";

const waLink = text => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* ---- Filtri categoria ---- */
function renderFilters() {
  filters.innerHTML = "";
  ["Tutti", ...CATS.filter(c => PRODUCTS.some(p => p.cat === c))].forEach(c => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = c;
    b.setAttribute("aria-pressed", c === cat);
    b.onclick = () => { cat = c; renderFilters(); renderGrid(); };
    filters.appendChild(b);
  });
}

/* ---- Griglia ---- */
function renderGrid() {
  const list = PRODUCTS.filter(p =>
    (brand === "Tutti" || p.brand === brand) && (cat === "Tutti" || p.cat === cat));
  $("catTitle").textContent = brand === "Tutti" ? "Catalogo generale" : `${labelBrand(brand)}, ${cat}`;
  filters.hidden = brand !== "Tutti";
  count.textContent = `${list.length} ${list.length === 1 ? "capo" : "capi"}`;
  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML = `<p class="empty">Nessun capo disponibile per ora in questa selezione. Scrivici su WhatsApp e lo cerchiamo per te.</p>`;
    return;
  }
  list.forEach(p => {
    const card = document.createElement("button");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="card-info">
        ${p.size ? `<span class="size">${tagliaHtml(p.size)}</span>` : ""}
      </div>`;
    card.querySelector("img").onerror = () => card.remove();
    card.onclick = () => openModal(p);
    grid.appendChild(card);
  });
}

/* ---- Scheda capo ---- */
function openModal(p) {
  $("mImg").src = p.img;
  $("mImg").alt = p.back ? `${p.name}, davanti` : p.name;
  $("mImg2").parentElement.hidden = !p.back;
  if (p.back) { $("mImg2").src = p.back; $("mImg2").alt = `${p.name}, dietro`; }
  else { $("mImg2").removeAttribute("src"); }
  modal.classList.toggle("single", !p.back);
  modal.showModal();
}
$("close").onclick = () => modal.close();
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

/* ---- Menu laterale ---- */
function openDrawer() {
  drawer.removeAttribute("inert");
  overlay.hidden = false;
  requestAnimationFrame(() => drawer.classList.add("open"));
  burger.setAttribute("aria-expanded", "true");
  document.body.classList.add("lock");
  $("closeDrawer").focus();
}
function closeDrawer() {
  drawer.classList.remove("open");
  drawer.setAttribute("inert", "");
  overlay.hidden = true;
  burger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("lock");
  burger.focus();
}

const VIEWS = ["home", "viewAbout", "viewCatalog"];
function showView(id) {
  VIEWS.forEach(v => { $(v).hidden = v !== id; });
  /* logo nella barra: in tutte le pagine tranne la home */
  document.body.classList.toggle("in-catalog", id !== "home");
}
function showCatalog(b, c) {
  brand = b; cat = c;
  renderFilters(); renderGrid();
  showView("viewCatalog");
  document.body.classList.add("page-white");
  closeDrawer();
  window.scrollTo(0, 0);
}
function showAbout() {
  showView("viewAbout");
  document.body.classList.add("page-white");
  closeDrawer();
  window.scrollTo(0, 0);
}
function showHome() {
  showView("home");
  document.body.classList.remove("page-white");
  if (drawer.classList.contains("open")) closeDrawer();
  window.scrollTo(0, 0);
}

function renderDrawer() {
  const ul = $("brandList");
  ul.innerHTML = "";

  const homeLi = document.createElement("li");
  const homeBtn = document.createElement("button");
  homeBtn.className = "brand-btn solo";
  homeBtn.textContent = "Home";
  homeBtn.onclick = () => showHome();
  homeLi.appendChild(homeBtn);
  ul.appendChild(homeLi);

  const infoLi = document.createElement("li");
  const infoBtn = document.createElement("button");
  infoBtn.className = "brand-btn solo";
  infoBtn.textContent = "Info";
  infoBtn.onclick = () => showAbout();
  infoLi.appendChild(infoBtn);
  ul.appendChild(infoLi);

  const first = document.createElement("li");
  const gen = document.createElement("button");
  gen.className = "brand-btn solo";
  gen.textContent = "Catalogo generale";
  gen.onclick = () => showCatalog("Tutti", "Tutti");
  first.appendChild(gen);
  ul.appendChild(first);

  /* Brand con piu categorie in alto, quelli con meno in basso (a parita' resta l'ordine di BRANDS) */
  const catDi = name => CATS.filter(c => PRODUCTS.some(p => p.brand === name && p.cat === c));
  [...BRANDS].sort((a, b) => catDi(b).length - catDi(a).length).forEach(name => {
    const available = catDi(name);
    if (!available.length) return;
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "brand-btn";
    btn.textContent = labelBrand(name);
    btn.setAttribute("aria-expanded", "false");
    const sub = document.createElement("ul");
    sub.className = "cat-list";
    available.forEach(c => {
      const cli = document.createElement("li");
      const cb = document.createElement("button");
      cb.className = "cat-btn";
      cb.textContent = c;
      cb.onclick = () => showCatalog(name, c);
      cli.appendChild(cb);
      sub.appendChild(cli);
    });
    btn.onclick = () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      ul.querySelectorAll(".brand-btn").forEach(b => b.setAttribute("aria-expanded", "false"));
      ul.querySelectorAll(".cat-list").forEach(s => s.classList.remove("open"));
      if (!isOpen) { btn.setAttribute("aria-expanded", "true"); sub.classList.add("open"); }
    };
    li.append(btn, sub);
    ul.appendChild(li);
  });
}

burger.onclick = openDrawer;
$("closeDrawer").onclick = closeDrawer;
overlay.onclick = closeDrawer;
document.addEventListener("keydown", e => { if (e.key === "Escape" && drawer.classList.contains("open")) closeDrawer(); });


renderDrawer();
renderFilters();
renderGrid();