# DocuDJ (Work in progress)
DocuDJ is my custom documentation generator that lets you create feature-rich customizable documentation websites for your projects, in the style of the Micorosft documentation.

![image](https://user-images.githubusercontent.com/37410843/212195789-737285ef-275a-4400-9b89-85056745dc51.png)

## How to use
1. Download the latest release from the [releases page]()
2. Unzip the file, you  should find a 'release' folder
3. Rename the 'release' folder to the name of your project
4. Open the root of this folder in your terminal, and server it with something like [npm serve](https://www.npmjs.com/package/serve)
5. Edit/Create your pages in the '/docs' folder using markdown
6. When you add a new page, add them to '/docs/_content.json'
7. When you want to change settings of the project, edit 'config.json' (including the website title and logo)

## Development Commands
```bash
# Install dependencies
npm install

# Run the development server
npm run serve

# Build the project
npm run build
```
