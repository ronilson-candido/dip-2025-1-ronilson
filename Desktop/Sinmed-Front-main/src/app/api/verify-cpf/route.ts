import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { cpf } = await req.json();
    const filePath = path.join(process.cwd(), "cpfiddy.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ exists: false });
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const dados = JSON.parse(fileContent);

    const dadosArray = Array.isArray(dados) ? dados : [dados];

    const cpfExists = dadosArray.some((item) => item.cpf === cpf);

    return NextResponse.json({ exists: cpfExists });
  } catch (error) {
    console.error("Erro ao verificar CPF:", error);
    return NextResponse.json(
      { error: "Erro ao verificar CPF" },
      { status: 500 }
    );
  }
}
