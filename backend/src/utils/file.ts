import fs from "fs"; // interage com sistema de arquivos no sistema

// responsável por deletar imagens duplicadas
export const deleteFile = async (filename: string) => {
  try {
    // verifica se um arquivo existe no diretporio que passarmos
    await fs.promises.stat(filename);
  } catch {
    return;
  }

  // remove o arquivo de acordo com o filename passado
  await fs.promises.unlink(filename);
};
