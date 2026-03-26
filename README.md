# DLTS Viewer Mirador

This project is a client side rendered react/vite application where we integrate the Mirador v4 viewer as well as customize it with plugins.
Mirador is a media viewer that displays content provided to it via a manifest file which is used to fetch and display the media item (https://projectmirador.org/).
This is a restarted project based off of the previous dlts_viewer (https://github.com/NYULibraries/dlts_viewer).
This new project uses the newer Mirador 4 which recommends using vite if you are customizing it with plugins (since they use Javascript ES modules as opposed to the previously used UMD).

## Requirements

- git
- docker
- vscode
  - `ms-vscode-remote.remote-containers`

## Setup

1. clone repo
2. open docker
3. run command (cmd + shift + p) `open in dev container`

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

- client side rendered react application with build with output to `dist`.
- aws sync s3 bucket with new content

Steps:

1. build local project for production (look for build in `dist`)
2. ensure you have AWS credentials for deployment
3. push to AWS S3 bucket
4. clear cache
