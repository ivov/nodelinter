export const config: Config = {
  /**
   * Path of target directory whose `.node.ts` and `*Description.ts` files to lint.
   */
  sourceDirPath: "/Users/ivov/Development/n8n/packages/nodes-base/nodes",

  /**
   * Path of source file to lint.
   */
  // sourceFilePath: "src/input/scratchpad7.ts",
  sourceFilePath: "src/input/scratchpad8.node.ts",

  /**
   * Log sorting method, either `lineNumber` or `importance` (error → warning → info).
   */
  sortLogs: "lineNumber",

  /**
   * Whether to show details for lint messages, where available.
   */
  showDetails: true,

  /**
   * Hex values e.g. `#FFFFFF` to customize log level colors in stdout. Hash symbol `#` required.
   */
  logLevelColors: {
    error: "",
    warning: "",
    info: "",
  },

  /**
   * Whether to truncate source code excerpts and by how many characters.
   */
  truncateExcerpts: {
    enabled: true,
    charLimit: 60,
  },

  /**
   * Enable or disable log levels in output logs.
   */
  toggleLogLevels: {
    error: true,
    warning: true,
    info: true,
  },

  /**
   * Enable or disable lint areas in output logs.
   */
  toggleLintAreas: {
    default: true,
    displayName: true,
    limit: true,
    miscellaneous: true,
    name: true,
    nodeDescription: true,
    options: true,
    paramDescription: true,
  },

  /**
   * Enable or disable lint issues in output logs.
   */
  toggleLintIssues: {
    alphabetization: true,
    casing: true,
    icon: true,
    location: true,
    missing: true,
    naming: true,
    punctuation: true,
    unneeded: true,
    whitespace: true,
    wording: true,
    wrong: true,
  },
};
