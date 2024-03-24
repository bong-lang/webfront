class Lexer {
	tokenize(code: string): string[] {
		return code.split(/\s+/);
	}
}

export default Lexer;
