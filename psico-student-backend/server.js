require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

// Configurações básicas
app.use(cors()); // Permite que seu site Angular acesse este servidor
app.use(express.json()); // Permite que o servidor entenda JSON

// Inicializa o Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// A "rota" que seu site vai chamar
app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'A pergunta é obrigatória.' });
    }

    const prompt = `Você é um assistente especializado em psicologia. Responda à seguinte pergunta de forma clara e concisa para um estudante da área: "${question}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ answer: text });
  } catch (error) {
    console.error("Erro ao chamar a API do Gemini:", error);
    res.status(500).json({ error: 'Ocorreu um erro ao processar sua pergunta.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});