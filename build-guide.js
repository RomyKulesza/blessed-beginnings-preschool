// Renders START-HERE.md into a friendly, self-contained HTML guide the client
// can open by double-clicking (no Markdown reader needed).
const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt({ html: true, linkify: true, typographer: true });

const source = fs.readFileSync(path.join(__dirname, "START-HERE.md"), "utf8");
const body = md.render(source);

const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Blessed Beginnings Preschool — Website Guide</title>
<style>
  :root{--green:#3aa935;--ink:#262626;--muted:#5c5f57;--cream:#fbf8f2;}
  *{box-sizing:border-box}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--ink);line-height:1.7;max-width:820px;margin:0 auto;padding:40px 24px 80px;background:#fff;font-size:17px}
  .rainbow{height:8px;border-radius:8px;background:linear-gradient(90deg,#e30613 0 16.6%,#ec6608 0 33.3%,#ffc700 0 50%,#3aa935 0 66.6%,#0072bc 0 83.3%,#8f2d8f 0 100%);margin-bottom:28px}
  h1{font-size:2rem;line-height:1.2}
  h1,h2,h3{color:#1f2a1c}
  h2{margin-top:2.4em;border-bottom:2px solid #eee;padding-bottom:.3em}
  h3{margin-top:1.8em}
  a{color:#2f7a2b}
  code{background:#f3efe6;padding:2px 6px;border-radius:5px;font-size:.92em}
  blockquote{border-left:4px solid var(--green);margin:1.2em 0;padding:.4em 1em;background:var(--cream);border-radius:0 8px 8px 0;color:var(--muted)}
  table{border-collapse:collapse;width:100%;margin:1.2em 0}
  th,td{border:1px solid #e5e2d8;padding:10px 12px;text-align:left;vertical-align:top}
  th{background:var(--cream)}
  ol>li,ul>li{margin:.35em 0}
  hr{border:0;border-top:1px solid #eee;margin:2.5em 0}
</style>
</head><body>
<div class="rainbow"></div>
${body}
</body></html>`;

fs.writeFileSync(path.join(__dirname, "Website-Guide.html"), html);
console.log("Wrote Website-Guide.html");
