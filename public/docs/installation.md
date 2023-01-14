# Installation

## Requirements
 - Windows 10 / 11
 - Python 3.6 or higher

---

## Process
Right now the installation process is a bit verbose since there is no official release yet and the project is still in development, However you could run the current version by cloning the python code from the repository. The following steps will guide you through the process:

- Download/Clone the repository from [GitHub](https://github.com/justlucdewit/pea-language)
- Look into the /src/ folder and notice the `main.py` file and the `pea.bat` file


---

## Usage
You can now run pea trough the bat file, or trough the python file by running `python main.py <arguments>` or `pea <arguments>` in CMD. To run a .pea file, you can simply run `pea HelloWorld.pea -a -t` which will give you the ast in `_ast.json` and the tokens in `_tokens.json`. To view the help screen run `pea -h`