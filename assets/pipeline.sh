# Continues Integration using shell commands
echo "CI Process started"

# OS information
uname -a

# Working dir
echo "Project working directory"

# Install all dpenedencies of node_modules
# npm install

# Running all the unittest cases
npm run test -- --watchAll=false || npm run build

