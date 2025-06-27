export const runtime = "nodejs"; // 꼭 맨 위에 추가

import fs from "fs";
import path from "path";

export async function GET() {
  const dirPath = path.join(process.cwd(), "public", "real");

  try {
    const files = fs.readdirSync(dirPath).filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    return new Response(JSON.stringify(files), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Unable to read files", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
