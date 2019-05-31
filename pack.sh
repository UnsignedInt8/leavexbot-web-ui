#!/bin/sh

npm run build
mv build leavexchat-web-ui
tar -czf leavexchat-web-ui.tar.gz ./leavexchat-web-ui
mv leavexchat-web-ui build