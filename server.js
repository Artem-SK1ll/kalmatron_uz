const express = require("express");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ТВОИ ДАННЫЕ
const BOT_TOKEN = "8442134199:AAHXujH4yWse61SrhdyOLZSb_j7zEhn4P_E";
const CHAT_ID = 851201042;

app.post("/send-form", async (req, res) => {
    const { NAME, CONTACT, QUESTION } = req.body;

    const message = `
📩 Новая заявка с сайта
👤 Имя: ${NAME}
📞 Контакты: ${CONTACT}
❓ Вопрос: ${QUESTION}
    `;

    try {
        const tgResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "HTML"
            })
        });

        const result = await tgResponse.json();
        console.log("Ответ Telegram:", result); // 🔥 СМОТРИМ, ЧТО ПИШЕТ TG

        res.json({ ok: true, result });
    } catch (err) {
        console.error("Ошибка:", err);
        res.json({ ok: false, error: err.message });
    }
});

app.listen(3000, () => console.log("Server started on port 3000"));
