import React from 'react';

import button from '../../styles/Button.module.scss';
import { Container, Row, Col } from 'reactstrap';

const ContactPage = () => (
	<div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8'>
		<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
			<div className='bg-white py-8 px-6 border-2 border-buttonblue shadow-2 rounded-lg sm:px-10'>
				<form
					name='contact'
					method='POST'
					data-netlify='true'
					netlify-honeypot='bot-field'
					className='mb-0 space-y-6'
					action='#'
					aria-label='Contact Form'
				>
					<input type='hidden' name='contact' value='contact' />
					<div>
						<label name='email' className='block'>
							Email address
						</label>
						<div className='mt-1'>
							<input
								id='email'
								name='email'
								type='email'
								required
								className='w-full border-2 border-buttonblue px-3 py-2 rounded-lg shadow-sm 
								bg-transparent bg-red-500
								focus:outline-none focus:border-buttondark focus:ring focus:ring-buttonblue bg-inputbackground'
								aria-label='Input your email'
							/>
						</div>
					</div>

					<div>
						<label name='service-required' className=''>
							Service required
						</label>
						<div className='mt-1'>
							<select
								name='Service-required'
								id='Service-required'
								className='appearance-none w-full border-2 border-buttonblue px-3 py-2 rounded-lg shadow-sm
								bg-transparent
								focus:outline-none focus:border-buttondark focus:ring focus:ring-buttonblue bg-inputbackground'
								aria-label='Required Services'
							>
								<option value='' hidden='hidden' aria-label='Please Select'>
									Please select
								</option>
								<option
									value='Full House Cleaning'
									aria-label='Full House Cleaning'
								>
									Full House Clean
								</option>
								<option value='Oven Clean' aria-label='Oven Cleaning'>
									Oven Clean
								</option>
								<option value='Carpet Clean' aria-label='Carpet Cleaning'>
									Carpet Cleaning
								</option>
								<option value='Something else' aria-label='Something Else'>
									Something Else
								</option>
							</select>
						</div>
					</div>

					<div className='flex items-center'>
						<input
							id='terms-and-privacy'
							name='terms-and-privacy'
							type='checkbox'
							aria-label='terms and privacy'
							className=''
						/>
						<label
							name='terms-and-privacy'
							className='ml-2 block text-sm text-gray-900'
						>
							I agree to the
							<a href='#' className='text-indigo-600 hover:text-indigo-500'>
								Terms
							</a>
							and
							<a href='#' className='text-indigo-600 hover:text-indigo-500'>
								Privacy Policy
							</a>
							.
						</label>
					</div>

					<div>
						<button
							type='submit'
							className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-buttonblue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							aria-label='Submit Button'
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	// 	<namem
	// 		name='contact'
	// 		method='POST'
	// 		data-netlify='true'
	// 		netlify-honeypot='bot-field'
	// 	>
	// 		<input type='hidden' name='namem-name' value='contact' />
	// 		<div className='flex'>
	// 			<div className='w-1/2'>
	// 				<p>Some text</p>
	// 			</div>
	// 			<div className='w-1/2'>
	// 				<p>More text</p>
	// 			</div>
	// 		</div>
	// 	</namem>
	// </div>
);

export default ContactPage;
