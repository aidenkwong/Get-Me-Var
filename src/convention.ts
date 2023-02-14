import Case from "./case.enum.js";
import Stage from "./stage.type.js";

const convention: Stage = {
  name: "Programming Language",
  choices: {
    JavaScript: {
      name: "File Extension",
      choices: {
        js: {
          name: "Use Case",
          choices: {
            variable: {
              name: "Scope (global/local)",
              choices: {
                global: Case.ConstantCase,
                local: Case.CamelCase,
              },
            },
            class: Case.PascalCase,
            constant: Case.ConstantCase,
            function: Case.CamelCase,
            method: Case.CamelCase,
            parameter: Case.CamelCase,
            property: Case.CamelCase,
            type: Case.PascalCase,
            filename: [Case.CamelCase, Case.KebabCase],
          },
        },
        jsx: {
          name: "Use Case",
          choices: {
            variable: {
              name: "Scope (global/local)",
              choices: {
                global: Case.ConstantCase,
                local: Case.CamelCase,
              },
            },
            class: Case.PascalCase,
            constant: Case.ConstantCase,
            function: Case.CamelCase,
            method: Case.CamelCase,
            parameter: Case.CamelCase,
            property: Case.CamelCase,
            type: Case.PascalCase,
            filename: Case.PascalCase,
          },
        },
      },
    },
    TypeScript: {
      name: "File Extension",
      choices: {
        ts: {
          name: "Use Case",
          choices: {
            variable: {
              name: "Scope (global/local)",
              choices: {
                global: Case.ConstantCase,
                local: Case.CamelCase,
              },
            },
            class: Case.PascalCase,
            constant: Case.ConstantCase,
            function: Case.CamelCase,
            method: Case.CamelCase,
            parameter: Case.CamelCase,
            property: Case.CamelCase,
            type: Case.PascalCase,
            filename: [Case.CamelCase, Case.KebabCase],
          },
        },
        tsx: {
          name: "Use Case",
          choices: {
            variable: {
              name: "Scope (global/local)",
              choices: {
                global: Case.ConstantCase,
                local: Case.CamelCase,
              },
            },
            class: Case.PascalCase,
            constant: Case.ConstantCase,
            function: Case.CamelCase,
            method: Case.CamelCase,
            parameter: Case.CamelCase,
            property: Case.CamelCase,
            type: Case.PascalCase,
            filename: Case.PascalCase,
          },
        },
      },
    },
  },
};

export default convention;
