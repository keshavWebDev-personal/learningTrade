Bun.serve({
    port: 3000,
    fetch() {
        return new Response(Bun.file("./static/index.html"));
    },
});
console.log(`Running on port: $ {serve.port}`);
