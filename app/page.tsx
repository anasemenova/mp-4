import getArtworks from "@/lib/getArtworks";
import {Artwork} from "@/types";

export default async function Home() {
    const artworks: Artwork[] = await getArtworks();



    return (
        <main className="p-8 max-w-5xl mx-auto text-white">
            <h2 className="text-2xl font-semibold mb-6">Harvard Art Collection</h2>
            <ul className="grid gap-6 md:grid-cols-2">
                {artworks.map((art, index) => (
                    <li key={index} className="900 border border-gray-700 p-6 rounded">
                        <h3 className="text-xl font-semibold">{art.title}</h3>
                        <p className="text-sm text-gray-300">{art.dated}</p>
                        <p className="text-sm text-gray-400">{art.culture}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}
