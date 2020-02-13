addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { suffix } = wasm_bindgen;
  await wasm_bindgen(wasm);

  let url = new URL(request.url);
  let path = url.pathname;

  if (path.indexOf('/cluster/suffix/') === 0) {
    let input = path.substr(16);
    let output = suffix(input);

    return new Response(output, {
      headers: {
        'content-type': 'text/plain',
      },
    })
  }

  return new Response('resource not found', {
    status: 404,
    statusText: 'not found',
    headers: {
      'content-type': 'text/plain',
    },
  })
}
