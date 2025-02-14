const fs = require("fs");
const pdf = require("pdf-parse");

const PDF_PATH = "./filiadosreal.pdf";
const OUTPUT_PATH = "./dados_extraidos.json";

async function extractData() {
  try {
    const dataBuffer = fs.readFileSync(PDF_PATH);
    const data = await pdf(dataBuffer);

    const lines = data.text.split("\n").filter((line) => line.trim());
    const dados = [];

    for (const line of lines) {
      const cleanLine = line.replace(/\s+/g, " ").trim();

      if (cleanLine.startsWith("Página") || cleanLine === "Filiado") {
        continue;
      }

      const match = cleanLine.match(
        /^([A-ZÀ-ÚÇa-zà-úç\s]+?)(\d+)?(\d{3}\.\d{3}\.\d{3}-\d{2}).*$/
      );

      if (match) {
        const [, nome, , cpf] = match;

        dados.push({
          nome: nome.trim(),
          cpf: cpf,
        });
      } else {
        console.log("Linha não processada:", cleanLine);
      }
    }

    if (dados.length === 0) {
      throw new Error(
        "Nenhum dado foi extraído. Verifique a estrutura do PDF."
      );
    }

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(dados, null, 2));

    console.log(
      `Dados extraídos com sucesso! Total de registros: ${dados.length}`
    );
    console.log(`Arquivo salvo em: ${OUTPUT_PATH}`);

    console.log("\nPrimeiros registros extraídos:");
    console.log(dados.slice(0, 3));
  } catch (error) {
    console.error("Erro durante a extração:", error.message);
  }
}

extractData();
