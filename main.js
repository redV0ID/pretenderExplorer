

const eaOption = document.querySelector('.ea')
const maOption = document.querySelector('.ma')
const laOption = document.querySelector('.la')
const eaCont = document.querySelector('.ea-container')
const maCont = document.querySelector('.ma-container')
const laCont = document.querySelector('.la-container')


function pickRandomNationsEA(nations_era, numberOfNations) {
    let pTag = document.createElement('p');
   pTag.textContent= ea_nations[Math.floor(Math.random()*ea_nations.length)]
    eaCont.appendChild(pTag)
}
function pickRandomNationsMA(nations_era, numberOfNations) {
    let pTag = document.createElement('p');
    pTag.textContent= ma_nations[Math.floor(Math.random()*ma_nations.length)]
    maCont.appendChild(pTag)
     
 }
 function pickRandomNationsLA(nations_era, numberOfNations) {
    let pTag = document.createElement('p');
    pTag.textContent= ma_nations[Math.floor(Math.random()*ma_nations.length)]
    laCont.appendChild(pTag) 
 }

eaOption.addEventListener('click', pickRandomNationsEA)
maOption.addEventListener('click', pickRandomNationsMA)
laOption.addEventListener('click', pickRandomNationsLA)


let ea_nations = `Arcoscephale
Ermor
Ulm
Marverni
Sauromatia
T'ien Ch'i
Machaka
Mictlan
Abysia
Caelum
C'tis
Pangaea
Agartha
Tir na n'Og
Fomoria
Vanheim
Helheim
Niefelheim
Rus
Kailasa
Lanka
Yomi
Hinnom
Berytos
Ur
Xibalba
Mekone
Ubar
Atlantis
R'lyeh
Pelagia
Oceania
Therodos`.split('\n')


ma_nations = `
Arcoscephale,
Ermor, 
Sceleria, 
Pythium, 
Man, 
Eriu, 
Ulm,
Marignon, 
Mictlan, 
T'ien Ch'i, 
Machaka, 
Agartha,
Abysia, 
Caelum, 
C'tis, 
Pangaea, 
Asphodel, 
Vanheim, 
Jotunheim, 
Vanarus
Bandar Log
Shinuyama
Ashdod
Uruk, 
Nazca, 
Xibalba
Phlegra
Phaeacia
Ind
Na'Ba
Atlantis
R'lyeh
Pelagia
Oceania
Ys
`.split('\n')

la_nations = 
`
Arcoscephale, Sibylline Guidance
Pythium, Serpent Cult
Lemuria, Soul Gates
Man, Towers of Chelms
Ulm, Black Forest
Marignon, Conquerors of the Sea
Mictlan, Blood and Rain
T'ien Ch'i, Barbarian Kings
Jomon, Human Daimyos
Agartha, Ktonian Dead
Abysia, Blood of Humans
Caelum, Return of the Raptors
C'tis, Desert Tombs
Pangaea, New Era
Midgård, Age of Men
Utgård, Well of Urd
Bogarus, Age of Heroes
Patala, Reign of the Nagas
Gath, Last of the Giants
Ragha, Dual Kingdom
Xibalba, Return of the Zotz
Phlegra, Sleeping Giants
Vaettiheim, Wolf Kin Jarldom
Atlantis, Frozen Sea
R'lyeh, Dreamlands
Erytheia, Kingdom of Two Worlds
`.split('\n')