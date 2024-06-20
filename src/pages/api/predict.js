export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        const response = await fetch("http://127.0.0.1:3000/PricePrediction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        });
  
        const data = await response.json();
        if (data.error) {
          res.status(500).json({ error: data.error });
        } else {
          res.status(200).json(data);
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }