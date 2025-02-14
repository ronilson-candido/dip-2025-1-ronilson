// app/api/save-cpf/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { cpf } = await req.json();
    const filePath = path.join(process.cwd(), "cpfiddy.json");

    const novoDado = {
      cpf,
      dataRegistro: new Date().toISOString(),
    };

    let dados = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      try {
        dados = JSON.parse(fileContent);

        if (!Array.isArray(dados)) {
          dados = [dados];
        }
      } catch (error) {
        console.error("Erro ao parsear JSON existente:", error);
        dados = [];
      }
    }

    const cpfJaExiste = dados.some((item) => item.cpf === cpf);

    if (!cpfJaExiste) {
      dados.push(novoDado);

      fs.writeFileSync(filePath, JSON.stringify(dados, null, 2));

      return NextResponse.json({
        success: true,
        message: "CPF adicionado com sucesso",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "CPF já existe no arquivo",
      });
    }
  } catch (error) {
    console.error("Erro ao salvar CPF:", error);
    return NextResponse.json({ error: "Erro ao salvar CPF" }, { status: 500 });
  }
}
