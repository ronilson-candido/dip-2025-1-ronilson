import AdminLayout from "@/components/UI/Admin/AdminLayout";
import { Button } from "@/components/UI/button";
import { DataTable } from "./data-table";
import { columns, User } from "./columns";

async function getUsersData(): Promise<User[]> {
  return [
    {
      id: "234asdf",
      name: "Abdoral Gomes da Silva",
      situation: "Filiado",
      cpf: "062.483.773-40",
      crm: "2342",
    },
    {
      id: "13jd7758df",
      name: "Iarley Balreira",
      situation: "Filiado",
      cpf: "293.223.222-42",
      crm: "2345",
    },
    {
      id: "656mdj1df",
      name: "Milton de Moraes",
      situation: "Filiado",
      cpf: "275.423.555-78",
      crm: "3333",
    },
    {
      id: "2323dfdf",
      name: "Mariáh Lins",
      situation: "Filiado",
      cpf: "062.483.773-40",
      crm: "2342",
    },
    {
      id: "23dd55hh",
      name: "Junior Mesquita",
      situation: "Filiado",
      cpf: "032.522.111-12",
      crm: "2444",
    },
    {
      id: "13jd22",
      name: "Zuila Mota Braga",
      situation: "Filiado",
      cpf: "777.423.567-86",
      crm: "9865",
    },
    {
      id: "65622dd",
      name: "Júlio Mouta",
      situation: "Desfiliado",
      cpf: "333.666.333-88",
      crm: "8888",
    },
    {
      id: "11kd85f",
      name: "Lúcia Guimarães Rodrigues ",
      situation: "Desfiliado",
      cpf: "993.456.111-24",
      crm: "4444",
    },
    {
      id: "23dd55hh",
      name: "Sebastião Nogueira Frota",
      situation: "Filiado",
      cpf: "032.522.111-12",
      crm: "2444",
    },
    {
      id: "13jd22",
      name: "Flávio Viana Jumbão",
      situation: "Filiado",
      cpf: "777.423.567-86",
      crm: "9865",
    },
    {
      id: "65622dd",
      name: "Júlio Mouta",
      situation: "Desfiliado",
      cpf: "333.666.333-88",
      crm: "8888",
    },
    {
      id: "11kd85f",
      name: "Mariáh Lins",
      situation: "Desfiliado",
      cpf: "993.456.111-24",
      crm: "4444",
    },
  ];
}

export default async function Usuarios() {
  const data = await getUsersData();
  return (
    <AdminLayout>
      <h1 className="text-emerald-700">Usuários</h1>
      <p className="text-zinc-500">Obtenha e edite informações dos filiados </p>

      <DataTable columns={columns} data={data}></DataTable>
    </AdminLayout>
  );
}
