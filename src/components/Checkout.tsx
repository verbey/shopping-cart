import { useState, ChangeEvent, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import ValidationSuccessPopUp from './ValidationSuccessPopUp';

import styles from '../styles/checkout.module.css';

interface FormData {
	cardNumber: string;
	cvv: string;
	expirationDate: string;
}

function Checkout() {
	const [formData, setFormData] = useState<FormData>({
		cardNumber: '',
		cvv: '',
		expirationDate: '',
	});
	const [error, setError] = useState<string>('');
	const [redirectState, setRedirectState] = useState<boolean>(false);
	const [formValidationStatus, setFormValidationStatus] =
		useState<boolean>(false);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validateForm = (): boolean => {
		if (
			formData.cardNumber.length !== 16 ||
			!/^\d+$/.test(formData.cardNumber)
		) {
			setError('Invalid card number. Must be 16 digits.');
			return false;
		}
		if (formData.cvv.length !== 3 || !/^\d+$/.test(formData.cvv)) {
			setError('Invalid CVV. Must be 3 digits.');
			return false;
		}
		if (!/^\d{2}\/\d{2}$/.test(formData.expirationDate)) {
			setError('Invalid expiration date. Use MM/YY format.');
			return false;
		}
		setError('');
		return true;
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (validateForm()) {
			setFormValidationStatus(true);

			setTimeout(() => {
				setRedirectState(true);
			}, 2000);
		}
	};

	return (
		<div className={styles.checkoutContainer}>
			<h2 className={styles.header}>Credit Card Information</h2>
			<div className={styles.disclaimer}>
				<p className={styles.text}>
					This is a fake form. Do not submit any real credit card
					information.
				</p>
			</div>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.inputContainer}>
					<label htmlFor='cardNumber' className={styles.label}>
						Card Number
					</label>
					<input
						type='text'
						id='cardNumber'
						name='cardNumber'
						placeholder='1234 5678 9012 3456'
						value={formData.cardNumber}
						onChange={handleInputChange}
						className={styles.input}
					/>
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor='cvv' className={styles.label}>
						CVV
					</label>
					<input
						type='text'
						id='cvv'
						name='cvv'
						placeholder='123'
						value={formData.cvv}
						onChange={handleInputChange}
						className={styles.input}
					/>
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor='expirationDate' className={styles.label}>
						Expiration Date
					</label>
					<input
						type='text'
						id='expirationDate'
						name='expirationDate'
						placeholder='MM/YY'
						value={formData.expirationDate}
						onChange={handleInputChange}
						className={styles.input}
					/>
				</div>
				{error && <p className={styles.errorText}>{error}</p>}
				<button type='submit' className={styles.submitButton}>
					Submit
				</button>
			</form>
			{redirectState && <Navigate to='/cart' />}
			{formValidationStatus && <ValidationSuccessPopUp />}
		</div>
	);
}

export default Checkout;
