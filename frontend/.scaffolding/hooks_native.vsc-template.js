(async function Template() {
  const toPascalCase = (str) =>
    str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (fl) => fl.toUpperCase())
      .replace(/\W+/g, "");
  const toCamelCase = (str) =>
    toPascalCase(str).replace(/^./, (firstLetter) => firstLetter.toLowerCase());
  const toKebabCase = (str) =>
    toCamelCase(str).replace(/([A-Z])/g, (word) => "-" + word.toLowerCase());

  return {
    userInputs: [
      {
        title: "What is the Component Name",
        argumentName: "name", // will become input in template
        defaultValue: "SampleComponent",
      },
    ],
    template: [
      {
        type: "folder",
        name: (inputs) => `${toKebabCase(inputs.name)}`,
        children: [
          {
            type: "file",
            name: (inputs) => `index.ts`,
            content: (inputs) => `export { default } from './${toKebabCase(
              inputs.name
            )}';
export * from './${toKebabCase(inputs.name)}.hook';
`,
          },
          {
            type: "file",
            name: (inputs) => `${toKebabCase(inputs.name)}.tsx`,
            content: (inputs) => `import React from 'react';
import { View, Text } from 'react-native';
import use${toPascalCase(inputs.name)} from './${toKebabCase(
              inputs.name
            )}.hook';

export interface ${toPascalCase(inputs.name)}Props {}

const ${toPascalCase(inputs.name)}: React.FC<${toPascalCase(
              inputs.name
            )}Props> = () => {
  const {} = use${toPascalCase(inputs.name)}();
  return (
    <View>
      <Text>${toPascalCase(inputs.name)} Screen</Text>
    </View>
  );
};

export default ${toPascalCase(inputs.name)};
`,
          },
          {
            type: "file",
            name: (inputs) => `${toKebabCase(inputs.name)}.styles.css`,
            content: (inputs) =>
              `/* Styles for ${toPascalCase(inputs.name)} */`,
          },
          {
            type: "file",
            name: (inputs) => `${toKebabCase(inputs.name)}.hook.ts`,
            content: (inputs) => `import { useState } from 'react';

const use${toPascalCase(inputs.name)} = () => {
  const [state, setState] = useState(null);
  // Add your business logic here
  return { state, setState };
};

export default use${toPascalCase(inputs.name)};
`,
          },
        ],
      },
    ],
  };
});
