# ActiveRules-Server

[![Coverage Status](https://coveralls.io/repos/github/bwinkers/ActiveRules-Server/badge.svg?branch=master)](https://coveralls.io/github/bwinkers/ActiveRules-Server?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/7793a12a594d23533b2b/maintainability)](https://codeclimate.com/github/bwinkers/ActiveRules-Server/maintainability)
[![Dependency Status](https://img.shields.io/david/bwinkers/ActiveRules-Server.svg?label=deps)](https://david-dm.org/bwinkers/ActiveRules-Server)
[![devDependency Status](https://img.shields.io/david/dev/bwinkers/ActiveRules-Server.svg?label=devDeps)](https://david-dm.org/bwinkers/ActiveRules-Server#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/bwinkers/ActiveRules-Server/badge.svg)](https://snyk.io/test/github/bwinkers/ActiveRules-Server)

A web-optimized rules processing engine.

Uses JSON schema to define and validate objects.

## Testing

```
npm test
```

### Testing in Docker

```
docker build -t activerules -f Dockerfile.test .
docker run activerules
```



