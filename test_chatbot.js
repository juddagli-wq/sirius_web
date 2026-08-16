const fs = require('fs');

// Read the chatbot.js content
let chatbotCode = fs.readFileSync('chatbot.js', 'utf-8');

// Extract generateAIResponse function
const funcMatch = chatbotCode.match(/function generateAIResponse\(query\) \{[\s\S]*?\n    \}/);

if (funcMatch) {
    // Eval the function so we can use it
    eval(funcMatch[0]);

    const testQueries = [
        "tercüme nasıl oluyor",
        "ücret paralı mı",
        "nrw eyaleti kaç ay",
        "birimler neler",
        "fizyoterapist şartları",
        "ergoterapist",
        "telegram grubu",
        "medicare nedir",
        "almanca dil kursu",
        "ev konaklama",
        "iletişim adres",
        "denklik staj",
        "bilinmeyen bir soru"
    ];

    console.log("--- CHATBOT TEST RESULTS ---\n");
    testQueries.forEach(q => {
        console.log(`QUERY: ${q}`);
        console.log(`RESPONSE:\n${generateAIResponse(q)}\n`);
    });
} else {
    console.log("Could not extract generateAIResponse");
}
