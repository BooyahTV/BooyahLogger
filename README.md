# BooyahLogger

Chat logging system made in node.js using a twitch.tv channel as chat

## How it works?

This works by bridging a booyah.live channel chat and sending it all to a twitch.tv channel chat. 

This can be integrated with [Chatterino2](https://github.com/Chatterino/chatterino2) and [Justlog](https://github.com/gempir/justlog) (Although it is not very effective because the logs will be too heavy since it will only log 2 users representing the entire chat of a booyah channel, and this can cause justlog to simply never load and end up crashing due to lack of RAM on the server it is running)

## Installation

* Clone the repo
* Open the repository folder
* Open a terminal and type `npm i`


## Configuration

The only file you will have to modify is config/config.json

You will need to modify this file according to the following requirements


HERE I NEED TO EXPLAIN EVERY ARGUMENT IN CONFIG.JSON, I will do it another day :)

![1634885264911](https://user-images.githubusercontent.com/61166695/138636812-640dda8e-341a-4326-8580-b1fe22c8e5cf.png)

