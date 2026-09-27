// api/facilities.js
export default async function handler(req, res) {
    const serviceKey = "83a0cdb0d15a0217c9299d37524dabf18f3c5f3cb8d4213ce9a6c299cbeda71b";
    const apiUrl = `https://api.odcloud.kr/api/15071029/v1/uddi:7c6a4eaa-179a-469e-bb19-cd39e221190c?serviceKey=${serviceKey}&page=1&perPage=50`;

    try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}