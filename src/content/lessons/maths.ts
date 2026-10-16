import type { Lesson } from './types'

// Edexcel 1MA1. One lesson per topic in topics.ts.
export const MATHS: Record<string, Lesson> = {
  Probability: {
    keyPoints: [
      'Probability runs from 0 (impossible) to 1 (certain). The probabilities of all the outcomes add up to 1.',
      'P(not A) = 1 − P(A).',
      'Independent events: P(A and B) = P(A) × P(B). Mutually exclusive events: P(A or B) = P(A) + P(B).',
      'Tree diagrams: multiply along the branches, add between the ends you want.',
      'Without replacement, the numbers change after each pick.',
    ],
    steps: [
      {
        title: 'The probability scale',
        text: 'A probability is a number from 0 to 1. 0 means it cannot happen, 1 means it is certain, and 0.5 means even chance. You can write it as a fraction, a decimal or a percentage.\nFor equally likely outcomes: probability = number of ways it can happen ÷ total number of outcomes. A fair dice shows a prime number (2, 3 or 5) with probability 3/6 = 1/2.',
      },
      {
        title: 'Outcomes add up to 1',
        text: 'Every possible outcome together has probability 1. So the chance something does not happen is 1 minus the chance it does.\nExample: the chance of rain is 0.3, so the chance of no rain is 1 − 0.3 = 0.7.\nIf a table of probabilities has a missing value, subtract the rest from 1.',
      },
      {
        title: 'Listing outcomes',
        text: 'To avoid missing any, list them in order. For two coins: HH, HT, TH, TT, so four outcomes, and P(one head and one tail) = 2/4 = 1/2.\nFor two dice, draw a 6 by 6 grid. There are 36 outcomes, and P(total 7) = 6/36 = 1/6.',
      },
      {
        title: 'Relative frequency',
        text: 'When outcomes are not equally likely (a biased dice), use experiments. Relative frequency = number of times it happened ÷ number of trials.\nMore trials give a better estimate. Expected number of times = probability × number of trials.\nExample: P(6) estimated as 0.2. In 150 rolls, expect 0.2 × 150 = 30 sixes.',
      },
      {
        title: 'And, or: the two rules',
        text: 'Independent events do not affect each other. For "A and B", multiply: P(A and B) = P(A) × P(B).\nMutually exclusive events cannot both happen. For "A or B", add: P(A or B) = P(A) + P(B).\nExample: a spinner has P(red) = 0.4. Spinning red twice in a row is 0.4 × 0.4 = 0.16.',
      },
      {
        title: 'Tree diagrams',
        text: 'Draw a branch for each outcome, writing the probability on it. Branches from one point add to 1.\nMultiply along the branches to get the chance of a path. Add the paths that give the result you want.\nSelecting without replacement changes the second set of probabilities: with 3 red and 2 blue counters, P(red then red) = 3/5 × 2/4 = 6/20 = 3/10.',
      },
      {
        title: 'Venn diagrams and sets',
        text: 'A Venn diagram shows how outcomes overlap. Fill in the overlap first, then the rest of each circle, then outside both circles.\nTo find a probability, divide the number in the region you want by the total. Notation: A ∩ B means in both, A ∪ B means in either, A′ means not A.',
      },
    ],
    check: [
      { q: 'The probability of winning a game is 0.35. What is the probability of not winning?', a: '1 − 0.35 = 0.65.' },
      { q: 'A bag has 4 red and 6 blue counters. Two are taken out without replacement. Find P(both red).', a: '4/10 × 3/9 = 12/90 = 2/15.' },
      { q: 'A biased coin lands on heads with probability 0.6. It is flipped 200 times. How many heads do you expect?', a: '0.6 × 200 = 120.' },
      { q: 'Two events are independent with P(A) = 0.5 and P(B) = 0.2. Find P(A and B).', a: '0.5 × 0.2 = 0.1.' },
    ],
  },
  Number: {
    keyPoints: [
      'Every whole number above 1 is a product of primes in exactly one way. Use it to find HCF and LCM.',
      'Fractions: add and subtract need a common denominator; multiply across; divide by flipping the second fraction.',
      'Standard form is A × 10ⁿ with 1 ≤ A < 10. Indices: add when multiplying, subtract when dividing, multiply powers of powers.',
      'a⁰ = 1 and a⁻ⁿ = 1/aⁿ. Higher tier: a^(1/n) is the nth root, and surds like √12 simplify to 2√3.',
      'Bounds: a value rounded to the nearest unit lies half a unit either side of it.',
    ],
    steps: [
      {
        title: 'Types of number',
        text: 'Integers are whole numbers (including negatives). A prime has exactly two factors, so 2, 3, 5, 7, 11, 13 are prime, but 1 is not.\nSquare numbers: 1, 4, 9, 16, 25. Cube numbers: 1, 8, 27, 64, 125.\nOrder of operations: brackets, then powers and roots, then × and ÷, then + and −. So 3 + 4 × 2² = 3 + 4 × 4 = 19.',
      },
      {
        title: 'Prime factors, HCF and LCM',
        text: 'To write a number as a product of primes, keep splitting it. 180 = 4 × 45 = 2² × 3² × 5.\nHCF (highest common factor) is the biggest number that divides both. LCM (lowest common multiple) is the smallest number both divide into.\nExample: 36 = 2² × 3² and 60 = 2² × 3 × 5. HCF: take the lowest power of each shared prime, 2² × 3 = 12. LCM: take the highest power of every prime, 2² × 3² × 5 = 180.',
      },
      {
        title: 'Fraction arithmetic',
        text: 'Add or subtract: make the denominators match first. 2/3 + 3/4 = 8/12 + 9/12 = 17/12 = 1 5/12.\nMultiply: top times top, bottom times bottom. 2/5 × 3/4 = 6/20 = 3/10.\nDivide: keep the first, flip the second, then multiply. 3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8.\nTurn mixed numbers into improper fractions before multiplying or dividing: 1 1/2 × 2 1/3 = 3/2 × 7/3 = 7/2 = 3 1/2.',
      },
      {
        title: 'Fractions, decimals, percentages',
        text: 'Fraction to decimal: divide top by bottom, so 3/8 = 0.375. Decimal to fraction: 0.35 = 35/100 = 7/20. Percentage means "out of 100".\nPercentage of an amount: 35% of 240 = 0.35 × 240 = 84.\nA fraction terminates only if its simplified denominator has no prime factors other than 2 and 5; otherwise it recurs.\nHigher tier: write 0.3636… (recurring) as a fraction. Let x = 0.3636…, then 100x = 36.3636…, so 99x = 36 and x = 36/99 = 4/11.',
      },
      {
        title: 'Standard form',
        text: 'Standard form is A × 10ⁿ, where A is at least 1 and less than 10. Big numbers have positive n, small numbers have negative n.\n45 000 000 = 4.5 × 10⁷ and 0.00032 = 3.2 × 10⁻⁴.\nMultiply: (3 × 10⁵) × (4 × 10³) = 12 × 10⁸ = 1.2 × 10⁹. Divide: (6 × 10⁸) ÷ (2 × 10⁵) = 3 × 10³.\nAdd or subtract by writing both as ordinary numbers: 3.2 × 10⁴ + 5 × 10³ = 32 000 + 5000 = 37 000 = 3.7 × 10⁴.',
      },
      {
        title: 'Laws of indices',
        text: 'Same base: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ and (aᵐ)ⁿ = aᵐⁿ. So 2³ × 2⁴ = 2⁷ = 128.\nAny number to the power 0 is 1. A negative power means "one over": 5⁻² = 1/5² = 1/25.\nHigher tier: a fractional power means a root. 25^(1/2) = √25 = 5, and 27^(2/3) = (∛27)² = 3² = 9. Combine both ideas: 25^(−1/2) = 1/5.',
      },
      {
        title: 'Surds (Higher)',
        text: 'Higher tier: a surd is a root that does not come out exactly, such as √2 or √7. Leave it as a surd to stay exact.\nSimplify by pulling out square factors: √12 = √4 × √3 = 2√3. Also √50 + √8 = 5√2 + 2√2 = 7√2.\nMultiplying: √2 × √8 = √16 = 4. Expanding: (3 + √2)(3 − √2) = 9 − 2 = 7.\nRationalise a denominator by multiplying top and bottom by the surd: 6/√3 = 6√3/3 = 2√3.',
      },
      {
        title: 'Rounding, estimating, bounds',
        text: 'Significant figures start at the first non-zero digit: 0.047261 is 0.0473 to 3 s.f. Estimate by rounding each number to 1 s.f.: 4.9 × 19.8 ≈ 5 × 20 = 100.\nA length of 12 cm to the nearest cm has lower bound 11.5 and upper bound 12.5. Write the error interval as 11.5 ≤ L < 12.5.\nFor a rectangle 8 cm by 5 cm (each to the nearest cm): largest area = 8.5 × 5.5 = 46.75 and smallest = 7.5 × 4.5 = 33.75.\nHigher tier: for a ÷ b the lower bound uses the lower a and the upper b.',
      },
    ],
    check: [
      { q: 'Write 84 as a product of prime factors.', a: '84 = 4 × 21 = 2² × 3 × 7.' },
      { q: 'Find the HCF and LCM of 24 and 36.', a: '24 = 2³ × 3 and 36 = 2² × 3². HCF = 2² × 3 = 12. LCM = 2³ × 3² = 72.' },
      { q: 'Work out 2/3 ÷ 4/5.', a: '2/3 × 5/4 = 10/12 = 5/6.' },
      { q: 'Write 0.0072 in standard form.', a: '7.2 × 10⁻³.' },
      { q: 'Higher tier: simplify √75.', a: '√75 = √25 × √3 = 5√3.' },
    ],
  },
  Algebra: {
    keyPoints: [
      'Expand brackets by multiplying every term inside; factorise by taking out the common factor. x² − a² = (x + a)(x − a).',
      'Solve equations by doing the same to both sides. Flip an inequality sign when multiplying or dividing by a negative.',
      'Straight line: y = mx + c, where m is the gradient and c the y-intercept. Perpendicular gradients multiply to −1 (Higher).',
      'Quadratics: factorise, or use x = (−b ± √(b² − 4ac)) ÷ 2a.',
      'Simultaneous equations: eliminate one letter, then substitute back to find the other.',
    ],
    steps: [
      {
        title: 'Expressions and brackets',
        text: 'Collect like terms, and expand by multiplying each term inside the bracket. 3(2x − 5) + 4x = 6x − 15 + 4x = 10x − 15.\nTwo brackets: multiply every term by every term. (x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15.\nHigher tier: proof. Two consecutive integers are n and n + 1, so their sum is 2n + 1, which is always odd.',
      },
      {
        title: 'Factorising',
        text: 'Take out the biggest common factor: 6x² − 9x = 3x(2x − 3).\nQuadratic with x²: find two numbers that multiply to the last term and add to the middle one. x² + 7x + 12 = (x + 3)(x + 4), because 3 × 4 = 12 and 3 + 4 = 7.\nDifference of two squares: x² − 49 = (x + 7)(x − 7).\nAlways expand your answer in your head to check it.',
      },
      {
        title: 'Solving equations',
        text: 'Whatever you do to one side, do to the other. 3x + 7 = 22 gives 3x = 15, so x = 5.\nLetters on both sides: get them on one side first. 5x − 4 = 2x + 11 gives 3x = 15, so x = 5.\nBrackets: 2(x + 3) = 4x − 2 gives 2x + 6 = 4x − 2, so 8 = 2x and x = 4.\nRearranging formulae works the same way. For y = 3x − 5: add 5, then divide by 3, so x = (y + 5) ÷ 3.',
      },
      {
        title: 'Inequalities',
        text: 'Solve like an equation, but if you multiply or divide by a negative, flip the sign. 3x − 2 > 10 gives x > 4. And −2x < 6 gives x > −3.\nOn a number line use an open circle for < or > and a filled circle for ≤ or ≥.\nDouble inequality: −2 < 2x + 1 ≤ 7 gives −3 < 2x ≤ 6, so −1.5 < x ≤ 3. The integers are −1, 0, 1, 2, 3.\nHigher tier: x² − x − 6 > 0 factorises to (x − 3)(x + 2) > 0. Sketch the curve: it is above the axis when x < −2 or x > 3.',
      },
      {
        title: 'Sequences',
        text: 'Linear sequence: the nth term is (common difference) × n + something. For 5, 8, 11, 14 the difference is 3, and 3n gives 3, 6, 9, 12, so the nth term is 3n + 2.\nTo test if 100 is in it: 3n + 2 = 100 gives n = 32.67, not a whole number, so no.\nGeometric sequences multiply by the same amount each time: 3, 6, 12, 24 has ratio 2.\nHigher tier: quadratic sequences have a constant second difference. For 2, 7, 14, 23 the differences are 5, 7, 9, second difference 2, so the n² term is n². Subtract n²: 1, 3, 5, 7 = 2n − 1. The nth term is n² + 2n − 1.',
      },
      {
        title: 'Straight-line graphs',
        text: 'The line y = mx + c has gradient m and crosses the y-axis at (0, c). Gradient = change in y ÷ change in x.\nExample: through (1, 3) and (5, 11), gradient = 8 ÷ 4 = 2. Then 3 = 2 × 1 + c gives c = 1, so y = 2x + 1.\nParallel lines have the same gradient.\nHigher tier: perpendicular gradients multiply to −1. The line perpendicular to y = 2x + 1 through (4, 1) has gradient −1/2, so 1 = −2 + c, giving y = −1/2x + 3.',
      },
      {
        title: 'Quadratics',
        text: 'Solve by factorising: x² − 5x + 6 = 0 gives (x − 2)(x − 3) = 0, so x = 2 or x = 3. Always rearrange to = 0 first.\nFormula, for ax² + bx + c = 0: x = (−b ± √(b² − 4ac)) ÷ 2a. For x² + 3x − 2 = 0: b² − 4ac = 9 + 8 = 17, so x = (−3 ± √17) ÷ 2, which is 0.56 or −3.56.\nThe graph is a U shape (or ∩ if the x² term is negative). The solutions are where it crosses the x-axis.\nHigher tier: completing the square. x² + 6x + 1 = (x + 3)² − 8, so the turning point is (−3, −8).',
      },
      {
        title: 'Simultaneous equations and functions',
        text: 'Eliminate a letter. For 2x + y = 11 and x − y = 1, add them: 3x = 12, so x = 4, then y = 3. Check in both equations.\nIf the numbers do not match, multiply an equation first, or substitute: for 3x + 2y = 12 and x + y = 5, put y = 5 − x in, giving x = 2 and y = 3.\nHigher tier: linear with quadratic. y = x + 2 with x² + y² = 10 gives 2x² + 4x − 6 = 0, so x² + 2x − 3 = 0, (x + 3)(x − 1) = 0. The solutions are (−3, −1) and (1, 3).\nFunctions: if f(x) = 3x − 1 then f(4) = 11. Higher tier: with f(x) = 2x + 1 and g(x) = x², fg(x) = 2x² + 1, and the inverse f⁻¹(x) = (x − 1) ÷ 2.',
      },
    ],
    check: [
      { q: 'Expand and simplify (x + 4)(x − 2).', a: 'x² − 2x + 4x − 8 = x² + 2x − 8.' },
      { q: 'Solve 5x − 3 = 2x + 9.', a: '3x = 12, so x = 4.' },
      { q: 'Find the nth term of 7, 11, 15, 19.', a: 'Difference 4, so 4n + 3.' },
      { q: 'Solve x² − x − 12 = 0.', a: '(x − 4)(x + 3) = 0, so x = 4 or x = −3.' },
      { q: 'Solve 3x + 2y = 16 and x − y = 2.', a: 'x = y + 2, so 3y + 6 + 2y = 16, giving y = 2 and x = 4.' },
    ],
  },
  'Ratio, proportion and rates of change': {
    keyPoints: [
      'A ratio compares parts. To share, add the parts, find one part, then multiply.',
      'Percentage change = change ÷ original × 100. Use multipliers: +20% is × 1.2, −15% is × 0.85.',
      'Speed = distance ÷ time, density = mass ÷ volume, pressure = force ÷ area.',
      'Direct proportion: y = kx. Inverse proportion: y = k/x. Find k first.',
      'On a distance-time graph the gradient is speed; on a velocity-time graph the gradient is acceleration and the area is distance.',
    ],
    steps: [
      {
        title: 'Simplifying and sharing ratios',
        text: 'Simplify a ratio by dividing both sides by the same number: 12 : 18 = 2 : 3. Unit form makes one side 1: 2 : 5 = 1 : 2.5.\nTo share in a ratio, add the parts, divide to find one part, then multiply.\nExample: share £90 in the ratio 2 : 3 : 4. That is 9 parts, so one part is £10, giving £20, £30 and £40.',
      },
      {
        title: 'Using ratios',
        text: 'If you know one amount, find the value of one part. Boys : girls = 3 : 5 with 12 boys means one part is 4, so there are 20 girls.\nA ratio can become a fraction: in 3 : 5, boys make up 3/8 of the total.\nScale a recipe by multiplying everything by the same number.',
      },
      {
        title: 'Unitary method and best buys',
        text: 'Find the cost of one, then scale up. 5 pens cost £3.20, so one costs 64p and 8 pens cost £5.12.\nFor a best buy, work out the price per gram (or per item) for each.\n500 g for £1.45 costs £1.45 ÷ 500 = £0.0029 per g. 750 g for £2.10 is £0.0028 per g. The 750 g pack is better value.',
      },
      {
        title: 'Percentage change',
        text: 'Percentage change = change ÷ original × 100. A price going from £80 to £92 is 12 ÷ 80 = 15% up.\nUse multipliers: 30% off £60 is 0.7 × 60 = £42.\nReverse percentages: divide by the multiplier. After a 20% rise the price is £90, so the original was 90 ÷ 1.2 = £75.\nRepeated change: raise the multiplier to a power. £500 at 3% interest for 2 years is 500 × 1.03² = £530.45. A £12 000 car losing 15% a year for 3 years is worth 12 000 × 0.85³ = £7369.50.',
      },
      {
        title: 'Compound measures',
        text: 'Speed = distance ÷ time. 150 km in 2.5 hours is 60 km/h. Density = mass ÷ volume: 540 g in 200 cm³ is 2.7 g/cm³. Pressure = force ÷ area: 600 N on 0.5 m² is 1200 N/m².\nRearrange when needed: distance = speed × time.\nConvert units carefully: 72 km/h = 72 000 m ÷ 3600 s = 20 m/s.',
      },
      {
        title: 'Direct and inverse proportion',
        text: 'Direct: y = kx. If y = 12 when x = 4, then k = 3, so when x = 7, y = 21. Higher tier: y = kx² works the same way. If y = 20 when x = 2, then k = 5, so x = 3 gives y = 45.\nInverse: y = k/x. If y = 6 when x = 4, then k = 24, so x = 8 gives y = 3.\nReal-life version: 6 workers take 10 days, which is 60 worker-days, so 15 workers take 60 ÷ 15 = 4 days.',
      },
      {
        title: 'Rates of change on graphs',
        text: 'On a distance-time graph the gradient is the speed, and a flat line means stopped.\nOn a velocity-time graph the gradient is the acceleration, and the area under it is the distance.\nExample: speed rises from 0 to 12 m/s in 4 s (acceleration 12 ÷ 4 = 3 m/s²), then stays at 12 m/s for 5 s. Distance = ½ × 4 × 12 + 12 × 5 = 24 + 60 = 84 m.\nHigher tier: for a curve, draw a tangent and find its gradient to get the rate of change at that point.',
      },
      {
        title: 'Scales and maps',
        text: 'A scale of 1 : 50 000 means 1 cm on the map is 50 000 cm in real life. So 4 cm on the map is 200 000 cm = 2 km.\nTo go from real life to the map, divide by the scale. Keep the same units until the last step.\nPercentages, fractions and ratios are linked: a ratio of 1 : 3 means 1/4 and 3/4 of the whole.',
      },
    ],
    check: [
      { q: 'Share £72 in the ratio 5 : 7.', a: '12 parts, so one part is £6. £30 and £42.' },
      { q: '4 notebooks cost £5.60. What do 7 cost?', a: 'One costs £1.40, so 7 cost £9.80.' },
      { q: 'A car travels 135 miles in 2.5 hours. What is its average speed?', a: '135 ÷ 2.5 = 54 mph.' },
      { q: 'After a 20% decrease a price is £48. What was the original price?', a: '48 ÷ 0.8 = £60.' },
      { q: 'y is inversely proportional to x. y = 10 when x = 3. Find y when x = 6.', a: 'k = 30, so y = 30 ÷ 6 = 5.' },
    ],
  },
  'Geometry and measures': {
    keyPoints: [
      'Angles: on a line 180°, around a point 360°, in a triangle 180°, in a quadrilateral 360°. Polygon interior sum = (n − 2) × 180°.',
      'Area: triangle ½bh, trapezium ½(a + b)h, circle πr². Circumference = 2πr.',
      'Pythagoras: a² + b² = c². Trig: SOH CAH TOA.',
      'Enlargement by scale factor k multiplies lengths by k, areas by k², volumes by k³.',
      'Higher tier: sine rule, cosine rule, circle theorems and vectors.',
    ],
    steps: [
      {
        title: 'Angle rules',
        text: 'Angles on a straight line add to 180°; angles round a point to 360°; vertically opposite angles are equal.\nTriangles add to 180° and quadrilaterals to 360°.\nParallel lines: alternate angles (Z shape) are equal, corresponding angles (F shape) are equal, co-interior angles (C shape) add to 180°.\nPolygons: interior angles add to (n − 2) × 180° and exterior angles add to 360°. A regular octagon has exterior angle 360 ÷ 8 = 45°, so interior angle 135°.',
      },
      {
        title: 'Bearings, constructions, loci',
        text: 'A bearing is measured clockwise from north, with three figures. If B is on a bearing of 070° from A, then A is on a bearing of 070° + 180° = 250° from B.\nConstructions use compasses and a ruler, with arcs left showing. Perpendicular bisector: draw two arcs of equal radius from each end of the line, then join the crossing points. Angle bisector: mark equal distances on both arms, then draw arcs from those marks.\nA locus is the set of points that obey a rule. Fixed distance from a point is a circle; equal distance from two points is the perpendicular bisector.',
      },
      {
        title: 'Area, circles, sectors',
        text: 'Rectangle: base × height. Triangle: ½ × base × height. Parallelogram: base × height. Trapezium: ½(a + b)h.\nCircle with radius 5 cm: circumference = 2π × 5 = 31.4 cm and area = π × 5² = 78.5 cm².\nA sector is a fraction θ/360 of a circle. For 90° and radius 6 cm: area = ¼ × π × 6² = 9π = 28.3 cm², arc length = ¼ × 2π × 6 = 3π = 9.42 cm.',
      },
      {
        title: 'Volume and surface area',
        text: 'Prism: area of cross-section × length. Cylinder: πr²h. For r = 3 cm and h = 10 cm, V = 90π = 282.7 cm³.\nCone: ⅓πr²h. Pyramid: ⅓ × base area × height. Sphere: 4/3πr³. These last three may be given on the paper, but learn them anyway.\nSphere with r = 3: V = 36π = 113.1 cm³. Cone with r = 3 and h = 4: V = 12π = 37.7 cm³.\nSurface area is the area of all the faces added up. A sphere has 4πr².',
      },
      {
        title: 'Pythagoras and trigonometry',
        text: 'In a right-angled triangle a² + b² = c², where c is the hypotenuse. Legs 6 and 8 give c = √100 = 10. Hypotenuse 13 and leg 5 give the other leg √(169 − 25) = √144 = 12.\nSOH CAH TOA: sin = opposite ÷ hypotenuse, cos = adjacent ÷ hypotenuse, tan = opposite ÷ adjacent.\nFind an angle: opposite 7, hypotenuse 10, sin θ = 0.7, so θ = sin⁻¹(0.7) = 44.4°. Find a side: hypotenuse 12, angle 35°, opposite = 12 × sin 35° = 6.88.\nExact values (learn them): sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1, sin 60° = cos 30° = √3/2, tan 60° = √3.',
      },
      {
        title: 'Transformations, similarity',
        text: 'Reflection needs a mirror line. Rotation needs a centre, an angle and a direction. Translation needs a column vector. Enlargement needs a scale factor and a centre.\nExamples with the point (3, 1): enlargement scale factor 2 about the origin gives (6, 2). Rotation 90° anticlockwise about the origin gives (−1, 3). Reflection in y = x gives (1, 3).\nCongruent shapes are identical (SSS, SAS, ASA or RHS prove it). Similar shapes have the same angles and lengths in the same ratio.\nHigher tier: scale factor k for lengths means k² for areas and k³ for volumes. A solid of volume 5 cm³ enlarged by 2 has volume 5 × 8 = 40 cm³.',
      },
      {
        title: 'Higher: triangle rules',
        text: 'Higher tier: for any triangle, with side a opposite angle A.\nSine rule: a ÷ sin A = b ÷ sin B. With a = 6, A = 30° and B = 45°, b = 6 × sin 45° ÷ sin 30° = 8.49.\nCosine rule: a² = b² + c² − 2bc cos A. With b = 5, c = 8, A = 60°: a² = 25 + 64 − 40 = 49, so a = 7.\nArea = ½ab sin C. Sides 7 and 9 with angle 40° between them: area = ½ × 7 × 9 × sin 40° = 20.2.\n3D Pythagoras: a cuboid 3 × 4 × 12 has diagonal √(9 + 16 + 144) = 13.',
      },
      {
        title: 'Higher: circles and vectors',
        text: 'Higher tier circle theorems: the angle at the centre is double the angle at the circumference; angles in a semicircle are 90°; angles in the same segment are equal; opposite angles of a cyclic quadrilateral add to 180°. A tangent meets the radius at 90°, and two tangents from a point are equal in length. Alternate segment: the angle between a tangent and a chord equals the angle in the opposite segment.\nVectors have size and direction. Column vector (3, −2) means 3 right and 2 down. Parallel vectors are multiples of each other.\nIf OA = a and OB = b then AB = b − a. The midpoint M of AB has OM = a + ½(b − a) = ½(a + b).',
      },
    ],
    check: [
      { q: 'What is one interior angle of a regular hexagon?', a: '(6 − 2) × 180 ÷ 6 = 120°.' },
      { q: 'A right-angled triangle has shorter sides 9 cm and 12 cm. Find the hypotenuse.', a: '√(81 + 144) = √225 = 15 cm.' },
      { q: 'Opposite = 5 and adjacent = 12. Find the angle.', a: 'tan θ = 5/12, so θ = 22.6°.' },
      { q: 'Find the volume of a cylinder with radius 4 cm and height 5 cm.', a: 'π × 16 × 5 = 80π = 251.3 cm³.' },
      { q: 'Find the area of a sector with angle 60° and radius 6 cm.', a: '1/6 × π × 36 = 6π = 18.8 cm².' },
    ],
  },
  Statistics: {
    keyPoints: [
      'Mean = total ÷ number of values. Median = middle value. Mode = most common. Range = largest − smallest.',
      'Estimated mean from a grouped table: multiply midpoints by frequencies, add, then divide by total frequency.',
      'Pie chart angle = frequency ÷ total × 360°.',
      'Scatter graphs show correlation; use the line of best fit only inside the data range.',
      'Higher tier: histograms use frequency density = frequency ÷ class width; cumulative frequency gives median and quartiles.',
    ],
    steps: [
      {
        title: 'Mean, median, mode, range',
        text: 'Data: 3, 5, 5, 8, 9, 12. Total 42, six values.\nMean = 42 ÷ 6 = 7. Median: put in order and take the middle; with two middle values (5 and 8) find their halfway point, 6.5. Mode = 5. Range = 12 − 3 = 9.\nThe mean uses every value so outliers pull it; the median is not affected much by them.',
      },
      {
        title: 'Frequency tables',
        text: 'For grouped data you only know each class, so use the midpoint to estimate.\nExample: classes 0 < x ≤ 10, 10 < x ≤ 20, 20 < x ≤ 30 with frequencies 3, 8, 9. Midpoints 5, 15, 25. Sum = 15 + 120 + 225 = 360. Total frequency 20. Estimated mean = 360 ÷ 20 = 18.\nThe modal class is the one with the highest frequency (20 < x ≤ 30). The median is the 10.5th value, which lies in 10 < x ≤ 20 here.',
      },
      {
        title: 'Charts and diagrams',
        text: 'Pie chart: angle = frequency ÷ total × 360°. 15 out of 60 gives 90°.\nBar charts have gaps; use them for categories. Line graphs over time show trends.\nStem-and-leaf: put the digits in order and include a key, such as 3 | 4 = 34.\nFrequency polygons: plot the midpoints against frequency and join with straight lines.',
      },
      {
        title: 'Scatter graphs',
        text: 'Positive correlation: both rise together. Negative: one rises as the other falls. None: no pattern.\nDraw a line of best fit that follows the trend with points either side. Use it to estimate, but only within the range of the data (interpolation).\nPredicting outside the range (extrapolation) is unreliable. Correlation does not prove one thing causes the other.',
      },
      {
        title: 'Sampling and surveys',
        text: 'A sample should represent the population. A random sample gives everyone an equal chance, which avoids bias.\nHigher tier: stratified sampling. A school has 150 in Year 9, 250 in Year 10 and 200 in Year 11 (600 total). A sample of 60 takes 15, 25 and 20 from them.\nCapture-recapture: tag 40 animals. A later sample of 30 has 5 tagged. N ÷ 40 = 30 ÷ 5, so N = 240.\nGood questionnaire questions are not leading, and their response boxes do not overlap.',
      },
      {
        title: 'Higher: cumulative frequency',
        text: 'Higher tier: cumulative frequency is a running total. Plot each total against the upper class boundary and join with a smooth curve.\nFor n values, read the median at n ÷ 2, the lower quartile at n ÷ 4 and the upper quartile at 3n ÷ 4.\nInterquartile range (IQR) = UQ − LQ. If LQ = 24 and UQ = 40, IQR = 16.\nBox plot: draw a box from LQ to UQ with a line at the median, and whiskers to the smallest and largest values.',
      },
      {
        title: 'Higher: histograms',
        text: 'Higher tier: in a histogram the bar area represents frequency, and the vertical axis shows frequency density.\nFrequency density = frequency ÷ class width. So frequency = frequency density × class width.\nExample: a class 20 to 40 with height 2.5 has frequency 2.5 × 20 = 50. A class 10 to 20 with frequency 30 has height 30 ÷ 10 = 3.\nBars can be different widths, which is why you cannot use heights directly.',
      },
      {
        title: 'Comparing data sets',
        text: 'Compare one average and one measure of spread. Class A: median 62, range 30. Class B: median 58, range 15. A did better on average, but B was more consistent.\nUse numbers from the data in your answer, and write in context.\nTwo-way tables show two features at once; check that rows and columns total correctly.\nHigher tier: moving averages smooth a time series. The 3-point moving average of 12, 15, 21, 18 is (12 + 15 + 21) ÷ 3 = 16 and then (15 + 21 + 18) ÷ 3 = 18.',
      },
    ],
    check: [
      { q: 'Find the mean and median of 4, 7, 7, 10, 12.', a: 'Mean = 40 ÷ 5 = 8. Median = 7.' },
      { q: 'In a survey of 90 people, 24 chose football. What angle shows football on a pie chart?', a: '24 ÷ 90 × 360 = 96°.' },
      { q: '50 fish are tagged. A later sample of 40 contains 8 tagged. Estimate the population.', a: 'N ÷ 50 = 40 ÷ 8, so N = 250.' },
      { q: 'Higher tier: in a histogram a bar has width 5 and frequency density 4. What is its frequency?', a: '4 × 5 = 20.' },
      { q: 'Higher tier: a cumulative frequency graph has 120 values. At which positions are the median and quartiles?', a: 'Median at 60, lower quartile at 30, upper quartile at 90.' },
    ],
  },
}
