## Viikon 2 tehtävä

Jekyll-sivuston automatisointi GitHub Actions -toimintojen avulla on tehokas tapa toteuttaa jatkuva integraatio ja jatkuva toimitus (CI/CD). GitHub Actions mahdollistaa automatisoidun työnkulun, jossa sivusto rakennetaan ja julkaistaan aina, kun uusi koodi yhdistetään main-haaraan. Tämä voidaan toteuttaa luomalla .yaml-tiedosto.

CI/CD-putkiston rakentamiseen voidaan hyödyntää työkaluja (esim. Docker), jolla luodaan toistettavat kehitysympäristöt, ja testaustyökaluja (esim. HTMLProofer), joka varmistaa, ettei sivustolla ole rikkinäisiä linkkejä tai muita virheitä. Näiden lisäksi voidaan käyttää esimerkiksi GitHub Pages -julkaisualustaa tai muuta web-isännöintiä.

Automaatioprosessissa ensimmäinen vaihe on riippuvuuksien asennus. Tämän jälkeen sivusto rakennetaan ja testataan, minkä jälkeen se voidaan julkaista valitulle alustalle. GitHub Actions mahdollistaa myös testikattavuusraporttien luomisen ja palautteiden keräämisen, jolloin kehitysprosessi nopeutuu ja julkaisulaatu paranee.

[Takaisin](index.md)
