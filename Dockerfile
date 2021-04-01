FROM node:15.10-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
RUN npm install -g pm2
RUN npm install --production --silent
# Change the env variables to actual you need
ENV DTS_SOC_PORT=8100
ENV DS_URL=ws://ds:8099
# This port must be equals to DTS_SOC_PORT env variable
EXPOSE 8100
CMD ["npm", "start"]
