import axios from 'axios';
import cls from './PhoneBook.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState, ChangeEvent, useRef, useCallback, useMemo } from 'react';
import { fetchPhones } from 'app/provider/api/api';

interface PhoneBookProps {
	className?: string;
}

const API_URL = 'http://localhost:5000/api/phones';

const debounce = (func: Function, time: number) => {
	let timerId: ReturnType<typeof setTimeout>;

	return (...args: any[]) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			func(...args);
		}, time);
	};
};

export const PhoneBook = ({ className }: PhoneBookProps) => {
	const [phones, setPhones] = useState([]);
	const [query, setQuery] = useState('');

	const fetchPhoneBookDate = useCallback(async () => {
		try {
			const { data } = await axios.get(`${API_URL}?name=${query}`);

			setPhones(data);
		} catch (error) {
			throw new Error(error.message);
		}
	}, [query]);

	useEffect(() => {
		fetchPhoneBookDate();
	}, [fetchPhoneBookDate, query]);

	return (
		<div className={classNames(cls.phone_book, {}, [className])}>
			<h1 className={cls.phone_book__title}>Phone Book ☎️</h1>
			<div>
				<div>
					<div className={cls.filter}>
						<h2 className={cls.filter__title}>Filter</h2>
						<div>
							<input
								className={cls.search}
								value={query}
								type='search'
								onChange={(e) => setQuery(e.target.value)}
								placeholder='Search...'
							/>
						</div>
					</div>
					<ul>
						{phones.map((phone) => {
							return (
								<li key={phone._id}>
									{phone.firstName} {phone.lastName}
									<div>
										{phone.phones.otherNumber.map((num: any) => {
											return <p key={num}>{num}</p>;
										})}
									</div>
									<hr />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
