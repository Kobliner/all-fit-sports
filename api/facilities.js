// api/facilities.js
export default async function handler(req, res) {
    const serviceKey = "83a0cdb0d15a0217c9299d37524dabf18f3c5f3cb8d4213ce9a6c299cbeda71b";
    
    // 대한장애인체육회_장애인전용체육시설_20221023 데이터 엔드포인트
    const apiUrl = `https://api.odcloud.kr/api/15071029/v1/uddi:7c6a4eaa-179a-469e-bb19-cd39e221190c?serviceKey=${serviceKey}&page=1&perPage=100`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}