// interpreter.ts
import Lexer from "./lexer";
import Parser from "./parser";
import ASTBuilder from "./ast-builder";

class Interpreter {
	private lexer: Lexer;
	private parser: Parser;
	private astBuilder: ASTBuilder;

	constructor() {
		this.lexer = new Lexer();
		this.parser = new Parser();
		this.astBuilder = new ASTBuilder();
	}

	interpret(code: string): any {
		const tokens = this.lexer.tokenize(code);
		const parsedTokens = this.parser.parse(tokens);
		const ast = this.astBuilder.buildAST(parsedTokens);

		return this.executeAST(ast);
	}

	private executeAST(ast: string[]): any {
		// Execute the AST and return the output
		return "Output";
	}
}

export default Interpreter;
