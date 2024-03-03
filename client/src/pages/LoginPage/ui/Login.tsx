import React, { useMemo, useRef, useState } from 'react';

const Login = () => {
	const [items, setItems] = useState(['Hi', 'Bye']);
	const [query, setQuery] = useState('');

	const inputRef = useRef<HTMLInputElement>(null);

	const filteredItems = useMemo(() => {
		return items.filter((item) => {
			return item.toLowerCase().includes(query.toLowerCase());
		});
	}, [query, items]);

	const addNewPost = (e: React.ChangeEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const value = inputRef.current.value;

		if (!value) {
			return;
		}

		setItems((prev) => {
			return [...prev, value];
		});

		inputRef.current.value = '';
	};

	return (
		<>
			<h1>LOGIN Page</h1>
			<div>Search</div>
			<div>
				<input
					type='search'
					name=''
					id=''
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<form action='' onSubmit={addNewPost}>
					<label htmlFor=''>New</label>
					<input type='text' name='' id='' ref={inputRef} />
					<button type='submit'>add</button>
				</form>
				<div>
					<h3>Items</h3>
					<ul>
						{filteredItems.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Login;
