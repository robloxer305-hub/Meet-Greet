FROM node:18-alpine

WORKDIR /app

# Install dependencies from server
COPY "MeetnGreet I Backup/server/package.json" "MeetnGreet I Backup/server/package-lock.json" ./

RUN npm ci --only=production

# Copy server source
COPY "MeetnGreet I Backup/server/src" ./src

# Expose port
EXPOSE 3001

# Start server
CMD ["node", "src/index.js"]
