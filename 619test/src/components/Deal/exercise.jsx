import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

const citiesRef = collection(db, "cities");

await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

    await Promise.all([
        setDoc(doc(citiesRef, 'SF', 'landmarks'), {
            name: 'Golden Gate Bridge',
            type: 'bridge'
        }),
        setDoc(doc(citiesRef, 'SF', 'landmarks'), {
            name: 'Legion of Honor',
            type: 'museum'
        }),
        setDoc(doc(citiesRef, 'LA', 'landmarks'), {
            name: 'Griffith Park',
            type: 'park'
        }),
        setDoc(doc(citiesRef, 'LA', 'landmarks'), {
            name: 'The Getty',
            type: 'museum'
        }),
        setDoc(doc(citiesRef, 'DC', 'landmarks'), {
            name: 'Lincoln Memorial',
            type: 'memorial'
        }),
        setDoc(doc(citiesRef, 'DC', 'landmarks'), {
            name: 'National Air and Space Museum',
            type: 'museum'
        }),
        setDoc(doc(citiesRef, 'TOK', 'landmarks'), {
            name: 'Ueno Park',
            type: 'park'
        }),
        setDoc(doc(citiesRef, 'TOK', 'landmarks'), {
            name: 'National Museum of Nature and Science',
            type: 'museum'
        }),
        setDoc(doc(citiesRef, 'BJ', 'landmarks'), {
            name: 'Jingshan Park',
            type: 'park'
        }),
        setDoc(doc(citiesRef, 'BJ', 'landmarks'), {
            name: 'Beijing Ancient Observatory',
            type: 'museum'
        })
    ]);ss