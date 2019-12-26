import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

const componentName = readlineSync.question('component name in camel case: ');
const kebabName = readlineSync.question('folder name in kebab notation: ');

const typesContent = `export interface I${componentName}Props {
  className?: string;
}
`;
const componentContent = `import React from 'react';
import { I${componentName}Props } from './${kebabName}.types';
import block from '../../../node_modules/bem-cn/lib/index';

const b = block('${kebabName}');
export const ${componentName}: React.FunctionComponent<I${componentName}Props> = props => {
  return (
    <div className={b() + \` \${props.className}\`}>${componentName} component works!</div>
  );
};
`;
const stylesContent = `.${kebabName} {
  display: flex;
}`;
const testContent = `import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import { ${componentName} } from './${kebabName}.component';

describe('should render with bem', (): void => {
  let container: HTMLElement | null;
  beforeEach((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act((): void => {
      ReactDOM.render(<${componentName} className="mix" />, container);
    });
  });

  afterEach((): void => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('should have mixed class', () => {
    const element = container && container.querySelector('.${kebabName}');
    expect(element).toBeInstanceOf(Element);
    if (!element) return;
    expect(element.classList.contains('mix'));
  });
});
`;

fs.mkdirSync(`src/components/${kebabName}`);
fs.writeFileSync(
  `src/components/${kebabName}/${kebabName}.types.tsx`,
  typesContent,
);
fs.writeFileSync(
  `src/components/${kebabName}/${kebabName}.component.tsx`,
  componentContent,
);
fs.writeFileSync(
  `src/components/${kebabName}/${kebabName}.styles.pcss`,
  stylesContent,
);
fs.writeFileSync(
  `src/components/${kebabName}/${kebabName}.test.tsx`,
  testContent,
);
