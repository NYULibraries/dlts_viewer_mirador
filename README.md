# DLTS Viewer Mirador

This project is a client side rendered react/vite application where we integrate the Mirador v4 viewer as well as customize it with plugins.
Mirador is a media viewer that displays content provided to it via a manifest file which is used to fetch and display the media item (https://projectmirador.org/).
This is a restarted project based off of the previous dlts_viewer (https://github.com/NYULibraries/dlts_viewer).
This new project uses the newer Mirador 4 which recommends using vite if you are customizing it with plugins (since they use Javascript ES modules as opposed to the previously used UMD).

## Requirements

- docker
- vscode
  - `ms-vscode-remote.remote-containers`

## Setup (vscode + docker)

1. open docker
2. open vscode (no project), open command pallete (cmd + shift + P): Clone repository in container volume

## Contributing

- branch off of main
- create PR

### Linting and Code style

- rules located in `.editorconfig` and `eslint.config.js`
- already included in devcontainer package extensions:
  - `editorconfig.editorconfig`
  - `dbaeumer.vscode-eslint`
  - `esbenp.prettier-vscode` - format on save for current file

### Testing

- TBD

## Deployment

> this is a client side rendered react application, statically deployed in an S3 bucket.

1. `npm run build` - output in `dist`
2. `npm run preview` - check what the build looks like
3. `aws sso login` or bind mount your aws credentials
4. `npm run deploy`
