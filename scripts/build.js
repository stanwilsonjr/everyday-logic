import { execSync } from "child_process"
import { existsSync, mkdirSync } from "fs"

console.log("[v0] Starting 11ty site build process...")

try {
  // Ensure output directory exists
  if (!existsSync("_site")) {
    mkdirSync("_site", { recursive: true })
  }

  // Build Tailwind CSS
  console.log("[v0] Building Tailwind CSS...")
  execSync("npx tailwindcss -i ./src/css/input.css -o ./_site/css/style.css --minify", {
    stdio: "inherit",
  })

  // Build 11ty site
  console.log("[v0] Building 11ty site...")
  execSync("npx @11ty/eleventy", {
    stdio: "inherit",
  })

  console.log("[v0] ✅ Build completed successfully!")
  console.log("[v0] Site built to _site/ directory")
} catch (error) {
  console.error("[v0] ❌ Build failed:", error.message)
  process.exit(1)
}
