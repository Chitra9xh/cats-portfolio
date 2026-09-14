// 12x12 pixel-grid cat sprite. Each character is one "pixel" cell:
//   . = transparent   O = outline   B = body fill   E = eye   N = nose
const GRID = [
  "..OO....OO..",
  ".OBBO..OBBO.",
  "OBBBBOOBBBBO",
  "OBBBBBBBBBBO",
  "OBBEBBBBEBBO",
  "OBBBBBBBBBBO",
  "OBBBBNNBBBBO",
  "OBBBBBBBBBBO",
  "OBBBBBBBBBBO",
  ".OBBBBBBBBO.",
  "..OBBBBBBO..",
  "...OOOOOO...",
];

const COLORS: Record<string, string> = {
  O: "var(--line-strong)",
  B: "var(--accent)",
  E: "var(--accent-2)",
  N: "var(--line-strong)",
};

const CELL = 20;
const SIZE = CELL * GRID[0].length;

export default function PixelCat() {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      width="100%"
      height="100%"
      role="img"
      aria-label="Pixel-art cat sprite, sitting"
      shapeRendering="crispEdges"
    >
      {GRID.flatMap((row, y) =>
        row.split("").map((cell, x) => {
          if (cell === ".") return null;
          const fill = COLORS[cell];
          const isEye = cell === "E";
          return (
            <rect
              key={`${x}-${y}`}
              x={x * CELL}
              y={y * CELL}
              width={CELL}
              height={CELL}
              fill={fill}
              className={isEye ? "pixelCatEye" : undefined}
            />
          );
        })
      )}
    </svg>
  );
}
