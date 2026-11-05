export default {
  async fetch(request) {
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JOINOVA - Connect Everything</title>
        <style>
          body {
            margin: 0;
            font-family: Arial;
            background: #f4f6fb;
            color: #10234a;
          }
          header {
            background: #10234a;
            color: white;
            padding: 22px;
            text-align: center;
          }
          h1 { color: orange; }
          main {
            padding: 25px;
            text-align: center;
          }
          button {
            background: #ff8c00;
            border: none;
            padding: 14px 25px;
            border-radius: 8px;
            color: white;
            font-size: 16px;
          }
          .card {
            background: white;
            padding: 20px;
            margin: 15px 0;
            border-radius: 12px;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>JOINOVA</h1>
          Connect. Share. Trade. Grow.
        </header>
        <main>
          <h2>Welcome to JOINOVA</h2>
          <p>Your world of social networking,
          business and marketplace.</p>
          <div class="card">🌍 Social Community</div>
          <div class="card">🛍️ Online Marketplace</div>
          <div class="card">🏢 Business Centre</div>
          <div class="card">🎬 Videos & Creators</div>
          <button>Explore JOINOVA</button>
        </main>
      </body>
      </html>
    `, {
      headers: { "content-type": "text/html" }
    });
  }
};
