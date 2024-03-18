import axios from 'axios';
import cls from './PhoneBook.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState, ChangeEvent } from 'react';
import { fetchPhones } from 'app/provider/api/api';

interface PhoneBookProps {
	className?: string;
}

interface IPhoneBook {
	firstName: string;
	lastName: string;
}

type InputEvent = ChangeEvent<HTMLInputElement>;

export const PhoneBook = ({ className }: PhoneBookProps) => {
	const [phones, setPhones] = useState([]);
	const [filteredPhones, setFilteredPhones] = useState([]);

	const API_URL = 'http://localhost:5000/api/phones';

	const fetchPhoneBookDate = async () => {
		try {
			const { data } = await fetchPhones();

			const myPhones: IPhoneBook = data;

			setPhones(data);
			setFilteredPhones(data);
		} catch (error) {
			throw new Error(error.message);
		}
	};

	// const filterList = async (event: any) => {
	// const { data } = await axios.get(`${API_URL}?query=${event.target.value}`);
	// };

	// const sortList = () => {
	// return {};
	// };

	const filterList = async (event: InputEvent) => {
		console.log('🟡 event', event.target.value);
		const filteredData = phones.filter((phone) => {
			if (
				phone.firstName.toLowerCase().includes(event.target.value.toLocaleLowerCase()) ||
				phone.lastName.toLowerCase().includes(event.target.value.toLocaleLowerCase())
			) {
				return phone;
			}
			return false;
		});

		console.log('🟢filteredData ', filteredData);
		setFilteredPhones(filteredData);
	};

	useEffect(() => {
		fetchPhoneBookDate();
	}, []);

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
								type='search'
								onChange={filterList}
								placeholder='Search...'
							/>
						</div>
					</div>
					<ul>
						{!!filteredPhones.length &&
							filteredPhones.map((phone) => {
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
