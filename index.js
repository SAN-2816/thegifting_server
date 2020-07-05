import app from "./app";

const PORT = 5000;

const handleListening = () => console.log(`Listening on:` + PORT);

app.listen(PORT, handleListening);
