
import del_icon from './icons/del_icon.jpg';

interface Props {
	contacts: string[];
	contactNums: number[];
	searchedWord: string;
	onDel: (index) => void;
}

function ContactsList(props: Props) {

	//contacts list
	const contacts = props.contacts;
	const nums = props.contactNums;
	let showContacts;
	let searched = props.searchedWord;

	let contact = [];

	if (contacts.length == nums.length) {
		for (let i = 0; i < contacts.length; i++) {
			contact.push(contacts[i] + " : " + nums[i]);
		}
	} else {
		let min = Math.min(contacts.length, nums.length);
		for (let i = 0; i < min; i++) {
			contact.push(contacts[i] + " : " + nums[i]);
		}
	}

	//searched contacts
	if (searched != "") {
		showContacts = contact.filter(i => i.includes(searched));
	} else {
		showContacts = contact;
	}

	return (
		<>
			<ul className="list-group text-light m-3">
				{showContacts.map((unit, index) => (
					<li
						key={index}
						className="list-group-item bg-dark text-light"
					>
						{unit} <img src={del_icon} className="d-block" height="20rem" onClick={() => props.onDel(index)}/>
					</li>
				))}
			</ul>

		</>
	);
}

export default ContactsList;