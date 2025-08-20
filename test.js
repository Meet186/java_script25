function solveSecondOrderLinear(b, c, rhsK) { 
  // Solve CF using equation: m^2 + b*m + c = 0
    const a = 1;
    const discriminant = b ** 2 - 4 * a * c;
    let CF = "";
    if (discriminant > 0) {
        const r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        CF = `C1·e^(${r1}x) + C2·e^(${r2}x)`;
    } else if (discriminant === 0) {
        const r = -b / (2 * a);
        CF = `(C1 + C2·x)·e^(${r}x)`;
    } else {
        const real = -b / (2 * a);
        const imag = Math.sqrt(-discriminant) / (2 * a);
        CF = `e^(${real}x)·(C1·cos(${imag}x) + C2·sin(${imag}x))`;
    }
    // 2. PI for RHS = e^(kx)
    const operatorResult = rhsK ** 2 + b * rhsK + c;
    let PI = "";
    if (operatorResult === 0) {
        PI = `x·A·e^(${rhsK}x)`;
    } else {
        PI = `(${1 / operatorResult})·e^(${rhsK}x)`;
    }
    return {
        CF,
        PI,
        GeneralSolution: `y = ${CF} + ${PI}`
    };
}
// question : (D^2-3D+2)y = e^2x.
let ans = solveSecondOrderLinear(-3,2,2)
console.log(ans);














