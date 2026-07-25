FROM node:22

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm approve-builds

RUN pnpm install

COPY . .

RUN pnpm build

CMD ["pnpm", "start"]