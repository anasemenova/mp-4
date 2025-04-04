import {Artwork} from "@/types";
// import mockData from "@/mock.json";

export default async function getArtworks(): Promise<Artwork[]> {
    const key = process.env["ARTWORK_API_KEY"];
    const data = await fetch(`https://api.harvardartmuseums.org/object?apikey=${key}&size=21`)

    //throw an error here?

    const output: { records: Artwork[] } = await data.json();

    return output.records.map((item: Artwork) => ({
        title: item.title || "Untitled",
        culture: item.culture || "Unknown",
        dated: item.dated || "Unknown",
    }));

    // return mockData.mockArtworks;
}
