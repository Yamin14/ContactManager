
interface Props {
	onChange: (name: string) => void;
}

function NewContactEnter(props: Props) {
	return (
		<>
			<input type="text" placeholder="Enter contact name..." className="enter" onChange={(e) => props.onChange(e.target.value)}/>
		</>
	);
}

export default NewContactEnter;