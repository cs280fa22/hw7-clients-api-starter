// Do NOT make any changes to this file!

export const page = (title, body) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
  </head>
  <body>
    ${body}
  </body>
  </html>
  `;
};

export const index = () => {
  const title = "Clients API";
  const body = `<h3>Welcome to Clients API</h3>
  <ul>
    <li><a href="/register">Register to obtain an API Key</a></li>
    <li><a href="/api/clients?key="insert-your-api-key"">List of clients!</a></li>
  </ul>`;

  return page(title, body);
};

export const register = () => {
  const title = "Register";
  const body = `  <h3>Please enter your information to register:</h3>
  <form method="post">
    <label for="name">Name</label>
    <input type="text" name="name" id="name"/>
    <label for="email">Email</label>
    <input type="email" name="email" id="email"/>
    <input type="submit"/>
  </form>`;

  return page(title, body);
};

export const success = (name) => {
  const title = "Confrimation";
  const body = `
  <h3>Successful registration! 🎉</h3>
  <h4>Please check your email, ${name}!</h4>
  `;
  return page(title, body);
};

export const error = (name, message) => {
  const title = "Error";
  const body = `
  <h3>Sorry! Something went wrong!!</h3>
  ${message ? "<hr/>" : ""}
  ${message ? "<pre style='white-space: pre-wrap;'>" + message + "</pre>" : ""}
  ${message ? "<hr/>" : ""}
  <h4>Please try again later${name ? ", " + name : ""}!</h4>
  `;
  return page(title, body);
};

export const message = (name, key) => {
  return `<h4>Thanks for registeration, ${name}!</h4>
  <h4>This is your API key:</h4>
  <pre><code>${key}</code></pre>`;
};
