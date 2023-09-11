import { useState, useEffect } from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer'
import '../../app/globals.css'
import data from '../../../json/data'

export default function CaseStudy() {
    const [jsonData, setJsonData] = useState([]);

    // State to hold the found item
    const [foundItem, setFoundItem] = useState(null);

    // State to hold the url slug
    const [lastUrlPart, setLastUrlPart] = useState(null);

    useEffect(() => {
        const url = new URL(window.location.href);
        const pathParts = url.pathname.split('/').filter(part => part !== ''); // Remove empty parts
        const lastPart = pathParts[pathParts.length - 1];
        setLastUrlPart(lastPart);
    }, []);

    // Known slug to search for
    const knownSlug = lastUrlPart; // Change this to your desired slug

    const [showCtaSection, setShowCtaSection] = useState(true);

    // Function to toggle the visibility of the conditional HTML part
    const toggleCtaSection = () => {
        setShowCtaSection(!showCtaSection);
    };

    useEffect(() => {
        setJsonData(data.caseItems);
    }, []);

    useEffect(() => {
        const item = jsonData.find(item => item.slug === knownSlug);
        if (item) {
            setFoundItem(item);
        }
    }, [jsonData, knownSlug]);

    return (
        <>
            <Header />
            <div>
                {foundItem ? (
                    <div>
                        <p>Title: {foundItem.title}</p>
                        <p>Description: {foundItem.description}</p>
                    </div>
                ) : (
                    <p>No item with slug '{knownSlug}' found.</p>
                )}
            </div>
            <Footer showCtaSection={showCtaSection} />
        </>
    );
}

//   return (
//     <div>
//       {foundItem ? (
//         <div>
//           <h1>Found item:</h1>
//           <p>Name: {foundItem.name}</p>
//           <p>Description: {foundItem.description}</p>
//         </div>
//       ) : (
//         <p>No item with slug '{knownSlug}' found.</p>
//       )}
//     </div>
//   );
// };

// export default YourComponent;


