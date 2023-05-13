const IntroductionImage = () => {
	return (
		<div className="w-full xl:w-3/5 p-12 overflow-hidden">
			<img
				className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
				src="terminal.svg"
			/>
		</div>
	);
};

export default IntroductionImage;
