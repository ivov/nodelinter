export const config: Config = {
  n8nRepoPath: "/Users/ivov/Development/n8n",
  truncation: {
    enabled: true,
    charLimit: 80,
  },
  lintAreasEnabled: {
    default: true,
    paramDescription: true,
    displayName: true,
    limit: true,
    name: true,
    options: true,
    miscellaneous: true,
    nodeDescription: true,
  },
  lintIssuesEnabled: {
    casing: true,
    alphabetization: true,
    missing: true,
    wrong: true,
    unneeded: true,
    icon: true,
    punctuation: true,
    whitespace: true,
  },
};
