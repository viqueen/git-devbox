## git-devbox

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=viqueen_git-devbox&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=viqueen_git-devbox)
[![Known Vulnerabilities](https://snyk.io/test/github/viqueen/git-devbox/badge.svg?targetFile=package.json)](https://snyk.io/test/github/viqueen/git-devbox?targetFile=package.json)

### install it

#### from stable

- with **homebrew** (preferred)

```bash
brew tap viqueen/git-devbox
brew install git-devbox
```

- with **npm** (not recommended)

```bash
npm install git-devbox -g
```

#### from source

```bash
git clone https://github.com/viqueen/git-devbox.git
cd git-devbox
npm install
npm link
```

### use it

- list recent git branches that you've interacted with locally, select one to check it out

```bash
git recent
```

![git recent example](./docs/images/git-recent.png)
