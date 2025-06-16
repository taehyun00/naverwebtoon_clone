import fs from "fs";
import path from "path";

export async function GET() {
  const dirPath = path.join(process.cwd(), "public", "real");

  try {
    const files = fs.readdirSync(dirPath).filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file) // 모든 이미지 확장자 허용
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
