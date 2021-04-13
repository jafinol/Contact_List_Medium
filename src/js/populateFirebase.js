const firebase = require("firebase");
const fetch = require("node-fetch")
require("firebase/firestore");

const url = "https://assets.breatheco.de/apis/fake/contact/";
let contacts = [
    {
        userId: "xToZHeto3dRYiK7iG7UcC5BbHrx1",
        full_name: 'Joe Doe',
        email: 'joe@gmail.com',
        phone: '5105550000',
        address: 'Miami',

    },
    {
        userId: "xToZHeto3dRYiK7iG7UcC5BbHrx1",
        full_name: 'John Smith',
        email: 'john@gmail.com',
        phone: '555-555-5555',
        address: 'San Francisco',

    },
    {
        userId: "xToZHeto3dRYiK7iG7UcC5BbHrx1",
        full_name: 'Mary Smith',
        email: 'mary@gmail.com',
        phone: '1213435',
        address: 'New York',

    }
]
var firebaseConfig = {
    apiKey: "AIzaSyBoCa3Y2Ni5fk_XWvXMIvVzyCk_cdHlkpE",
    authDomain: "loginandauth-ee757.firebaseapp.com",
    projectId: "loginandauth-ee757",
    storageBucket: "loginandauth-ee757.appspot.com",
    messagingSenderId: "838369797083",
    appId: "1:838369797083:web:a6cb1e40da6bb2614c3dfe",
    measurementId: "G-2YW1DQKZ3C"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function populateCollection(collectionName, items) {

    return Promise.all(
        items && items.map((item) => {
            const { id, ...data } = item;
            return db.collection(collectionName).doc(id).set(data);
        })
    );
}

const getContacts = () => {
    fetch(url + "agenda/downtown_xii")
        .then(response => response.json()).then((contacts) => {
            Promise.all([
                populateCollection("newContacts", contacts),

            ])
                .then(() => {
                    console.log("Done!");
                    process.exit(0);
                })
                .catch((err) => {
                    console.log(err);
                })
        })

}
getContacts()







