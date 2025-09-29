function readPackage(pkg) {
  if (pkg.name === '@tailwindcss/oxide' || pkg.name === 'sharp' || pkg.name === 'unrs-resolver') {
    pkg.requiresBuild = true;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};
