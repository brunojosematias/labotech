import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
  async execute(userId: string) {
    // Gerar o token
    const token = sign({}, "d64a9d7049d31f6d43e12fb73617070e", {
      subject: userId,
      expiresIn: "1d", // 20s
    });

    return token;
  }
}

export { GenerateTokenProvider };
