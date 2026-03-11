import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

// import { loadDocs } from "./loadDoc.ts";
// import { docsplitters } from "./spliter.ts";
// import storeVectors from "./vectorDb.ts";
// import { embeddings } from "./embedding.ts";
// import retrival from "./retrival.ts";
// import genrator from "./generate.ts";
import express from "express"
import chatRoutes from "./routes/chatRoutes.ts";
const app= express() 
app.use(cors());
app.use(express.json())
app.use("/ask",chatRoutes);

app.listen(4000,()=>{
   console.log("server is running on Port 4000");
})
// async function main() {
//   console.log("Loading doc");
//   const doc = await loadDocs();
//   console.log("Docs loaded:", doc.length);
//   console.log("creating chunks");
//   const chunks = await docsplitters(doc);
//   console.log("Chunks created:", chunks.length);
//   console.log("storing in pinecone db");
//   await storeVectors(chunks);
// }
// async function test() {
//   const query = "What is smart city";
//   const contexts = await retrival(query);
//   const answer = await genrator(query, contexts);
//   console.log("answer:", answer);
// }
// test();
