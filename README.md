# GitHub full path title

A web extension that sets GitHub tab title to the full file path, rather than `$repo/filename.ext`.

## Motivation

When viewing [`src/script.js`](src/script.js), the default title is something like `github-full-path/script.js at master · ChaseWagoner/github-full-path`. This title includes different (subjective) tiers of information:

- Frequently useful: repository, filename, branch
- Seldom necessary (and easy to find when needed): middot, repository owner, redundant repository name
- Potentially misleading: file "path," in which the file appears to exist at the repository root

With this extension installed, the title reads instead `github-full-path:master/src/script.js`. This maintains the important information (to me), while not using space on information that I seldom use, and that is easily-discoverable should I need it.

## Future Ideas

1. Allow for user-specified templates, in the style of Visual Studio Code's [window title templating][vscode].
    - Effort: medium

1. Create a generalized platform onto which similar templates may be created, shared, installed, etc. for any number of domains.
    - Effort: very high


[vscode]: https://github.com/microsoft/vscode/blob/f74e473238aca7b79c08be761d99a0232838ca4c/src/vs/workbench/browser/parts/titlebar/titlebarPart.ts#L281
