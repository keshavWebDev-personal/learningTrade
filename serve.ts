Bun.serve({
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response(Bun.file("./views/hero/index.html"));
        if (url.pathname === "/blog") return new Response("Blog!"); 
        return new Response("404!");
    },
});