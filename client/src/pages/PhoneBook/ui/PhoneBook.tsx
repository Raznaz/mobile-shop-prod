import axios from 'axios';
import cls from './PhoneBook.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';

interface PhoneBookProps {
	className?: string;
}

export const PhoneBook = ({ className }: PhoneBookProps) => {
	const [phones, setPhones] = useState([]);

	const href = 'http://localhost:5000/api/phones/';

	const fetchPhoneBookDate = async () => {
		try {
			const { data } = await axios.get(href);

			setPhones(data);

			console.log('🔵result ', data);
		} catch (error) {
			console.log('🔴error ', error);
		}
	};

	useEffect(() => {
		fetchPhoneBookDate();
	}, []);

	return (
		<div className={classNames(cls.PhoneBook, {}, [className])}>
			<h1>Phone Book ☎️</h1>
			<div>
				<div>
					<ul>
						{!!phones.length &&
							phones.map((phone) => {
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
