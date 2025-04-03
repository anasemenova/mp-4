import {Artwork} from "@/types";
// import mockData from "@/mock.json";

export default async function getArtworks(): Promise<Artwork[]> {
    const key = process.env["ARTWORK_API_KEY"];
    const data = await fetch(`https://api.harvardartmuseums.org/object?apikey=${key}&size=10`)

    //throw an error here


    const actual = await data.json();

    return actual.records.map((item:object) => ({
        title: item.title || "Untitled",
        culture: item.culture || "Unknown",
        dated: item.dated || "Unknown",
    }));

    // return mockData.mockArtworks;
}
