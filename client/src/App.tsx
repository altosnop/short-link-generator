import React from 'react';

function App() {
	return (
		<div className='container mx-auto'>
			<h1 className='mt-10 text-center text-3xl text-white font-bold tracking-wider'>
				Short Link Generator
			</h1>
			<form className='mt-10 mb-10'>
				<div className='relative'>
					<input
						type='url'
						id='default-search'
						className='block w-full pt-4 pb-4 pl-4 pr-44 text-lg text-gray-900 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 outline-none tracking-wider'
						placeholder='Paste link'
						required
					/>
					<button
						type='submit'
						className='text-lg tracking-wider text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Shorten Link
					</button>
				</div>
			</form>
			<div className='flex items-center justify-between w-full p-4 mb-5 rounded-lg dark:bg-gray-700 text-white tracking-wider'>
				<p>
					https://dev.to/gustavupp/9-common-javascript-interview-questions-you-might-not-know-the-answer-for-3a8g
				</p>
				<a
					href='http://localhost:8080/EUThNk_JI'
					target='_blank'
					rel='noreferrer'
					className=' text-blue-400 font-semibold hover:text-blue-500'
				>
					http://localhost:8080/EUThNk_JI
				</a>
				<button className='px-4 py-2 rounded-lg font-semibold hover:bg-gray-800'>
					Copy
				</button>
			</div>
			<div className='flex items-center justify-between w-full p-4 mb-5 rounded-lg dark:bg-gray-700 text-white tracking-wider'>
				<p>
					https://dev.to/gustavupp/9-common-javascript-interview-questions-you-might-not-know-the-answer-for-3a8g
				</p>
				<a
					href='http://localhost:8080/EUThNk_JI'
					target='_blank'
					rel='noreferrer'
					className=' text-blue-400 font-semibold hover:text-blue-500'
				>
					http://localhost:8080/EUThNk_JI
				</a>
				<button className='px-4 py-2 rounded-lg font-semibold hover:bg-gray-800'>
					Copy
				</button>
			</div>
		</div>
	);
}

export default App;
