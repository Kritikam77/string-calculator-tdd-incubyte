# String Calculator – TDD Kata (React + TypeScript)

This project is a solution to the **String Calculator TDD Kata**, as part of the hiring process for the **Software Craftsperson – React + TypeScript** role at **Incubyte**.

The implementation follows the **Test-Driven Development (TDD)** approach and adheres strictly to the requirements mentioned in the assessment brief.

---

## Features Implemented

The `add(numbers: string): number` function supports:

- Returns `0` for an empty string input
- Returns a single number as integer
- Returns sum for two comma-separated numbers
- Supports any number of comma-separated values
- Handles newlines as delimiters (e.g., `"1\n2,3"` returns `6`)
- Supports custom delimiters via `"//[delimiter]\n[numbers]"` syntax
- Throws an error if input contains **any negative numbers**
- Shows **all** negative numbers in the error message

---

## Tech Stack

- **Language**: TypeScript
- **Framework**: Node.js with Jest for testing
- **Build Tool**: `ts-node` / `ts-jest`
- **Version Control**: Git (with frequent, meaningful commits as per TDD steps)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kritikam77/string-calculator-tdd-incubyte.git
cd string-calculator-tdd-incubyte
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npm test
```

---

## Project Structure

```
.
├── src/
│   └── stringCalculator.ts      # Implementation
├── tests/
│   └── stringCalculator.test.ts # Test cases using Jest
├── package.json
└── README.md
```

---

## Sample Test Cases

```ts
add(""); // returns 0
add("1,2"); // returns 3
add("1\n2,3"); // returns 6
add("//;\n1;2"); // returns 3
add("2,-4,3,-9"); // throws "negatives not allowed: -4,-9"
```

---

## Notes on TDD Approach

This implementation strictly follows the **Red-Green-Refactor** cycle:

1. **Red**: Write a failing test
2. **Green**: Write minimal code to pass the test
3. **Refactor**: Clean up the code without breaking the test

Each feature was implemented incrementally with its own test, and every commit reflects a single step in the TDD cycle.

---

## References

- [TDD Introduction Video](https://www.youtube.com/watch?v=qkblc5WRn-U)
- [Incubyte Inspiration Page](https://incubyte.co/inspiration)
- [Jest Testing Framework](https://jestjs.io/)

---

## Submission

Hosted on a **public GitHub repository** with detailed commits demonstrating TDD flow.
