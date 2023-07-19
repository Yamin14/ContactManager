
interface Props {
	onChange: (sth) => void;
}

function SearchBar(props: Props) {
	return (
		<>
			<input type="text" placeholder="Search..." className="searchTerm" onChange={(e) => props.onChange(e.target.value)}/>
		</>
	);
}

export default SearchBar;