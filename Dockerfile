FROM quay.io/diegoson/amarok-md
RUN git clone https://github.com/Diegoson/AMAROK-MD /root/Amarok/
WORKDIR /root/Amarok/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
