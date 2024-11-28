    import React from 'react';

    export default function App () {
    React.useEffect(() => {
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://pilvipalvelut-matomo.2.rahtiapp.fi/js/container_W1W5ebRp_dev_e55fab0d44134256d0633ac8.js'; s.parentNode.insertBefore(g,s);
    }, [])

    return (
        <div>
            <h1>Hello World</h1>
            <p>Analyytiikkaa voi hyödyntää verkkosivustolla keräämällä tietoa käyttäjien toiminnasta, kuten hakusanoista ja sivulla vietetystä ajasta.</p> 
            <p>Harjoitustehtävässä analyytiikan avulla voisi seurata, kuinka usein tiettyjä hakusanoja haetaan, mitä toimintoja klikataan eniten ja mitkä hakusanat tuottavat osumia.</p> 
            <p>Näiden tietojen avulla voidaan optimoida käyttäjäkokemusta. Lisäksi analytiikka auttaa tunnistamaan teknisiä pullonkauloja ja kehittämään sivuston suorituskykyä.</p>
        </div>
    )
   }
