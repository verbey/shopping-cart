import { useState, ChangeEvent, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import ValidationSuccessPopUp from './ValidationSuccessPopUp';

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
		<div>
			<h2>Credit Card Information</h2>
			<div>
				<p>
					This is a fake form. Do not submit any real credit card
					information.
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='cardNumber'>Card Number</label>
					<input
						type='text'
						id='cardNumber'
						name='cardNumber'
						placeholder='1234 5678 9012 3456'
						value={formData.cardNumber}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='cvv'>CVV</label>
					<input
						type='text'
						id='cvv'
						name='cvv'
						placeholder='123'
						value={formData.cvv}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='expirationDate'>Expiration Date</label>
					<input
						type='text'
						id='expirationDate'
						name='expirationDate'
						placeholder='MM/YY'
						value={formData.expirationDate}
						onChange={handleInputChange}
					/>
				</div>
				{error && <p className='errorText'>{error}</p>}
				<button type='submit'>Submit</button>
			</form>
			{redirectState && <Navigate to='/cart' />}
			{formValidationStatus && <ValidationSuccessPopUp />}
		</div>
	);
}

export default Checkout;
