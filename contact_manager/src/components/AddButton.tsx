
//object for name and number
interface Props {
	name: string;
	number: number;
	onClick: () => void;
}

function AddButton(props: Props) {


	return (
		<>
			<button className='btn btn-primary border border-dark rounded mx-1' onClick={props.onClick}>Add</button>
		</>
	);
}

export default AddButton;