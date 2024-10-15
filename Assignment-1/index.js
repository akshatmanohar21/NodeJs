const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>')
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>Users</h1>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.end();
    }

    if (url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
})

server.listen(3000);