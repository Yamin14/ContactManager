
interface Props {
	onChange: (num: number) => void;
}

function NewNumberEnter(props: Props) {
	return (
		<>
			<input type="number" placeholder="Enter number..." className="enter" onChange={(e) => props.onChange(e.target.value)}/>
		</>
	);
}

export default NewNumberEnter;