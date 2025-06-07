const samples = {
    python: "print('Hello World')",
    javascript: "console.log('Hello World');",
    typescript: "console.log('Hello World');",
    java: `public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}`,
    c: '#include <stdio.h>\nint main() {\n    printf("Hello World\\n");\n    return 0;\n}',
    cpp: '#include <iostream>\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}',
    csharp: 'using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello World");\n    }\n}',
    swift: 'print("Hello World")',
    kotlin: 'fun main() {\n    println("Hello World")\n}',
    ruby: "puts 'Hello World'",
    php: '<?php\necho "Hello World";\n?>',
    go: 'package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello World")\n}',
    rust: 'fn main() {\n    println!("Hello World");\n}',
    shell: 'echo "Hello World"',
    r: 'print("Hello World")',
    scala: 'object HelloWorld {\n    def main(args: Array[String]): Unit = println("Hello World")\n}',
    perl: 'print "Hello World\\n";'
};
