const form = document.getElementById("bquadro-form-e0a3e4efa8ba830592da205f8304f3021973edac");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Собираем данные формы
    const data = Object.fromEntries(new FormData(form));

    // Проверяем согласие
    if (!data.UCONSENT) {
        alert("Пожалуйста, дайте согласие на обработку данных");
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        if (result.status === "ok") {
            alert("Сообщение отправлено!");
            form.reset();
        } else {
            alert("Ошибка при отправке: " + JSON.stringify(result));
        }
    } catch (err) {
        alert("Ошибка сервера: " + err.message);
    }
});
