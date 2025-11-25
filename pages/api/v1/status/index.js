function status(request, response) {
    response.status(200).json({ "chave": "São acima da média"});
    //response.status(200).json("Os alunos do curso.dev são pessoas acima da média!");
}

export default status;