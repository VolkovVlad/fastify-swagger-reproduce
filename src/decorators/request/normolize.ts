export default function() {
  // @ts-ignore
  const headers = this.headers;
  headers.host = undefined;
  headers.referer = undefined;
  headers['content-length'] = undefined;
  return headers;
}
