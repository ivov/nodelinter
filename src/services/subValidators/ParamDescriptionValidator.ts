import ts from "typescript";
import { LINTINGS } from "../../lintings";
import { hasAnchorLink, hasTargetBlank, startsWithCapital } from "../../utils";

export class DescriptionValidator implements SubValidator {
  static lintArea = "paramDescription" as const;
  logs: Log[];
  log: LogFunction;

  private hasExcessFinalPeriod(description: string) {
    const parts = description.split(". ");

    if (parts.length === 1 && !parts[0].endsWith(".")) return true;

    const [last, ...allButLast] = [parts.pop(), ...parts];

    for (const sentence of allButLast) {
      if (!description.includes(sentence + ".")) return false;
    }

    if (last && last.endsWith(".")) return false;

    return true;
  }

  public run(node: ts.Node) {
    const hasCredentialsParent = node?.parent?.parent?.parent
      ?.getText()
      .startsWith("credentials"); // skip check for credentials

    const hasDefaultsParent = node?.parent?.parent
      ?.getText()
      .startsWith("defaults"); // skip check for defaults

    if (!ts.isPropertyAssignment(node)) return;

    if (node.getChildAt(0).getText() === "description") {
      if (
        node.getChildAt(2).getText().startsWith("' ") ||
        node.getChildAt(2).getText().endsWith(" '")
      ) {
        this.log(LINTINGS.PARAM_DESCRIPTION_UNTRIMMED)(node);
      }

      if (
        ts.isNoSubstitutionTemplateLiteral(node.getChildAt(2)) &&
        !node.getChildAt(2).getText().includes("'") &&
        !node.getChildAt(2).getText().includes('"')
      ) {
        this.log(LINTINGS.PARAM_DESCRIPTION_WITH_UNNEEDED_BACKTICKS)(node);
      }

      const descriptionValue = node.getChildAt(2).getText().replace(/'/g, ""); // remove single quotes

      if (descriptionValue === "") {
        this.log(LINTINGS.PARAM_DESCRIPTION_AS_EMPTY_STRING)(node);
      }

      if (descriptionValue && !startsWithCapital(descriptionValue)) {
        this.log(LINTINGS.PARAM_DESCRIPTION_WITH_UNCAPITALIZED_INITIAL)(node);
      }

      if (!this.hasExcessFinalPeriod(descriptionValue)) {
        this.log(LINTINGS.PARAM_DESCRIPTION_WITH_EXCESS_FINAL_PERIOD)(node);
      }

      if (
        hasAnchorLink(descriptionValue) &&
        !hasTargetBlank(descriptionValue)
      ) {
        this.log(LINTINGS.ANCHOR_LINK_WITH_TARGET_BLANK_MISSING)(node);
      }
    }

    if (
      node.getChildAt(0).getText() === "name" &&
      node.getChildAt(2).getText() !== "'additionalFields'"
    ) {
      let hasDescription = false;
      let hasResourceParent = false; // skip check for resource options

      node.parent.forEachChild((node) => {
        node.parent.parent.parent.parent.forEachChild((child) => {
          if (child.getText() === "name: 'resource'") {
            hasResourceParent = true;
          }
        });

        if (
          ts.isPropertyAssignment(node) &&
          node.getChildAt(0).getText() === "description"
        ) {
          hasDescription = true;
        }
      });

      if (
        !hasDescription &&
        (hasResourceParent || hasCredentialsParent || hasDefaultsParent)
      ) {
        this.log(LINTINGS.PARAM_DESCRIPTION_MISSING_WHERE_OPTIONAL)(node);
      }

      if (
        !hasDescription &&
        !hasResourceParent &&
        !hasCredentialsParent &&
        !hasDefaultsParent
      ) {
        this.log(LINTINGS.PARAM_DESCRIPTION_MISSING_WHERE_REQUIRED)(node);
      }
    }

    return this.logs;
  }
}
