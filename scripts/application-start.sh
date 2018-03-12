source /home/ec2-user/.bash_profile
cd /home/ec2-user/jeyhun.info
pm2 stop all
pm2 delete all
NODE_ENV=production NODE_PATH=./build pm2 start build/server.js -i max --name appProd