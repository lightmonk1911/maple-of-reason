"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var componentName = readlineSync.question('component name in camel case: ');
var kebabName = readlineSync.question('folder name in kebab notation: ');
var typesContent = "export interface I" + componentName + "Props {\n  className?: string;\n}\n";
var componentContent = "import React from 'react';\nimport { I" + componentName + "Props } from './" + kebabName + ".types';\nimport block from '../../../node_modules/bem-cn/lib/index';\n\nconst b = block('" + kebabName + "');\nexport const " + componentName + ": React.FunctionComponent<I" + componentName + "Props> = props => {\n  return (\n    <div className={b() + ` ${props.className}`}>" + componentName + " component works!</div>\n  );\n};\n";
var indexContent = "export { " + componentName + " } from './" + kebabName + ".component';\n";
var stylesContent = "." + kebabName + " {\n  display: flex;\n}";
var testContent = "import { act } from 'react-dom/test-utils';\nimport ReactDOM from 'react-dom';\nimport React from 'react';\nimport { " + componentName + " } from './" + kebabName + ".component';\n\ndescribe('should render with bem', (): void => {\n  let container: HTMLElement | null;\n  beforeEach((): void => {\n    container = document.createElement('div');\n    document.body.appendChild(container);\n\n    act((): void => {\n      ReactDOM.render(<" + componentName + " className=\"mix\" />, container);\n    });\n  });\n\n  afterEach((): void => {\n    if (container) {\n      document.body.removeChild(container);\n    }\n    container = null;\n  });\n\n  test('should have mixed class', () => {\n    const element = container && container.querySelector('*');\n    console.log('element', element && element.classList);\n    expect(element).toBeInstanceOf(Element);\n  });\n});\n";
fs.mkdirSync("src/components/" + kebabName);
fs.writeFileSync("src/components/" + kebabName + "/" + kebabName + ".types.tsx", typesContent);
fs.writeFileSync("src/components/" + kebabName + "/" + kebabName + ".component.tsx", componentContent);
fs.writeFileSync("src/components/" + kebabName + "/" + kebabName + ".index.ts", indexContent);
fs.writeFileSync("src/components/" + kebabName + "/" + kebabName + ".styles.pcss", stylesContent);
fs.writeFileSync("src/components/" + kebabName + "/" + kebabName + ".test.tsx", testContent);