const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>Hello All!</h1>');
        res.end(200);
    }

    if ( url === 'users') {
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>Users</h1>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>');
        res.end(200);
    }
}

module.exports = requestHandler;

