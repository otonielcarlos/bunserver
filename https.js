export default {
  port: 3000,
  fetch(request) {
    return new Response('Welcome to Bun')
  }
}

