import { Hasini } from "./devInfo";
import { syncProjectsToFileSystem } from "./syncProjects";

export const fileSystem: FileSystem = {
  home: {
    about: `
${Hasini.about}

Programming Languages:
${Hasini.code.join(", ")}

Frameworks:
${Hasini.frameWorks.join(", ")}

Tools Used:
${Hasini.toolsUsed.join(", ")}

IDEs:
${Hasini.ides.join(", ")}
    `,
    projects: {},
    interests: `
${Hasini.interests.join("\n")}
    `,
  },
};

syncProjectsToFileSystem(fileSystem);

export interface FileSystem {
  [key: string]: string | FileSystem;
}
