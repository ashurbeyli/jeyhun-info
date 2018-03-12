source /home/ec2-user/.bash_profile

# update instance
yum -y update

# install node and npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts

# install yarn
npm install yarn -g

# install pm2 module globally
npm install -g pm2
pm2 update