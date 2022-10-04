FROM quay.io/afx-abu/abu-multi-latest
RUN git clone https://github.com/Diegoson/AMAROK-MD /root/AMAROK/
WORKDIR /root/AMAROK/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
