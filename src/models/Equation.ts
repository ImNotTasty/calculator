import { evaluate } from "mathjs";

class Equation {
  symbols: string[];

  constructor(symbols: string[] = []) {
    this.symbols = symbols;
  }

  get result() {
    let res: string = "-";
    if (this.symbols.length > 0) {
      try {
        res = String(evaluate(this.symbols.join("")));
      } finally {
        return res;
      }
    }
    return res;
  }

  get lastSymbol() {
    return this.symbols[this.symbols.length - 1];
  }

  addOperation(symbol: string) {
    this.symbols.push(symbol);
  }

  removeLastElement() {
    this.symbols.pop();
  }

  isValidEquation() {
    return (
      this.isContainsValidBrackets() ||
      this.isLastSymbolNumeric() ||
      this.lastSymbol === ")"
    );
  }

  isValidSymbolToAdd(symbol: string) {
    if (!Equation.isSymbolNumeric(symbol)) {
      let isValid: boolean;
      switch (symbol) {
        case "-":
          isValid = this.lastSymbol !== "+"   ;
          break;
        case "(":
          isValid = true;
          break;
        default:
          isValid = this.isLastSymbolNumeric() || this.lastSymbol === ")";
          break;
      }
      return isValid;
    } else {
      if(this.symbols.length === 0){
        return symbol !== "0"
      }
      return true;
    }
  }

  isLastSymbolNumeric() {
    return Equation.isSymbolNumeric(this.lastSymbol);
  }

  isContainsValidBrackets() {
    const stack: string[] = [];
    let hadOverflow: boolean = false;
    this.symbols.forEach((symbol) => {
      if (symbol === "(") {
        stack.push("(");
      } else {
        if (symbol === ")") {
          if (stack.length > 0) {
            stack.pop();
          } else {
            hadOverflow = true;
          }
        }
      }
    });
    return stack.length === 0 && !hadOverflow;
  }

  static isSymbolNumeric(symbol: string) {
    return !isNaN(Number(symbol));
  }

  static trimOperators(symbols: string[]) {
    while (
      symbols.length > 0 &&
      !Equation.isSymbolNumeric(symbols[symbols.length - 1])
    ) {
      symbols.pop();
    }
    return symbols;
  }
}

export default Equation;
