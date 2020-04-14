/**
 * Cloudflare internship coding challenge
 * Full Stack
 * 
 * Jeff Liu, April 2020
 * 
 * A simple Cloudflare Workers random redirection app
 */

/**
 * default event listener for fetching this page; unchanged
 */
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
})


/**
 * respond to fetch by fetching the variants JSON, then fetching a random URL
 */
async function handleRequest(request) {
  return fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then(response => response.json())
    .then(response => {
      return fetch(response['variants'][Math.round(Math.random())]);
    });
}
