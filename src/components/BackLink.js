import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa6';

const BackLink = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back(); // This function takes you to the previous page in the browser's history.
    };

    return (
        <>
            <div className="container mx-auto">
                <button className="flex items-center gap-x-2" onClick={handleGoBack}>
                    <FaArrowLeft />
                    Go Back
                </button>
            </div>
        </>
    );
};

export default BackLink;