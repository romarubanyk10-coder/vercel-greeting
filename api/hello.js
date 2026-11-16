export function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  if (!name) {
    return new Response(
      "Please provide your name using ?name=Roman",
      {
        status: 400,
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  }

  return new Response(`Hello, ${name}!`, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}