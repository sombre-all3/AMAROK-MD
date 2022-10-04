FROM quay.io/cyber/amarok-bot
RUN git clone https://github.com/Diegoson/AMAROK-MD /root/Amarok/
WORKDIR /root/Amaroku/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
