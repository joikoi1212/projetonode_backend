export function allowCors(handler) {
  return async (req, res) => {
    const allowedOrigin = "https://projetonode.vercel.app"
    res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      return res.status(200).end(); // Retorna 200 para todas as requisições OPTIONS
    }

    return handler(req, res);
  };
}
