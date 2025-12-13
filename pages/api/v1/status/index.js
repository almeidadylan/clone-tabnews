import database from "/infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "São acima da média" });
  //response.status(200).json("Os alunos do curso.dev são pessoas acima da média!");
}

export default status;
