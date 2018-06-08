type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; w: number; h: number }
  | { kind: "square"; size: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.w * shape.h;
    case "square":
      return shape.size ** 2;
  }
}
