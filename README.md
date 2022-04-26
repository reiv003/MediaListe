# Me(dia)Liste - Tema 8

Hovedprosjekt og siste temaoppgave.  

__Brief__:  En nettside hvor man kan logge alle typer medier (film, bøker, m.m.) man har sett/spilt/lest. Tjenesten skal kunne brukes både som sporing for media man fortsatt ser på, og som logg for alt man har sett tidligere. Brukere kan legge inn start/sluttdato (med mulighet for fritt valg, for å legge inn tidligere oppføringer og at disse reflekteres i datovisning), vurdering (type 1-10), og data som kun er aktuell for det gitte mediet for å spore fremdrift (ie. kapitler for bøker, episoder for serier, volum for tegneserier). Brukeren skal kunne få oversikt over alt de har sett i en gitt periode eller kategori, i form av en kalender, grafer e.l. Brukeren skal og få forslag til neste ting å se basert på egen aktivitet/logg, og andre brukeres aktivitet. Brukeren skal kunne eksportere dataen sin til forskjellige filformat.  

__MVP__: En nettside der bruker kan legge inn og spore medieaktiviteter (filmer sett, bøker lest, m.m.) de har gjort eller holder på med. Brukeren skal kunne se sin aktivitet godt visuelt representert basert på tid/dato.   

## Prosjektplan:  

__Sprint 1 (uke 17)__: Planlegging og design (database/GUI), start utvikling  
__Sprint 2 (uke 18)__: Must have/MVP: Implementer enkel loggefunksjonalitet og datovisning. Enkel brukerinnlogging, med loggedata lagret i Sanity for hver bruker.   
__Sprint 3 (uke 19)__: Forbedre logg/datovisning, og fokus på design (med animasjon). Implementer enkle "should have"/"could have"-funksjoner som sortering, visning per kategori/sjanger, anbefalinger   
__Sprint 4 (uke 20)__: Ferdigstill nettsiden (MVP må være oppnådd). Implementer komplisert "should have"/"could have" som fileksport.   
__Presentasjon mandag 23 mai (uke 21)__  
  
## Krav til oppgaven:  
  
__Interaktivitet__: Hver bruker logger sin egen medieaktivitet med å trykke i GUI for å legge til oppføringer, som allerede er tilgjengelig og kommer fra API. Ev. og mulighet for at bruker kan legge til data i API-et (bidra til databasen).   
__Animasjon__: Hover-effekter på tabell-headers og kalender/datovisning. "Loading"-animasjon.   
__Rammeverk__: Kalender/graf-bibliotek. Fileksport?  
__API__: Data om filmer/serier/bøker etc, må se hva som er tilgjengelig eller ev. lage selv  
__Database__: brukerdata (serier sett, vurderinger, osv) og innhold på statiske sider (type "Om oss" og alt innhold som tooltips, beskrivelser av funksjonalitet osv.)  
  
__Universell utforming__: felt for å velge og legge inn oppføringer må kunne navigeres med tastatur, ellers andre hensyn ivaretatt  
__Responsivitet__: Datovisning må være lesbar på små skjermer, ev. lage alternativ visning. Generell responsivitet  
