import firebase from "firebase/app";
import "firebase/firestore";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContactFB: async () => {
				try {
					const getContact = firebase.firestore().collection("contacts");
					const response = await getContact.get();
					let array = [];
					response.forEach(contact => {
						array.push({ ...contact.data(), id: contact.id });
					});
					setStore({ contacts: array });
				} catch (e) {
				} finally {
				}
			},

			deleteFB: id => {
				firebase
					.firestore()
					.collection("contacts")
					.doc(id)
					.delete()
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().loadContactFB());
			},

			addContactFB: (name, phone, email, address, id) => {
				firebase
					.firestore()
					.collection("contacts")
					.doc(id)
					.set({
						full_name: name,
						phone: phone,
						email: email,
						address: address
					})
					.catch(error => {
						alert(error);
					})
					.then(() => getActions().loadContactFB());
			}
		}
	};
};

export default getState;
