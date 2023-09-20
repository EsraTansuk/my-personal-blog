FROM node:18

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY next.config.js ./next.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY postcss.config.js ./postcss.config.js

COPY public ./public
COPY src ./src
COPY styles ./styles

CMD ["yarn", "dev"]