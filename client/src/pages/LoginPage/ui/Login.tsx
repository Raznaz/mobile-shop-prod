import React, { useRef, useState } from 'react';

const Login = () => {
	const [items, setItems] = useState(['Hi', 'Bye']);
	const [post, setPost] = useState([]);
	const [text, setText] = useState('');
	const [filterText, setFilterText] = useState('');
	const [filterPost, setFilterPost] = useState([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleInp = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setText(e.target.value);
	};

	const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		console.log('🟢', e.target.value);
	};

	const handleRadioBtn = (e: React.ChangeEvent<HTMLInputElement>) => {};

	const addNewPost = (e: React.ChangeEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const value = inputRef.current.value;

		if (!value) {
			return;
		}

		setItems((prev) => {
			return [...prev, value];
		});

		setFilterPost((prev) => {
			return [...prev, value];
		});

		inputRef.current.value = '';
	};

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFilterPost(items.filter((item) => item.toLowerCase().includes(value.toLowerCase())));
	};

	return (
		<>
			<h1>LOGIN Page</h1>
			<div>Search</div>
			<div>
				<input type='search' name='' id='' onChange={handleFilter} />
				<form action='' onSubmit={addNewPost}>
					<label htmlFor=''>New</label>
					<input type='text' name='' id='' ref={inputRef} />
					<button type='submit'>add</button>
				</form>
				<div>
					<h3>Items</h3>
					<ul>{filterPost && filterPost.map((item) => <li>{item}</li>)}</ul>
				</div>
			</div>

			{/* <div>
				<input type='text' id='post' value={text} onChange={handleInp} />
				<button role='button' onClick={addNewPost}>
					Add
				</button>
				<hr />
				<p>Filter</p>
				<input type='text' id='search' value={filterText} onChange={handleFilter} />
			</div>
			<div>
				<form action='' onSubmit={addNewPost}>
					<div></div>

					<div>
						<input type='checkbox' name='' id='' onChange={handleCheckBox} />
					</div>
					<div>
						<input type='radio' name='1' id='1' onChange={handleRadioBtn} />
						<input type='radio' name='2' id='1' onChange={handleRadioBtn} />
					</div>
					<button role='submit'>Push</button>
				</form>
				<div>
					<hr />
					<h2>Result</h2>
					<h3>
						{post &&
							post.map((item) => {
								return <p>{item}</p>;
							})}
					</h3>
				</div>
			</div> */}
		</>
	);
};

export default Login;
