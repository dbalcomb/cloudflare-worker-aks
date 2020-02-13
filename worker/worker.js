addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const { greet } = wasm_bindgen;
    await wasm_bindgen(wasm)
    const greeting = greet()
    return new Response(greeting, {status: 200})
}
