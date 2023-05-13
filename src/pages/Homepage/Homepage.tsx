import './Homepage.css';
import ContactForm from '../../widgets/ContactForm/ContactForm';
import IntroductionImage from '../../widgets/IntroductionImage/IntroductionImage';
import DownloadLink from '../../widgets/DownloadLink/DownloadLink';

const Homepage = () => {
	return (
		<div className="homepage">
			<ContactForm />
			<IntroductionImage />
			<DownloadLink />
		</div>
	);
};

export default Homepage;
