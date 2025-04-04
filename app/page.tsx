
import getArtworks from "@/lib/getArtworks";
import { Artwork } from "@/types";

export default async function Home() {
    let artworks: Artwork[] = [];
    let errorMessage = "";

    try {
        artworks = await getArtworks();
    } catch (error) {
        console.error("Error:", error);
        errorMessage = "Something went wrong with the API. Please try again later";
    }

    const displayArtwork = () => {
        if (errorMessage) {
            return <p className="text-xl-red-400">{errorMessage}</p>;
        }
        if (artworks.length === 0) {
            return <p className="text-xl-red-300">No artworks available.</p>;
        }
        return (
            <ul className="grid gap-7 md:grid-cols-3">
                {artworks.map((art, index) => (
                     <li key={index} className="border p-6">
                         <h3 className="text-xl font-bold">{art.title}</h3>
                         <p className="text-sm text-300">{art.dated}</p>
                         <p className="text-sm text-400">{art.culture}</p>
                     </li>
                 ))}
            </ul>
        );
    };

    return (
         <main className="p-8 max-w-5xl mx-auto text-white">
             <h2 className="text-2xl font-semibold mb-6">Harvard Art Collection</h2>
             {displayArtwork()}
        </main>
    );
}

