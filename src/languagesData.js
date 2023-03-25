const languages = [
    {   key:'a',
        img: "c-.png",
        name: "C++",
        sample : '#include <iostream>\n\nusing namespace std;\n\nint main( )\n{\n\tcout << "Hello World" ;\n\treturn 0;\n}',
        code : 0,
        numbers : 7
    },
    {   key:'e',
        img: "C.jpg",
        name: "C",
        sample: '#include <stdio.h>\n\nint main( )\n{\n\tprintf ( "Hello World" ) ;\n\treturn 0;\n}',
        code : 1 ,
        numbers : 6
    },
    {   key:'f',
        img: "c-sharp.png",
        name: "C#",
        sample : 'namespace HelloWorld\n{\n\tclass Hello \n\t{\n\t\tstatic void Main (string[ ] args)\n\t\t{\n\t\t\tSystem.Console.WriteLine("Hello World!");\n\t\t}\n\t}\n}',
        code : 2,
        numbers: 1
    },
    {   key:'b',
        img: "java.png",
        name: "Java",
        sample : 'public class MyClass {\n\tpublic static void main (String args[ ]) \n\t{\n\t\tSystem.out.print(\"Hello, World!\"); \n\t}\n}',
        code: 3 ,
        numbers : 4
    },
    {   key:'c',
        img: "python.png",
        name: "Python",
        sample : 'print ("Hello World")',
        code : 4,
        numbers : 5
    },
    {   key:'d',
        img: "js.png",
        name: "Java Script",
        sample : 'console.log ("Hello World")',
        code : 5,
        numbers : 17
    },
    {
        key: 'g',
        img: "kotlin.png",
        name: "Kotlin",
        sample: 'fun main(args : Array<String>) {\n\tprintln("Hello, World!")\n}',
        code: 6,
        numbers: 43
    },
    {
        key: 'h',
        img: "rust.png",
        name: "Rust",
        sample: 'fn main( ) \n{\n            println!("Hello World");\n}',
        code: 7,
        numbers: 46,
    },
    {
        key: 'i',
        img : "Go.jpg",
        name: "Golang",
        sample: 'package main\n\nimport "fmt"\n\nfunc main() \n{\n\n\tfmt.Println("Hello, World!")\n}',
        code: 8,
        numbers: 20
    },
    {
        key: 'j',
        img: "typescript.png",
        name: "TypeScript",
        sample: "let message: string = 'Hello, World!';\nconsole.log(message);",
        code: 9,
        numbers: 60
    }
]

export default languages