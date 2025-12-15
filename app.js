const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>App DevOps</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }

        h1 {
          margin-bottom: 10px;
          font-size: 2.5rem;
          color: #00e6ff;
        }

        p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .badge {
          margin-top: 20px;
          display: inline-block;
          padding: 8px 16px;
          background: #00e6ff;
          color: #003344;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Hola Mundo</h1>
        <p>Aplicación web creada para la práctica del ciclo DevOps completo.</p>
        <div class="badge">Node.js + Docker</div>
      </div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
