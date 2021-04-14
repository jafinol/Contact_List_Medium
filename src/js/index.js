//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
//import your own components
import Layout from "./layout";

var firebaseConfig = {
	apiKey: "AIzaSyBFVrb72f5p3GA2viWmxT0jgU3HsApHUxY",
	authDomain: "mdc-auth.firebaseapp.com",
	projectId: "mdc-auth",
	storageBucket: "mdc-auth.appspot.com",
	messagingSenderId: "1059133818789",
	appId: "1:1059133818789:web:86503241e8bcacbb634a4c",
	measurementId: "G-DJFHBFQ1BD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
