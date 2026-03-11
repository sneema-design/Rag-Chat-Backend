import { getAnswer } from "../Service/chatService.ts";

export const get_Answer = async (req, res) => {
    try {
        const { query } = req.body;

        if (!query || query.trim().length === 0) {
            return res.status(400).json({ message: "Please type the query" });
        }

        const answer = await getAnswer(query);
        res.status(200).json({ answer });
    } catch (error: any) {
        console.error("Error in get_Answer:", error);
        res.status(500).json({ message: error.message });
    }
};