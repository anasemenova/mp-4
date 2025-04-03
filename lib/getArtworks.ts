import {Artwork} from "@/types";
// import mockData from "@/mock.json";

export default async function getArtworks(): Promise<Artwork[]> {
    const key = process.env["ARTWORK_API_KEY"];
    const data = await fetch(`https://api.harvardartmuseums.org/object?apikey=${key}&size=10`)

    //throw an error here
    if (!data.ok) {
        throw new Error("Could not fetch artwork data");
    }

    const json: { records: any[] } = await data.json();

    return json.records.map((item: any) => ({
        title: item.title || "Untitled",
        culture: item.culture || "Unknown",
        dated: item.dated || "Unknown",
    }));

    // return mockData.mockArtworks;
}
