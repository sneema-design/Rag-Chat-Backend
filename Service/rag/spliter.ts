import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export async function docsplitters(doc:any) {
    const splitter= new RecursiveCharacterTextSplitter({
        chunkSize:400,
        chunkOverlap:100,
    })
    const chunks= await splitter.splitDocuments(doc);
    return chunks;
}