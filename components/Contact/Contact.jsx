import React from 'react';
import form from '../../styles/Form.module.scss';
import button from '../../styles/Button.module.scss';
import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => (
	<div class='min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8'>
		<div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
			<div class='bg-white py-8 px-6 border-2 border-buttonblue shadow-2 rounded-lg sm:px-10'>
				<form
					name='contact'
					method='POST'
					data-netlify='true'
					netlify-honeypot='bot-field'
					class='mb-0 space-y-6'
					action='#'
				>
					<input type='hidden' name='contact' value='contact' />
					<div>
						<label for='email' class='block'>
							Email address
						</label>
						<div class='mt-1'>
							<input
								id='email'
								name='email'
								type='email'
								autocomplete='email'
								required
								class='w-full border-2 border-buttonblue px-3 py-2 rounded-lg shadow-sm 
								bg-transparent bg-red-500
								focus:outline-none focus:border-buttondark focus:ring focus:ring-buttonblue bg-inputbackground'
							/>
						</div>
					</div>

					<div>
						<label for='service-required' class=''>
							Service required
						</label>
						<div class='mt-1'>
							<select
								name='Service-required'
								id='Service-required'
								class='appearance-none w-full border-2 border-buttonblue px-3 py-2 rounded-lg shadow-sm
								bg-transparent
								focus:outline-none focus:border-buttondark focus:ring focus:ring-buttonblue bg-inputbackground'
							>
								<option value=''>Please select</option>
								<option value='Full House Cleaning'>Full House Clean</option>
								<option value='Oven Clean'>Oven Clean</option>
								<option value='Carpet Clean'>Carpet Cleaning</option>
								<option value='Something else'>Something Else</option>
							</select>
						</div>
					</div>

					<div class='flex items-center'>
						<input
							id='terms-and-privacy'
							name='terms-and-privacy'
							type='checkbox'
							class=''
						/>
						<label
							for='terms-and-privacy'
							class='ml-2 block text-sm text-gray-900'
						>
							I agree to the
							<a href='#' class='text-indigo-600 hover:text-indigo-500'>
								Terms
							</a>
							and
							<a href='#' class='text-indigo-600 hover:text-indigo-500'>
								Privacy Policy
							</a>
							.
						</label>
					</div>

					<div>
						<button
							type='submit'
							class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-buttonblue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	// 	<form
	// 		name='contact'
	// 		method='POST'
	// 		data-netlify='true'
	// 		netlify-honeypot='bot-field'
	// 	>
	// 		<input type='hidden' name='form-name' value='contact' />
	// 		<div class='flex'>
	// 			<div class='w-1/2'>
	// 				<p>Some text</p>
	// 			</div>
	// 			<div class='w-1/2'>
	// 				<p>More text</p>
	// 			</div>
	// 		</div>
	// 	</form>
	// </div>
);

export default ContactPage;
