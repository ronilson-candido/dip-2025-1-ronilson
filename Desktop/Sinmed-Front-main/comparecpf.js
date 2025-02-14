const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const OUTPUT_PATH = "./cpdiddyf.json";

function saveCpf(cpf) {
  try {
    let cpfs = [];
    if (fs.existsSync(OUTPUT_PATH)) {
      const data = fs.readFileSync(OUTPUT_PATH, "utf8");
      cpfs = JSON.parse(data);
    }

    cpfs.push(cpf);

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(cpfs, null, 2));

    console.log(`CPF ${cpf} salvo com sucesso!`);
  } catch (error) {
    console.error("Erro ao salvar CPF:", error.message);
  }
}
