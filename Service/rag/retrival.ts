import { Pinecone } from "@pinecone-database/pinecone";
import { embeddings } from "./embedding.ts";


export default async function retrival(query:string) {
    const pc= new Pinecone({
        apiKey:process.env.PINECONE_API_KEY!
    })
    const index=pc.index(process.env.PINECONE_INDEX_NAME!)
    console.log("embedding the query");
    const queryVector=await embeddings.embedQuery(query);
    console.log("searching PineCone");
    const results= await index.query({
        vector:queryVector,
        includeMetadata:true,
        topK:3
    })
    const contexts = results.matches?.map(
    (match) => match.metadata?.text
  );
  return contexts
}